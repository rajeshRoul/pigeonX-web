import { postReqHandler as Handler } from "ServerConnect/utils/handlers";

const postRequests = {
  signUpUser: Handler("/user/create"),
  logInUser: Handler("/user/login"),
  logout: Handler("/user/logout"),
  createPost: Handler("/post/create"),
};

export default postRequests;
