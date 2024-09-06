import { useEffect } from "react";

import useAuth from "hooks/useAuth/useAuth";

const useListenAuth = () => {
  const { listenAuthState } = useAuth();

  useEffect(() => {
    return listenAuthState();
  }, [listenAuthState]);
};

export default useListenAuth;
