import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime'
import Vue from 'vue' // 引入VUE是为了定义一个号全局过滤器

// dayjs默认语言是英文这里我们把它改成中文
dayjs.locale('zh-cn') // 使引入的中文包全局生效
dayjs.extend(relativeTime)

// 测试一下format('YYYY-MM-DD HH:mm:ss')
const day1 = new Date()
console.log(day1)
console.log(dayjs(day1).format('YYYY-MM-DD HH:mm:ss'))

// console.log(day1.getTime())
// console.log(dayjs().format('DD/MM/YYYY'))

// 相对时间的API
// var day = dayjs('2022-12-13 00:11:50')
// console.log('打印day.js对象')
// console.log(day)
// console.log(dayjs('2022-12-15 00:11:50').isBefore(dayjs('2022-12-15 00:12:50')))
// dayjs().from(dayjs('1990-01-01')) // 31 年后
// dayjs().from(dayjs('1990-01-01'), true) // 31 年
// // console.log(dayjs().fromNow())
// dayjs().to(dayjs('1990-01-01')) // 31 年前
// // console.log(dayjs().toNow())


// console.log(dayjs().format('DD/MM/YYYY HH:mm:ss'))
// console.log(typeof(dayjs().format('DD/MM/YYYY HH:mm:ss')))


// const date1 = dayjs('2019-01-25')
// date1.diff('2018-06-05', 'minute', true) // 

// console.log(dayjs().to("2022-12-12 00:01:00")) // 一天前,精确不到时分秒

// console.log(dayjs().isBefore(dayjs('2022-12-13 00:11:50'))) // 默认毫秒

export const compareTime = (src1,src2) => {
  console.log('进入了时间比较函数')
  return dayjs(src1).isBefore(dayjs(src2))
}

export const switchTime = (date1) => {
  console.log('进入了时间字符串生成函数-----把Date格式的数据转化为时间字符串')
  const src = dayjs(date1).format('YYYY-MM-DD HH:mm:ss')
  return src
}

// console.log('测试switchTime()')
// console.log(switchTime(new Date()))

// console.log('测试比较函数')
// console.log(compareTime('2022-12-18 00:11:50','2022-12-15 00:12:50')||compareTime('2022-12-12 00:11:50','2022-12-15 00:12:50'))

Vue.filter('relativeTime', function (value) { // 定义一个全局过滤器,外部组件可以在模版中直接使用(不需要引入)
  // 返回处理后的值
  return dayjs().to(value)
})
