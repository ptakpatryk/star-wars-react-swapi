# Star Wars React Swapi

## Getting Started

Clone this repo :
`git clone https://github.com/ptakpatryk/star-wars-react-swapi.git`

Navigate to the root folder and install all dependencies :

- `yarn` 

Start Development Mode :

- `yarn dev`
- Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

## Available Scripts

In the project directory, you can run:

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn cypress:open`

Runs cypress testing tool. Please make sure you have application running on your localhost port `8080`.

### `yarn lint`

To check javascript linting rules.

### `yarn lint:fix`

To format codebase.

## Things to consider if not time restictions

- I'd definitely spend more time on unit tests, as I covered only areas in the shared components
- Cover more using cypress
- I'd probably mock endpoints as this is third-party API but I presumed that this is the project's backend that we have full control on
- Add integration tests for views components
- if comes to field editing I'd probably make it slightly smarter, maybe make it hit api mocked with MSW
- I'd parse all the requests coming from the swapi with zod to assure type safety
- I'd extract out request error components

Notes:
Please search for `NOTE:` in the project to find some comments where I provide some more information about my thinking process.
I think I spent roughly 3-3.5h on this project If I were to start again I'd probably focus less on the UI (and getting that star wars svg logo) and put some more effort into testing.
I've also added additional feature of pagination as I thought it's a quick win (although that took some of a testing time 😢)
I hope I provided enough evidence that I'm capable of using FE tools.
