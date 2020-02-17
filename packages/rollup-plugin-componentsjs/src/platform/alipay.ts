import { parse } from '@babel/parser';
import traverse, { NodePath } from '@babel/traverse';
import generate from '@babel/generator';
import * as t from '@babel/types';

function transformJs(code: string) {
  const ast = parse(code);
  let pp: NodePath;

  traverse(ast, {
    enter(path: NodePath) {
      if (t.isIdentifier(path.node, {name: 'attached'})) {
        path.node.name = 'onInit';
      }
      if (t.isIdentifier(path.node, {name: 'detached'})) {
        path.node.name = 'didUnmount';
        pp = path.parentPath;
      }
      if(t.isIdentifier(path.node.key, {name: 'show'})){
        path.node.key.name = 'didMount';
        pp.insertAfter(path.node);
      }
    },
    exit(path: NodePath) {
      if(t.isIdentifier(path.node.key, {name: 'pageLifetimes'})){
        path.remove();
      }
    }
  });
  const output = generate(ast, {}, code);
  return output;
}

export default transformJs
