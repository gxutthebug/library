<template>
    <div class="seats-container">
          <div class="box">
        <div class="seat" v-for="(item,index) in list" :key="index" @click="order(item.seatid)">
          <div class="aa"    :class="[item.value===0 ? 'activeClass' :  'errorClass']">
            {{ item.seatid }}
          </div>
        </div>
          </div>
    </div>
</template>

<script>
 import { getseats } from '@/api/getseats'

export default {
  name: 'seats',
  components: {},
  props: {},
  data () {
    return {
      list:[]
    }
  },
  computed: {},
  watch: {},
  async created () {
    console.log('获取座位列表')
    const data = await getseats(this.$route.params.id)
    this.list = data.data
  },
  mounted () {},
  methods: {
    order (seatid) {
      console.log('触发了座位选择点击事件')
      console.log(seatid)
      this.$router.push({
        name:'orders',
        params:{
          seatid,
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.seats-container{
  width: 100%;
  background-color: antiquewhite;
  display: flex;
  justify-content: center;

   .box{
    display: flex;
    flex-wrap:wrap;
    height: 500px;
    width: 90%;
   }
   
  .seat{
    flex-basis: 20%;
    height:100px;
    background-color: aqua;
    display: flex;
    justify-content: center;
    align-items: center;

    .activeClass{
            background-color: green;
        }
        .errorClass{
            background-color: red;
        }

    .aa{
          width: 60%;
          height: 70px;
          display: flex;
          justify-content: center;
          align-items: center;
    }
  }
}

</style>