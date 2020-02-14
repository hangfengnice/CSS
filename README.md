# css

## 1. BFC

* position: absolute / fixed
* display: inlin-block / table/ table-cell
* float 的值不为 none
* overflow 的值为 hidden / auto / scroll

使用技巧：两栏布局时 给浮动元素设置 padding / margin

## 2. 层叠顺序

* 从低到高
  * 层叠上下文的 background / border
  * 负 z-index
  * block 块状水平盒子
  * float 浮动盒子
  * inline / inline-block 水平盒子
  * z-index：auto 或看成 z-index：0
  * 正 z-index

## 3. 绝对定位元素

* 绝对定位的元素基于父级的 padding 定位
