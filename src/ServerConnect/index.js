import deleteRequests from "./requests/delete";
import getRequests from "./requests/get";
import postRequests from "./requests/post";
import updateRequests from "./requests/update";

const Server = {
  get: getRequests,
  post: postRequests,
  update: updateRequests,
  delete: deleteRequests,
};

export default Server;
