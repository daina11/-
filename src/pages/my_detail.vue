<template>
  <div>
    <v-head></v-head>
    <div class="container">
      <el-tabs v-model="activeName">
        <el-tab-pane label="个人信息" name="first">
          <div>
            <div class="ud-img">
          头像：
          <img v-show="bannerUrl.length!=0" :src="bannerUrl" alt />
          <el-upload
            action="http://10.12.181.136/api/base/upload"
            :show-file-list="false"
            :accept="'image/*'"
            :on-success="handleSuccess"
           
          >
            <el-button type="primary" size="medium">上传头像</el-button>
          </el-upload>
        </div>
            <el-form label-width="80px" :model="formLabelAlign">
              <el-form-item label="昵称" width="80px">
                <el-input v-model="formLabelAlign.name" :placeholder="geren.username"></el-input>
              </el-form-item>
              <el-form-item label="个性签名">
                <el-input v-model="formLabelAlign.sign" :placeholder="geren.sigin"></el-input>
              </el-form-item>
              <el-form-item label="性别">
                <el-radio-group v-model="geren.sex" size="medium">
                  <el-radio border label="1">男</el-radio>
                  <el-radio border label="2">女</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="邮箱">
                <el-input v-model="formLabelAlign.email" :placeholder="geren.email"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="saveInfo">保存</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
        <el-tab-pane label="文章" name="second">
          <div>
            <el-col :span="4" v-for="(item,index) in wz.slice(1 , 6)" :key="index">
              <el-card shadow="hover" @click.native="todetail(item.id)">
                <el-image :src="item.imgurl"></el-image>
                <div class="title">{{item.title}}</div>
                <div class="time">{{item.time}}</div>
              </el-card>
            </el-col>
          </div>
        </el-tab-pane>
        <el-tab-pane label="评论" name="third">
          <div>
            <el-timeline reverse="true">
              <el-timeline-item
                v-for="(item, index) in commentlist"
                :key="index"
                :timestamp="item.time"
              >{{item.content}}</el-timeline-item>
            </el-timeline>
          </div>
        </el-tab-pane>
        <el-tab-pane label="活动" name="fourth">没有更多了</el-tab-pane>
      </el-tabs>
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
      bannerUrl:"",
      //个人信息
      geren:"",
      commentlist:"",
      wz: "",
      activeName: "first",
      formLabelAlign: {
        name: "",
        sign: "",
        email: "",
        sex: ""
      }
    };
  },
  components: {
    vHead,
    vAdd,
    vFooter,
    vBacktop
  },
  created() {
    //获取发布过的文章和评论
    axios
      .get("msg", {})
      .then(res => {
        this.wz = res.data.articles;
        this.commentlist = res.data.yonghu;
        this.geren=res.data.yonghu[1];
        this.bannerUrl=res.data.yonghu[1].txurl
      })
      .catch(err => {});

  },
  methods: {
    todetail(id){
      //去到个人文章详情页  
      this.$router.push({
        path: "article_detail",
        query: { id: id }
      });
    },
    saveInfo() {
      console.log(this.formLabelAlign.name);
      //保存个人信息
      axios
        .post("", {
          data:{
            tx:bannerUrl,
            form:formLabelAlign
          }
        })
        .then(res => {
          this.$message({
            message: "保存成功！",
            type: "success",
            offset: "80"
          });
        })
        .catch(err => {
          this.$message({
            message: "保存出错了！",
            type: "warning",
            offset: "80"
          });
        });
    }
  }
};
</script>
<style scoped lang="scss">
.ud-img{
  margin-left: 10%;
  margin-bottom: 20px;
  img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .el-button {
    margin-top: 20px;
    margin-left: 50%;
  }
}
.el-card {
  cursor: pointer;
  border-radius: 10px;
  padding: 0px;
  margin: 15px;
  .el-image {
    border-radius: 5px;
    width: 100%;
    height: 85px;
  }
  .title {
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #333333;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
  .time {
    font-size: 12px;
    color: #999999;
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
.el-tabs {
  /deep/ .el-tabs__item {
    font-size: 18px;
    color: #999999;
  }
  min-height: 350px;
  padding-top: 100px;
  .el-tab-pane {
    padding-top: 50px;
  }
}
.el-form {
  width: 500px;
}
</style>