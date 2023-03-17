export interface ILoginForm {
    setLogin: (value: string) => void
    setPassword: (value: string) => void
    setIsAuth: (value: boolean) => void
    submitFormData: (e: { preventDefault: () => void }, formType: string ) => void
}