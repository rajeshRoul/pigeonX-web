import { getReqHandler as Handler } from "ServerConnect/utils/handlers";

const getRequests = {
  getCurrentUserProfile: Handler(""),
};

export default getRequests;
