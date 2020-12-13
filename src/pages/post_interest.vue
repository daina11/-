<template>
  <div>
    <v-head></v-head>
    <div class="idle-top-wap">
      <div class="idle-top">
        <div class="left">
          <h5>生活·点滴</h5>
          <span>发现你的瞬间</span>
        </div>
        <div class="t_title">
          <i class="iconfont icon-smile"></i>
          <span>让世界看到你的想法</span>
        </div>
      </div>
    </div>

    <div class="container">
    <div class="main-content">
        <h5>请输入你要发布的内容：</h5>
      <el-input
        type="textarea"
        placeholder="请输入内容"
        v-model="textarea"
        maxlength="200"
        show-word-limit
        resize="none"
        rows="5"
      ></el-input>
          <el-upload
            action="http://10.12.181.136/api/base/upload"
            :show-file-list="false"
            :accept="'image/*'"
            :on-success="handleSuccess"
           :auto-upload="false"
           list-type="picture-card"
           :file-list="fileList"
          >
            <el-button type="primary" size="medium" @click="postimg">上传图片</el-button>
          </el-upload>
      <el-button @click="sub">提交</el-button>
    </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script>
import axios from "axios";
import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import vHead from "../components/head";
import vFooter from "../components/footer";
import vFuwenben from "../components/fuwenben";
export default {
  data() {
    return {
        textarea: '',
        fileList:[]
    };
  },
  components: {
    quillEditor,
    vFooter,
    vHead,
    vFuwenben
  },
  created() {},
  methods: {
       handleSuccess: function(result) {
      this.fileList.push(result.data[0])
      console.log(result.data[0]);
    },
    //上传图片
    // postimg(){
    //   axios.post("http://10.12.181.136/api/base/upload",{

    //   }).then({

    //   }).catch({

    //   })
    // },
    //上传内容和返回的图片连接
      sub(){
         if(  localStorage.getItem("login")==null|| localStorage.getItem("login")=='false'){
         this.$message({
          message: '请先登陆！',
          type: 'warning',
          offset:"80"
        });
      }else{
        axios.post("http://10.12.181.136/api/base/upload",{
          data:{
            imgurl:this.fileList,
            text:this.textarea
          }
        }).then(res=>{

        }).catch(err=>{

        })
      }
        
          console.log(this.textarea)
      }
  }
};
</script>
<style scoped lang="scss">
.container{
    .main-content{
        margin-top: 100px;
        margin-left: 25%;
        width: 500px;
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