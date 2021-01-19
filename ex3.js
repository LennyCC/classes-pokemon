/**
 * Los pokemons puedes realizar un ataque especial cada cierto tiempo.
 * Implementa un nuevo método de nombre "ataqueEspecial". 
 * 
 * Modifica el constructor para que ahora podamos pasarle otro parámetro que es un OBJETO. Dicho objeto tiene dos propiedades. Por ejemplo: 
 * 
 * {
 *   especial: "Hoja afilada",
 *   incremento: 1.5
 * }
 *  
 * Implementa un nuevo método además de nombre "ataqueEspecial". 
 * Este método de momento hará exactamente lo msimo que el método "ataque"; pero multiplica el daño producido por el valor de la propiedad 'incremento'
 * 
 * PIENSA BIEN como puedes reprovechar el método "atacar" para modificarlo de tal manera que ahora tenga en cuenta el modificador 'incremento'
 */

function getRandomValue(max) {
    return Math.floor(Math.random() * (max + 1));     // returns a random integer from 0 to 99

}
class Pokemon {
    constructor(id, nombre, tipos, vida, ataque, defensa) {
        this.id = id
        this.nombre = nombre
        this.tipos = tipos
        this.vida = vida
        this.ataque = ataque
        this.defensa = defensa
    }

    atacar(pokemonB) {
        console.log(`${this.nombre} ataca a ${pokemonB.nombre}`)

        let ataquePokemonA = getRandomValue(this.ataque)
        let defensaPokemonB = getRandomValue(pokemonB.defensa)
        console.log(`${this.nombre} ataca con ${ataquePokemonA} puntos de daño.`)
        console.log(`${pokemonB.nombre} consigue una defensa de ${defensaPokemonB} puntos.`)

        let puntosDeDano = ataquePokemonA - defensaPokemonB
        pokemonB.vida -= puntosDeDano > 0 ? puntosDeDano : 0
        if (puntosDeDano <= 0) {
            console.log(`${this.nombre} ha fallado el ataque!`)
        } else {
            console.log(`${this.nombre} asesta ${puntosDeDano} puntos de daño`)
        }
        console.log(`La salud de ${pokemonB.nombre} es ahora de ${pokemonB.vida} puntos de vida`)

    }
}

let bulbasaur = new Pokemon(1, "Bulbasaur", ['Grass', 'Poison'], 45, 49, 49, {
    especial: "Hoja afilada",
    incremento: 1.5
})
let squirtle = new Pokemon(1, "Squirtle", ['Water'], 44, 48, 65, {
    especial: "Pistola agua",
    incremento: 1.65
})

//bulbasaur.atacar(squirtle)
bulbasaur.ataqueEspecial(squirtle)



