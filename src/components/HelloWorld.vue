<template>
  <div class="hello">
    <button>测试按钮</button>
  </div>
</template>

<script>
import { getparam } from "@/api/article"
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  async created() {
    let aa = await getparam()

    console.log(aa)
    // console.log(aa.data.age+1)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
