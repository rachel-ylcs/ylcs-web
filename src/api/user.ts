import { handleApiError } from "../hooks/apiErrorHandler";
import { apiBaseUrl } from "./base";

export async function login({
  username,
  password,
}: { username: string; password: string }): Promise<string | null> {
  const response = await fetch(`${apiBaseUrl}/user/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: username, pwd: password }),
  });

  const jsonData = await handleApiError<{ token: string }>(response);
  if (!jsonData) {
    return null;
  }

  return jsonData.token;
}

export async function logout({ token }: { token: string }) {
  const response = await fetch(`${apiBaseUrl}/user/logoff`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  });

  await handleApiError(response);
}
