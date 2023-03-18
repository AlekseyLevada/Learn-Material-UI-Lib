export interface ILoginForm {
    setLogin: (value: string) => void
    setPassword: (value: string) => void
    submitFormData: (e: { preventDefault: () => void }, formType: string ) => void
}