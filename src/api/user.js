import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
//  2021 0202 --------------------------
export function Login(data) {
  return request( {
    url: '/v1/test',
    method: 'post',
    data
  })
}

export function Logout(params) {
  return request({
    url: '/v1/test',
    method: 'get',
    params
  })
}
