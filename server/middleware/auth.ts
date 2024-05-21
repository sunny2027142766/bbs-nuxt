import UrlPattern from "url-pattern";
import {decodeAccessToken} from "~/server/utils/jwt";
import {getUserById} from "~/server/db/users";

export default defineEventHandler(async (event) => {
    const endPoints = [
        '/api/auth/user',
        '/api/user/tweets',
        '/api/tweets'
    ]

    const isWhiteList = endPoints.some(endPoint => new UrlPattern(endPoint).match(event.node.req.url || ''))
    if (!isWhiteList) return

    const token = event.node.req.headers.authorization?.split(' ')[1]
    const decode = decodeAccessToken(token);
    if (!decode) return sendError(event, createError({statusCode: 401, statusMessage: 'token 无效'}))
    try {
        const userId = decode.userId
        const user = await getUserById(userId)
        event.context.auth = {user}
    } catch (e) {
        return
    }
})