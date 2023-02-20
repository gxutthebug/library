import request from '@/utils/index.js'

export const resetpassword= (id,password)=> {
    return request({
        method: 'POST',
        url: '/resetpassword',
        data: `id=${id}&newpassword=${password}`,
        headers: {
             'content-type': 'application/x-www-form-urlencoded',
             "Authorization":"eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFM1MTIifQ.eyJzdWIiOiJtcmxpIiwiaWF0IjoxNjc2ODkyMTUwLCJleHAiOjE2Nzc0OTY5NTB9.xpixNZQfF2CDaOSIeOu7WOHr98cF8Dati-eGllzWf3vUJZufcrmu8_MJx9fwp_1vSw3nLarhM1mlCoWKnLr4rA"
             },
      })
}