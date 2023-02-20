<template>
<el-container><el-main> 
      <el-tabs tab-position="left" style="height: 200px;">
    <el-tab-pane label="用户管理">
      <el-descriptions title="用户信息">
    <el-descriptions-item label="学生姓名">{{ $store.state.student.stuusername }}</el-descriptions-item>
    <el-descriptions-item label="学号">{{ $store.state.student.stuid }}</el-descriptions-item>
    <el-descriptions-item label="性别">{{ $store.state.student.stusex }}</el-descriptions-item>
    <el-descriptions-item label="班级">
      <el-tag size="small">{{ $store.state.student.stuclass }}</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="学院">{{ $store.state.student.stucollege }}</el-descriptions-item>
</el-descriptions>
    </el-tab-pane>
    <el-tab-pane label="教室空位查看" @click="checkroom">
      <ClassRoom @click.native="testfn"  ID="yfm" class="abc"></ClassRoom>
    </el-tab-pane>
    <el-tab-pane label="我的预定信息">
      <el-table
    :data="myorders"
    :border="true"
    style="width: 100%">
    <el-table-column
      fixed
      prop="orderid"
      label="订单号"
      width="150">
    </el-table-column>
    <el-table-column
      prop="seatid"
      label="地点"
      width="150">
    </el-table-column>
    <el-table-column
      prop="starttime"
      label="开始时间"
      width="270">
    </el-table-column>
    <el-table-column
      prop="endtime"
      label="结束时间"
      width="270">
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态"
      width="180">
    </el-table-column>

    <el-table-column
      fixed="right"
      label="操作"
      width="150">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">签到</el-button>
        <el-button    @click="handleClick2(scope.row)" type="text" size="small">签退</el-button>
      </template>
    </el-table-column>
  </el-table>
    </el-tab-pane>
    <el-tab-pane label="待开发">

    </el-tab-pane>
    <el-tab-pane label="待开发">

    </el-tab-pane>
    </el-tabs>
    </el-main>
    </el-container>
</template>



<script>
import  ClassRoom  from "@/components/classroom";
import { getmyorder } from "@/api/getmyorder"
import { sign , getout } from "@/api/update"
import { seatregister } from "@/api/seatregister";
import { seatback } from "@/api/seatback";

export default {
  name: 'Tabs',
  components: {
    ClassRoom,
  },
  props: {},
  data () {
    return {
       myorders:[]
    }
  },
  computed: {},
  watch: {},
  async created () {
    const data = await getmyorder(this.$store.state.student.stuid)
    console.log('我的订单列表')
    this.myorders = data.data
    console.log(this.myorders)
  },
  mounted () {},
  methods: {
    checkroom () {
      console.log("查询所有教室")
    },

    testfn (event) {
      console.log("触发了点击事件2")
      console.log(event.target)
    },

    async handleClick(row) {
      console.log("我点了签到")
       const data = await sign(row.orderid)
       if (data.status === 200) {
       console.log(row.seatid)
       const data = await seatregister(row.seatid)
       console.log("aaa")
       console.log(data)
       console.log('签到成功')

       // 更新视图
       const data2 = await getmyorder(this.$store.state.student.stuid)
       console.log('我的订单列表')
       this.myorders = data2.data
       }
      },

    async handleClick2(row) {
      console.log("我点了签退")
        const data = await getout(row.orderid)
        if (data.status === 200) {
          console.log(row.seatid)
          const data = await seatback(row.seatid)
          console.log("aaa")
          console.log(data)
          console.log('签退成功')

           // 更新视图
       const data2 = await getmyorder(this.$store.state.student.stuid)
       console.log('我的订单列表')
       this.myorders = data2.data
       }
      }
  }
  // mixins: [mixobj1]
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
