import { shallowMount } from '@vue/test-utils'
import PokemonOptions from '@/components/PokemonOptions'

describe('PokemonOptions component', () => { 

  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        options: [
          { name: 'bulbasaur', id: 1 },
          { name: 'ivysaur', id: 2 },
          { name: 'venusaur', id: 3 },
          { name: 'charmander', id: 4 }
        ]
      }
    })
  })

  test('Debe de hacer math con el snapshot', () => {
    expect( wrapper.html() ).toMatchSnapshot()
  })

  test('Debe de mostrar 4 opciones', () => { 
    
    const listItems = wrapper.findAll('li')

    const [ li1, li2, li3, li4 ] = listItems

    expect(listItems.length).toBe(4)

    expect( li1.text() ).toBe( 'bulbasaur' )
    expect( li2.text() ).toBe( 'ivysaur' )
    expect( li3.text() ).toBe( 'venusaur' )
    expect( li4.text() ).toBe( 'charmander' )

  })

  test('Debe emitir evento "selection" con parametro de id', () => { 

    const [ li1, li2, li3, li4 ]  = wrapper.findAll('li')

    li1.trigger('click')
    li2.trigger('click')
    li3.trigger('click')
    li4.trigger('click')

    expect( wrapper.emitted('selection').length ).toBe( 4 )
    expect( wrapper.emitted('selection')[0] ).toStrictEqual([1])
    expect( wrapper.emitted('selection')[1] ).toStrictEqual([2])
    expect( wrapper.emitted('selection')[2] ).toStrictEqual([3])
    expect( wrapper.emitted('selection')[3] ).toStrictEqual([4])

  })

})