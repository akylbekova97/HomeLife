export interface SignUpDatatypes {
  userName: string
  email: string
  phone: string
  password: string
  wholesale: boolean
}

export interface SingUpTypes {
  onSubmit: (data: SignUpDatatypes) => void
}

export interface ErrorTypes {
  nameError: string | null
  emailError: string | null
  phoneError: string | null
  passwordError: string | null
}
