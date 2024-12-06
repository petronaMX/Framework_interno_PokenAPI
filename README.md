
## Descripción de Archivos

### `tests/backend_test.ts`

Este archivo contiene pruebas para las APIs REST y GraphQL del backend. Utiliza el framework CodeceptJS para realizar las pruebas.

#### Escenarios de Prueba

- **Test of backend REST GET with Poken API**
  - Envía una solicitud GET a la API de Pokémon.
  - Verifica que la longitud de los resultados sea 2.
  - Compara la respuesta con los datos mock `mockDataPokemon`.

- **Test of backend GRAPHQL GET**
  - Envía una consulta GraphQL para obtener una lista de Pokémon.
  - Verifica la estructura y contenido de la respuesta.

### `tests/mocksForBackend.ts`

Este archivo contiene datos mock utilizados en las pruebas del archivo `backend_test.ts`.

#### Datos Mock

- **mockDataPokemon**
  - Datos de ejemplo para la respuesta de la API de Pokémon.

- **mockJsonSchemaPokemonQuery**
  - Esquema JSON para validar la respuesta de la consulta GraphQL.

## Scripts del `package.json`

Los scripts definidos en el archivo `package.json` permiten ejecutar diversas tareas relacionadas con el proyecto.

```json
{
  "scripts": {
    "test": "npx codeceptjs run --tests",
    "report": "allure generate output",
    "show:report": "allure serve output"
  }
}