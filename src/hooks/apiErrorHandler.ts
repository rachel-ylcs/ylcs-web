import { Toast } from "../utils/toast";

export function handleApiError({
  httpCode,
  businessCode,
  businessErrorMessage,
}: {
  httpCode: number | null;
  businessCode: number | null;
  businessErrorMessage: string | null;
}) {
  if (httpCode) {
    Toast.error(`未知异常：HTTP ${httpCode}`);
    return;
  }

  if (businessCode === 1) {
    Toast.error(
      `权限不足：${businessErrorMessage ?? "没有关于此错误的详细信息"}`,
    );
    return;
  }
  if (businessCode === 2) {
    if (window.localStorage.getItem("token")) {
      Toast.error("登录过期，请重新登录");
      window.localStorage.removeItem("token");
    } else {
      Toast.warn("请先登录");
    }

    window.location.href = "/login";
    return;
  }
  if (businessCode === 3) {
    Toast.error(businessErrorMessage ?? "未知异常");
    return;
  }
  if (businessCode) {
    Toast.error(businessErrorMessage ?? "未知异常");
    return;
  }

  Toast.error("未知异常");
}
