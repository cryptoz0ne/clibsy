
TESTS ?= $(shell find test/ -type f -name "*.test.js")
SRCS ?= $(shell find . -type f -not -path "*node_modules/*" -not -path "*public/*" -not -path "*test/*" -name "*.js")

LINTER = ./node_modules/.bin/eslint

DOCS = ./node_modules/.bin/jsdoc
APIDOCS = ./node_modules/.bin/apidoc

MOCHA = ./node_modules/.bin/mocha
_MOCHA = ./node_modules/.bin/_mocha
REPORTER ?= spec

ISTANBUL = ./node_modules/.bin/istanbul
REPORT ?= lcov

DEBUG_ENV ?= clibsy:*

# Lint
lint:
	@$(LINTER) $(SRCS)

lint-test:
	@$(LINTER) $(TESTS)

# Unit tests
test:
	@NODE_ENV=test DEBUG=$(DEBUG_ENV) $(MOCHA) --ui bdd --check-leaks --reporter $(REPORTER) $(TESTS)

# Code coverage
test-cov:
	@NODE_ENV=test DEBUG=$(DEBUG_ENV) $(ISTANBUL) cover $(_MOCHA) --report $(REPORT) -- --ui bdd --check-leaks --reporter $(REPORTER) $(TESTS)

# Documentation
docs:
	@$(DOCS) $(SRCS)

# API documentation generator
docs-api:
	@$(APIDOCS) -i ./routes -o ./doc

.PHONY: lint lint-test test test-cov docs docs-api
