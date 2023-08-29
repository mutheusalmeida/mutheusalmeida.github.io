---
title: 'Forms with React Hook Form and Zod'
translatedSlug: 'pt-br/formularios-com-react-hook-form-e-zod'
date: 2023-08-29
draft: false
tag: React
---

First, we need to install the necessary dependencies:

```js
yarn add react-hook-form @hookform/resolvers zod
```

Now, we import them:

```js
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
```

We use `z.object(){:js}` to create a new schema. The schema contains the fields that make up our form.

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
To validate password confirmation, we use the `refine(){:js}` method, which accepts two parameters: a callback and an object.

```js
const formSchema = z
  .object({

    // Rest of the code
    ...
  }).refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  })
```

We use `z.infer{:js}` to extract the form's type:

```js
type FormSchemaType = z.infer<typeof formSchema>
```

Finally, inside the form component, we implement React Hook Form passing `zodResolver(){:js}` to `resolver{:js}`. `zodResolver(){:js}` receives the previously created schema as a parameter.

```js
export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({

    // Making use of zodResolver
    resolver: zodResolver(formSchema),
  })

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    console.log(data)
  }

  // Form using React Hook Form
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      ...
    </form>
  )
}
```
