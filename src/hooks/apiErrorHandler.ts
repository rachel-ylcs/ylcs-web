import { Toast } from "../utils/toast";
import type { Response as ResponseStruct } from "../api/base";

export async function handleApiError<TResponse>(
  response: Response,
): Promise<TResponse | null> {
  if (!response.ok) {
    const httpCode = response.status;
    Toast.error(`未知异常：HTTP ${httpCode}`);
    return null;
  }

  const jsonData = (await response.json()) as ResponseStruct;
  const businessCode = jsonData.code;
  const businessMessage = jsonData.msg ?? null;

  if (businessCode === 0) {
    return jsonData.data as TResponse;
  }
  if (businessCode === 1) {
    Toast.error(`权限不足：${businessMessage ?? "没有关于此错误的详细信息"}`);
    return null;
  }
  if (businessCode === 2) {
    if (window.localStorage.getItem("token")) {
      Toast.error("登录过期，请重新登录");
      window.localStorage.removeItem("token");
    } else {
      Toast.warn("请先登录");
    }

    window.location.href = "/login";
    return null;
  }

  Toast.error("未知异常");
  return null;
}
