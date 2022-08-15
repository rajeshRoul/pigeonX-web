import { getReqHandler as Handler } from "ServerConnect/utils/handlers";

const getRequests = {
  currentUserProfile: Handler("/user/profile"),
};

export default getRequests;
