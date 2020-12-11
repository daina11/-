<template>
  <div>
    <v-head></v-head>
    <div class="idle-top-wap">
      <div class="idle-top">
        <div class="left">
          <h5>活动</h5>
          <span>欢聚·欢笑·兴趣</span>
        </div>
        <div class="t_title">
          <i class="iconfont icon-smile"></i>
          <span>我都想笑了</span>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col main">
          <!-- 活动卡片 -->
          <el-col :span="12" v-for="(item,index) in huodong.slice(1 , 6)" :key="index">
            <el-card shadow="hover" @click.native="todetail(item.id)">
              <el-image :src="item.imgurl"></el-image>
              <div class="title">{{item.title}}</div>
              <div class="time">{{item.time}}</div>
            </el-card>
          </el-col>
        </div>
      </div>
      <div class="col">
        <el-col :span="24">
          <b-button
            pill
            variant="outline-secondary"
            class="more"
            v-if="page<page_count"
            @click="loadMore"
          >加载更多...</b-button>
          <b-button pill variant="outline-secondary" class="more" v-else>没有更多了</b-button>
        </el-col>
      </div>
    </div>
    <v-backtop></v-backtop>
    <v-footer></v-footer>
  </div>
</template>
<script>
import axios from "axios";
import vHead from "../components/head";
import vAdd from "../components/add_top";
import vFooter from "../components/footer";
import vBacktop from "../components/backtop";
export default {
  data() {
    return {
      huodong: {},
      page: 1,
      page_count: 2
    };
  },
  created() {
    axios
      .get("msg", {})
      .then(res => {
        this.huodong = res.data.articles;
      })
      .catch(err => {});
  },
  components: {
    vHead,
    vAdd,
    vFooter,
    vBacktop
  },
  methods: {
    loadMore() {
      console.log(11);
    },
    todetail(id) {
      this.$router.push({
        path: "activity_detail",
        query: { id: id }
      });
    }
  }
};
</script>
<style scoped lang="scss">
.more {
  margin-top: 50px;
  margin-left: 50%;
  margin-bottom: 50px;
}
.main {
  margin-top: 50px;
  .el-card {
    cursor: pointer;
    border-radius: 10px;
    padding: 0px;
    margin: 15px;
    .el-image {
      border-radius: 5px;
      width: 100%;
      height: 285px;
    }
    .title {
      font-family: PingFangSC-Medium;
      font-size: 16px;
      color: #333333;
      padding: 20px 0 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
    .time {
      font-size: 12px;
      color: #999999;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
}
.idle-top-wap {
  margin-top: 60px;
  padding: 0;
  width: 100%;
  height: 80px;
  background: #ffffff;
  box-shadow: 0 15px 15px 0 rgba(15, 37, 64, 0.1);
}
.idle-top {
  padding-bottom: 15px;
  padding-top: 25px;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  z-index: 10;
  position: relative;
}
.left {
  float: left;
  display: flex;
  min-height: 100%;
  position: relative;
  font-size: 12px;
  text-align: center;
  line-height: 24px;
  h5 {
    font-size: 24px;
    color: #424e66;
    text-align: center;
    line-height: 24px;
    display: inline-block;
    padding-right: 10px;
    border-right: 1px solid #e5e5e5;
  }
  span {
    font-size: 16px;
    color: #666666;
    line-height: 24px;
    padding-left: 10px;
  }
}
span {
  i {
    margin-right: 14px;
  }
}
.t_title {
  span {
    color: #666666;
    font-size: 16px;
    line-height: 24px;
  }
}
</style>