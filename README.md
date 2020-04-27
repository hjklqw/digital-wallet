An MVP of a Digital Wallet/Online banking system. This project was made for the purpose of sharing code style and organization rather than being an actual app for use, and thus uses a fake database.

## Run

### Install all dependencies
`npm i`

### Run the app
`npm start`

### Run unit tests
`npm test`

### Run integration tests
`npm run cypress`

## Technologies used

- React
- Redux
- Redux-Form
- React-Router
- Typescript
- SASS
- Jest & Enzyme (Unit tests)
- Cypress (Integration tests)

## Available Actions

- Login/Logout
- Register
- View wallet dashboard (current balance)
- View transaction history
- Create new transaction
- Change account settings

### Placeholder Pages

- Homepage
- Shared fake page for a few header links

## Existing data

**Username**: user1  
**Password**: 123456789

Has three transactions, all of which have randomly assigned numbers. For accurate transaction values, create a new transaction.

## Code Structure

### Components

Everything is a stateless functional component. Hooks are used instead of `connect` calls to connect to redux.

Components are separated into folders, with files as follows:  
`.view.tsx` - The presentation  
`.redux.tsx` -  The container, if necessary  
`.scss` - An optional stylesheet for that specific component  
`.test.tsx` - The test   
`.index.js` - Exports either the View or Redux file for simple imports

### Actions

Where the redux actions and related constants are stored. Files are named with the relevant suffix, eg. `.actions.ts` and `.constants.ts`.

### Models

Interfaces modelling data that is expected to come from the API.

### Reducers

`.state.ts` - Defines the portion of state that will be handled by the corresponding reducer  
`.reducer.ts` - The actual reducer  
`index.ts` - Exports the combination of all reducers

### Services

Simulate server requests and responses, with a fake latency.

`utils.ts` - Contains a function that takes in all possible actions (request, success, failure), an API URL to hit (substituted by a `fakeServerResponse` parameter here), and dispatches the relevant action based on the response received, ex. `createUserSuccess(res)` for a successful response and `createUserFailure(error)` for a failed one.  
`.service.ts` - A service for a specific API/Model that utilizes the above file.

## Credits

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Icons come from [Font Awesome](https://github.com/FortAwesome/react-fontawesome).