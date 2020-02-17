import { parse, stringify } from 'himalaya-wxml';

const traverseKey = (key: string) => {
  if(key.startsWith('wx:')){
    return 'a:';
  }
  if(key === 'catchtouchmove'){
    return 'catchTouchMove';
  }
  if(key === 'bindtap'){
    return 'onTap';
  }
  if(key === 'bindload'){
    return 'onLoad';
  }
  if(key === 'binderror'){
    return 'onError';
  }
  if(key === 'bindchange'){
    return 'onChange';
  }
  return key
}

const traverseAst = (ast: any) => {
  return ast.map(item => {
    if(item.type !== 'element'){
      return item;
    }
    let res = item;
    if(item.attributes){
      res = {
        ...item,
        attributes: item.attributes.map(attr => ({
          ...attr,
          key: traverseKey(attr.key)
        }))
      }
    }
    if(item.children){
      res.children = traverseAst(item.children);
    }
    return res;
  });
}

const transformWxml = (code: string) => {
  const ast = JSON.parse(parse(code));
  const json = JSON.stringify(traverseAst(ast));
  return {
    code: stringify(json),
    map: '',
  };
}

export default transformWxml
