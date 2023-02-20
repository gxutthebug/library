import request from '@/utils/index.js'

export const seatback= (id)=> {
    return request({
        method: 'POST',
        url: '/search/reset',
        data: `seatid=${id}`,
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
      })
}