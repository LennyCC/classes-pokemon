// Implementa un método de la clase pokemon, de nombre 'atacar'. El método toma por parámetro otro objeto de la clase Pokemon.

// El Pokemon que ejecuta el método realiza un ataque 
// pokemonA.atacar(PokemonB)

/**
 * Primero ataca el Pokemon A:
 * 1. Calcular un número al azar entre 0 y 'poder de ataque' para el Pokemon A
 * 2. Calcular un número al azar entre 0 y 'poder de defensa' para el Pokemon B
 * 2. El Pokemon A asesta un golpe al Pokemon B. El Pokemon B recibe el siguiente daño: "poder de ataque que ha sacado el Pokemon A - poder de defensa que ha sacado el Pokemon B". Dicha diferencia debemos restarla a la vida total del Pokemon B"

 * Dentro del mismo método 'atacar', muestra por consola cada uno de los pasos tal y como se sugiere en el ejemplo: https://oscarm.tinytake.com/tt/NTAxMzU1MF8xNTc3MzM3OQ
 

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

let bulbasaur = new Pokemon(1, "Bulbasaur", ['Grass', 'Poison'], 45, 49, 49)
let squirtle = new Pokemon(1, "Squirtle", ['Water'], 44, 48, 65)

// bulbasaur.atacar(squirtle)


