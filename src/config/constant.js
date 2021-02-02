// 这里保存着 配置常量
// axios baseURL 
const baseURL = process.env.NODE_ENV === 'production'
  ? '/test'
  : '/test'

export {
  baseURL,
}
