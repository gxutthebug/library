import request from '@/utils/index.js'

export const sign = (orderid) => {
    return request({
        method: 'GET',
        url: '/search/signin',
        params:{
            orderid
          }
    })
}


export const getout = (orderid) => {
    return request({
        method: 'GET',
        url: '/search/getout',
        params:{
            orderid
          }
    })
}