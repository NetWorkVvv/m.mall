import {request} from "@/network/request";

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

//把所有的数据都包装成一个类的对象 这样就能面向一个类来拿去数据
export class Goods {
  constructor(itemInfo, columns, services,skuInfo) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.nowPrice = itemInfo.lowNowPrice;
    this.style = skuInfo.props;
  }
}

export class Shop {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.cFans = shopInfo.cFans;
    this.cSells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.cGoods = shopInfo.cGoods;
    this.shopId = shopInfo.shopId;
  }
}

export class Evaluate {
  constructor(rate) {
    this.list = rate.list;
    this.cRate = rate.cRate;

  }
}

export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.set = info.set;
    this.tables = rule.tables;
  }
}
export function getRecommend() {
  return request({
    url: '/recommend'
  })
}