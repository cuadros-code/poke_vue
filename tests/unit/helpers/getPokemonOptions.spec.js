import getPokemonsOptions, { getPokemons, getPokemonsName } from '@/helpers/getPokemonOptions'

describe('Helpers', () => { 

  test('Debe retornar un arreglo de numeros', () => { 

    const pokemons = getPokemons()
    expect(pokemons.length).toBe(650)
    expect(pokemons[0]).toBe(1)

  })

  test('Debe retornar um arr de 4 elementos con nombre', async () => {   
    const pokemons = await getPokemonsName([1,2,3,4])
    expect(pokemons.length).toBe(4)

    expect(pokemons).toStrictEqual([
      { name: 'bulbasaur', id: 1 },
      { name: 'ivysaur', id: 2 },
      { name: 'venusaur', id: 3 },
      { name: 'charmander', id: 4 }
    ])

  })

  test('Debe de retornar un arr mezclado', async () => { 

    const pokemons = await getPokemonsOptions()
    expect(pokemons.length).toBe(4)
    expect(pokemons).toEqual([
      { 
        name: expect.any(String), 
        id: expect.any(Number) 
      },
      { 
        name: expect.any(String), 
        id: expect.any(Number) 
      },
      { 
        name: expect.any(String), 
        id: expect.any(Number) 
      },
      { 
        name: expect.any(String), 
        id: expect.any(Number) 
      }
    ])

  })

})