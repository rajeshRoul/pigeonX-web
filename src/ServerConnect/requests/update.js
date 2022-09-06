import { updateReqHandler as Handler } from "ServerConnect/utils/handlers";

const updateRequests = {
  userProfile: Handler("/user/profile/"),
};

export default updateRequests;
