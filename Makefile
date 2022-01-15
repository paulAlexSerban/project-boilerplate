install:
	npm run --prefix source/setup install

start:
	node source/setup/start.js

develop:
	node source/setup/develop.js

build:
	npm run --prefix source/setup build

deploy:
	node source/setup/deploy.js

publish:
	node source/setup/publish.js

push:
	node source/setup/push.js