<template>
  <div class="home">
    <div id="demo1"></div>
    <button type="button" class="btn" @click="getEditorData">发表前先点击保存哦！</button>
    <!-- <h3>内容预览</h3>
    <textarea name="" id="" cols="170" rows="20" readonly v-model="editordata"></textarea> -->
  </div>
</template>

<script>
// 引入 wangEditor
import wangEditor from 'wangeditor'
export default {
name: "v-fuwenben",
props: [' fwb'],
  data() {
    return {
      editor: null,
      fwb: this.editor.txt.html()
    }
  },
  mounted() {
    const editor = new wangEditor(`#demo1`)
    // 配置 onchange 回调函数，将数据同步到 vue 中
    editor.config.onchange = (newHtml) => {
       this.editordata = newHtml
    }
    editor.customConfig = editor.customConfig ? editor.customConfig : editor.config;
    editor.customConfig.uploadImgServer = 'http://10.12.181.136/api/base/upload' ;//配置服务器
    editor.customConfig.uploadImgHooks = {
    customInsert: function(insertImgFn, result) {
        // insertImgFn 可把图片插入到编辑器，传入图片 src ，执行函数即可
        insertImgFn(result.data[0])
    }
};
    // 创建编辑器
    editor.create()
    this.editor = editor
  },
  methods: {
    getEditorData() {
      // 通过代码获取编辑器内容
      let data = this.editor.txt.html()
      this.$emit('messageData', this.editor.txt.html())
      this.$message({
          message: '保存成功',
          type: 'success',
          offset:"80"
        });
    }
  },
  beforeDestroy() {
    // 调用销毁 API 对当前编辑器实例进行销毁
    this.editor.destroy()
    this.editor = null
  }
}
</script>

<style lang="scss">
  .home {
    z-index: 1;
    width: 800px;
  margin-top: 100px;
  margin-left: -160px;
    position: relative;
    .btn {
    background:  #666666;
    color: #ffffff;
    margin-top: 10px;
    margin-left: 40%;
      padding: 5px 10px;
      cursor: pointer;
    }
    h3 {
      margin: 30px 0 15px;
    }
  }
</style>