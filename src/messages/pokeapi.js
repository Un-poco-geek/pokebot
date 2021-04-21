const Pokedex = require("pokeapi-js-wrapper")
const P = new Pokedex.Pokedex()

class pokeApi{
     constructor(){
        this.url = "https://pokeapi.co/api/v2/pokemon"
    }
    // async pokedex(poke,ctx){
    //     await P.get
    // }
}

let PokeCommands = new pokeApi();

module.exports = {PokeCommands}