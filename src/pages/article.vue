<template>
  <div>
    <v-head></v-head>
    <v-add></v-add>
    <!-- 文章推荐 -->
    <div class="container">
      <b-card-group deck>
        <b-card
          :key="index"
          v-for="(item,index) in tjarticle.slice(3 , 5)"
          @click="toDetail(item.id)"
          :title="item.title"
          :img-src="item.imgurl"
          img-alt="Image"
          img-top
          class="t-card"
          img-height="300px"
          img-width="150px"
        >
          <b-card-text>{{item.xiangqi}}</b-card-text>
          <b-card-text class="small text-muted">{{item.time}}</b-card-text>
          <b-badge pill class="badge">{{item.tag}}</b-badge>
        </b-card>
      </b-card-group>
      <!-- 分类导航栏 -->
      <b-tabs class="fenlei-tabs" card :fill="true" :pills="true">
        <b-tab
          @click="getcategory(item.id)"
          class="fenlei-tab"
          v-for="(item,index) in category"
          :key="index"
          :title="item.name"
        >
          <v-category
            :id="item.id"
            :categorywz="categorywz"
            v-loading="loading"
            element-loading-text="拼命加载中"
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(245,245,245 0.8)"
          ></v-category>
        </b-tab>
      </b-tabs>
    </div>
    <v-footer></v-footer>
    <v-backtop></v-backtop>
  </div>
</template>
<script>
import axios from "axios";
import vHead from "../components/head";
import vAdd from "../components/add_top";
import vFooter from "../components/footer";
import vBacktop from "../components/backtop";
import vCategory from "../components/wz_category";
export default {
  data() {
    return {
      //推荐文章
      tjarticle: {},
      //分类导航栏数据
      category: {},
      categoryid: {},
      //分类下的文章
      categorywz: {},
      loading: true
    };
  },
  components: {
    vHead,
    vAdd,
    vFooter,
    vBacktop,
    vCategory
  },
  created() {
    this.loading = true;
    axios
      .get("ms", {
        data: {
          page: 1,
          flid: 1
        }
      })
      .then(res => {
        this.loading = false;
        this.tjarticle = res.data.articles;
        // this.category = res.data.fenlei;
        // this.categorywz = res.data.flwz;
        this.categoryid = this.category[0].id;
      });
      axios.post("http://10.12.181.136/api/article/get_article_list",{
        data:{
          column_id:1
        }
      }) .then(res => {
         this.category = res.data.column_list;
         this.categorywz = res.data.article_list;
        console.log(res)});
  },
  methods: {
    getcategory(categoryid) {
      this.loading = true;
      this.categoryid = categoryid;
      console.log(this.categoryid)
      axios
        .post("http://10.12.181.136/api/article/get_article_list", {
          data: {
            column_id: this.categoryid
          }
        })
        .then(res => {
          this.loading = false;
          this.categorywz =res.data.article_list;
        })
        .catch(e => {});
    },
    toDetail(id) {
      this.$router.push({
        path: "article_detail",
        query: { id: id }
      });
    },
    //分类导航栏
    tofenlie() {}
  }
};
</script>

<style lang="scss">.t-card {
  margin-top: 50px;
}
.fenlei-tabs {
  margin-top: 60px;
  .nav-link {
    background-color: #ecf0f2;
    color: #999999;
    margin-right: 5px;
    margin-left: 5px;
    margin-bottom: 10px;
    font-size: 20px;
  }
}
.card-header {
  border: 0;
  background-color: #ffffff !important;
}
.fenlei-tabs .nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: black;
  background-color: #ecf0f2;
}

</style>