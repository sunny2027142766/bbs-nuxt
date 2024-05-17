import {getRefreshTokenByToken} from "~/server/db/refreshToken";
import {decodeRefreshToken} from "~/server/utils/jwt";
import {getUserById} from "~/server/db/users";

export default defineEventHandler(async (event) => {
    const refreshToken = getCookie(event, "refresh_token") || ""

    if (!refreshToken) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: "refresh token not exist"
        }))
    }

    // 检查refreshToken是否最新
    const rToken = getRefreshTokenByToken(refreshToken)

    if (!rToken) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: "refresh token invalid"
        }))
    }
    const token = decodeRefreshToken(refreshToken)
    try {
        const user = await getUserById(token?.userId)
        const {accessToken} = generateTokens(user)
        return {
            access_token: accessToken
        }
    } catch (e) {
        return sendError(event, createError({
            statusCode: 500,
            statusMessage: '服务器错误'
        }))
    }
})