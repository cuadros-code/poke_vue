import pokemonApi from '@/api/pokemonApi'

describe('pokemon API', () => { 

  test('Axios debe estar configurado con la baseUrl de la api', () => { 
  
    expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
  
  })

})