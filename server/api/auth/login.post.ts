import bcrypt from "bcrypt";
import { getUserByUsername } from "~/server/db/users";
import { createRefreshToken } from "~/server/db/refreshToken";
import { generateTokens, sendRefreshToken } from "~/server/utils/jwt";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { username, password } = body;

  if (!username || !password) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "用户名或密码不能为空" })
    );
  }

  // 1. 用户已经注册
  const user = await getUserByUsername(username);
  if (!user) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "该用户不存在" })
    );
  }
  // 2. 比较密码
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "用户名或密码错误" })
    );
  }

  // 3.生成token
  // accessToken
  // refreshToken
  const { accessToken, refreshToken } = generateTokens(user);

  // 存储到db
  await createRefreshToken({
    token: refreshToken,
    userId: user.id,
  });

  // 添加到cookie httpOnly
  sendRefreshToken(event, refreshToken);

  return {
    access_token: accessToken,
    user: user,
  };
});
