import jwt from "jsonwebtoken";

export const generateAccessToken = (user: any) => {
    const config = useRuntimeConfig();

    return jwt.sign({userId: user.id}, config.jwtAccessSecret, {
        expiresIn: "10m",
    });
};

const generateRefreshToken = (user: any) => {
    const config = useRuntimeConfig();

    return jwt.sign({userId: user.id}, config.jwtRefreshSecret, {
        expiresIn: "4h",
    });
};

export const decodeRefreshToken = (token: any): any => {
    const config = useRuntimeConfig();
    try {
        return jwt.verify(token, config.jwtRefreshSecret);
    } catch (e) {
        return null
    }
}

export const decodeAccessToken = (token: any): any => {
    const config = useRuntimeConfig();
    try {
        return jwt.verify(token, config.jwtAccessSecret);
    } catch (e) {
        return null
    }
}

export const generateTokens = (user: any) => {
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    return {
        accessToken,
        refreshToken,
    };
};

export const sendRefreshToken = (event: any, token: string) => {
    setCookie(event, "refresh_token", token, {
        httpOnly: true,
        sameSite: true,
    });
};
