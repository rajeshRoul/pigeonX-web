import { getReqHandler as Handler } from "ServerConnect/utils/handlers";

const getRequests = {
  currentUserProfile: Handler("/user/profile"),
  allPosts: Handler("/post/getAll"),
};

export default getRequests;
