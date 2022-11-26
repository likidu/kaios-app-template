module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{svelte,js,ts}'],
  theme: {
    extend: {
      fontWeight: {
        bold: 'var(--bold-font-weight)',
      },
    },
    variants: {},
    plugins: [],
  },
};
