install: install-deps

install-deps:
	npm install

start:
	npx babel-node src/bin/brain-even.js

publish:
	npm publish --dry-run
	
lint:
	npx eslint
 
 link:
	sudo npm link
