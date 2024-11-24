import { signal } from "@preact/signals";
import Input from "../components/Input";
import Link from "../components/Link";
import toast from "react-hot-toast";
import Text from "../components/Text";
import useTitle from "../hooks/useTitle";
import IconTitleBanner from "../components/IconTitleBanner";
import Column from "../components/Column";
import Row from "../components/Row";
import PrimaryButton from "../components/PrimaryButton";

const username = signal("");
const password = signal("");

function doLogin() {
  if (!username.value) {
    toast("请输入用户名");
    return;
  }

  if (!password.value) {
    toast("请输入密码");
    return;
  }

  toast(`Login with ${username.value} and ${password.value}`);
}

export default function Login() {
  useTitle("登录");

  return (
    <Column className="gap-4 mx-6 h-screen place-content-center">
      <IconTitleBanner />

      <Input id="username" type="text" label="用户名 / 昵称" value={username} />
      <Input id="password" type="password" label="密码" value={password} />
      <PrimaryButton onClick={doLogin}>登录</PrimaryButton>

      <Row className="flex-wrap justify-between gap-4">
        <Text>
          没有账号？去
          <Link href="/signup">注册</Link>
        </Text>
        <Link href="/reset-password">找回密码</Link>
      </Row>
    </Column>
  );
}
