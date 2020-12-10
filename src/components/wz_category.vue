<template>
  <div>
    <el-row class="row">
      <el-col :span="12" v-for="(item,index) in categorywz" :key="index" class="card">
        <div class="h">
          <el-card shadow="hover" @click.native.stop="toDetail(item.id)">
            <img :src="item.imgurl" class="image" />
            <div style="padding: 14px;">
              <span>{{item.title}}</span>
              <div class="bottom clearfix">
                <time class="time">{{item.time}}</time>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <b-button
        pill
        variant="outline-secondary"
        class="load-more"
        v-if="page<page_count"
        @click="loadMore"
      >加载更多...</b-button>
      <b-button pill variant="outline-secondary" class="load-more" v-else>没有更多了</b-button>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "v-wzcategory",
  props: ["id", "categorywz"],

  data() {
    return {
      loading: true,
      page: 1,
      page_count: ""
    };
  },
  created() {},
  methods: {
    toDetail(id) {
      this.$router.push({
        path: "article_detail",
        query: { id: id }
      });
    },
    loadMore() {
      this.page += 1;
       axios
        .get("ms", {
          data: {
            page: this.page
          }
        })
        .then(res => {
          this.categorywz= this.categorywz.concat(ret.data.categorywz);
        })
        .catch(e => {});
      // this.getDrawPrize({
      //   current_page: this.page //请求页数
      // })
      //   .then(ret => {
      //     console.log(ret.data.code_result);
      //     this.code_result = this.code_result.concat(ret.data.code_result); //将请求回来的数据和上一次进行组合
      //   })
      //   .catch(err => {
      //     this.$toast.fail("系统开小差,请重试");
      //   });
    }
  }
};
</script>
<style scoped lang="scss">.card {
  margin-bottom: 30px;
  width: 200px;
  margin-left: 20px;
}
.row {
  display: flex;
  position: relative;
}
.time {
  font-size: 13px;
  color: #999;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}
.button {
  padding: 0;
  float: right;
}
.image {
  width: 100%;
  height: 150px;
  display: block;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix {
  &:after {
    clear: both;
  }
}
span {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.h {
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 20px 1px #cccaca;
    transition: all 0.3s ease 0s;
  }
  &.el-card__body {
    padding: 5px;
  }
}
.load-more {
  position: absolute;
  margin-left: 50%;
  bottom: -50px;
}

</style>