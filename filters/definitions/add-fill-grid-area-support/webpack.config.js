/**
 * WordPress Dependencies
 */
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

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
	})
}