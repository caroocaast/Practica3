const botonBuscar = document.getElementById("botonBuscar");
const inputnombre = document.getElementById("nombre");
const id = document.getElementById("id");
const imagen = document.getElementById("imagen");
const sonido = document.getElementById("sonido");
const listaHabilidades = document.getElementById("listaHabilidades");




async function buscarPokemon(){
    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/"+ inputnombre.value);
    const infoPokemon = await respuesta.json();

    //poner el id en el parrafo llamdo id
    id.innerText = infoPokemon.id;

    // mostrar imagen
    imagen.src = infoPokemon.sprites.other.home.front_default;

    //sonido
    sonido.src = infoPokemon.cries.latest;

    //mostrar habilidades
    listaHabilidades.innerText="";
    infoPokemon.abilities.forEach(a => {
        const item =document.createElement("li")
        item.innerText =a.ability.name;
        listaHabilidades.appendChild(item);
    });
}

botonBuscar.addEventListener("click", e => {
    e.preventDefault();
    buscarPokemon();
});