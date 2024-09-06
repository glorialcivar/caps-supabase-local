// Hook that listens the email link signed in user
import dynamicLinks from "@react-native-firebase/dynamic-links";
import { FirebaseDynamicLinksTypes } from "@react-native-firebase/dynamic-links";
import { useCallback, useEffect, useRef } from "react";

export const useDynamicLinkListener = () => {
  const urlRef = useRef<string>();

  const handleDynamicLink = useCallback(
    async (link: FirebaseDynamicLinksTypes.DynamicLink | null) => {
      const { url: linkUrl } = link ?? {};
      if (linkUrl) urlRef.current = linkUrl;
      const url = urlRef.current;
      if (!url) return;
      console.log(url);
    },
    []
  );

  useEffect(() => {
    const subscriber = dynamicLinks().onLink(handleDynamicLink);
    dynamicLinks().getInitialLink().then(handleDynamicLink);
    return subscriber;
  }, [handleDynamicLink]);
};
