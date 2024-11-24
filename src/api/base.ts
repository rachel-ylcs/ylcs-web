export const baseUrl = "/api";

export interface Response {
  code: number;
  msg?: string;
  data?: Record<string, any>;
}
