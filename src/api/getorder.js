import request from '@/utils/index.js'

export const getorder = (seatid) => {
       return request({
        method: 'GET',
        url: 'search/orders',
        params:{
            seatid
          }
       })
}