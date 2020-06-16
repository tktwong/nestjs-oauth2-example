<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov


$ curl http://localhost:3000/oauth/token \
	-d "grant_type=password" \
	-d "username=terry" \
	-d "password=password" \
	-H "Authorization: Basic dXNlckNsaWVudDpzZWNyZXQxMjM" \
	-H "Content-Type: application/x-www-form-urlencoded"

# Response
{
  "accessToken":"311507cd193144b9bec4a63c48a3f00f047d07bd","accessTokenExpiresAt":"2020-06-16T03:53:52.254Z","refreshToken":"d0fe336b6ae72c17acd8af3412c439cef0c80fb7","refreshTokenExpiresAt":"2020-06-30T02:53:52.254Z","client":{"id":"application"},"user":{"username":"terry"}
}⏎

$ curl http://localhost:3000/oauth/token \
	-d "grant_type=refresh_token" \
	-d "refresh_token=480b7ae8c865fcd59cdd31494d34b5224b70eb1b" \
	-H "Authorization: Basic dXNlckNsaWVudDpzZWNyZXQxMjM" \
	-H "Content-Type: application/x-www-form-urlencoded"

# Response
{
  "accessToken":"1472c0209f293bebb007bd95ada3ab36f5bac1b8","accessTokenExpiresAt":"2020-06-16T04:27:40.705Z","refreshToken":"93eb114d6cd477eeed7d12d1c6310c8532db550f","refreshTokenExpiresAt":"2020-06-30T03:27:40.705Z","client":{"id":"application"},"user":{"username":"terry"}
}⏎

$ curl http://localhost:3000/oauth/protectedRequest \
	-H "Authorization: Bearer 311507cd193144b9bec4a63c48a3f00f047d07bd"

# Response
Congratulations! You made it!!!⏎

$ curl http://localhost:3000/oauth/token \
	-d "grant_type=client_credentials" \
	-H "Authorization: Basic Y29uZmlkZW50aWFsQXBwbGljYXRpb246dG9wU2VjcmV0" \
	-H "Content-Type: application/x-www-form-urlencoded"


$ curl http://localhost:3000/oauth/token \
	-d "grant_type=client_credentials" \
	-d "client_id=userClient2" \
	-d "client_secret=secret123" \
	-H "Content-Type: application/x-www-form-urlencoded"

$ node
$ Buffer.from("userClient2:secret123").toString("base64")

$ curl http://localhost:3000/oauth/token \
	-d "grant_type=client_credentials" \
	-H "Authorization: Basic dXNlckNsaWVudDI6c2VjcmV0MTIz" \
	-H "Content-Type: application/x-www-form-urlencoded"

# Response
{
  "accessToken":"1c330415ac5db35baf502b5e8e30a9db5594ba66","accessTokenExpiresAt":"2020-06-16T04:24:10.240Z","client":{"id":"confidentialApplication"},"user":{"username":"terry"}
}⏎

```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
