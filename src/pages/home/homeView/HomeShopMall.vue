<template>
  <div>
    <div class="all">商城入口</div>

    <div class="merge">
      <div class="mall-item" v-for="item in list">
          <img :src="item.Img" alt="">
          <div>{{ item.Text }}</div>
      </div>
    </div>

    <div class="merges">
      <div class="mall-items" v-for="items in lists">
          <img :src="items.Img" alt="">
          <div>{{ items.Text }}</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "HomeShopMall",
  data() {
    return {
      list: [
        {
          Href: "https://act.mogu.com/0127xinren",
          Img: "https://s10.mogucdn.com/mlcdn/c45406/210421_4ed9l87e44gkj54fkhkg10hkcihj3_135x135.webp_999x999.v1c0.100.jpg",
          Text: '新人福利'
        },
        {
          Href: "//m.mogu.com/wall/s?q=美妆",
          Img: "https://s10.mogucdn.com/mlcdn/c45406/210421_1f0929ccdcj13889djf2822359h07_135x135.png_640x640.v1cAC.40.webp",
          Text: '美妆'
        },
        {
          Href: "//m.mogu.com/wall/s?q=女装",
          Img: "https://s10.mogucdn.com/mlcdn/c45406/210421_41k3g776h76097heidl9j12695648_135x135.png_640x640.v1cAC.40.webp",
          Text: '女装'
        },
        {
          Href: "//m.mogu.com/wall/s?q=男装",
          Img: "https://s10.mogucdn.com/mlcdn/c45406/210421_250g0l2i9khahgcdbc3ld9346lcj2_135x135.png_640x640.v1cAC.40.webp",
          Text: '男装'
        }
      ],
      lists: [
        {
          Href: "//m.mogu.com/wall/s?q=内衣",
          Img: "https://s10.mogucdn.com/mlcdn/c45406/210421_84c2hljci01le76j8j053dh0b9eh1_135x135.png_640x640.v1cAC.40.webp",
          Text: '内衣'
        },
        {
          Href: "//m.mogu.com/wall/s?q=裙子",
          Img: "https://s10.mogucdn.com/mlcdn/c45406/210421_1c6klclgjekc795288f4g4jckf8h7_135x135.png_640x640.v1cAC.40.webp",
          Text: '裙子'
        },
        {
          Href: "//m.mogu.com/wall/s?q=裤子",
          Img: "https://s10.mogucdn.com/mlcdn/c45406/210421_589igh8g88aaa79gb1dbd6da35l3k_135x135.png_640x640.v1cAC.40.webp",
          Text: '裤子'
        },
        {
          Href: "//m.mogu.com/wall/s?q=上衣",
          Img: "https://s10.mogucdn.com/mlcdn/c45406/210421_5392ebc8d4a1i86e241a0dila65b7_135x135.png_640x640.v1cAC.40.webp",
          Text: '上衣'
        }
      ]
    }
  }
}
</script>

<style scoped>
.all {
  text-align: center;
  font-size: 20px;
  font-weight: bolder;
  padding: 15px 0 10px 0;
  background-color: var(--color-tint);
  color: white;
  box-shadow: 0 3px 4px rgba(100, 100, 100, .5);
}

img {
  width: 50px;
  height: 50px;
}

.merge, .merges {
  display: flex;
}

.mall-item, .mall-items {
  flex: 1;

  text-align: center;
  padding: 18px 0 15px 0;

  font-size: 13px;

}


</style>