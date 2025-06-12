const pokemonImage = document.querySelectorAll(".pokemon_image")
const name = document.querySelectorAll(".name")
const exp = document.querySelectorAll(".exp")

let experiencias = [0, 0]; //iniciando experiencias

const vencedor = document.getElementById("vencedor")

const btnBatalhar = document.querySelector(".btn-batalha")

function carregar(index){

    const id = Math.floor(Math.random() * 152) ;
    //floor -> arredonda o número
    //random() * 152 gera um número aleatorio de 1 a 151
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then((data)=> {
         
         name[index].innerText = data.name
         pokemonImage[index].src = data.sprites.versions["generation-v"]["black-white"].animated.front_default
         exp[index].innerText =  data.base_experience
         experiencias[index] = data.base_experience

         //Lógica
         
        if (experiencias[0] > experiencias[1]) { //Se a experiência do pokemon 1 for maior que a do pokemon 2
            vencedor.innerText = name[0].innerText; //O vencedor é o 1
        } else if (experiencias[0] < experiencias[1]) { //Se a experiência do pokemon 1 for menor que a do pokemon 2
            vencedor.innerText = name[1].innerText; //O vencedor é o pokemon 2
        } else {
            vencedor.innerText = `😐 Empate entre o ${name[0].InnerText} e o ${name[1].InnerText}`; //caso a experiencia seja a mesma, será empate
        }
            
        })
        .catch(error => {
            console.error("Erro ao carregar Pokémon", error);

})
}
btnBatalhar.addEventListener("click", () => {
    experiencias = [0, 0]; //tirando valores antigos das batalhas
    vencedor.innerText = "";
    carregar(0);
    carregar(1);
});

carregar(0)
carregar(1)

