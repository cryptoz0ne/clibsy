<!--- Comments -->

# Clibsy.com

Clibsy.com is the implementation of the Clibsy company web interfaces. This
includes the server code for the website and RESTful APIs of Clibsy.

## Table of Contents

- [Deployment](#deployment)
- [Commands](#commands)
    * [NPM](#npm)
        - [Start](#start)
        - [Test](#test)
    * [Makefile](#makefile)
        - [Lint](#lint)
        - [Unit Tests](#unit-tests)
        - [Code Coverage](#code-coverage)
        - [Documentation](#documentation)
        - [API Documentation](#api-documentation)
- [API](#api)

## Deployment

To deploy the Clibsy.com project, clone the git repository to the machine that
will act as the server. Make sure a compatible version of [Node.js][1] is
installed (including npm). The accepted version of Node.js for the project can
be found in the [package.json](package.json) file.

Using the system command-line (CLI) tool, navigate to the base directory of the
git repository and run the following command to install the dependencies:

```
npm install --production
```

Note: If running the project for development, run the following command:

```
npm install
```

## Commands

Commands can be run on the project in two ways, NPM or makefile commands. Both
sets assume the use of a CLI tool.

### NPM

The NPM commands cover a couple standard commands `start` and `test`.

#### Start

To start the server, run the following command:

```
npm start
```

#### Test

To run the test suite that is part of the project, run the following command:

```
npm test
```

Note: Dev dependencies must be installed for this command to function properly.

### Makefile

The makefile provides an extended list of commands to run for the project. These
commands cover tasks such as [Linting](#lint), [Testing](#unit-tests),
[Code Coverage](#code-coverage), and [Documentation](#documentation-generator).

#### Lint

The source code in the project uses [ESLint][2] to handle the task of enforcing
coding standards and style guidelines. To learn more about linting, view the
[Wikipedia article][3].

There are two commands that can execute linting on the source code. The first
command runs the linter on the source code of the base project. This command is
the following:

```
make lint
```

The second command runs the linter on the testing source code that is not part
of the production source code of the base project. This command is the following:

```
make lint-test
```

#### Unit Tests

The unit tests in the project use many packages to accomplish the task. The
major packages that handle unit testing are [Mocha][4], [Chai][5], and [Sinon][6]
with a complement of supporting packages and plugins. The style of the unit
test code is Behavior-Driven Development (BDD). To learn more about BDD, view
the [Wikipedia article][7]. The command to run the unit tests is the following:

```
make test
```

#### Code Coverage

The unit tests are also run as part of code coverage. Code coverage is
accomplished using [Istanbul][8]. The command to run code coverage is the
following:

```
make test-cov
```

#### Documentation

The source code is self documented and uses [JSDoc][9] to parse the code and
produce the documentation itself. The command to generate the documentation is
the following:

```
make docs
```

#### API Documentation

API documentation is generated using a different tool than general source code
documentation as it is intended for a different audience. The API documentation
is generated using [APIDoc][10]. The command to generate the API documentation is
the following:

```
make docs-api
```

## API

The current version of the API is v1. Refer to the API documentation for
information regarding individual API endpoints. To generate the documentation,
see command details in [API Documentation](#api-documentation) section.

© 2015 Clibsy LLC

[1]:  https://nodejs.org/
[2]:  http://eslint.org/
[3]:  https://en.wikipedia.org/wiki/Lint_(software)
[4]:  https://mochajs.org/
[5]:  http://chaijs.com/
[6]:  http://sinonjs.org/
[7]:  https://en.wikipedia.org/wiki/Behavior-driven_development
[8]:  https://gotwarlost.github.io/istanbul/
[9]:  http://usejsdoc.org/
[10]: http://apidocjs.com/
