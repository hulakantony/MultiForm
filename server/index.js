require('import-export');
require('babel-core/register')({ presets: ['es2015', 'react'] });

const Koa = require('koa');
const path = require('path');
const fs = require('fs');
const react = require('react');
const reactDomServer = require('react-dom/server');
const reactRouter = require('react-router');
const serve = require('koa-static');
 
const { renderToString } = reactDomServer;
const { match, RouterContext } = reactRouter;

const staticFiles = [
  '/static/*',
  '/logo.svg',
  '/asset-manifest.json',
  '/favicon.ico'
];

const app = new Koa();
const routes = require('../src/routes');
app.use(serve('../build'));

staticFiles.forEach(file => {
  app.get(file, (req, res) => {
    const filePath = path.join( __dirname, '../build', req.url )
    res.sendFile( filePath )
  })
});

app.get('*', (req, res) => {

  const error = () => res.status(404).send('404')
  const htmlFilePath = path.join( __dirname, '../build', 'index.html' )

  fs.readFile( htmlFilePath, 'utf8', (err, htmlData) => {
    if(err) {
      error()
    }
    else {
      match({ routes, location: req.url }, (err, redirect, ssrData) => {
        if(err) {
          error()
        }
        else if(redirect) {
          res.redirect(302, redirect.pathname + redirect.search)
        }
        else if(ssrData) {
          const ReactApp = renderToString( react.createElement(RouterContext, ssrData) )
          const RenderedApp = htmlData.replace('{{SSR}}', ReactApp)
          res.status(200).send(RenderedApp)
        }
        else {
          error()
        }
      })
    }
  })
})

// app.use(ctx => {
//   ctx.body = 'Hello World';
// });

app.listen(8080);
console.log(`Server start on localhost:8080`);