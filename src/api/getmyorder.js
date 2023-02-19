import request from '@/utils/index.js'


export const getmyorder = (stuid) => {
    return request({
        method: 'GET',
        url: 'search/myorders',
        params:{
            stuid
          }
    })
}