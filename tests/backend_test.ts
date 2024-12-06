import {
	mockDataPokemon,
	mockJsonSchemaPokemonQuery
} from './mocksForBackend'

Feature('Pruebas de backend APIs REST y GRAPHQL con assertions')

Scenario('Test of backend REST GET with Poken API', async ({ I }) => {
	const response = await I.sendGetRequest(
		'/pokemon?offset=2&limit=2',
	);
	I.assertEqual(response?.data?.results.length, 2);
	I.assertDeepEqual(response?.data, mockDataPokemon);
})



Scenario('Test of backend GRAPHQL GET', async ({ I }) => {
	const response = await I.sendQuery(`
		query Pokemons {
			pokemons(offset: 2, limit: 2) {
				count
				status
				message
				results {
					id
					url
					name
					image
				}
			}
		}`
	);

	I.assertJsonSchema(response?.data, mockJsonSchemaPokemonQuery);
	I.assertTrue(response?.data?.data?.pokemons?.status);

});