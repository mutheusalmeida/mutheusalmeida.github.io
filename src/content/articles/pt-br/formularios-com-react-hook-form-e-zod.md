---
title: 'Formulários com React Hook Form e Zod'
translatedSlug: 'en/forms-with-react-hook-form-and-zod'
date: 2023-08-15
draft: true
tag: React
---

Primeiro, precisamos instalar as dependências necessárias:

```js
yarn add react-hook-form @hookform/resolvers zod
```

Agora, fazemos a importação deles:

```js
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
```

Usamos o `z.object(){:js}` para criar um novo schema. O schema é criado com os campos que compõem o nosso formulário.

```js
const formSchema = z
  .object({
    name: z.string().min(1, 'Name is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have at least 8 characters'),
    confirmPassword: z.string().min(1, 'Password confirmation is required'),
    terms: z.literal(true, {
      errorMap: () => ({ message: 'You must accept the terms and conditions' }),
    }),
  })
```
Para validar a confirmação de senha, usamos o metodo `refine(){:js}`, que aceita dois paramentros, um callback e um objeto.

```js
const formSchema = z
  .object({
    // resto do código
  }).refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  })
```

Usamos o `z.infer{:js}` para inferir a typagem do formulário:

```js
type FormSchemaType = z.infer<typeof formSchema>
```

Dentro do componente de formulário, implementamos o React Hook Form, passando como `resolver{:js}` o schema criado anteriormente.

```js
export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    {/* fazendo o uso do zodResolver */}
    
    resolver: zodResolver(formSchema),
  })

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    console.log(data)
  }

  return (
    {/* uso do patter de composição */}

    <Form.Root onSubmit={handleSubmit(onSubmit)}>
      <Form.InputRoot>
        <UserIcon />

        <Form.Input
          id="name"
          type="name"
          placeholder="Name"
          disabled={isSubmitting}
          {...register('name')}
        />
      </Form.InputRoot>

      {errors.name && <Form.Error>{errors.name.message}</Form.Error>}

      <Form.InputRoot>
        <EmailIcon />

        <Form.Input
          id="signup-email"
          type="email"
          placeholder="Email"
          disabled={isSubmitting}
          {...register('email')}
        />
      </Form.InputRoot>

      {errors.email && <Form.Error>{errors.email.message}</Form.Error>}

      <Form.InputRoot>
        <LockerIcon />

        {/* uso do pattern "render props" */}

        <FormPassword>
          {({ isVisible }) => (
            <Form.Input
              id="password"
              type={isVisible ? 'text' : 'password'}
              placeholder="Password"
              disabled={isSubmitting}
              {...register('password')}
            />
          )}
        </FormPassword>
      </Form.InputRoot>

      {errors.password && <Form.Error>{errors.password.message}</Form.Error>}

      <Form.InputRoot>
        <LockerIcon />

        {/* uso do pattern "render props" */}

        <FormPassword>
          {({ isVisible }) => (
            <Form.Input
              id="confirmPassword"
              type={isVisible ? 'text' : 'password'}
              placeholder="Confirm password"
              disabled={isSubmitting}
              {...register('confirmPassword')}
            />
          )}
        </FormPassword>
      </Form.InputRoot>

      {errors.confirmPassword && (
        <Form.Error>{errors.confirmPassword.message}</Form.Error>
      )}

      <S.TermsWrapper>
        <S.Checkbox>
          <input
            id="terms"
            aria-describedby="terms"
            type="checkbox"
            disabled={isSubmitting}
            {...register('terms')}
          />
        </S.Checkbox>

        <S.Terms htmlFor="terms">
          I have read and accept the{' '}
          <span>Privacy Policy and Terms of User Sign up.</span>
        </S.Terms>
      </S.TermsWrapper>

      {errors.terms && <Form.Error>{errors.terms.message}</Form.Error>}

      <Form.Button disabled={isSubmitting}>Sign up</Form.Button>
    </Form.Root>
  )
}
```
