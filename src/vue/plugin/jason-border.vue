<template>
  <b
    class="jason-border"
    :class="{
      fill,
      absolute,
      onepx: parseFloat(size) === 1,
      x,
      y,
      top,
      right,
      bottom,
      left
    }"
    :style="{
      borderColor: color,
      width: y ? innerSize : null,
      height: x ? innerSize : null
    }"/>
</template>

<script>
  export default {
    name: 'jason-border',
    props: {
      // 是否填充
      fill: Boolean,
      // 是否绝对定位
      absolute: Boolean,
      // 是否启用 1px 解决方案
      onePx: Boolean,
      // 方向
      x: Boolean,
      y: Boolean,
      // 位置
      top: Boolean,
      right: Boolean,
      bottom: Boolean,
      left: Boolean,
      // 颜色
      color: String,
      // 尺寸 (单位为 px)
      size: {
        type: [ Number, String ],
        default: 1
      }
    },
    computed: {
      // size 转换成 css 认识的格式
      innerSize () {
        let { size } = this;
        return Number(size) ? `${size}px` : size;
      }
    }
  };
</script>

<style lang="scss">
  @import "../../index.scss";
</style>