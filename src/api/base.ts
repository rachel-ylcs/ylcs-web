export const apiBaseUrl = "/api";
export const assetsBaseUrl = "/public";

export type EmptyRequestType = Record<string, never>;

export interface Response {
  code: number;
  msg?: string;
  data?: Record<string, any>;
}
