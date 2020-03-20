import React, { useState, useEffect, useRef } from 'react';
import * as yup from 'yup';
import { useMutation, useApolloClient } from '@apollo/client';
import './Login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSSTransition } from 'react-transition-group';
import { Formik, Form, Field } from 'formik';


import * as localMutations from '../../local-state/mutations';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';


const initialValues = {

    login: '',
    password: ''

};

const schema = yup.object().shape({

    login: yup.string().required('Login is Required!').max(100),
    password: yup.string().required('Password is Required!').max(30)

});

const errorIcon = (<FontAwesomeIcon icon="exclamation-triangle" size="sm" />);

const ErrorAlert = ({ msg }) => (
	<CSSTransition appear in timeout={500} classNames="signup-form-error-effect">
		<div id="signup-form-error-container">
            {errorIcon}<span id="signup-form-error-message">{msg}</span> 
		</div>
	</CSSTransition>
);

const eyeIcon = (visible, handleClick) => {

	if (visible) {
		// eslint-disable-next-line
		return (<span type="button" className="resetpsw-form-eye-button" onClick={handleClick}><FontAwesomeIcon icon="eye" size="sm" /></span>);
		// eslint-disable-next-line
	} else {
		// eslint-disable-next-line
		return (<span type="button" className="resetpsw-form-eye-button" onClick={handleClick}><FontAwesomeIcon icon="eye-slash" size="sm" /></span>);
	}

};


