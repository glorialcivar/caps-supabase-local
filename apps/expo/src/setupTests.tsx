import "@testing-library/jest-native/extend-expect";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { cleanup, render as rtlRender } from "@testing-library/react-native";
import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import React, { ReactNode } from "react";
import { View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Providers from "containers/Providers/Providers";
import { defaultTheme } from "stores/theme/theme.store.helpers";
import themes from "styles/theme";

beforeAll(() => {
  EStyleSheet.build(defaultTheme);
  dayjs.extend(isoWeek);
});

afterEach(cleanup);

type RTLRenderOptions = NonNullable<Parameters<typeof rtlRender>[1]>;

interface RenderOptions extends Omit<RTLRenderOptions, "queries"> {
  // Styles theme
  theme?: typeof themes.light;
}

interface WrapperProps {
  children?: ReactNode;
}

const Stack = createStackNavigator();

export const render = (ui: React.ReactElement, options: RenderOptions = {}) => {
  const { ...returnOptions } = options;

  // Wrapper component of the render function
  const Wrapper: React.FC<WrapperProps> = props => {
    const { children } = props;
    const Screen = () => <View>{children}</View>;
    return (
      <SafeAreaProvider
        initialMetrics={{
          frame: { x: 0, y: 0, width: 0, height: 0 },
          insets: { top: 0, left: 0, right: 0, bottom: 0 }
        }}
      >
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Screen}
              options={{ animationEnabled: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  };
  // Return renderer function with base options set
  return {
    ...appRender(ui, { wrapper: Wrapper, ...returnOptions })
  };
};

export const appRender = (
  ui: React.ReactElement,
  options: RenderOptions = {}
) => {
  const { wrapper, ...returnOptions } = options;
  // Wrapper component of the render function
  const Wrapper: React.FC<WrapperProps> = props => {
    const { children } = props;
    const InnerWrapper = wrapper ? wrapper : (props: any) => props.children;
    return (
      <Providers>
        <InnerWrapper>{children}</InnerWrapper>
      </Providers>
    );
  };
  // Return renderer function with base options set
  return {
    ...rtlRender(ui, { wrapper: Wrapper, ...returnOptions })
  };
};

// re-export everything
export * from "@testing-library/react-native";

interface Cases {
  [key: string]: string | number | boolean | undefined | null;
}

export const casify = (cases: Cases) => {
  return Object.entries(cases).map(([caseTitle, testValue], index: number) => {
    return {
      name: `${index + 1}. ${caseTitle} - ${testValue}`,
      testValue
    };
  });
};
