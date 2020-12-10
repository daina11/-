<template>
  <div>
    <v-head></v-head>
    <div>
      <div class="tags-detail-top-img">
        <img :src="topimg.img" alt />
      </div>
    </div>
    <div class="container">
      <!-- 顶部介绍 -->
      <div class="tag-top">
        <div class="top-one">你的一切我都想知道</div>
        <div class="top-two">
          说出你的心声吧！
          <b-link href="/post_interest">
            <el-button type="primary" icon="el-icon-edit" round>发布你的想法</el-button>
          </b-link>
        </div>
      </div>
      <div class="dt">动态</div>
      <!-- 兴趣列表开始 -->
      <div
        class="interset-list-warp"
        v-for="(item,index) in xqList"
        :key="index"
        @click="toIntersetDetail(item.id)"
      >
        <div class="interset-content-top">
          <div class="xx">
            <div class="tx">
              <img :src="item.userimg" alt />
            </div>
            <div class="imf">
              <div class="user_name">{{item.username}}</div>
              <div class="post_time">{{item.time}}</div>
            </div>
          </div>
          <div class="more">
            <i class="iconfont icon-elipsis"></i>
          </div>
        </div>
        <div class="interset-content">
          <div class="interset-main">{{item.content}}</div>
          <div class="interset-img">
            <!-- <b-img v-for="(item,index) in jimg" :key="index" :src="item.img" block="true"></b-img> -->
          </div>
        </div>
        <div class="interset-content-footer">
          <div>
            <i class="iconfont icon-fabulous">
              <span>0</span>
            </i>
          </div>
          <div>
            <i class="iconfont icon-comment">
              <span>{{item.commentnumber}}</span>
            </i>
          </div>
          <div>
            <i class="iconfont icon-link">
              <span>0</span>
            </i>
          </div>
        </div>
      </div>
      <b-button
        pill
        variant="outline-secondary"
        class="load-more"
        v-if="page<page_count"
        @click="loadMore"
      >加载更多...</b-button>
      <b-button pill variant="outline-secondary" class="load-more" v-else>没有更多了</b-button>
    </div>
    <v-footer></v-footer>
    <v-backtop></v-backtop>
  </div>
</template>

<script>
import axios from "axios";
import vHead from "../components/head";
import vFooter from "../components/footer";
import vBacktop from "../components/backtop";
export default {
  data() {
    return {
      xqList: {},
      //顶部模糊背景
      topimg: {},
      //测试九宫格图片
      jimg: {}
    };
  },
  components: {
    vHead,
    vFooter,
    vBacktop
  },
  methods: {
    toIntersetDetail(id) {
      this.$router.push({
        path: "interest_detail",
        query: { id: id }
      });
    }
  },
  created() {
    axios
      .get("msg", {})
      .then(res => {
        this.xqList = res.data.xq;
        this.topimg = res.data.topimg1;
        this.jimg = res.data.img;
        console.log(this.jimg);
      })
      .catch(err => {});
  }
};
</script>
<style scoped lang="scss">

.dt {
  margin-bottom: 50px;
  font-size: 20px;
  margin-left: 50%;
  padding-left: 3px;
  width: 50px;
  height: 30px;
  color: #303030;
  border-bottom: 2px solid #303030;
}
.tags-detail-top-img {
  margin-top: 60px;
  height: 290px;
  width: 100%;
  img {
    width: 100%;
    height: 290px;
    filter: blur(10px);
  }
}
.xx {
  display: flex;
}
.container {
  margin-top: 100px;
  width: 590px;
}
.interset-content-top {
  display: flex;
  justify-content: space-between;
}
.tx {
  img {
    border-radius: 50%;
    width: 60px;
    min-width: 60px;
    height: 60px;
    border: 2px solid #ffffff;
  }
}
.interset-list-warp {
  width: 100%;
  border-radius: 6px;
  background: #ffffff;
  padding: 20px;
  box-sizing: border-box;
  display: block;
  margin-top: 20px;
  position: relative;
  cursor: pointer;
}
.imf {
  margin-top: 8px;
  margin-left: 8px;
}
.user_name {
  font-size: 14px;
  color: #435771;
  line-height: 22px;
  display: block;
}
.post_time {
  font-size: 12px;
  color: #c6c6c6;
  display: block;
}
.more {
  i {
    font-size: 30px;
    line-height: 30px;
    float: right;
    color: #435771;
  }
}
.interset-img {
  max-width: 330px;
  max-height: 330px;
  img {
    position: relative;
    max-width: 300px;
    max-height: 300px;
  }
}
.interset-main {
  font-size: 20px;
  color: #0f2540;
  line-height: 28px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 20px;
}
.interset-content {
  margin: 10px 10px 20px 65px;
  position: relative;
}
.interset-content-footer {
  display: flex;
  align-items: center;
  color: #c9d6de;
  padding-left: 65px;
  div {
    margin-right: 20px;
    display: flex;
  }
  i {
    margin-right: 8px;
    font-size: 16px;
    cursor: pointer;
  }
  span {
    margin-left: 8px;
  }
}
.tag-top {
  position: relative;
  width: 560px;
  top: -125px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0 auto;
  z-index: 3;
  height: 50px;
}
.top-one {
  padding: 20px;
  border-bottom: 1px solid #e5e5e5;
  box-sizing: border-box;
  background: #ffffff;
  font-size: 20px;
  color: #0f2540;
  text-align: center;
}
.top-two {
  height: 100px;
  font-size: 14px;
  color: #bcbcbc;
  line-height: 24px;
  padding: 30px 20px 20px;
  background: #ffffff;
  .el-button {
    float: right;
  }
}
.load-more {
  margin-top: 50px;
  margin-left: 45%;
  bottom: -50px;
}
</style>