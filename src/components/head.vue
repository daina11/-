<template>
  <div>
    
    <!--  公共头部开始  -->
    <header>
    
      <div class="header">
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
          <b-nav
           <b-nav-item exact exact-active-class="active" active-class="active" to="/">首页</b-nav-item>
           <b-nav-item active-class="active" to="/article">文章</b-nav-item>
           <b-nav-item active-class="active" to="/interest">兴趣</b-nav-item>
           <b-nav-item  active-class="active"  to="/wenda">问答</b-nav-item>
           <b-nav-item  active-class="active"  to="/activity">活动</b-nav-item>
           <b-nav-item   active-class="active" to="/xianzhi">闲置</b-nav-item>
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
                <i class="ismsg iconfont icon-comment"></i>
              </div>
              <div class="my">
                  <img src="../assets/img/tx.png" alt="">
              </div>
            </div>
          </div>
          <div v-else="login" class="no-login">
            <div v-if!="issearch" @click="showSearchMethods" v-if="showSearch1">
              <i v-on:click="issearch = !issearch" class="sicon iconfont icon-search"></i>
            </div>
            <div class="login-text">没登陆</div>
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
  </div>
</template>
<script>

export default {
  name: "v-head",
  data() {
    return {
      login: true,
      issearch: false,
      showSearch1: true
    };
  },
   components: {
      
    },
  methods: {
    showSearchMethods() {
      this.showSearch1 = !this.showSearch1;
    }
  }
};
</script>
<style scoped lang="scss">header {
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
.header {
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
  left: 15%;
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
  width: 100%;
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
  display: flex;
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