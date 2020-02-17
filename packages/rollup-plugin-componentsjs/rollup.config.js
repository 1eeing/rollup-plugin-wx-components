import typescript from 'rollup-plugin-typescript';
const config = {
  input: 'src/index.ts',
  plugins: [
    typescript()
  ],
  output: [
		{
			file: 'dist/rollup-plugin-componentsjs.cjs.js',
			format: 'cjs',
		},
		{
			file: 'dist/rollup-plugin-componentsjs.es.js',
			format: 'es',
		},
	],
};

export default config
