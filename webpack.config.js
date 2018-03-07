//criando configuração do arquivo config.js

//requique do webpack
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

/* aqui estamos exportando o objeto que determina
 * toda a configuração da aplicação
 */
module.exports = {
    //ponto de entrada, em qual arquivo nossa aplicação será carregada
    entry: './ex/index.js',

    //onde será gerada a saída do arquivo js
    output: {
        //diretório onde será adicionado o arquvivo seguinte (bundle.js)
        path: __dirname + '/public',
        //arquivo muito utilizado para aplicações usando webpack, porém pode ser o nome que desejar
        filename: './bundle.js'
    },
    //servidor a rodar o webpack
    devServer: {
        //porta de execução 
        port:8080,
        //pasta base dos arquivos a serem carregados
        contentBase: './public'
    },
    plugins: [
        new ExtractTextPlugin('app.css')
    ],
    //o cara que vai carregar os arquivos
    module: {
        loaders: [{
            test: /.js?$/, 
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        },
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }
    ]
    }
}