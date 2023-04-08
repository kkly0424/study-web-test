<template>
  <div class="home">
    <el-row :gutter="10" class="main">
      <el-col :xs="24" :sm="this.$store.state.aside.expandHomeview" class="main-left">
        <div class="left">
          <common-header></common-header>
          <router-view></router-view>
        </div>
      </el-col>
      <el-col :sm="this.$store.state.aside.hiddenAside" class="main-right hidden-sm-and-up">
        <common-aside></common-aside>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import CommonHeader from '@/components/CommonHeader.vue';
import CommonAside from '@/components/CommonAside.vue';
export default {
  name: 'HomeView',
  data() {
    return {
    }
  },
  methods: {

  },
  components: {
    CommonHeader,
    CommonAside
  }
}
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: auto;

  .main {
    background-color: #7C7A80;
  }
}

.el-row {
  height: 100vh;
  width: 100%;
  margin: 0 !important;


  .main-left {
    height: 100vh;
    padding: 0 !important;

    .left {
      .bottom {
        height: calc(100vh - 60px);
        background-color: aquamarine;
      }
    }
  }

  .main-right {
    height: 100%;
    padding: 0 !important;
    background-image: url('../assets/bg/home.jpg');
    background-size: cover;
    background-position: center;
  }
}
</style>
