import * as React from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";

export default function Home() {
  return (
    <Stack
      height="100lvh"
      justifyContent="center"
      alignItems="center"
      gap="32px"
    >
      <Typography id="login_heading" variant="h1" fontSize="1.5rem">
        ログインフォーム
      </Typography>
      <Stack
        component="form"
        width={560}
        gap="24px"
        aria-labelledby="login_heading"
      >
        <TextField label="メールアドレス" />
        <TextField label="パスワード" />
        <Button variant="contained">ログイン</Button>
      </Stack>
    </Stack>
  );
}
