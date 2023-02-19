<template>
    <div class="classroom-container">
      <el-row :gutter="12">
  <el-col :span="6" @click.native="btnfn('101')">
    <el-card shadow="hover">
      自习室1
    </el-card>
  </el-col>
  <el-col :span="6" @click.native="btnfn('102')">
    <el-card shadow="hover">
      自习室2
    </el-card>
  </el-col>
  <el-col :span="6" @click.native="btnfn('103')">
    <el-card shadow="hover">
      自习室3
    </el-card>
  </el-col>
  <el-col :span="6" @click.native="btnfn('104')">
    <el-card shadow="hover">
      自习室4
    </el-card>
  </el-col>
</el-row>

<el-row :gutter="12">
  <el-col :span="6" @click.native="btnfn('201')">
    <el-card shadow="hover">
      自习室5
    </el-card>
  </el-col>
  <el-col :span="6" @click.native="btnfn('202')">
    <el-card shadow="hover">
      自习室6
    </el-card>
  </el-col>
  <el-col :span="6" @click.native="btnfn('203')">
    <el-card shadow="hover">
      自习室7
    </el-card>
  </el-col>
  <el-col :span="6" @click.native="btnfn('204')">
    <el-card shadow="hover">
      自习室8
    </el-card>
  </el-col>
</el-row>

<el-row :gutter="12">
  <el-col :span="6" @click.native="btnfn('301')">
    <el-card shadow="hover">
      自习室9
    </el-card>
  </el-col>
  <el-col :span="6" @click.native="btnfn('302')">
    <el-card shadow="hover">
      自习室10
    </el-card>
  </el-col>
  <el-col :span="6" @click.native="btnfn('303')">
    <el-card shadow="hover">
      自习室11
    </el-card>
  </el-col>
  <el-col :span="6" @click.native="btnfn('304')">
    <el-card shadow="hover">
      自习室12
    </el-card>
  </el-col>
</el-row>
    </div>
</template>

<script>
// import { getroom } from "@/api/getroom";

export default {
  name: 'ClassRoom',
  props: {
  },
  // async created() {
  //   const data = await getroom()
  //   console.log("教室列表")
  //   console.log(data)
  // },
  methods: {
    btnfn (id) {
        console.log("触发了点击事件1")
      //  console.log(event.target)
      //  console.log(this.$attrs)
      //  console.log(this.$listeners)
      console.log(id)
      this.$router.push({
        name:'seats',
        params:{
          id
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
</style>