import { createFilter } from 'rollup-pluginutils';
import transformAlipay from './platform/alipay';

type Platform = 'alipay';

const switchPlatform = (platform: Platform) => {
  const defaultFunc = (code: string) => ({code})
  const funcmap = {
    alipay: transformAlipay
  }
  return funcmap[platform] || defaultFunc;
}

export default function transform(options: {
  include?: any,
  exclude?: any,
  platform: Platform
} = {
  platform: 'alipay'
}) {
  const filter = createFilter(options.include, options.exclude);

  return {
    name: 'transform-wx-componentsjs',

    transform(code, id) {
      if (!filter(id)) return null;
      return switchPlatform(options.platform)(code);
    },
  };
}
