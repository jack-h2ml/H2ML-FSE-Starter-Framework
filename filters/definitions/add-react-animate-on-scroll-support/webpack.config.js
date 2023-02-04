/**
 * WordPress Dependencies
 */

const defaultConfig = require( '@wordpress/scripts/config/webpack.config.js' );

/**
 * Is Production?
 */

const isProduction = process.env.NODE_ENV === 'production';

/**
 * Config
 */

module.exports = {
    ...defaultConfig,
	...(isProduction ? {} : {
		devtool: "inline-source-map",
	}),
	entry: {
		...(defaultConfig.entry)(),
		view: './src/view.js'
	}
}