import { signal } from "@preact/signals";
import Input from "../components/Input";
import favicon from "/favicon.webp?url";
import title from "/title.webp?url";
import Link from "../components/Link";
import PageWrapper from "../components/PageWrapper";
import toast from "react-hot-toast";
import useTitle from "../hooks/useTitle";
import IconTitleBanner from "../components/IconTitleBanner";

const username = signal("");
const password = signal("");

function doLogin() {
  toast("doLogin");
}

export default function Login() {
  useTitle("登录");

  return (
    <div className="flex flex-col gap-4 mx-6 h-screen place-content-center">
      <IconTitleBanner />

      <Input id="username" type="text" label="用户名 / 昵称" value={username} />
      <Input id="password" type="password" label="密码" value={password} />
      <button
        type="button"
        className="border rounded-lg bg-blue-600 h-8 text-white"
        onClick={doLogin}
      >
        登录
      </button>

      <div className="flex flex-wrap gap-4 justify-between">
        <p>
          没有账号？去
          <Link href="/signup">注册</Link>
        </p>
        <Link href="/reset-password">找回密码</Link>
      </div>
    </div>
  );
}
