<template>
    <div class="manage-contain">

      <el-form ref="form" class="aa" label-width="50px">
            <!-- <el-form-item label="密码" >
                <el-input v-model="input" placeholder="请输入密码"></el-input>
            </el-form-item> -->
            <div class="item">
            </div>
            <div class="item">
                <el-form-item label="学生账号" >
                <el-input v-model="user.username" placeholder="请输入账号" ></el-input>
                </el-form-item>
            </div>

            <div class="item">
                <el-form-item label="新密码" >
                <el-input v-model="user.password" placeholder="请输入密码" ></el-input>
                </el-form-item>
            </div>


            <div class="item">
              <el-button type="primary" round @click="onSubmit">确认更改密码</el-button>
            </div>
  </el-form>
     
    </div>
  </template>
  
  <script>
  import { resetpassword }  from "@/api/resetpassword"
  
  export default {
    name: 'login',
  components: {},
  props: {},
  data () {
    return {
        user: {
          username: '',
          password: '',
        },
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
   async onSubmit() {
        console.log(this.user)
      const data  = await  resetpassword(this.user.username,this.user.password)
      console.log(data)
      alert("修改密码成功")
    
        }
        
      },

      changeValue (e) {
      this.$forceUpdate()
    }
  
   
  }
  </script>
  
  <style  scoped lang="less">

  .manage-contain{
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;

    .aa{
        display: flex;
        flex-direction: column;
        background-color:#febee3;
        border-radius:50px;
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
  