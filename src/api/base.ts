export const apiBaseUrl = "/api";
export const assetsBaseUrl = "/public";

export interface Response {
  code: number;
  msg?: string;
  data?: Record<string, any>;
}
