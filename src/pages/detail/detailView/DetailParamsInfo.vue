<!--商品参数-->
<template>
  <!--取值key:value 存值value:key-->
  <div class="info-params" v-if="Object.keys(paramsInfo).length !== 0">
<!--    rule.tables-->
    <table v-for="(table, indexX) in paramsInfo.tables"
           class="info-tables" :key="indexX">
      <tr v-for="(tr, indexY) in table" :key="indexY">
        <td v-for="(td, indexZ) in tr" :key="indexZ">{{ td }}</td>
      </tr>
    </table>
<!--    info.set-->
    <table class="info-set">
      <tr v-for="(info, infoIndex) in paramsInfo.set" :key="infoIndex">
        <td class="info-set-key">{{ info.key }}</td>
        <td class="info-set-value">{{ info.value }}</td>
      </tr>
    </table>
<!--    info.image-->
    <div class="info-img" v-if="paramsInfo.image.length !== 0">
      <div>样式</div>
      <img :src="paramsInfo.image" alt="">
    </div>
<!--    itemTags-->
    <div>

    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamInfo",
  props: {
    paramsInfo: {
      type: Object,Array,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.info-params {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: var(--border);
}

.info-params table {
  width: 100%;
  border-collapse: collapse;
}

.info-params table tr {
  height: 42px;
}

.info-params table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, .1);
}

.info-set {
  border-top: var(--border);
}

.info-set-key {
  /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
  width: 95px;
}

.info-set-value {
  color: #eb4868
}
.info-img div {
margin: 10px 0 10px ;
}
.info-img img {
  width: 100%;
}
</style>
