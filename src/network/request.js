import axios from "axios";

export function request(config) {
  const instance = axios.create({
   baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    return config
  }, err => {
    return err
  })

  // instance.interceptors.response.use(res => {
  //   return res.data
  // }, err => {
  //   console.log(err)
  // })

  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '请求错误'
          break
        case 401:
          err.message = '未授权的访问'
          break
      }
    }
    return err
  })
  return instance(config)
}
