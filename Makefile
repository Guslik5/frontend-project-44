# Makefile
install:
	npm ci

brain-games:
	node src/index.js

lint:
	npx eslint
