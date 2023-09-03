---
title: 'Formulários com React Hook Form e Zod'
translatedSlug: 'en/forms-with-react-hook-form-and-zod'
date: 2023-08-29
draft: false
tag: React
translatedTag: React
---

Primeiro, precisamos instalar as dependências necessárias:

```js
yarn add react-hook-form @hookform/resolvers zod
```

Agora, fazemos a importação delas:

```js
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
```

Usamos o `z.object(){:js}` para criar um novo schema. O schema contém os campos que compõem o nosso formulário.

```js
const formSchema = z
  .object({
    name: z.string().min(1, 'O campo Nome é obrigatório').max(100),
    email: z.string().min(1, 'O campo E-mail é obrigatório').email('O e-mail é inválido'),
    password: z
      .string()
      .min(1, 'O campo Senha é obrigatório')
      .min(8, 'A senha deve ter no mínimo 8 caracteres'),
    confirmPassword: z.string().min(1, 'O campo Confirmar Senha é obrigatório'),
    terms: z.literal(true, {
      errorMap: () => ({ message: 'Você deve aceitar os termos e condições' }),
    }),
  })
```
Para validar a confirmação de senha, usamos o método `refine(){:js}`, que aceita dois parâmetros: um callback e um objeto.

```js
const formSchema = z
  .object({

    // Resto do código
    ...
  }).refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Senhas não são iguais',
  })
```

Usamos o `z.infer{:js}` para extrair a tipagem do formulário:

```js
type FormSchemaType = z.infer<typeof formSchema>
```

Por último, dentro do componente de formulário, implementamos o React Hook Form passando como `resolver{:js}` o `zodResolver(){:js}`. O `zodResolver(){:js}` recebe como parâmetro o schema criado anteriormente.

```js
export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({

    // Fazendo o uso do zodResolver
    resolver: zodResolver(formSchema),
  })

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    console.log(data)
  }

  // Formulário com React Hook Form
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      ...
    </form>
  )
}
```
