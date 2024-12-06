require('ts-node/register')
// Esto se debe de descomentar si se va a usar el la propiedad de emulate en la configuracion
// const { devices } = require('playwright')

exports.config = {
	output: './output',
	helpers: {
		Playwright: {
			url: 'http://zero.webappsecurity.com/login.html',
			// Ejemplo de emular un dispositvo pero por defecto en todas las pruebas si quiere solo probarse solo en una prueba vease el test de emulacionDeDispositivos
			// emulate: devices['iPhone 6'],
			show: false,
			browser: 'chromium',
			waitForNavigation: 'domcontentloaded',
			video: true,
			keepVideoForPassedTests: true,
			pressKeyDelay: 100,
			trace: true,
			keepTraceForPassedTests: true,
		},
		PlaywrightVideoAllure: {
			require: './utils/playwrightVideoAllure_helper',
		},
		REST: {
			endpoint: 'https://pokeapi.co/api/v2',
		},
		GraphQL: {
			endpoint: 'https://graphql-pokeapi.graphcdn.app',
		},
		DbHelper: {
			require: './node_modules/codeceptjs-dbhelper',
		},
		// TODO: Revisar o actualizar la librería.

		//ResembleHelper: {
		//	require: 'codeceptjs-resemblehelper',
		//	baseFolder: './tests/screenshots/base/',
		//	diffFolder: './tests/screenshots/diff/',
		//},

		ChaiWrapper: {
			require: 'codeceptjs-chai',
		},
	},
	include: {
		I: './steps_file.js',
		loginPage: './pages/loginPage',
	},
	mocha: {},
	bootstrap: null,
	teardown: null,
	hooks: [],	
	plugins: {
		subtitles: {
			enabled: true,
		},
		screenshotOnFail: {
			enabled: true,
		},
		pauseOnFail: {},
		retryFailedStep: {
			enabled: true,
		},
		tryTo: {
			enabled: true,
		},
		allure: {
			enabled: true,
			require: '@codeceptjs/allure-legacy',
		},
		selenoid: {
			enabled: false,
			deletePassed: false,
			autoCreate: true,
			autoStart: true,
			sessionTimeout: '30m',
			enableVideo: true,
			enableLog: true,
		},
		fakerTransform: {
			enabled: true,
		},
	},
	tests: './tests/*_test.ts',
	name: 'Framework',
}
