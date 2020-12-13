<template>
  <div>
    <v-head></v-head>
    <div class="idle-top-wap">
      <div class="idle-top">
        <div class="left">
          <h5>尾巴文章</h5>
          <span>数字生活美文</span>
        </div>
        <div class="t_title">
          <i class="iconfont icon-smile"></i>
          <span>让世界知道你的想法</span>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="wz_f">
        <div class="ud-img">
          上传背景图：
          <img v-show="bannerUrl.length!=0" :src="bannerUrl" alt />
          <el-upload
            action="http://10.12.181.136/api/base/upload"
            :show-file-list="false"
            :accept="'image/*'"
            :on-success="handleSuccess"
           
          >
            <el-button type="primary" size="medium">上传图片</el-button>
          </el-upload>
        </div>
        <!--
  action: 图片上传的地址
  show-file-list: 是否显示文件上传列表
  accept: 可接受的上传类型，image/*为图片
  headers: 头部信息
  on-success: 上传成功事件
  on-error: 上传失败事件
  before-upload: 上传前处理事件，返回一个值，值为false将阻止上传
  on-progress: 上传中事件
        -->
        <!-- <el-form auto-upload="false" enctype="multipart/form-data" method="post">
          <input  type="file" name="image" ref="bannerUrl" />
          <br />
          <el-button type="primary" @click="subBanner">上传</el-button>
        </el-form>-->
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="文章标题:">
            <el-input v-model="form.title" class="wztitle" placeholder="请输入文章标题"></el-input>
          </el-form-item>
          <el-form-item label="文章分类:">
            <el-select v-model="form.region" placeholder="请选择文章分类"   >
              <el-option class="option"
                v-for="(item,index) in fenlei"
                :key="index"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <v-fuwenben @messageData="getData"></v-fuwenben>
          <el-form-item class="sub">
            <el-button type="primary" @click="onSubmit">立即发表</el-button>
          </el-form-item>
        </el-form>
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
      //后台传回来的背景图的链接
      bannerUrl: "",
      // 文章分类下拉菜单选择分类
      fenlei: {},
      content: "",
      fwb: "",
      form: {
        //文章标题
        title: "",
        //文章分类的id
        region: "",
        login: this.$global.login,
      }
    };
  },
  components: {
    quillEditor,
    vFooter,
    vHead,
    vFuwenben
  },
  created() {
    console.log(JSON.parse(localStorage.getItem("tx")))
    axios.post("http://10.12.181.136/api/article/get_article_list").then(res => {
      this.fenlei = res.data.column_list;
    });
  },
  methods: {
    //上传成功获取后台返回的链接
    handleSuccess: function(result) {
      this.bannerUrl = result.data[0];
      console.log(result.data[0]);
    },
    //获取富文本组件传过来的值
    getData(val) {
      this.fwb = val;
      console.log(val);
    },
    //发布文章标题和选择分类
    onSubmit() {
      axios.post("http://10.12.181.136/api/article/add_article",{
        data:{
          data:this.form+this.fwb+this.bannerUrl
        }
      }).then(res => {
        this.$message({
          message: '发布成功，请等待审核！',
          type: 'success',
          offset:"80"
        });
      })
        .catch(e => {
          this.$message({
          message: '发布出错了！',
          type: 'warning',
          offset:"80"
        });
        });
      console.log(this.form.title+this.form.region+this.fwb+this.bannerUrl);
      // console.log(this.fwb)
      // console.log(this.bannerUrl)
    },
    // submit() {
    //   axios
    //     .post("http://10.12.181.136/api/interest/add_interest", {
    //       data: {
    //         content: this.content,
    //         user_id: 1
    //       }
    //     })
    //     .then(res => {})
    //     .catch(e => {});
    // }
  }
};
</script>
<style scoped lang="scss">
.sub{
  margin-left: 15%;
  margin-top: 20px;
}
.el-select-dropdown__wrap{
 height: 80px !important;
}

.ud-img {
  display: flex;
  margin-top: 10px;
  margin-bottom: 30px;
  img {
    width: 100px;
    height: 100px;
  }
}
.wz_f {
  margin-top: 50px;
  margin-left: 25%;
}
.wztitle {
  width: 50%;
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