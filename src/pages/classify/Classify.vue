<template>
  <div class="classify">
    <classify-nav-bar />

    <div class="content">
      <classify-left :categories="categories" @leftItemAdv="leftItem" />

      <use-scroll id="tab-content">
        <div>
          <classify-main :subcategories="showSubcategory" />
          <tag-control
            :tagConTitle="titles"
            ref="tagControl1"
            @TagControlClick="TagControlClick"
          />
          <classify-content-detail :category-detail="showCategoryDetail" />
        </div>
      </use-scroll>
    </div>
  </div>
</template>

<script>
//子组件
import ClassifyNavBar from "@/pages/classify/classifyView/ClassifyNavBar";
import ClassifyLeft from "@/pages/classify/classifyView/ClassifyLeft";
import ClassifyMain from "@/pages/classify/classifyView/ClassifyMain";
import ClassifyContentDetail from "@/pages/classify/classifyView/ClassifyContentDetail";

//公共组件
import UseScroll from "@/components/commonV/scroll/UseScroll";
import TagControl from "@/components/content/tagControl/TagControl";

//网络请求
import {
  getCategory,
  getSubcategory,
  getCategoryDetail,
} from "@/network/classify";
//Tools
import { POP,SELL,NEW } from "@/commonJ/const";
import { tagControlMixin } from "@/commonJ/mixin";

export default {
  name: "Classify",
  components: {
    ClassifyNavBar,
    ClassifyLeft,
    ClassifyMain,
    ClassifyContentDetail,

    UseScroll,
    TagControl,
  },
  mixins: [tagControlMixin],
  data() {
    return {
      categories: [],
      categoryData: {},
      tagConIndex: -1,
      titles: ["推荐", "热卖", "上新"],
    };
  },
  created() {
    // 1.请求分类数据
    this.Category();
  },
  computed: {
    showSubcategory() {
      if (this.tagConIndex === -1) return {};
      return this.categoryData[this.tagConIndex].subcategories;
    },
    showCategoryDetail() {
      if (this.tagConIndex === -1) return [];
      return this.categoryData[this.tagConIndex].categoryDetail[
        this.defaultType
      ];
    },
  },
  methods: {
    Category() {
      getCategory().then((res) => {
        // 1.获取分类数据
        this.categories = res.data.category.list;
        // 2.初始化每个类别的子数据
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              'pop': [],
              'sell': [],
              'new': [],
            },
          };
        }
        // 3.请求第一个分类的数据
        this.Subcategories(0);
      });
    },
    Subcategories(index) {
      this.tagConIndex = index; 
      const mailKey = this.categories[index].maitKey;
      getSubcategory(mailKey).then((res) => {
        this.categoryData[index].subcategories = res.data;
        this.categoryData = { ...this.categoryData };
        this.CategoryDetail(POP);
        this.CategoryDetail(SELL);
        this.CategoryDetail(NEW);
      });
    },
    CategoryDetail(type) {
      // 1.获取请求的miniWallkey
      const miniWallkey = this.categories[this.tagConIndex].miniWallkey;
      // 2.发送请求,传入miniWallkey和type
      getCategoryDetail(miniWallkey, type).then((res) => {
        // 3.将获取的数据保存下来
        this.categoryData[this.tagConIndex].categoryDetail[type] = res;
        this.categoryData = { ...this.categoryData };
      });
    },
    /**
     * 事件响应相关的方法
     */
    leftItem(index) {
      this.Subcategories(index);
    },
  },
};
</script>

<style scoped>
.classify {
  height: 100vh;
  background-color: #ffffff;
}

.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;

  display: flex;
}

#tab-content {
  height: 100%;
  flex: 1;
}
</style>