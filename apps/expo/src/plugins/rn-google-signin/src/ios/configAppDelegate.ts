import { ConfigPlugin } from "@expo/config-plugins";
import { IOSConfig, withDangerousMod } from "@expo/config-plugins";
import { mergeContents } from "@expo/config-plugins/build/utils/generateCode";
import fs from "fs";

const methodInvocationBlock = `  if ([RNGoogleSignin application:application openURL:url options:options]) {
  return YES;
}`;
// https://regex101.com/r/mPgaq6/1
const methodInvocationLineMatcher = /(?:(UIApplicationOpenURLOptionsKey,id))/g;

export function modifyObjcAppDelegate(contents: string): string {
  // Add import
  if (!contents.includes("#import <RNGoogleSignin/RNGoogleSignin.h>")) {
    contents = contents.replace(
      /#import "AppDelegate.h"/g,
      `#import "AppDelegate.h"
      #import <RNGoogleSignin/RNGoogleSignin.h>`
    );
  }

  // Add invocation
  try {
    return mergeContents({
      tag: "@react-native-google-signin/google-signin",
      src: contents,
      newSrc: methodInvocationBlock,
      anchor: methodInvocationLineMatcher,
      offset: 1, // new line will be inserted right above matched anchor
      comment: "//"
    }).contents;
  } catch (e) {
    throw new Error(`Cannot add FB linking lines. ${e.message}`);
  }
}

export const withGoogleSignInSDKAppDelegate: ConfigPlugin = config => {
  return withDangerousMod(config, [
    "ios",
    async config => {
      const fileInfo = IOSConfig.Paths.getAppDelegate(
        config.modRequest.projectRoot
      );
      let contents = await fs.promises.readFile(fileInfo.path, "utf-8");
      if (fileInfo.language === "objc") {
        contents = modifyObjcAppDelegate(contents);
      } else {
        // TODO: Support Swift
        throw new Error(
          `Cannot add Google SignIn SDK code to AppDelegate of language "${fileInfo.language}"`
        );
      }
      await fs.promises.writeFile(fileInfo.path, contents);

      return config;
    }
  ]);
};
