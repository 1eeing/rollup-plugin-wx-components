const assert = require('assert');
const transformWxml = require('../src/platform/alipay').default;

const code =
`
<!-- 这是自定义组件的内部WXML结构 -->
<cover-view wx:if='{{visible}}' class='inner' catchtouchmove='handleTouchMove'>
  <cover-image mode='widthFix' src='{{imgSrc}}' class='image' bindtap='onClickTarget' bindload='onImageLoad' binderror='onImageError' />
  <cover-view class='close' bindtap='handleClose'>╳</cover-view>
</cover-view>
`

const expectedCode =
`
<!-- 这是自定义组件的内部WXML结构 -->
<cover-view a:if='{{visible}}' class='inner' catchTouchMove='handleTouchMove'>
  <cover-image mode='widthFix' src='{{imgSrc}}' class='image' onTap='onClickTarget' onLoad='onImageLoad' onError='onImageError' />
  <cover-view class='close' onTap='handleClose'>╳</cover-view>
</cover-view>
`

describe('test transformWxml', function() {
  it('should be equal', function() {
    assert.equal(transformWxml(code), expectedCode);
  })
})
