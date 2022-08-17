import axios from "axios";
import { userActions } from "redux/slices/user";
import { store } from "../../redux/store";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = "http://localhost:8000";

axiosClient.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

axiosClient.defaults.timeout = 2000;

axiosClient.defaults.withCredentials = true;

// axios.interceptors.request.use(
//   (config) => {
//     const token = localStorageService.getAccessToken();
//     if (token) {
//       config.headers["Authorization"] = "Bearer " + token;
//     }
//     // config.headers['Content-Type'] = 'application/json';
//     return config;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    // const originalRequest = error.config;
    const { dispatch } = store;
    if (error.response.status === 401) {
      dispatch(userActions.setUserLoggedIn(false));
      dispatch(userActions.setUserData({}));
      return Promise.reject(error);
    }

    // if (error.response.status === 401 && !originalRequest._retry) {
    //   originalRequest._retry = true;
    //   const refreshToken = localStorageService.getRefreshToken();
    //   return axios
    //     .post("/auth/token", {
    //       refresh_token: refreshToken,
    //     })
    //     .then((res) => {
    //       if (res.status === 201) {
    //         localStorageService.setToken(res.data);
    //         axios.defaults.headers.common["Authorization"] =
    //           "Bearer " + localStorageService.getAccessToken();
    //         return axios(originalRequest);
    //       }
    //     });
    // }
    return Promise.reject(error);
  }
);

export default axiosClient;
