export interface IAuthUserInfo {
    setName: (value: string) => void
    setLogin: (value: string) => void
    setPassword: (value: string) => void
    setConfirmPassword: (value: string) => void
    setEmail: (value: string) => void
    setIsAuth: (value: boolean) => void
}