export const timestampToMinTime = (timestamp) => {
  if (!timestamp) {
    return "0s";
  }
  const givenDate = new Date(timestamp);
  if (!givenDate) {
    return "-";
  }
  const currentDate = new Date();
  const diffInSeconds = (currentDate - givenDate) / 1000;
  let time = "";
  if (diffInSeconds < 60) {
    return `${diffInSeconds}s`;
  }
  if (diffInSeconds < 3600) {
    time = Math.round(diffInSeconds / 60);
    return `${time}m`;
  }
  if (diffInSeconds < 86400) {
    time = Math.round(diffInSeconds / 3600);
    return `${time}h`;
  }
  if (diffInSeconds < 604800) {
    time = Math.round(diffInSeconds / 86400);
    return `${time}d`;
  }
  if (diffInSeconds < 2419200) {
    time = Math.round(diffInSeconds / 604800);
    return `${time} ${time > 1 ? "weeks" : "week"}`;
  }
  if (currentDate.getFullYear() === givenDate.getFullYear()) {
    return `${currentDate.getMonth() - givenDate.getMonth()} months`;
  }
  return `${currentDate.getFullYear() - givenDate.getFullYear()} years`;
};
