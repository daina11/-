<template>
<div><el-backtop   transition-name="fade"  :bottom="50">
    <div
     class="top"
    >
     <i class="iconfont icon-direction-up"></i>
    </div></el-backtop>
    </div>
 
</template>
<script>
export default {
    name: "v-backtop",
    data(){
        return{

        }
    }
}
</script>
<style scoped>
.el-backtop {
    font-size:  20px;
    width: 60px;
    height: 60px;
    line-height: 60px;

}

</style>