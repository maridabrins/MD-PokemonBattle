const pokemonImage = document.querySelectorAll(".pokemon_image")
const name = document.querySelectorAll(".name")
const exp = document.querySelectorAll(".exp")

let experiencias = [0, 0]; 

const vencedor = document.getElementById("vencedor")

const btnBatalhar = document.querySelector(".btn-batalha")

function carregar(index){

    const id = Math.floor(Math.random() * 151) + 1;
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then((data)=> {
         
         name[index].innerText = data.name
         pokemonImage[index].src = data.sprites.versions["generation-v"]["black-white"].animated.front_default
         exp[index].innerText =  data.base_experience
         experiencias[index] = data.base_experience

          if (experiencias[0] && experiencias[1]) {
                if (experiencias[0] > experiencias[1]) {
                    vencedor.textContent = name[0].textContent;
                } else if (experiencias[1] > experiencias[0]) {
                    vencedor.textContent = name[1].textContent;
                } else {
                    vencedor.textContent = "Empate!";
                }
            }
        })
        .catch(error => {
            console.error("Erro ao carregar Pokémon", error);

})
}
btnBatalhar.addEventListener("click", () => {
    experiencias = [0, 0];
    vencedor.textContent = "";
    carregar(0);
    carregar(1);
});

carregar(0)
carregar(1)

