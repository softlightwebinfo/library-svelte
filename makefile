link:
	node init.js
	npm run package
	cd package && npm link && npm ls -g && yarn publish --access public
