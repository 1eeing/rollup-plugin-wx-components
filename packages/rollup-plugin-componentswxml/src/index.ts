import { createFilter } from 'rollup-pluginutils';
import transformAlipay from './platform/alipay';

type Platform = 'alipay';

const switchPlatform = (platform: Platform) => {
  const funcmap = {
    alipay: transformAlipay
  }
  return funcmap[platform];
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
    name: 'transform-wx-componentswxml',

    transform(code, id) {
      if (!filter(id)) return null;
      if(!['alipay'].includes(options.platform)) {
        this.error('You have not options.platform.');
        return null;
      };

      return switchPlatform(options.platform)(code);
    },
  };
}
