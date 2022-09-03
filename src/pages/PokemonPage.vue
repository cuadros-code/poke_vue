<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>Quién es este pokémon?</h1>
    <PokemonImage :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions
      :options="pokemonArr" 
      @selection="checkAnswer"
    />

    <template v-if="showAnswer">
      <h2 class="fade-in">{{ message }}</h2>
      <button @click="newGame">
        Nuevo juego
      </button>
    </template>
  </div>
</template>

<script>
import PokemonImage from '@/components/PokemonImage.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'
import getPokemonsOptions from '@/helpers/getPokemonOptions'

export default {
  name: 'PokemonPage',
  components: {
    PokemonImage,
    PokemonOptions
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: ''
    }
  },
  mounted() {
    this.mixPokemonArray()
  },
  methods: {
    async mixPokemonArray(){
      this.pokemonArr = await getPokemonsOptions()
      const rndInt = Math.floor( Math.random() * 4 )
      this.pokemon = this.pokemonArr[rndInt]
    },
    checkAnswer( pokemonId ) {
      this.showPokemon = true
      this.showAnswer = true
      pokemonId === this.pokemon.id 
        ? this.message = `Correcto, ${this.pokemon.name}`
        : this.message = `Oops, era ${this.pokemon.name}`
    },
    newGame() {
      this.mixPokemonArray()
      this.showPokemon = false
      this.showAnswer = false
      this.pokemon = null
    }
  },
}
</script>
<style scoped>
h2{
  padding: 0;
  margin: 0 0 10px 0;
}
</style>