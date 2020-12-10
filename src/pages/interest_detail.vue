<template>
  <div>
    <v-head></v-head>
    <div class="idle-top-wap">
      <div class="idle-top">
        <div class="left">
          <h5>兴趣</h5>
          <span>随时·发现·分享</span>
        </div>
        <div class="right-w">
          <b-link href="/interest" target="_blank" class="right iconfont icon-favorite">兴趣首页</b-link>
        </div>
      </div>
    </div>
  


    <div class="a">
        <div class="col-2"></div>
    <div class="col-5">
        <div class="interset-list-warp">
        <div class="interset-content-top">
          <div class="xx">
            <div class="tx">
              <img :src="content.userimg" alt />
            </div>
            <div class="imf">
              <div class="user_name">{{content.username}}</div>
              <div class="post_time">{{content.time}}</div>
            </div>
          </div>
          <div class="more">
            <i class="iconfont icon-elipsis"></i>
          </div>
        </div>
        <div class="interset-content">
          <div class="interset-main">{{content.content}}</div>
          <div class="interset-img">
            <img :src="content.contentimg" alt />
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
              <span>{{content.commentnumber}}</span>
            </i>
          </div>
          <div>
            <i class="iconfont icon-link">
              <span>0</span>
            </i>
          </div>
        </div>
      </div>
      <div class="pinglun">
            <div class="new-comment">
              发表你的看法！
            <el-input class="gray-bg-input"
                      v-model="newcomment"
                      type="textarea"
                      :rows="3"
                      autofocus
                      placeholder="写下你的评论">
            </el-input>
             <el-button class="btn" type="success" round @click="postcomment">发布</el-button>
        </div>  
        <h6>最新评论</h6>
        <h6 v-show="commentData.length==0">没有评论哦~</h6>
          <v-comment :comments="commentData"></v-comment>
    
      </div>
            
    </div>
    
    <div class="user col-3">
        <h6>发布人信息</h6>
        <div class="p-m">
            <div class="p-img"><img :src="content.userimg" alt=""></div>
            <div>
                <div class="p-name">{{content.username}}</div>
                <div class="p-log">{{content.userqm}}</div>
            </div>
        </div>
        <div class="p-b"><i class="iconfont icon-file-common"></i>发布了10篇文章</div>
    </div>
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
import vComment from "../components/comment"
export default {
  data() {
    return {
      id: this.$route.query.id,
      data:{},
      content:{},
       commentData: {},
       //评论内容
       newcomment:''
    };
  },
  components: {
    vHead,
    vFooter,
    vBacktop,
    vComment
  },
  created(){
     axios
      .get("msg", {
            params: {
          id: this.id
        }
      })
      .then(res => {
        this.data=res.data.xq
        this.commentData=res.data.comment.data
           for (var i = 0; i < this.data.length; i++) {
          if (this.data[i].id == this.id) {
            this.content = this.data[i];
          }
        }
      })
      .catch(err => {});
  },
    methods: {
      postcomment(){
        console.log(this.newcomment)
      }
    }
};
</script>
<style scoped lang="scss">
.gray-bg-input{
  margin-top: 10px;
}
.new-comment{
  margin-bottom: 50px;
}
.btn{
  margin-top: 10px;
  float: right
}
.pinglun {
  margin-top: 20px;
  background: #ffffff;
  padding: 26px 20px 20px;
  border-radius: 6px;
}
.a {
  display: flex;
}
.p-b {
  margin-left: 20px;
  margin-top: 30px;
  align-items: center;
  color: #7e94a2;
  i {
    margin-right: 5px;
  }
}
.p-m {
  display: flex;
  margin-top: 10px;
}
.p-img {
  img {
    border-radius: 50%;
    width: 70px;
    min-width: 70px;
    height: 70px;
    border: 2px solid #ffffff;
  }
}
.p-name {
  margin-top: 3px;
  margin-left: 5px;
  font-size: 23px;
  color: #0f2540;
  line-height: 33px;
}
.p-log {
  margin-left: 5px;
  color: #999999;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.user {
  margin-top: 20px;
  background: #ffffff;
  width: 285px;
  box-shadow: none;
  height: 200px;
  padding: 26px 20px 20px;
  border-radius: 6px;
}
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
}
span {
  i {
    margin-right: 14px;
  }
}
.right {
  font-size: 16px;
  color: #999999;
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
  img {
    min-width: 330px;
    min-height: 330px;
    max-width: 330px;
    max-height: 330px;
  }
}
.interset-main {
  font-size: 20px;
  color: #0f2540;
  line-height: 28px;
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
  font-size: 14px;
  color: #bcbcbc;
  line-height: 24px;
  padding: 20px 20px 20px;
  background: #ffffff;
}

</style>