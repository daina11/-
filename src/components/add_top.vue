<template>
  <div class="idle-top-wap">
    <div class="idle-top">
      <div class="left">
        <h5>尾巴文章</h5>
        <span>数字生活美文</span>
      </div>
      <div class="right-w" >
        <b-link href="/post_article"  target="_blank" class="right iconfont icon-xie">
          <span>
            <i class="icon-all_editor"></i>写文章
          </span>
        </b-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "v-addTop"
};
</script>
<style lang="scss">
.idle-top-wap {
  width: 100%;
  height: 140px;
  background: #ffffff;
  padding-top: 60px;
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
.right-w {
  display: flex;
  a {
    text-align: center;
    line-height: 40px;
    font-weight: bold;
    list-style: none;
  }
}
span {
  i {
    margin-right: 14px;
  }
}
.right {
  background-color: #4790e5;
  color: #ffffff;
  border-radius: 100px;
  font-size: 14px;
  height: 40px;
  width: 110px;
}

</style>