
import { httpClientPlugin as httpClient } from "../plugins"

export const getPokemonById = async (id: number | string): Promise<String> => {

    try {

        const url = `https://pokeapi.co/api/v2/pokemon/${id}`

        const pokemon = await httpClient.get(url)

        return pokemon.name

    } catch (error) {
        throw `Pokemon not found with id ${id}`
    }

}