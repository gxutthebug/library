import request from '@/utils/index.js'

export const seatregister = (id)=> {
    return request({
        method: 'POST',
        url: '/search/register',
        data: `seatid=${id}`,
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
      })
}