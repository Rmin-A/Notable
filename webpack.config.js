const path = require('path');

module.export = {
    "mode": "development",
    "entry": "frontend/components/notable.js",
    "output": {
        "path": __dirname+'/app/assets/javascript/bundle.js',
        "filename": "[name].[chunkhash:8].js"
    },
    "module": {
        "rules": [
            {
                "enforce": "pre",
                "test": /\.(js|jsx)$/,
                "exclude": /node_modules/,
                "use": "eslint-loader"
            },
            {
                "test": /\.(js|jsx)$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader",
                    "options": {
                        "presets": [
                            "env",
                            "react"
                        ]
                    }
                }
            },
            {
                "test": /\.css$/,
                "use": [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    }
};
