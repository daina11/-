<template>
  <div>
    <!--  公共头部开始  -->
    <header>
      <div class="header1">
        <b-container>
          <b-row>
            <b-col cols="2">
              <div class="logo">
                <a href="/">
                  <h1>社区社区</h1>
                  <i class></i>
                </a>
              </div>
            </b-col>
            <b-col cols="8">
              <div class="nav" id="nav" v-if="!issearch">
                <b-nav>
                  <b-nav-item exact exact-active-class="active" active-class="active" to="/">首页</b-nav-item>
                  <b-nav-item active-class="active" to="/article">文章</b-nav-item>
                  <b-nav-item active-class="active" to="/interest">兴趣</b-nav-item>
                  <b-nav-item active-class="active" to="/wenda">问答</b-nav-item>
                  <b-nav-item active-class="active" to="/activity">活动</b-nav-item>
                  <b-nav-item active-class="active" to="/xianzhi">闲置</b-nav-item>
                </b-nav>
              </div>
            </b-col>
            <!-- 搜索列表 -->
            <b-col cols="2">
              <div class="login" :class="issearch?'rLeft':'rLeft1'">
                <div v-if="login" class="no-login">
                  <div v-if!="issearch" @click="showSearchMethods" v-if="showSearch1">
                    <i v-on:click="issearch = !issearch" class="sicon iconfont icon-search"></i>
                  </div>
                  <div class="login-text">
                    <div class="msg">
                    <el-popover
                      placement="bottom-start"
                      width="150"
                      trigger="hover"
                      style="margin-top:50px;"
                      content="没有更多消息"
                    >
                      <div  slot="reference">
                        <i class="ismsg iconfont icon-comment" ></i>
                      </div></el-popover></div>
                    </el-popover>
                    <div class="my">
                      <el-popover
                        placement="bottom-start"
                        width="150"
                        trigger="hover"
                        style="margin-top:50px;"
                        content
                      >
                        <div class="geren">
                           <el-link href="/my_detail" target="_blank" class="el-icon-user-solid" :underline="false">个人中心</el-link>
                        </div>
                        <div class="tuichu">
                          <el-link  class="el-icon-switch-button"  @click="logout" :underline="false">退出登陆</el-link>
                        </div>
                        
                        <div slot="reference">
                          <img src="../assets/img/tx.png" alt />
                        </div>
                      </el-popover>
                    </div>
                  </div>
                </div>
                <div v-else="login" class="no-login">
                  <div v-if!="issearch" @click="showSearchMethods" v-if="showSearch1">
                    <i v-on:click="issearch = !issearch" class="sicon iconfont icon-search"></i>
                  </div>
                  <div class="login-text" @click="dialogFormVisible = true">没登陆</div>
                </div>
              </div>
            </b-col>
            <b-col cols="8">
              <div class="showSearch">
                <transition name="slide-fade">
                  <form id="search_head_form" action="/search" v-if="issearch">
                    <div class="search-1">
                      <i class="sicon iconfont icon-search"></i>
                    </div>
                    <div class="search-2">
                      <input
                        type="text"
                        class="input-sub"
                        autocomplete="off"
                        name="search_word"
                        size="9"
                        id="headerSearch"
                        placeholder="搜索你感兴趣的..."
                      />
                    </div>
                    <div class="search-3" v-on:click="issearch = false" @click="showSearchMethods">
                      <i class="sicon iconfont icon-close"></i>
                    </div>
                  </form>
                </transition>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </header>
    <!--  公共头部结束 -->
    <!-- 登陆注册 -->
    <!-- 登陆 -->
    <el-dialog class="dg" :title="ftitle" center width="30%" :visible.sync="dialogFormVisible">
      <el-form :model="dlform" label-width="100px" v-show="denglu">
        <el-form-item label="用户名">
          <el-input v-model="dlform.uname"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="dlform.pwd"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="onSubmit">立即登陆</el-button>
        </el-form-item>

        <el-link :underline="false" class="gozhuce" type="primary" @click="denglu1">还没注册？前往注册</el-link>
      </el-form>
      <!-- 注册 -->
      <el-form
        :model="zcform"
        label-width="100px"
        v-show="zhuce"
        status-icon
        :rules="zcrules"
        ref="zcform"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="zcform.username"></el-input>
        </el-form-item>

        <el-form-item label="请输入密码" prop="pass">
          <el-input type="password" v-model="zcform.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="zcform.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="onZhuce">立即注册</el-button>
        </el-form-item>
        <el-link :underline="false" class="gozhuce" type="primary" @click="zhuce1">已经注册？前往登陆</el-link>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "v-head",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.zcform.checkPass !== "") {
          this.$refs.zcform.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.zcform.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ftitle: "潮玩登陆",
      zhuce: false,
      denglu: true,
      login: true,
      issearch: false,
      showSearch1: true,
      dialogFormVisible: false,

      //登陆表单
      dlform: {
        uname: "",
        pwd: ""
      },

      //注册表单
      zcform: {
        username: "",
        pass: "",
        checkPass: ""
      },
      zcrules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  components: {},
  methods: {
    logout(){
      //退出登陆
    },
    onSubmit() {
      //登陆
      console.log(this.dlform);
      axios
        .get("msg", {})
        .then(res => {})
        .catch(err => {});
    },
    onZhuce() {
      //注册
      console.log(this.zcform);
    },
    denglu1() {
      this.denglu = false;
      this.zhuce = true;
      this.ftitle = "潮玩注册";
    },
    zhuce1() {
      this.denglu = true;
      this.zhuce = false;

      this.ftitle = "潮玩登陆";
    },
    showSearchMethods() {
      this.showSearch1 = !this.showSearch1;
    }
  }
};
</script>
<style scoped lang="scss">
.geren{
  margin-bottom: 10px;
  text-align: center
}
.tuichu{
  text-align: center;
  margin-top: 5px;
   margin-bottom: 5px;
}
.gozhuce {
  margin-left: 35%;
}
.el-form {
  margin-right: 10px;
}
header {
  height: 60px;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  font-size: 14px;
  color: #9c9c9c;
  line-height: 60px;
  z-index: 10010;
  top: 0;
  float: left;
  box-shadow: 0px 1px 10px #c7c2c2;
}
.header1 {
  display: flex;
}
.logo {
  position: relative;
  min-width: 214px;
  top: 13px;
  h1 {
    color: #9a9a9a;
    font-weight: bold;
    font-size: 25px;
  }
}
.sicon {
  cursor: pointer;
  font-size: 20px;
}
.nav {
  position: relative;
  width: auto;
  display: block;
  font-weight: bold;
  font-size: 15px;
  min-width: 490px;
  left: 10%;
  margin: 1px;
  a {
    color: #9c9c9c;
    display: block;
    padding: 0 20px;
    text-align: center;
    line-height: 60px;
    float: left;
    &:hover {
      color: #ffffff;
    }
  }
}
.login {
  width: 30%;
  position: relative;
  white-space: nowrap;
}
.rLeft {
}
.no-login {
  width: auto;
  display: flex;
  font-weight: bold;
  text-align: center;
}
.login-text {
  display: flex;
  margin-left: 30px;
  cursor: pointer;
}
.slide-fade-enter-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
.showSearch {
  display: block;
  position: relative;
  margin-right: 10px;
}
#search_head_form {
  font-weight: bold;
  left: 35%;
  display: flex;
  position: fixed;
  text-align: center;
  height: 100%;
  top: 0px;
}
.search {
  form {
    display: flex;
  }
}
.search-2 {
  min-width: 400px;
  overflow: hidden;
  input {
    margin-left: 50px;
    outline: none;
    background: none;
    border: none;
    width: 90%;
    color: #fff;
    font-size: 14px;
    margin-right: 50px;
  }
}
.search-3 {
  cursor: pointer;
}
.my {
  align-items: center;
  cursor: pointer;

  img {
    border-radius: 50%;
    width: 30px;
    min-width: 30px;
    height: 30px;
    border: 2px solid #ffffff;
    margin-left: 20%;
  }
}
.msg {
  margin: 0 70% 0 20%;
}
.ismsg {
  font-size: 20px;
}
.active {
  color: #ffffff !important;
}
</style>