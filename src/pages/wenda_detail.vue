<template>
  <div>
    <v-head></v-head>
    <div class="idle-top-wap">
      <div class="idle-top">
        <div class="left">
          <h5>尾巴问答</h5>
          <span>问答详情</span>
        </div>
        <div class="t_title">
          <b-link href="/post_question" target="_blank">
            <el-button type="primary" round>
              <i class="iconfont icon-smile"></i>提问
            </el-button>
          </b-link>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-2"></div>
        <div class="col-8">
          <!-- 问题内容 -->
          <div class="main-q">
            <div class="m-top">
              <div class="tx">
                <img :src="question.pimg" alt />
              </div>
              <div class="top-r">
                <div class="p-name">{{question.pname}}</div>
                <div class="p-log">{{question.ulog}}</div>
                <div class="content">{{question.content}}</div>
                <div class="m-bottom">
                  <div>
                    <i class="iconfont icon-fabulous">
                      <span>{{question.like}}</span>
                    </i>
                  </div>
                  <div>
                    <i class="iconfont icon-comment">
                      <span>{{question.pnumber}}</span>
                    </i>
                  </div>
                  <div>
                    <i class="iconfont icon-link">
                      <span>0</span>
                    </i>
                  </div>
                </div>
              </div>
            </div>
             
          </div>
          
          <!-- 评论列表开始 -->
              <div class="comment-list">
                  <!-- 添加评论开始 -->
            <div class="addcomment">
              <h5>说出你的心声吧</h5>
              <div class="comment-b">
                <!-- 头像 -->
                <div class="addcomment-left">
                  <img src="../assets/img/tx.png" alt />
                </div>

                <!-- 输入评论框 -->
                <div class="addcomment-right">
                  <div v-if="login">
                    <textarea
                      v-model="comment"
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="2"
                      cols="200"
                      placeholder="你想说什么呢?"
                    ></textarea>
                    <span class="sub" @click="submit()">评论</span>
                  </div>
                  <div v-else="login==false ">
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="2"
                      cols="200"
                      placeholder="请先登陆!"
                      readonly
                    ></textarea>
                  </div>
                </div>
              </div>

            </div>
            <!-- 添加评论结束 -->
                <div class="new-list">
                  <h5>最新评论</h5>
                </div>
                <div v-for="(item,index) in answer" class="comment-main">
                  <div class="tx">
                    <img :src="item.txurl" alt />
                  </div>
                  <div class="cr">
                    <div class="u-name">{{item.username}} · {{item.time}}</div>
                    <div class="comment-detail">{{item.content}}</div>
                  </div>
                </div>
                <div class="comment-end">评论已加载完毕～</div>
              </div>
              <!-- 评论列表结束 -->
        </div>
        <div class="col-2"></div>
      </div>
    </div>
    <v-backtop></v-backtop>
    <v-footer></v-footer>
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
      id: this.$route.query.id,
      question: {},
      answer: {},
      login:true
    };
  },
  created() {
    axios
      .get("", {})
      .then(res => {})
      .catch(err => {});
  },
  components: {
    vFooter,
    vHead,
    vBacktop
  },
  created() {
    axios
      .get("msg", {})
      .then(res => {
         this.answer = res.data.yonghu;
        for (var i = 0; i < res.data.wd.length; i++) {
          if (res.data.wd[i].id == this.id) {
            this.question = res.data.wd[i];
          }
        }
      })
      .catch(err => {});
  },
  methods: {
      submit() {
      if (document.getElementById("exampleFormControlTextarea1").value != "") {
        // 提交评论
        //msg换成后台地址
        axios
          .post("msg", {
            params: {
              comment: this.comment,
              //文章id
              id: this.id,
              //用户id
              userid: userid
            }
          })
          .then(res => {
             this.$message({
          message: '发布成功！',
          type: 'success',
          offset:"80"
        });
          })
          .catch(e => {
           this.$message({
          message: '评论失败！',
          type: 'warning',
          offset:"80"
        });
          });
      } else {
        this.$message({
          message: '评论不能为空',
          type: 'warning',
          offset:"80"
        });
      }
    }
  }
};
</script>
<style scoped lang="scss">
.main-q {
  margin-top: 80px;
  padding: 20px;
  width: 100%;
  border-radius: 6px;
  background: #ffffff;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 20px;
  .m-bottom {
    color: #C9D6DE;
    float: right;
    margin-top: 10px;
    margin-bottom: 0px;
    display: flex;
    div {
      margin-right: 20px;
      margin-left: 10px;
      span {
        margin-left: 5px;
      }
    }
  }
  .m-top {
    display: flex;
    .tx {
      img {
        border-radius: 50%;
        width: 50px;
        min-width: 50px;
        height: 50px;
        border: 2px solid #ffffff;
      }
    }
    .top-r {
      margin-left: 10px;
      padding-left: 5px;
      .p-name {
        padding-top: 12px;
        margin-bottom: 5px;
        font-size: 15px;
      }
      .p-log {
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
          color: #C9D6DE;
        margin-bottom: 20px;
      }
      .content {
          font-family:"PingFang SC";
          
          font-size: large;
        margin-bottom: 20px;
      }
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

/* 评论列表 */
.comment-list {
    margin-top: 20px;
  color: #666666;
  margin-top: 0px;
  padding: 20px;
  width: 100%;
  border-radius: 6px;
  background: #ffffff;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 50px;
}
.comment-main {
  display: flex;
  border-bottom: 1px dashed #e5e5e5;
  padding-bottom: 25px;
  padding-top: 10px;
}
.u-name {
  color: #999999;
  font-size: 12px;
  margin-top: 5px;
}
.cr {
  margin-left: 10px;
}
.comment-detail {
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.tx {
  width: 40px;
  height: 40px;
  margin-top: 10px;
  img {
    border-radius: 50%;
    width: 40px;
    min-width: 40px;
    height: 40px;
    border: 2px solid #ffffff;
  }
}
.comment-end {
  width: 140px;
  margin: 40px auto;
  color: #999999;
  font-size: 12px;
}

.addcomment {
  margin-top: 20px;
  color: #666666;
  h5 {
    font-size: 14px;
  }
}
.comment-b {
  display: flex;
}
.addcomment-left {
  width: 60px;
  height: 60px;
  margin-top: 20px;
  img {
    border-radius: 50%;
    width: 60px;
    min-width: 60px;
    height: 60px;
    border: 2px solid #ffffff;
  }
}
.addcomment-right {
  margin-top: 20px;
  margin-left: 20px;
}
.form-control {
  background: #f5f5f5;
  border-radius: 2px;
  padding: 20px;
  font-size: 12px;
  color: #999999;
  outline: none;
  border: none;
  resize: none;
}
.sub {
  float: right;
  background: linear-gradient(360deg, #7bc5e8 0%, #46b0ee 100%);
  width: 80px;
  border-radius: 100px;
  color: #fff;
  margin: 0;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin-top: 8px;
  border: 0px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 2px 2px 0px #46b0ee;
  }
}
.new-list {
  border-bottom: 1px dashed #e5e5e5;
  margin-top: 50px;
  h5{
          font-size: 14px;
  }
}
</style>