module.exports = {
	plugins: [
		require('postcss-nested')({ bubble: ['container'] }),
		require('postcss-simple-vars'),
		require('autoprefixer'),
	]
}

