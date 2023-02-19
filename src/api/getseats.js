import request from '@/utils/index.js'

export const getseats = (id) => {
    return request({
        method: 'GET',
        url: '/search/seat',
        params:{
          id
        }
        // params // 相当于params:params,我们传进来的参数直接就是一个对象（看接口文档可知该接口参数是几个查询参数，直接用一个对象装）
      })
}