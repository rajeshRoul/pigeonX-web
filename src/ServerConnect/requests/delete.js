import { deleteReqHandler as Handler } from "ServerConnect/utils/handlers";

const deleteRequests = {
  post: Handler("/post/"),
  comment: Handler("/comment/"),
};

export default deleteRequests;
