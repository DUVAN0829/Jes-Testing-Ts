
import { httpClient } from "../plugins"

export const getPokemonById = async (id: number | string): Promise<String> => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    const pokemon = await httpClient.get(url)

    return pokemon.name

}