function Login() {

    const [responseError, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState(null);
   
    const [pswVisible, setPswVisible] = useState(false);
    const [psw1Type, setPsw1Type] = useState('password');

    const client = useApolloClient();

    const outerDiv = useRef(); // LO USAREMOS PARA DETECTAR CLICK FUERA DEL CONTENEDOR Y CERRAR EL MODAL

    const [closeModal] = useMutation(localMutations.SET_LOGIN_MODAL_CLOSE);

    const [openSignUp] = useMutation(localMutations.SET_SIGNUP_MODAL_OPEN);
    
    
    useEffect(() => {
        
        document.addEventListener('click', handleClick, false);
        

        return () => {

            document.removeEventListener('click', handleClick, false);
            

        };

    }, []);


    const handleEyeClick = (e) => {

		if (pswVisible) {

			setPswVisible(false);
			setPsw1Type('password');
			
		} else {

			setPswVisible(true);
			setPsw1Type('text');
			
			setTimeout(() => {
				
				setPswVisible(false);
				setPsw1Type('password');
				
			}, 1000);


		}

    };

    const handleCloseButtonClick = (e) => {

        closeModal();

    };



    const handleFormSubmit = async (values, options) => {


        const {
            login,
            password
        } = values;


        // PRIMERO HAY QUE VERIFICAR SI EXISTE EL LOGIN, YA SEA COMO USERNAME O EMAIL

        try {
            
            const data = await client.query({
                query: queries.GET_IF_USER_EXISTS,
                variables: {
                    username: login,
                    email: login
                }
            });
           
            const {
                data: {
                    getIfUserExists: {
                        username: usernameExists,
                        email: emailExists
                    }
                }
            } = data;

            if (!usernameExists && !emailExists) {

                setErrorMessage('Login could not be found in our database!. Please type a valid Username or Email');

                setError(true);
    
                return;

            }


        } catch (error) {
            
            setErrorMessage(error.message);

            setError(true);

            return;

        }


    // SI TODO LO ANTERIOR ESTA BIEN AHORA ENVIAMOS EL MUTATION DEL LOGIN CON LOS DATOS AL SERVIDOR

    // COMO ES MUTATION DEVUELVE UN OBJECTO  logInResponse QUE EN CASO DE ERROR YA TIENE EL CODE Y MESSAGE, NO ES NECESARIO USAR TRY CATCH


        const mutData = await client.mutate({

            mutation: mutations.LOG_IN,
            variables: {
                login,
                password
            }

        });

         // EL SERVIDOR NOS DEVUELVE UN OBJETO type logInResponse QUE CONTIENE UN token
             

        const {
            data: {
                logIn: {
                    code,
                    success,
                    message,
                    token
                }
            }
        }= mutData;
              

        if (!success) {

            setErrorMessage(message);

            setError(true);

            return;

        }

         // GUARDAMOS EL TOKEN EN EL LOCAL STORAGE, PARA QUE SEA ENVIADO EN EL SIGUIENTE REQUEST.
        
         localStorage.removeItem('x-token'); // BORRAMOS PRIMERO EL TOKEN PARA NO ENVIAR TOKEN AL SERVIDOR
         localStorage.setItem('x-token', token);



         // AHORA CONSULTAMOS EL ME DEL SERVIDOR PARA QUE NOS ENVIE LOS DATOS BASICOS DEL USUARIO

        
         try {
            
            const meData = await client.query({

                query: queries.ME,
                fetchPolicy: "no-cache"
            });
                      
            if (meData.data && meData.data.me) {

                const {
                    data: {
                        me: {
                            id,
                            username,
                            email,
                            firstname,
                            lastname,
                            role
                        }
                    }
                } = meData;


                // Y CON ESOS DATOS DEL USUARIO ACTUALIZAMOS EL ESTADO LOCAL ( CACHE )

                await client.mutate({
                    
                    mutation: localMutations.SET_LOGIN_USER,
                    variables: {
                        input: {
                            id,
                            fullname: firstname + ' ' + lastname,
                            username,
                            email
                        }
                    }
                });

            } else {

                await client.mutate({
                    
                    mutation: localMutations.SET_LOGOUT_USER

                });

                localStorage.removeItem('x-token');

                setErrorMessage('There was a Problem with Server Response.');

                setError(true);

            }


        } catch (error) {
            
            setErrorMessage(error.message);

            setError(true);

        }       

         // AHORA CERRAMOS EL FORMULARIO LOGIN


         closeModal();

    }

    const handleSignUpClick = (e) => {

        openSignUp();

        closeModal();

    };


    const handleClick = (e) => {

        if (outerDiv.current.contains(e.target)) {

            return;

        }

       handleClickOutside(e);

    };

    const handleClickOutside= (e) => {

        e.preventDefault();

        closeModal();

    };


    return (
        <div id="login-form-container" ref={outerDiv}>
            <span id="login-form-close-button" onClick={handleCloseButtonClick} ><FontAwesomeIcon icon="window-close" size="lg" /></span>
            <div id="login-form">
                <div id="login-form-header">
					<h6>Login to Continue</h6>
				</div>
                {responseError ? <ErrorAlert msg={errorMessage} /> : null}
                <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    validateOnBlur={false}
                    validateOnChange={false}
                    onSubmit={(values, options) => {

                                
                        setTimeout(async () => {
                            
                            await handleFormSubmit(values, options);


                            options.setSubmitting(false);

                        }, 500);

                    }}                   
                >
                    {({ values, errors, isSubmitting, submitForm }) => (
                        <Form>
                            {Object.keys(errors).length > 0 ? (<ErrorAlert msg={errors[Object.keys(errors)[0]]} />) : null}
                            <Field name="login" placeholder="Username or Email">
                                        {({ field }) => (
                                            <div className="login-form-text-div">
                                                <p><label htmlFor="login-username">Login :</label></p>
                                                <input {...field} autoComplete="off" type="text" id="login-username" autoFocus />        
                                            </div>
                                        )}
                            </Field>
                            <Field name="password">
										{({ field }) => (
											<div className="login-form-text-div">
												<p><label htmlFor="login-password">Password :</label>{eyeIcon(pswVisible, handleEyeClick)}</p>
												<input {...field} autoComplete="off" type={psw1Type} id="login-password" />				
											</div>
										)}         
                            </Field>
                            <div id="login-form-submit-button-container">
                                        <button type="button" disabled={isSubmitting} onClick={submitForm} >{ isSubmitting ? 'Loading...' : 'LOGIN'}</button>
                            </div>                         

                        </Form>
                    )}
                </Formik>
                <div id="login-form-footer">					
					<p>Don't you have an Account? Create one here: <a href="#" onClick={handleSignUpClick}>SignUp</a></p>
				</div>        
            </div>       
       </div>
    );
;}

export default Login
