export const mockDataPokemon = {
    "count": 1302,
    "next": "https://pokeapi.co/api/v2/pokemon?offset=4&limit=2",
    "previous": "https://pokeapi.co/api/v2/pokemon?offset=0&limit=2",
    "results": [
        {
            "name": "venusaur",
            "url": "https://pokeapi.co/api/v2/pokemon/3/"
        },
        {
            "name": "charmander",
            "url": "https://pokeapi.co/api/v2/pokemon/4/"
        }
    ]
}

export const mockJsonSchemaPokemonQuery = {
	"type": "object",
	"properties": {
	  "data": {
		"type": "object",
		"properties": {
		  "pokemons": {
			"type": "object",
			"properties": {
			  "count": { "type": "integer" },
			  "status": { "type": "boolean" },
			  "message": { "type": "string" },
			  "results": {
				"type": "array",
				"items": {
				  "type": "object",
				  "properties": {
					"id": { "type": "integer" },
					"url": { "type": "string" },
					"name": { "type": "string" },
					"image": { "type": "string" }
				  },
				  "required": ["id", "url", "name", "image"]
				}
			  }
			},
			"required": ["count", "status", "message", "results"]
		  }
		},
		"required": ["pokemons"]
	  }
	},
	"required": ["data"]
  }
