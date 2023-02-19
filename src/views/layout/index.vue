<template>
    <div class="layout-container">
      <el-container>
  <el-header>
     <el-row :gutter="5">
  <el-col :span="6"> <i class="el-icon-notebook-2 book"></i></el-col>
  <el-col :span="7" :offset="4"> <span class="title">图书馆座位预定</span></el-col>
  <el-col :span="4" :offset="3"> 
    <el-button type="primary" round @click="outlogin" v-if="$store.state.user">退出登录</el-button>
    <el-button type="primary" round  @click="login" v-else>用户登录</el-button>
  </el-col>
</el-row>
  </el-header>


  <router-view/>
  <!-- <el-container><el-main> 
      <el-tabs tab-position="left" style="height: 200px;">
    <el-tab-pane label="用户管理"></el-tab-pane>
    <el-tab-pane label="教室空位查看"></el-tab-pane>
    <el-tab-pane label="角色管理"></el-tab-pane>
    <el-tab-pane label="定时任务"></el-tab-pane>
    <el-tab-pane label="定时任务"></el-tab-pane>
    </el-tabs>
    </el-main></el-container> -->
   
  <el-footer>footers</el-footer>
</el-container>
   </div>
</template>

<script>

export default {
  name: 'LayoutPage',
  components: {
  },
  props: {},
  data () {
    return {

    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    login () {
      this.$router.push({
        name:'login',
      })
    },
    outlogin () {
      this.$store.commit('setUser', '')
      this.$store.commit('setStudent', {})
      this.$router.push({
        name:'login',
      })
    }
  }
}
</script>

<style scoped lang="less">
//注释掉的是自带的
.el-header {
    // padding: 0 20px;
    // box-sizing: border-box; 盒子不会被内外边距撑开
    // flex-shrink: 0;
    display: flex;
    background-color: #e2f8d7;
}

.el-row {
  width: 100%;
  height: 100%;
}

.book{
  font-size: 40px;
  color: #68C23A;
  margin-top: 10px;
  // margin-left: 15px;
}

/deep/.el-col-7 {
    // width: 29.16667%;
    margin-top: 20px;
    color: red;
}

.el-col-4 {
    width: 16.66667%;
    margin-top: 10px;
    font-size: 12px;
}

.el-footer{
  background-color: #68C23A;
}

/deep/.el-tabs--left .el-tabs__header.is-left {
    // float: left;
    // margin-bottom: 0;
    // margin-right: 10px;
    transform: translate(-20px);
}
</style>
