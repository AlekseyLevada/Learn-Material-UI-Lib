export interface ISignUpForm {
    setName: (value: string) => void
    setLogin: (value: string) => void
    setPassword: (value: string) => void
    setConfirmPassword: (value: string) => void
    setEmail: (value: string) => void
    submitFormData: (e: { preventDefault: () => void }, formType: string) => void
}