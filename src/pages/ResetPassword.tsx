import { signal } from "@preact/signals";
import IconTitleBanner from "../components/IconTitleBanner";
import useTitle from "../hooks/useTitle";
import Input from "../components/Input";
import InternalLink from "../components/InternalLink";
import Row from "../components/Row";
import Column from "../components/Column";
import PrimaryButton from "../components/PrimaryButton";
import { Toast } from "../utils/toast";

const username = signal();
const newPassword = signal();
const newPasswordAgain = signal();

function doResetPassword() {
  if (!username.value) {
    Toast.warn("请输入用户名");
    return;
  }

  if (!newPassword.value) {
    Toast.warn("请输入新密码");
    return;
  }

  if (!newPasswordAgain.value) {
    Toast.warn("请再次输入新密码");
    return;
  }

  if (newPassword.value !== newPasswordAgain.value) {
    Toast.warn("两次输入的密码不一致");
    return;
  }

  Toast.success(
    `ResetPassword with ${username.value} and ${newPassword.value}`,
  );
}

export default function ResetPassword() {
  useTitle("找回密码");

  return (
    <Column className="gap-4 mx-6 h-screen place-content-center">
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

      <PrimaryButton onClick={doResetPassword}>提交申请</PrimaryButton>

      <Row className="justify-end">
        <InternalLink href="/login">返回登录</InternalLink>
      </Row>
    </Column>
  );
}
