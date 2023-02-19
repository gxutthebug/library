import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:8080/' // 基础路径
})


// 请求拦截器
// Add a request interceptor
request.interceptors.request.use(function (config) {
  // Do something before request is sent
  // config ：本次请求的配置对象
  // config 里面有一个属性：headers
 // const { user } = store.state  从store对象中解构出token
  // if (user && user.token) { // 如果token有效将给所有的请求加上
    config.headers.Authorization = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NzA5MTU2NzYsInVzZXJuYW1lIjoieWZtIn0.iFjHZXgLR8tJb4aaOhAn-gqVq7uR6zSsykbK2ontDjw"
    // config.headers.Authorization = 'Bearer {{HM_ACCESS_TOKEN}}' // 上面这个是本来要添加动态获取的TOKEN，但后来接口改变token变成了定值
  // }
  console.log('这是拦截器内打印的请求对象')
  console.log(config)
  return config // 一定要return这个玩意,他的意思是将拦截下来配置好请求发出去
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 响应拦截器

export default request