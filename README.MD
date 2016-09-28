Angular + WebPack + ES6 Boilerplate
===================================

There plenty of webpack boilerplate code out there. This is something I set up
to let anyone quickly get started with using Angular 1 and ES6.

Webpack bundles the code into two bundles: `bundle.js` and `vendor.bundle.js`.
Run `npm run build:dev` to create a bundle. 

You can also development using Webpack Dev server by running command `npm run server:dev`.
The server will be running on `http://localhost:8080`
It is essential to develop with the server running because angular template files are loaded
via Ajax calls. This files need to be served through a web server otherwise the browser's cross
origin policy will block the requests.

