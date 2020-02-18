# rollup-plugin-componentsjs
> Transform wechat mini app components's js

## Install
`npm install rollup-plugin-componentsjs -D`

## Useage
```js
// rollup.config.js
import js from 'rollup-plugin-componentsjs';
export default {
  input: 'src/components/custom-component/index.js',
  plugins: [
    js({
      include: 'src/components/custom-component/index.js',
      platform: 'alipay'
    })
  ],
  output: [
		{
			file: 'dist/cjs/compoents/custom-component/index.js',
			format: 'cjs',
		},
		{
			file: 'dist/es/components/custom-components/index.js',
			format: 'es',
		},
	],
}
```

## Options
**include**
type: `string` or `string []`

**exclude**
type: `string` or `string []`

**platform**
type: `string`
value: `alipay`

This option is used to determine the platform, default be wechat.
