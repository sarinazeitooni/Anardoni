const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}

const withOptimizedImages = require('next-optimized-images')

module.exports = withOptimizedImages({})