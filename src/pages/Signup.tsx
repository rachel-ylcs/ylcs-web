import { signal } from "@preact/signals";
import Input from "../components/Input";
import useTitle from "../hooks/useTitle";
import Link from "../components/Link";
import IconTitleBanner from "../components/IconTitleBanner";
import Column from "../components/Column";
import Text from "../components/Text";
import PrimaryButton from "../components/PrimaryButton";
import Notice from "../components/Notice";
import { Toast } from "../utils/toast";

const username = signal("");
const password = signal("");
const passwordAgain = signal("");
const inviterName = signal("");

function doSignup() {
  if (!username.value) {
    Toast.warn("请输入用户名");
    return;
  }

  if (!password.value) {
    Toast.warn("请输入密码");
    return;
  }

  if (!passwordAgain.value) {
    Toast.warn("请再次输入密码");
    return;
  }

  if (password.value !== passwordAgain.value) {
    Toast.warn("两次输入的密码不一致");
    return;
  }

  if (!passwordAgain.value) {
    Toast.warn("请输入邀请人");
    return;
  }

  Toast.success(
    `Signup with ${username.value} and ${password.value} and ${inviterName.value}`,
  );
}

export default function Signup() {
  useTitle("注册");

  return (
    <Column className="gap-4 mx-6 h-screen place-content-center">
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
      <Notice>可以在群内捉管理邀请你哦～</Notice>

      <PrimaryButton onClick={doSignup}>注册</PrimaryButton>

      <Text>
        已有账号？去<Link href="/login">登录</Link>
      </Text>
    </Column>
  );
}
