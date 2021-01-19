/**
 * Un pokemon solo puede realizar un ataque especial cada 3 ataques normales. 
 * 
 * Modifica el constructor para guardar la información necesaria para controlar cuando es que el pokemon puede usar su ataque especial
 * 
 * Deberás modificar el método 'atacar' para que, una vez ataque normal, cuente como carga del ataque especial.
 * 
 * Y a su vez, deberás modificar 'ataqueEspecial' para que 'resetee' el contador de ataques
 * 
 * Ejemplo: https://oscarm.tinytake.com/tt/NTAxMzU3OV8xNTc3MzUwMQ
 *  
 * 
 */

function getRandomValue(max) {
    return Math.floor(Math.random() * (max + 1));     // returns a random integer from 0 to 99

}
class Pokemon {
    constructor(id, nombre, tipos, vida, ataque, defensa, poder){
        this.id = id
        this.nombre = nombre
        this.tipos = tipos
        this.vida = vida
        this.ataque = ataque
        this.defensa = defensa,
        this.poder = poder
    }

    atacar(pokemonB, incremento) {
        if (!incremento) {
            incremento = 1
        }
        console.log(`${this.nombre} ataca a ${pokemonB.nombre}`)

        let ataquePokemonA = getRandomValue(this.ataque) * incremento
        let defensaPokemonB = getRandomValue(pokemonB.defensa)
        console.log(`${this.nombre} ataca con ${ataquePokemonA} puntos de daño.`)
        console.log(`${pokemonB.nombre} consigue una defensa de ${defensaPokemonB} puntos.`)

        let puntosDeDano = ataquePokemonA - defensaPokemonB
        pokemonB.vida -= puntosDeDano>0 ? puntosDeDano: 0
        if (puntosDeDano<=0) {
            console.log(`${this.nombre} ha fallado el ataque!`)
        }else {
        console.log(`${this.nombre} asesta ${puntosDeDano} puntos de daño`)
    }
        console.log(`La salud de ${pokemonB.nombre} es ahora de ${pokemonB.vida} puntos de vida`)

    }

    ataqueEspecial(pokemonB) {
        console.log(`==${this.nombre} usa ${this.poder.especial}==`)
        this.atacar(pokemonB, this.poder.incremento)
    }
}

let bulbasaur = new Pokemon(1, "Bulbasaur", ['Grass', 'Poison'], 45, 49, 49 , {
    especial: "Hoja afilada",
    incremento: 1.5
})
let squirtle = new Pokemon(1, "Squirtle", ['Water'], 44, 48, 65, {
    especial : "Pistola agua",
    incremento: 1.65
})

// TESTS: El primer araque especial deberia fallar tal y como se muestra en el ejemplo!

// bulbasaur.ataqueEspecial(squirtle)
// bulbasaur.atacar(squirtle)
// bulbasaur.atacar(squirtle)
// bulbasaur.atacar(squirtle)
// bulbasaur.ataqueEspecial(squirtle)





