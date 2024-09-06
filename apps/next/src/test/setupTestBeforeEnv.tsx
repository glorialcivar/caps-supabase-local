import { cleanup } from "@testing-library/react";
import next from "next";
import { vi } from "vitest";

next({ dev: true });

afterEach(cleanup);

Object.defineProperty(global.window, "scrollTo", { value: vi.fn() });

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn()
  }))
});

vi.mock("next/router", () => ({
  useRouter() {
    return {
      basePath: "",
      pathname: "/",
      route: "/",
      asPath: "/",
      query: {},
      push: vi.fn(),
      replace: vi.fn(),
      reload: vi.fn(),
      back: vi.fn(),
      prefetch: vi.fn(),
      beforePopState: vi.fn(),
      events: {
        on: vi.fn(),
        off: vi.fn(),
        emit: vi.fn()
      },
      isFallback: false
    };
  }
}));

vi.mock("next/navigation", () => ({
  useRouter() {
    return {
      basePath: "",
      pathname: "/",
      route: "/",
      asPath: "/",
      query: {},
      push: vi.fn(),
      replace: vi.fn(),
      reload: vi.fn(),
      back: vi.fn(),
      prefetch: vi.fn(),
      beforePopState: vi.fn(),
      events: {
        on: vi.fn(),
        off: vi.fn(),
        emit: vi.fn()
      },
      isFallback: false
    };
  },
  usePathname() {
    return "/";
  },
  useSearchParams() {
    return new URLSearchParams();
  }
}));

vi.mock("next/image", () => ({
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  }
}));

(window as any).IntersectionObserver = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn()
}));
