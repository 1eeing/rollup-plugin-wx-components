import transformAlipay from './platform/alipay';

const { writeFileSync, readFileSync } = require('fs');

type Platform = 'alipay';

const switchPlatform = (platform: Platform) => {
  const defaultFunc = (code: string) => code;
  const funcmap = {
    alipay: transformAlipay
  }
  return funcmap[platform] || defaultFunc;
}

export default function transform(options: {
  template: string,
  filename: string,
  dest: string,
  platform: Platform
}) {
  const { template, platform, filename, dest } = options
  return {
    name: 'transform-wx-componentswxml',

    writeBundle() {
      const code = readFileSync(template).toString();
      const res = switchPlatform(platform)(code);
      writeFileSync(`${dest}/${filename}`, res);
    },
  };
}
