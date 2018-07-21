install:
	npm install


build:
	rm -rf dist
	npm run build


start: build
	node dist/bin/convert-feed.js __tests__/fixtures/rss.xml

test_once:
	npm run jest --silent


test:
	npm run jest --silent -- --watch
