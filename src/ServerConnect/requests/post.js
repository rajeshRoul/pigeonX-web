import { postReqHandler as Handler } from "ServerConnect/utils/handlers";

const postRequests = {
  signUpUser: Handler("/user/create"),
  logInUser: Handler("./user/login"),
};

export default postRequests;
