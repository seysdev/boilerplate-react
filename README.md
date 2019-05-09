# Proyecto react crud

Este proyecto ha sido creado con fines educativos.

## Instalar dependencias y levantar proyecto

```npm
    npm i
    npm run start
```

## Crear paquete NPM

```npm
    npm init -f
```

## Instalar dependencias babel

[enlace babel](https://babeljs.io/setup#installation)
[enlace react](https://babeljs.io/docs/en/babel-preset-react#docsNav)

```npm
npm install --save-dev babel-loader @babel/core
npm install @babel/preset-env --save-dev
npm install --save-dev @babel/preset-react
```

## Instalar dependencias webpack

[enlace](https://webpack.js.org/guides/getting-started)

```npm
npm install webpack --save-dev
npm install webpack-cli --save-dev
npm install --save-dev webpack-dev-server
npm install --save-dev webpack-merge
```

## Loaders

```npm
npm install --save-dev css-loader
npm install style-loader --save-dev
npm install sass-loader node-sass --save-dev
npm install url-loader --save-dev
npm install file-loader --save-dev
```

### Plugins

```npm
npm install --save-dev html-webpack-plugin
```

## Instalamos Linter

```npm
npm install eslint --save-dev
npm install eslint-loader --save-dev
npx eslint --init
```

## Configurar Webpack

Configuramos webpack en modo base, dev y prod, usando webpack-merge.

```javascript
// webpack.base.js
const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}

## Instalar React
