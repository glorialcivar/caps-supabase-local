const sharedPlugins = [
  "expo-localization",
  "@react-native-google-signin/google-signin",
  "@react-native-firebase/app",
  [
    "expo-build-properties",
    {
      android: {
        compileSdkVersion: 34,
        targetSdkVersion: 34,
        minSdkVersion: 24,
        buildToolsVersion: "34.0.0"
      },
      ios: {
        useFrameworks: "static"
      }
    }
  ]
];

const getPlugins = () => {
  if (process.env.ENV !== "production") {
    return [
      ...sharedPlugins,
      [
        "react-native-fbsdk-next",
        {
          appID: "1012130829620580",
          clientToken: "5a7b3c29813c166765b2801683d5d1c5",
          displayName: "simple_commerce"
        }
      ]
    ];
  }
  return [
    ...sharedPlugins,
    [
      "react-native-fbsdk-next",
      {
        appID: "",
        clientToken: "",
        displayName: ""
      }
    ]
  ];
};

const config = ({ config }) => {
  return {
    ...config,
    android: {
      ...config.android,
      package: "com.trade.expoSimpleCommerce",
      googleServicesFile: "./google-services.json",
      intentFilters: [
        {
          autoVerify: true,
          action: "VIEW",
          data: [
            {
              scheme: "https",
              host: "CHANGEME.page.link",
              pathPrefix: "/reset-password"
            },
            {
              scheme: "https",
              host: "CHANGEME.page.link",
              pathPrefix: "/magic-link"
            }
          ],
          category: ["BROWSABLE", "DEFAULT"]
        }
      ]
    },
    ios: {
      ...config.ios,
      bundleIdentifier: "com.trade.expoSimpleCommerce",
      googleServicesFile: "./GoogleService-Info.plist",
      associatedDomains: ["applinks:CHANGEME.page.link"]
    },
    plugins: getPlugins(),
    extra: {
      ...config.extra
    }
  };
};

// TODO: confirmar que funcione en runtime
export const envs = () => {
  const env = process.env.ENV ?? "develop";

  return {
    develop: {
      mapsApiKey: "AIzaSyD-o9htbV86JDu0mMka5nhz3vuYbBR_oAg"
    },
    production: {
      mapsApiKey: "AIzaSyD-o9htbV86JDu0mMka5nhz3vuYbBR_oAg"
    }
  }[env];
};

export default config;
