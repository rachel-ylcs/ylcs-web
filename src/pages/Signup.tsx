import { signal } from "@preact/signals";
import Input from "../components/Input";
import useTitle from "../hooks/useTitle";
import toast from "react-hot-toast";
import Link from "../components/Link";
import IconTitleBanner from "../components/IconTitleBanner";

const username = signal("");
const password = signal("");
const passwordAgain = signal("");
const inviterName = signal("");

function doSignup() {
  toast("doSignup");
}

export default function Signup() {
  useTitle("注册");

  return (
    <div className="flex flex-col gap-4 mx-6 h-screen place-content-center">
      <IconTitleBanner />

      <Input type="text" id="username" label="用户名" value={username} />
      <Input type="password" id="password" label="密码" value={password} />
      <Input
        type="password"
        id="password-again"
        label="确认密码"
        value={passwordAgain}
      />
      <Input type="text" id="inviter-id" label="邀请人" value={inviterName} />

      <button
        type="button"
        className="border rounded-lg bg-blue-600 h-8 text-white"
        onClick={doSignup}
      >
        注册
      </button>

      <p>
        已有账号？去<Link href="/login">登录</Link>
      </p>
    </div>
  );
}
