import "@testing-library/jest-dom/extend-expect";
import "jest-axe/extend-expect";

import { render as rtlRender } from "@testing-library/react";
import { RenderOptions as rtlRenderOptions } from "@testing-library/react";
import React from "react";

interface RenderOptions extends Omit<rtlRenderOptions, "queries"> {}

export const render = (ui: React.ReactElement, options: RenderOptions = {}) => {
  // Return renderer function with base options set
  return {
    ...rtlRender(ui, { ...options })
  };
};

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

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});

(window as any).IntersectionObserver = jest.fn(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn()
}));

Object.defineProperty(global.window, "scrollTo", { value: jest.fn() });
