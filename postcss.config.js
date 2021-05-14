module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {//屏幕分辨率 750 X 1334 => 375 X 667
      viewportWidth: 375, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750 屏幕分辨率
      viewportHeight: 667, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
      unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw 根据宽度
      selectorBlackList: ['.ignore', '.tag-bar','.tag-bar-item'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: false, // 允许在媒体查询中转换`px`
      exclude:[/TagBar/,] //因为类很乱 所以 这里直接用正则 排除包含TagBar字样的 其文件内的px就不转化
    }

  }
}