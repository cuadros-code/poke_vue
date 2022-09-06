import { shallowMount } from '@vue/test-utils'
import PokemonImage from '@/components/PokemonImage'

describe('PokemonImage component', () => { 

  test('Debe de hacer math con el snapshot', () => {

    const wrapper = shallowMount(PokemonImage, {
      props: {
        pokemonId: 1,
        showPokemon: false,
      }
    })
    expect( wrapper.html() ).toMatchSnapshot()

  })

  test('Debe de mostrar imagen oculta pokemon 100', () => { 
    
    const wrapper = shallowMount(PokemonImage, {
      props: {
        pokemonId: 100,
        showPokemon: false,
      }
    })

    const [ img1, img2 ] = wrapper.findAll('img')

    expect( img1.exists() ).toBeTruthy()
    expect( img2 ).toBe ( undefined )
     
    expect( img1.classes('hidden-pokemon') ).toBeTruthy()

    expect( img1.element.src ).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg')

  })

  test('Debe de mostrar si showPokemon:true', () => { 

    const wrapper = shallowMount(PokemonImage, {
      props: {
        pokemonId: 100,
        showPokemon: true,
      }
    })
    console.log(wrapper.html());
    const [img1, img2] = wrapper.findAll('img')

    expect( img2.exists() ).toBeTruthy()
     
    expect( img2.classes('hidden-pokemon') ).toBeFalsy()
    expect( img2.classes('fade-in') ).toBeTruthy

  })

})