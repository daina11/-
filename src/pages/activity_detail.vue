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
    <el-image style="width: 100%; height:300px" :src="activity.img"></el-image>
    <div class="container">
      <div class="row">
        <div class="col-2"></div>
        <div class="col-8">
          <div class="top">
            <div class="title">{{activity.title}}</div>
            <div class="ptime">发布时间：{{activity.ptime}}</div>
          </div>
          <div class="col-2"></div>
        </div>
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
      id: this.$route.query.id,
      activity: {}
    };
  },
  created() {
    axios
      .get("msg", {})
      .then(res => {
        this.activity = res.data.hd[0];
        console.log(res.data.hd);
      })
      .catch(err => {});
  },
  components: {
    vHead,
    vAdd,
    vFooter,
    vBacktop
  },
  methods: {}
};
</script>
<style scoped lang="scss">
.container {
  margin-top: 20px;
  .top{
      border-bottom: 1px solid #e5e5e5;
      padding-top: 10px;
      padding-bottom: 30px;
  }
  .title {
    font-size: 40px;
    color: #0f2540;
    line-height: 56px;
  }
  .ptime{
      font-size: 14px;
    color: #0F2540;
  }
}
.main {
  width: 100%;
  padding: 10px;
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