import axiosClient from "config/axios/axiosClient";

const paramsExtractor = (params) => {
  let res = "";
  if (params) {
    if (Array.isArray(params)) {
      res = params.reduce((acc, next) => `${acc}${next}/`, "");
    } else {
      res = "?";
      for (let key in params) {
        res += `${key}=${params[key]}&`;
      }
    }
    return res.slice(0, -1);
  }
  return res;
};

const getReqHandler = (url = "") => {
  return async (payload = {}, params) => {
    const data = await axiosClient.get(
      `${url}${paramsExtractor(params)}`,
      payload
    );
    return data.data ?? { success: false };
  };
};

const postReqHandler = (url = "") => {
  return async (payload = {}, params) => {
    const data = await axiosClient.post(
      `${url}${paramsExtractor(params)}`,
      payload
    );
    return data.data ?? { success: false };
  };
};

const updateReqHandler = (url = "") => {
  return async (payload = {}, params) => {
    const data = await axiosClient.patch(
      `${url}${paramsExtractor(params)}`,
      payload
    );
    return data.data ?? { success: false };
  };
};

const deleteReqHandler = (url = "") => {
  return async (payload = {}, params) => {
    const data = await axiosClient.delete(
      `${url}${paramsExtractor(params)}`,
      payload
    );
    return data.data ?? { success: false };
  };
};

export { getReqHandler, postReqHandler, updateReqHandler, deleteReqHandler };
