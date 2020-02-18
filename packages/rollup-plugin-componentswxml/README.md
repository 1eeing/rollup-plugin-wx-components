# rollup-plugin-componentswxml
> Transform wechat mini app components's wxml

## Install
`npm install rollup-plugin-componentswxml -D`

## Useage
```js
// rollup.config.js
import wxml from 'rollup-plugin-componentswxml';
export default {
  input: 'src/components/custom-component/index.js',
  plugins: [
    wxml({
      template: 'src/components/custom-component/index.wxml',
      filename: 'index.axml',
      dest: 'dist/cjs/components/custom-component',
      platform: 'alipay'
    })
  ],
  output: [
		{
			file: 'dist/cjs/compoents/custom-component/index.js',
			format: 'cjs',
		},
	],
}
```

## Options
**template**
type: `string`

**filename**
type: `string`

**dest**
type: `string`

**platform**
type: `string`
value: `alipay`

This option is used to determine the platform, default be wechat.
