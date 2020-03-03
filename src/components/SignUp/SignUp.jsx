import React, { useState } from 'react';
import { useMutation, useApolloClient } from '@apollo/client';
import './SignUp.scss';
import * as yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSSTransition } from 'react-transition-group';
import { Formik, Form, Field } from 'formik';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { Link } from 'react-router-dom';

import * as localMutations from '../../local-state/mutations';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';


import SuccessModal from '../Modals/SuccessModal/SuccessModal';

import imageChecked from '../../assets/images/checkedIcon.svg';

const initialValues = {
    username: '',
    email: '',
    firstname: '',
    lastname: '',
    gender: 'Male',
    dateOfBirth: '',
    mainPhoneNumber: '',
    secondaryPhoneNumber: '',
    password: '',
    confirmPassword: '',
    country: 'Select a Region',
    region: '',
    city: '',
    zone: '',
    mainAddress: '',
    referencePoint: '',
    receiveNews: false,
    iam21orOlder: false
};

const schema = yup.object().shape({
    username: yup.string().required('Username is Required!').max(70),
    email: yup.string().required('Email is Required!').max(100).email('Please Insert a valid email!'),
    firstname: yup.string().required('First Name is Required!').max(40),
    lastname: yup.string().required('Last Name is Required!').max(40),
    gender: yup.string().required('Gender is Required!').matches(/(Male|Female)/),
    dateOfBirth: yup.date(),
    mainPhoneNumber: yup.string().required('Main Phone Number is Required!').max(20),
    secondaryPhoneNumber: yup.string().max(20),
    password: yup.string().required('Password is Required!').min(8,'The Password must have at least 8 characters').max(30),
    confirmPassword: yup.string().required('Password is Required!').max(30),
    country: yup.string().required('Country is Required!').max(100),
    region: yup.string().required('Region is Required!').max(50),
    city: yup.string().required('City is Required!').max(50),
    zone: yup.string().required('Zone is Required!').max(100),
    mainAddress: yup.string().required('Main Address is Required!').max(500),
    referencePoint: yup.string().required('Reference Point is Required!').max(500),
    receiveNews: yup.boolean(),
    iam21orOlder: yup.boolean()
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

function SignUp() {

    const [responseError, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState(null);
    const [notificationTitle, setNotificationTitle] = useState(null);
	const [notificationContent, setNotificationContent] = useState(null);
    const [success, setSuccess] = useState(false);
    const [pswVisible, setPswVisible] = useState(false);
    const [psw1Type, setPsw1Type] = useState('password');
    
    const client = useApolloClient();

    const [closeModal] = useMutation(localMutations.SET_SIGNUP_MODAL_CLOSE);
           
   
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


    const handleFormSubmit = async (values, options, setError, setErrorMessage, setSuccess, setNotificationTitle, setNotificationContent) => {

        const {
            username,
            email,
            firstname,
            lastname,
            gender,
            dateOfBirth,
            mainPhoneNumber,
            secondaryPhoneNumber,
            password,
            confirmPassword,
            country,
            region,
            city,
            zone,
            mainAddress,
            referencePoint,
            receiveNews,
            iam21orOlder
        }= values;

        if (password !== confirmPassword) {

            setErrorMessage('Password Confirmation & Password Field must be equal!');

            setError(true);

            //return  options.setSubmitting(false);     // NO HACE FALTA PORQUE onSubmit ES ASYNC ASI QUE LLAMA setSubmitting AUTOMATICAMENTE 

            return;
        }

        if (!iam21orOlder) {

            setErrorMessage('You must confirm that you are 21 year old or older!');

            setError(true);

            //return options.setSubmitting(false);

            return;
        }

        try {

                        
            const mutData = await client.mutate({
                mutation: mutations.SIGN_UP,
                variables: {
                    input: {
                        username,
                        email,
                        firstname,
                        lastname,
                        gender,
                        dateOfBirth,
                        mainPhoneNumber,
                        secondaryPhoneNumber,
                        password,
                        country,
                        region,
                        city,
                        zone,
                        mainAddress,
                        referencePoint,
                        receiveNews
                    }            
                }
            });

            const {
                data: {
                    signUp: {
                        token
                    }
                }
            } = mutData;
           
            
            localStorage.removeItem('x-token'); // BORRAMOS PRIMERO EL TOKEN PARA NO ENVIAR TOKEN AL SERVIDOR
            localStorage.setItem('x-token', token);
       
            
        } catch (error) {
            

            setErrorMessage(error.message);

            setError(true);

            return;

        }

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

                await client.mutate({
                    
                    mutation: localMutations.SET_LOGIN_USER,
                    variables: {
                        input: {
                            fullname: firstname + ' ' + lastname,
                            username,
                            email
                        }
                    }
                });

                setNotificationTitle('Sign up completed!');

                setNotificationContent('Thank you for signing up. Enjoy our great services!');
    
                setSuccess(true);                   


            } else {

                await client.mutate({
                    
                    mutation: localMutations.SET_LOGOUT_USER

                });


            }

                      

        } catch (error) {
            
            setErrorMessage(error.message);

            setError(true);

        }       
      

    }


    return (
        <>            
            { success ? <SuccessModal image={imageChecked} title={notificationTitle} content={notificationContent} buttonTitle="Done" linkPath="/" /> : (

                <div className="signup-form-container">
                    <span className="signup-form-close-button" onClick={handleCloseButtonClick} ><FontAwesomeIcon icon="window-close" size="lg" /></span>
                    <div id="signup-form">
                        <div id="signup-form-header">
							<h6>Create your account to continue</h6>
						</div>
                        {responseError ? <ErrorAlert msg={errorMessage} /> : null}
                        <Formik
                            initialValues={initialValues}
                            validationSchema={schema}
                            validateOnBlur={false}
                            validateOnChange={false}
                            onSubmit={(values, options) => {

                                
                                setTimeout(async () => {
                                    
                                    await handleFormSubmit(values, options, setError, setErrorMessage, setSuccess, setNotificationTitle, setNotificationContent);


                                    options.setSubmitting(false);

                                }, 500);


                            }}            
                        >
                            {({ values, errors, isSubmitting, submitForm }) => (
                                <Form>
                                    {Object.keys(errors).length > 0 ? (<ErrorAlert msg={errors[Object.keys(errors)[0]]} />) : null}
                                    <Field name="username" >
                                        {({ field }) => (
                                            <div className="signup-form-text-div">
                                                <p><label htmlFor="signup-username">Username :</label></p>
                                                <input {...field} autoComplete="off" type="text" id="signup-username" autoFocus />        
                                            </div>
                                        )}
                                    </Field>
                                    <Field name="email" >
                                        {({ field }) => (
                                            <div className="signup-form-text-div">
                                                <p><label htmlFor="signup-email">Email :</label></p>
                                                <input {...field} autoComplete="off" type="text" id="signup-email" />        
                                            </div>
                                        )}
                                    </Field>
                                    <Field name="password">
										{({ field }) => (
											<div className="signup-form-text-div">
												<p><label htmlFor="signup-password">Password :</label>{eyeIcon(pswVisible, handleEyeClick)}</p>
												<input {...field} autoComplete="off" type={psw1Type} id="signup-password" />				
											</div>
										)}         
                                    </Field>
                                    <Field name="confirmPassword">
										{({ field }) => (
											<div className="signup-form-text-div">
												<p><label htmlFor="signup-confirm-password">Confirm Password :</label></p>
												<input {...field} autoComplete="off" type="password" id="signup-confirm-password" />				
											</div>
										)}         
                                    </Field>
                                    <Field name="firstname" >
                                        {({ field }) => (
                                            <div className="signup-form-text-div">
                                                <p><label htmlFor="signup-firstname">First Name :</label></p>
                                                <input {...field} autoComplete="off" type="text" id="signup-firstname" />        
                                            </div>
                                        )}
                                    </Field>
                                    <Field name="lastname" >
                                        {({ field }) => (
                                            <div className="signup-form-text-div">
                                                <p><label htmlFor="signup-lastname">Last Name :</label></p>
                                                <input {...field} autoComplete="off" type="text" id="signup-lastname" />        
                                            </div>
                                        )}
                                    </Field>
                                    <Field name="gender" >
                                        {({ field }) => (
                                            <div className="signup-form-radio-div">
                                                <p>Gender: </p>
                                                <div>
                                                    <input {...field} type="radio" id="g1" value="Male" checked={field.value === 'Male'} /><label htmlFor="g1">Male</label>
                                                    <input {...field} type="radio" id="g2" value="Female" checked={field.value === 'Female'} /><label htmlFor="g2">Female</label>   
                                                </div>                                                     
                                            </div>
                                        )}
                                    </Field>
                                    <Field name="dateOfBirth" >
                                        {({ field }) => (
                                            <div className="signup-form-date-div">
                                                <p><label htmlFor="signup-dateofbirth">Date of Birth :</label></p>
                                                <input {...field} type="date" id="signup-dateofbirth" />        
                                            </div>
                                        )}
                                    </Field>
                                    <Field name="mainPhoneNumber" >
                                        {({ field }) => (
                                            <div className="signup-form-text-div">
                                                <p><label htmlFor="signup-mainPhoneNumber">Main Phone Number :</label></p>
                                                <input {...field} autoComplete="off" type="text" id="signup-mainPhoneNumber" />        
                                            </div>
                                        )}
                                    </Field>
                                    <Field name="secondaryPhoneNumber" >
                                        {({ field }) => (
                                            <div className="signup-form-text-div">
                                                <p><label htmlFor="signup-secPhoneNumber">Other Phone Number :</label></p>
                                                <input {...field} autoComplete="off" type="text" id="signup-secPhoneNumber" />        
                                            </div>
                                        )}
                                    </Field>       
                                    <Field name="country">
										{({ field }) => (
											<div className="signup-form-select-div">
												<p>Country: </p>
												<CountryDropdown {...field} onChange={(_, e) => field.onChange(e)} defaultOptionLabel="Select a Country" />                                                
											</div>
										)}         
                                    </Field>
                                    <Field name="region">
										{({ field }) => (
											<div className="signup-form-select-div">
												<p>Region: </p>
												<RegionDropdown {...field} country={values.country} defaultOptionLabel="Select a Region" onChange={(_, e) => field.onChange(e)}/>		
											</div>
										)}         
                                    </Field>
                                    <Field name="city" >
                                        {({ field }) => (
                                            <div className="signup-form-text-div">
                                                <p><label htmlFor="signup-city">City :</label></p>
                                                <input {...field} autoComplete="off" type="text" id="signup-city" />        
                                            </div>
                                        )}
                                    </Field>
                                    <Field name="zone" >
                                        {({ field }) => (
                                            <div className="signup-form-text-div">
                                                <p><label htmlFor="signup-zone">Zone :</label></p>
                                                <input {...field} autoComplete="off" type="text" id="signup-zone" />        
                                            </div>
                                        )}
                                    </Field>
                                    <Field name="mainAddress" >
                                        {({ field }) => (
                                            <div className="signup-form-textarea-div">
                                                <p><label htmlFor="signup-main-address">Main Address :</label></p>
                                                <textarea {...field} id="signup-main-address" autoComplete="off" />        
                                            </div>
                                        )}
                                    </Field>
                                    <Field name="referencePoint" >
                                        {({ field }) => (
                                            <div className="signup-form-textarea-div">
                                                <p><label htmlFor="signup-reference-point">Reference Point :</label></p>
                                                <textarea {...field} id="signup-reference-point" autoComplete="off" />        
                                            </div>
                                        )}
                                    </Field>
                                    <Field name="receiveNews">
						                {({ field, form }) => (
							                <div className="signup-form-checkbox-div">
							                <input {...field} type="checkbox" checked={field.value} /><label>Receive by email updates on the latest news & special offers</label>
							                </div>
						                )}
					                </Field>
                                    <Field name="iam21orOlder">
						                {({ field, form }) => (
							                <div className="signup-form-checkbox-div">
							                <input {...field} type="checkbox" checked={field.value} /><label>I am 21 years old or older</label>
							                </div>
						                )}
					                </Field>
                                    <div id="signup-form-submit-button-container">
                                        <button type="button" disabled={isSubmitting} onClick={submitForm} >{ isSubmitting ? 'Loading...' : 'SIGN UP'}</button>
                                    </div>
                                        
                                </Form>                            
                            )}
                        </Formik>
                        <div id="signup-form-footer">
							<p>By creating an account, I agree to the <Link to="/">Terms of Service</Link>, <Link to="/">Privacy Policy</Link>, and <Link to="/">Cookie Policy</Link></p>
							<p>Already have an account? <Link to="/login">Log in</Link></p>
						</div>
                    </div>                
                </div>

            )} 

        </>
    );
}

export default SignUp;
