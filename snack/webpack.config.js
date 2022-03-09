// 引入一个包
const path = require('path')

// 引入 html 插件
const HTMLWebpackPlugin = require('html-webpack-plugin')

// 引入 clean 插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// webpack 中 所有配置信息 都应该写在 module.exports 中
module.exports = {
    // 指定入口文件
    entry: "./src/index.ts",
    mode : 'development',
    // 指定打包文件所在目录
    output: {
        // 指定打包文件目录
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        environment: {
            // 配置打包环境
            // 告诉 webpack 不使用箭头函数
            arrowFunction: false,
            const: false
        }
    },
    // module 指定 webpack 打包时需要使用的模块
    module: {
        // rules 指定要加载的规则
        rules: [
            {
                // test 指定规则生效的文件
                test:/\.ts$/, // 以 ts 结尾的文件
                use: [{
                    // 配置 babel
                    // 指定加载器
                    loader: 'babel-loader',
                    // 设置 babel
                    options: {
                        // 设置预定义的环境
                        presets: [
                            [
                                // 指定环境的插件
                                '@babel/preset-env',
                                // 配置信息
                                {
                                    // 要兼容的目标浏览器
                                    targets: {
                                        'chrome':'88'
                                    },
                                    // 指定 corejs 版本
                                    'corejs': '3',
                                    // 使用 corejs 方式 按需加载
                                    "useBuiltIns": 'usage'
                                }
                            ]
                        ]
                    }
                },
                 // 要使用的 loader 从后往前执行
                'ts-loader'
            ],
                // 要排除的文件
                exclude: /node_modules/
            },

            // 设置 less 文件的处理
            {
                test: /\.less$/,
                // 执行顺序 从下向上
                use: [
                    "style-loader",
                    "css-loader",
                    // 引入postcas
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers: 'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    },
    // 配置 webpack 插件
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            title: 'myTitle',
            // html模板 后加路径
            template: './src/index.html'
        })
    ],

    // 用来设置引用模块
    resolve: {
        // 以 ts 和 js 作为拓展名
        extensions: ['.ts', '.js']
    }
}