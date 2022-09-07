import { shallowMount, mount } from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage'

describe('PokemonPage', () => { 

  let wrapper

  beforeEach(() => {
    wrapper = shallowMount( PokemonPage )
  })

  test('Debe de llamar el mixPokemon', () => {

    const mixPokemonArr = jest.spyOn( PokemonPage.methods, 'mixPokemonArray' )
    shallowMount( PokemonPage )
    expect( mixPokemonArr ).toHaveBeenCalled()
    
  })

  test('Debe de hacer macth al cargar los pokemons', () => { 

    const wrapper = shallowMount( PokemonPage, {
      data() {
        return {
          pokemonArr: [
            { name: 'bulbasaur', id: 1 },
            { name: 'ivysaur', id: 2 },
            { name: 'venusaur', id: 3 },
            { name: 'charmander', id: 4 }
          ],
          pokemon: { name: 'bulbasaur', id: 1 },
          showPokemon: false,
          showAnswer: false,
          message: ''
        }
      }
    })

    expect( wrapper.html() ).toMatchSnapshot()

  })

  test('Debe de mostrar los componentes pokemonImage pokemonOptions', () => { 

    const wrapper = shallowMount( PokemonPage, {
      data() {
        return {
          pokemonArr: [
            { name: 'bulbasaur', id: 1 },
            { name: 'ivysaur', id: 2 },
            { name: 'venusaur', id: 3 },
            { name: 'charmander', id: 4 }
          ],
          pokemon: { name: 'bulbasaur', id: 1 },
          showPokemon: false,
          showAnswer: false,
          message: ''
        }
      }
    })

    expect( wrapper.getComponent('pokemon-image-stub' ) ).toBeTruthy()
    expect( wrapper.getComponent('pokemon-options-stub' ) ).toBeTruthy()

    expect( wrapper.getComponent('pokemon-image-stub' ).attributes('pokemonid') ).toBe("1")

    expect( wrapper.getComponent('pokemon-options-stub' ).attributes('options') ).toBeTruthy()

  })


  test('Pruebas checkAnswer', async () => { 
    
    const wrapper = shallowMount( PokemonPage, {
      data() {
        return {
          pokemonArr: [
            { name: 'bulbasaur', id: 1 },
            { name: 'ivysaur', id: 2 },
            { name: 'venusaur', id: 3 },
            { name: 'charmander', id: 4 }
          ],
          pokemon: { name: 'bulbasaur', id: 1 },
          showPokemon: false,
          showAnswer: false,
          message: ''
        }
      }
    })

    await wrapper.vm.checkAnswer(2)

    expect( wrapper.find('h2').exists() ).toBeTruthy()

    expect( wrapper.vm.showPokemon ).toBeTruthy()

  })

})