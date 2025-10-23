const botonBuscar = document.getElementById("botonBuscar");
const inputnombre = document.getElementById("nombre");
const nombreoficial = document.getElementById("nombreoficial");
const capital = document.getElementById("capital");
const continente = document.getElementById("continente");
const habitante = document.getElementById("habitante");



async function buscarPais(){
    const respuesta = await fetch("https://restcountries.com/v3.1/name/"+ inputnombre.value);
    const infoPais = await respuesta.json();
    nombreoficial.textContent = infoPais[0].name.official;
    capital.textContent = infoPais[0].capital;
    continente.textContent = infoPais[0].region;
    habitante.textContent = infoPais[0].population;



};

botonBuscar.addEventListener("click", e => {
    e.preventDefault();
    buscarPais();
});
