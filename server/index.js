require('import-export');
require('babel-core/register')({
  presets: ['es2015', 'react', 'stage-0'],
  plugins: [
   [
     'babel-plugin-transform-require-ignore',
     {
       extensions: ['.scss', '.css']
     }
   ]
 ]
});

const Koa = require('koa');
const path = require('path');
const fs = require('fs');
const react = require('react');
const reactDomServer = require('react-dom/server');
const { matchPath, RouterContext } = require('react-router-dom');
const serve = require('koa-static');
const Router = require('koa-router');

const { renderToString } = reactDomServer;

const staticFiles = [
  '/static/*',
  '/logo.svg',
  '/asset-manifest.json',
  '/favicon.ico'
];

const app = new Koa();
const router = new Router();
const routes = require('../src/routes');
app.use(serve('../build'));

staticFiles.forEach(file => {
  router.get(file, (req, res) => {
    const filePath = path.join( __dirname, '../build', req.url )
    res.sendFile( filePath )
  })
});

router.get('*', (req, res) => {

  const error = () => res.status(404).send('404')
  const htmlFilePath = path.join( __dirname, '../build', 'index.html' )

  fs.readFile( htmlFilePath, 'utf8', (err, htmlData) => {
    if(err) {
      error()
    }
    else {
      matchPath({ routes, location: req.url }, (err, redirect, ssrData) => {
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
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8080);
console.log(`Server start on localhost:8080`);
