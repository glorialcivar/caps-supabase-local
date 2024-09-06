export declare global {
  interface Window {}
}

declare module "yup" {
  interface StringSchema {}
}

declare global {
  type DB = import("@simple/types").Database;
}
