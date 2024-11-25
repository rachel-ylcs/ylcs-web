import { apiBaseUrl } from "../api/base";
import { handleApiError } from "../hooks/apiErrorHandler";

export interface FetcherArgs<TRequest> {
  endpoint: string;
  body: TRequest;
}

export default async function fetcher<TRequest>({
  endpoint,
  body,
}: FetcherArgs<TRequest>) {
  const token = window.localStorage.getItem("token");
  if (token) {
    body = { ...body, token };
  }

  const response = await fetch(`${apiBaseUrl}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const jsonData = await handleApiError(response);
  if (!jsonData) {
    throw Error;
  }

  return jsonData;
}
