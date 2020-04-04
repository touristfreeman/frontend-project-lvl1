install: install-deps

install-deps:
	npm install

start:
	npx babel-node src/bin/brain-prime.js

test-coverage:
	npm test -- --coverage

publish:
	npm publish --dry-run
	
lint:
	npx eslint .
 
link:
	sudo npm link
