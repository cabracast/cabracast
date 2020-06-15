import * as Yup from "yup"

const mainFormSchema = Yup.object().shape({
  title: Yup.string("O título precisa ser uma palavra")
    .min(3, "O título precisa ter no mínimo 3 caracteres")
    .max(10, "O título precisa ter no máximo 10 caracteres"),
})

export { mainFormSchema }
