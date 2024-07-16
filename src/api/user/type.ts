//定义用户相关数据的ts类型
//用户登录接口携带参数的ts类型
export interface loginFormData {
  username: string
  password: string
}

//定义全部接口返回数据都拥有ts类型
export interface ResponseData {
  code: number
  message: string
  ok: boolean
}
//定义登录接口返回数据类型
export interface loginResponseData extends ResponseData {
  data: string
}

//定义获取用户信息返回数据类型
export interface userInfoResponseData extends ResponseData {
  data: {
    routes: string[]
    buttons: string[]
    roles: string[]
    name: string
    avatar: string
  }
}
//定义用户相关数据的ts类型
//用户登录接口携带参数的ts类型
export interface loginFormMockData {
  username: string
  password: string
}

//定义全部接口返回数据都拥有ts类型
export interface ResponseMockData {
  code: number
  message: string
  ok: boolean
}
interface dataMockType {
  token: string
  message: string
}
//定义登录接口返回数据类型
export interface loginResponseMockData extends ResponseMockData {
  data: dataMockType
}

// 定义获取用户信息返回数据类型
export interface userInfoResponseMockData extends ResponseMockData {
  data: {
    checkUser: userMockInfo
  }
}

interface userMockInfo {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}

interface userMock {
  checkUser: userMockInfo
}

export interface userResponseMockData {
  code: number
  data: userMock
}
