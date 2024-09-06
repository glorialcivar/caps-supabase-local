import { render as rtlRender } from "@testing-library/react";
import { RenderOptions as rtlRenderOptions } from "@testing-library/react";
import { RenderResult } from "@testing-library/react";
import { renderHook as rtlRenderHook } from "@testing-library/react";
import React from "react";
import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";

import Providers from "components/global/Providers/Providers";

interface RenderOptions extends Omit<rtlRenderOptions, "queries"> {}

interface WrapperProps {
  children?: ReactNode;
}

// Wrapper component of the render function
export const Wrapper: React.FC<WrapperProps> = props => {
  const { children } = props;
  const formMethods = useForm();
  return <FormProvider {...formMethods}>{children}</FormProvider>;
};

export const render = (
  ui: React.ReactElement,
  options: RenderOptions = {}
): RenderResult => {
  const { ...returnOptions } = options;

  // Return renderer function with base options set
  return {
    ...rtlRender(ui, {
      wrapper: () => (
        <Providers>
          <Wrapper />
        </Providers>
      ),
      ...returnOptions
    })
  };
};

export const renderHook: typeof rtlRenderHook = (hook, options = {}) => {
  return {
    ...rtlRenderHook(hook, { wrapper: Wrapper, ...options })
  };
};
