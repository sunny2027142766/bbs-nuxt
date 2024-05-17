import {jwtDecode} from "jwt-decode";

export default () => {

    const useAuthToken = () => useState<string>('auth_token')
    const useAuthUser = () => useState('auth_user')

    const useAuthLoading = () => useState<boolean>('auth_loading', () => true)

    const setToken = (token: string) => {
        const authToken = useAuthToken();
        authToken.value = token
    }

    const setUser = (newUser: any) => {
        const authUser = useAuthUser();
        authUser.value = newUser;
    }

    const setLoading = (loading: boolean) => {
        const authLoading = useAuthLoading();
        authLoading.value = loading;
    }

    const login = async ({username, password}: { username: string, password: string }) => {
        try {
            const data = await $fetch('/api/auth/login', {
                method: 'POST',
                body: {
                    username,
                    password
                }
            });
            setToken(data.access_token)
            setUser(data.user)
            return true
        } catch (e) {
            return Promise.reject(false)
        }

    }

    const refreshToken = async () => {
        try {
            const data = await $fetch('/api/auth/refresh');
            setToken(data.access_token)
            return true
        } catch (e: any) {
            return Promise.reject(e.statusMessage)
        }
    }

    const getUser = async () => {
        try {
            const data = await useFetchApi('/api/auth/user')
            setUser(data.user)
            return true
        } catch (e) {
            return Promise.reject("出错了")
        }
    }

    // 刷新token
    const reRefreshAccessToken = () => {
        const authToken = useAuthToken();
        if (!authToken) {
            return
        }
        const jwt = jwtDecode(authToken.value)
        console.log(jwt)
    }

    const initAuth = async () => {
        setLoading(true)
        try {
            await refreshToken()
            await getUser()
            reRefreshAccessToken()
            return true
        } catch (e) {
            setLoading(false)
            console.log(`%cERROR: %c ${e}`, "color: white; border-radius: 3px 0 0 3px; padding: 2px 2px 1px 10px; background: #FF3030");
        } finally {
            setLoading(false)
        }
    }


    return {
        useAuthUser,
        useAuthToken,
        useAuthLoading,
        login,
        initAuth
    }
}