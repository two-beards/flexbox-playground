module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production'
      ? [
          require('@fullhuman/postcss-purgecss')({
            content: ['./src/**/*.vue', './public/**/*.html'],
            whitelistPatternsChildren: [/multiselect/],
            extractors: [
              {
                extractor: class {
                  static extract(content) {
                    return content.match(/[a-zA-Z0-9-:_/]+/g) || []
                  }
                },
                extensions: ['vue', 'html']
              }
            ]
          })
        ]
      : [])
  ]
}
