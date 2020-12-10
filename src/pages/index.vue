<template>
  <div>
    <v-head></v-head>
    <v-banner></v-banner>
    <v-icontent></v-icontent>
    <v-footer></v-footer>
      <v-backtop></v-backtop>
  </div>
</template>
<script>
import vHead from "../components/head"
import vFooter from "../components/footer"
import vIcontent from "../components/index_content"
import vBanner from "../components/banner"
import vBacktop from "../components/backtop"
export default {
  data() {
    return {};
  },
  components: {
    vHead,
    vFooter,
    vIcontent,
    vBanner,
    vBacktop
  }
};
</script>
<style >
</style>