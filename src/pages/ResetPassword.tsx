import { signal } from "@preact/signals";
import IconTitleBanner from "../components/IconTitleBanner";
import useTitle from "../hooks/useTitle";
import Input from "../components/Input";
import toast from "react-hot-toast";
import Link from "../components/Link";

const username = signal();
const newPassword = signal();
const newPasswordAgain = signal();

function doResetPassword() {
  toast("doResetPassword");
}

export default function ResetPassword() {
  useTitle("找回密码");

  return (
    <div className="flex flex-col gap-4 mx-6 h-screen place-content-center">
      <IconTitleBanner />

      <Input type="text" id="username" label="用户名" value={username} />
      <Input
        type="password"
        id="new-password"
        label="新密码"
        value={newPassword}
      />
      <Input
        type="password"
        id="new-password-again"
        label="确认新密码"
        value={newPasswordAgain}
      />

      <button
        type="button"
        className="border rounded-lg bg-blue-600 h-8 text-white"
        onClick={doResetPassword}
      >
        提交申请
      </button>

      <div className="flex justify-end">
        <Link href="/login">返回登录</Link>
      </div>
    </div>
  );
}
