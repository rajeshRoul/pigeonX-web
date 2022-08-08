import { useState } from "react";

const AuthWrapper = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return <>{isLoggedIn ? { children } : <div></div>}</>;
};

export default AuthWrapper;
