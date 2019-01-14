# jason-border
> 布局边框，解决视网膜屏 1px border

## 思路
> 将边框元素使用语义化标签进行布局，并封装成相应框架组件（vue，react）

## use

```bash
npm i --save jason-border
```

### normal import

```javascript
import 'jason-border/dist/jason-border.css';
```

```html
<link rel="stylesheet" href="dist/jason-border.css">
```

```html
<!-- x 轴下边线 -->
<b class="jason-border x"></b>
<!-- y 轴左边线，要设置父元素的高度(height: 100% 实现) -->
<b class="jason-border y"></b>
<!-- 填充屏幕，使元素超过其方向的屏幕(注意溢出滚动条的问题) -->
<b class="jason-border x fill"></b>
<b class="jason-border y fill"></b>
<!-- 视网膜屏 1px 解决方案 -->
<b class="jason-border x onepx"></b>
<b class="jason-border y onepx"></b>
<!-- 绝对定位，以及位置 -->
<b class="jason-border x absolute"></b>
<b class="jason-border y absolute"></b>
<b class="jason-border x absolute bottom"></b>
<b class="jason-border y absolute right"></b>
```

### vue import

```javascript
import jasonBorder from 'jason-border/dist/jason-vue-border.umd.min.js';
import 'jason-border/dist/jason-vue-border.css';

Vue.use(jasonBorder);
```

```html
<!-- x 轴下边线 -->
<jason-border jason-border x/>
<!-- y 轴左边线，要设置父元素的高度(height: 100% 实现) -->
<jason-border jason-border y">
<!-- 填充屏幕，使元素超过其方向的屏幕(注意溢出滚动条的问题) -->
<jason-border jason-border x fill/>
<jason-border jason-border y fill/>
<!-- 视网膜屏 1px 解决方案 -->
<jason-border jason-border x onepx/>
<jason-border jason-border y onepx/>
<!-- 绝对定位，以及位置 -->
<jason-border jason-border x absolute/>
<jason-border jason-border y absolute/>
<jason-border jason-border x absolute bottom/>
<jason-border jason-border y absolute right/>
```

### react import
> 未完成