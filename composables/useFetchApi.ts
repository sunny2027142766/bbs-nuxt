export default (url: string, options: any = {}) => {

    const {useAuthToken} = useAuth();

    return $fetch<any>(url, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${useAuthToken().value}` // 添加token
        }
    })

}