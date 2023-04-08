import request from '../utils/request'

export function register(data) {
  return request({
    url: '/web/register',
    method: 'post',
    data
  })
}
export function login(data) {
    return request({
      url: '/web/login',
      method: 'post',
      data
    })
  }

