function scrollAppear() {

	
	let introText = document.querySelector(".intro-text");

	let introPosition = introText.getBoundingClientRect().top;  // NOS DA LA POSICIÓN (RESPECTO DEL BORDE SUPERIOR DE LA VENTANA DEL NAVEGADOR) DEL RECTÁNGULO MÁS PEQUEÑO QUE CONTIENE EL ELEMENTO.
	
	let screenPosition = window.innerHeight; // NOS DA EL ALTO TOTAL DE LA VENTANA DEL NAVEGADOR.

	if(introPosition < screenPosition/1.5) { // SIEMPRE Y CUANDO LA VENTANA DEL NAVEGADOR SEA TAN GRANDE (O SE HAGA SCROLL) DE MODO QUE EL ELEMENTO introText SEA VISIBLE (OSEA introPosition será < screenPosition )
		// PORQUE PUEDE DARSE EL CASO DE QUE LA VENTANA SE HAGA MÁS PEQUEÑA O QUE SE HAGA SCROLL Y EL ELEMENTO QUEDE FUERA DEL AREA VISIBLE.
		// **** OJO CON screenPosition/2 o screenPosition/3 ETC ETC CONTROLAMOS EL PUNTO EXACTO EN QUE SE PRODUCE EL EFECTO AL HACER SCROLL EN LA PANTALLA.


		introText.classList.add("intro-appear");  //EL ELEMENTO APARECERÁ...

	} else introText.classList.remove("intro-appear");

}



	window.addEventListener("scroll",scrollAppear);