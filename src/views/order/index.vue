<template>
    <div class="order-container">
        <div class="left">
          <el-table
      :data="orderlist"
      style="width: 100%">
      <el-table-column
        prop="stuid"
        label="学号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="starttime"
        label="开始时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="endtime"
        label="结束时间">
      </el-table-column>
    </el-table>
        </div>
        <div class="right">  
           <h6>请选择你的预定时间</h6>
      <el-time-picker
    is-range
    v-model="value1"
    range-separator="至"
    start-placeholder="开始时间"
    end-placeholder="结束时间"
    placeholder="选择时间范围"
    @change="fn">
  </el-time-picker>
  <el-button type="success" round  @click="order">确认预订</el-button>
</div>
      </div>
</template>

<script>
import { postorder } from '@/api/postorder'
import { getorder } from '@/api/getorder'

export default {
  name: 'Order',
  components: {},
  props: {},
  data () {
    return {
      value1: [new Date(), new Date()],
      timepost:{
        seatid:this.$route.params.seatid,
        stuid:this.$store.state.student.stuid,
        createtime:'',
        starttime:'',
        endtime:'',
        status:0
      },
      flag:0,
      orderlist:[]
    }
  },
  computed: {},
  watch: {},
  async created () {
    const data = await getorder(this.$route.params.seatid)
    this.orderlist = data.data
    console.log('打印预定列表')
    console.log(this.orderlist)
  },
  mounted () {},
  methods: {

    fn () {
      console.log('用户选择了时间')


     const src1 = this.$switchTime(this.value1[0])
     const src2 = this.$switchTime(this.value1[1])
     this.timepost.starttime = src1
     this.timepost.endtime = src2
     console.log(this.timepost.starttime,this.timepost.endtime)


      console.log('判断选择的时间区间是否与现有预定时间冲突-----并打印判断结果')
      console.log(this.ifmiddle(src1,src2))
      if (this.ifmiddle(src1,src2)) {
         this.$notify({
          title: '成功',
          message: '所选时间无冲突,可以提交预定',
          type: 'success'
        })
      } else {
        this.$notify({
          title: '警告',
          message: '时间冲突,请重新选择',
          type: 'warning'
        })
      }

    },
    async order () {
      console.log('用户点击确认提交预订')

      this.timepost.createtime = this.$switchTime(new Date())
      console.log(this.timepost)

      if(this.timepost.starttime==="" || this.endtime===""){
        this.$notify({
          title: '警告',
          message: '你没有选择时间,请选择预约时间',
          type: 'warning'
        })
        return 
      }

      const data = await postorder(this.timepost)
      console.log(data)

      if (data.status === 200 ) {
        this.$notify({
          title: '成功',
          message: '恭喜你预定成功',
          type: 'success'
        })
      } else {
        this.$notify({
          title: '警告',
          message: '预定失败,请稍后重试',
          type: 'warning'
        })
      }
    },

    ifmiddle (src1,src2) {
       return this.orderlist.every( item =>{
       return ( this.$compareTime(src2,item.starttime) === true) || (this.$compareTime(item.endtime,src1) === true)
       } )
    }
  }
}
</script>

<style scoped lang="less">
.order-container{
    width: 100%;
    height: 500PX;
    background-color: antiquewhite;
    display: flex;

    .left {
      flex-basis: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .right {
      flex-basis: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
       
      .el-range-editor.el-input__inner {
            margin-top: 30px;
            margin-bottom: 30px;
           }

    }
}
</style>
