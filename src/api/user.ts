import { handleApiError } from "../hooks/apiErrorHandler";
import { baseUrl, type Response as ResponseStruct } from "./base";

export async function login({
  username,
  password,
}: { username: string; password: string }): Promise<string | null> {
  const response = await fetch(`${baseUrl}/user/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: username, pwd: password }),
  });

  if (!response.ok) {
    handleApiError({
      httpCode: response.status,
      businessCode: null,
      businessErrorMessage: null,
    });
    return null;
  }

  const json = (await response.json()) as ResponseStruct;
  if (json.code !== 0) {
    handleApiError({
      httpCode: null,
      businessCode: json.code,
      businessErrorMessage: json.msg ?? null,
    });
    return null;
  }

  return json.data!.token;
}

export async function logout({ token }: { token: string }) {
  const response = await fetch(`${baseUrl}/user/logoff`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  });

  if (!response.ok) {
    handleApiError({
      httpCode: response.status,
      businessCode: null,
      businessErrorMessage: null,
    });
    return;
  }

  const json = (await response.json()) as ResponseStruct;
  if (json.code !== 0) {
    handleApiError({
      httpCode: null,
      businessCode: json.code,
      businessErrorMessage: json.msg ?? null,
    });
    return;
  }
}
