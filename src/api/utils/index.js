
export default (apiObject,axiosInstance) => {

  const http = {};

  for (let name in apiObject){
    let{url,method,isForm,corsUrl} = apiObject[name];
    http[name] = async(data,config = {}) => {
      //处理请求数据
      let transformData = {};
      if (data&&isForm){
        transformData = new FormData();
        for (let key in data){
          transformData.append(key,data[key]);
        }
      } else {
        transformData = data;
      }

      //处理跨域
      if (corsUrl){
        url = corsUrl+url;
        corsUrl = "";
      }
      //发送请求
      let res = null;
      if (method === "get" || method === "delete"){
        transformData = (typeof transformData) !== "object" ? {} : transformData;
        config.params = (typeof config.params) !== "object" ? {} : config.params;
        let params = Object.assign(transformData,config.params);
        try{
          res = await axiosInstance({url,method,params});
          res = Promise.resolve(res);
        }catch (e) {
          res = Promise.reject(res);
        }
      } else if (method === "post" || method === "put"){
        try{
          res = await axiosInstance({url,method,data:transformData});
          res = Promise.resolve(res);
        }catch (e) {
          res = Promise.reject(res);
        }
      }
      return res;


    };
  }


  return http;
};
