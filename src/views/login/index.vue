<template>
    <div class="login-container">

        <el-form ref="form" class="aa" label-width="50px">
            <!-- <el-form-item label="密码" >
                <el-input v-model="input" placeholder="请输入密码"></el-input>
            </el-form-item> -->
            <div class="item">
            </div>
            <div class="item">
                <el-form-item label="账号" >
                <el-input v-model="user.stuusername" placeholder="请输入账号" ></el-input>
                </el-form-item>
            </div>

            <div class="item">
                <el-form-item label="密码" >
                <el-input v-model="user.stupassword" placeholder="请输入密码" ></el-input>
                </el-form-item>
            </div>

            <div class="item">
                <el-select v-model="value" placeholder="选择身份"   style="width: 60%; margin-left: 25px;">
    <el-option key="选项1" label="学生" value="学生" >
     
    </el-option>
    <el-option key="选项2" label="管理员"  value="管理员">
    </el-option>
  </el-select>
            </div>

            <div class="item">
              <el-button type="primary" round @click="onSubmit">登录</el-button>
            </div>
  </el-form>

    </div>
</template>

<script>
import { login } from "@/api/login";

export default {
  name: 'seats',
  components: {},
  props: {},
  data () {
    return {
        user: {
          stuusername: '',
          stupassword: '',
        },
        value: ''
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
   async onSubmit() {
        console.log("登录")
        const data = await login(this.user)
        console.log('打印登录信息')
        console.log(data.data)
        if(data.data.meta.status === 200){
          // console.log(data.data.data.data)
          this.$store.commit('setUser', data.data.data.token)
          this.$store.commit('setStudent', data.data.data.data)
          this.$router.back()
        }
      },
      changeValue (e) {
      this.$forceUpdate()
    }
  }
}
</script>


<style scoped lang="less">
.login-container{
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;

    .aa{
        display: flex;
        flex-direction: column;
        background-color:#67C23A;
        border-radius:20px;
        // opacity: 0.6;
        height: 300px;
        width: 200px;
        .item{
            display: flex;
            flex: 1;
           align-items: center;
           justify-content: center;
              /deep/.el-input__inner{
                width:90%;
                height: 30px;
                line-height: 30px;
              }
        }
    }
}
</style>
