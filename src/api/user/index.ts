//统一管理咱们项目用户相关的接口
import request from '@/utils/request'
import type {
  loginFormData,
  loginFormMockData,
  loginResponseData,
  loginResponseMockData,
  userInfoResponseData,
  userInfoResponseMockData,
} from './type'
// Mock 版本的 Url 地址
enum MOCK_API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
  LOGOUT_URL = '/user/logout',
}

// 尚硅谷提供 Url
enum API {
  LOGIN_URL = '/admin/acl/index/login',
  USERINFO_URL = '/admin/acl/index/info',
  LOGOUT_URL = '/admin/acl/index/logout',
}
//登录接口
export const reqMockLogin = (data: loginFormMockData) =>
  request.post<any, loginResponseMockData>(MOCK_API.LOGIN_URL, data)
//获取用户信息
export const reqMockUserInfo = () =>
  request.get<any, userInfoResponseMockData>(MOCK_API.USERINFO_URL)

export const reqMockLogout = () => request.post<any, any>(MOCK_API.LOGOUT_URL)

export const reqLogin = (data: loginFormData) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data)

export const reqUserInfo = () =>
  request.get<any, userInfoResponseData>(API.USERINFO_URL)

export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL)
