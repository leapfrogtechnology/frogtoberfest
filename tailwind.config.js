module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  /* reducing the chunk size of CSS loaded */
  purge: {
    content: ['src/**/*.js', 'src/**/*.jsx', 'public/**/*.html']
  },
  theme: {
    extend: {}
  },
  variants: {},
  plugins: []
};
