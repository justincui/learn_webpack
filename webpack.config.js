module.exports={
    entry:{
        index: './app/index.js',
    },
    output:{
        path: './dist',
        filename: '[name].b.js',
    },
    module:{
        loaders:[
            {
                test:/\.css$/,
                loader:['style-loader', 'css-loader'],
            },
            {
                test:/\.less$/,
                loader:['style-loader', 'css-loader', 'less-loader'],
            }
        ]
    }
};