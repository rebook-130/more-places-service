# Front-End Capstone

> This front-end capstone is a front-end design of an "item detail page" for a house rental application. This item detail page includes four significant modules ("widgets") on the page (see related projects below).


## Related Projects

tbd

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions for init app launch
  1. run `npm install` from root dir to resolve dependencies
  2. inspect /server/database/index.js for mongo address. ensure this is mapped to your correct db server location env.
  3. to seed db, run `npm run seed`
  4. to launch app on localhost with node run `npm start`
  5. app should render in localhost

> Additional commands detailed below

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- npm 6.4.1
- MongoDB 4.2.0

## Development

From within the root directory:
```sh
npm install
```

To seed the database
```sh
npm run seed
```

To run server
```sh
npm start
```

To run dev environment/webpack
```sh
npm run build:dev
```

To run tests
```sh
npm test
```

### Installing Dependencies

From within the root directory:

```sh
npm install

npm install -g webpack
npm install faker styled-react-modal styled-components
```

