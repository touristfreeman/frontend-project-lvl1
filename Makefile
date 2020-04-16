install: install-deps

install-deps:
	npm install

build:
	rm -rf dist
	npm run build

start:
	npx babel-node src/bin/brain-prime.js

publish:
	npm publish --dry-run
	
lint:
	npx eslint .
 
link:
	sudo npm link
