"use client"

import { Button } from "@/components/ui/button"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Input } from "@/components/ui/input";
import { PersonIcon } from '@radix-ui/react-icons'
import { useAuthentication } from "@/hooks/useAuth";

const schema = z.object({
  userName: z
    .string()
    .min(1, { message: "Insira o nome do usuário" }),
  password: z
    .string()
    .min(1, { message: "Informe sua senha" })
    .max(100)
})

type ValidationSchema = z.infer<typeof schema>

export default function Home() {


  const { handleLogin } = useAuthentication()

  const { register, handleSubmit, formState: { errors } } = useForm<ValidationSchema>({
    resolver: zodResolver(schema)
  })

  const onSubmit = async (data: ValidationSchema) => {
    await handleLogin(data.userName, data.password)
  }


  return (
    <div className="w-screen h-screen flex flex-col  items-center gap-4  bg-gradient-to-r from-background  to-blue-400 ">
      <div className="flex w-full px-8 py-4">
        <h1 className="text-3xl font-bold text-primary">Painel Gestor</h1>
      </div>
      <div className=" flex w-full flex-col h-full justify-center items-center ">
        <div className="flex items-center gap-2 mb-8">
          <h1 className="font-semibold text-2xl text-primary">Login</h1>
          <PersonIcon />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 backdrop-blur-sm border-black bg-background rounded-xl border-border border-2 w-6/12 md:w-3/12 px-8 py-16" >
          <>
            <div>
              <label className="text-primary" htmlFor="">Usuário: </label>
              <Input
                type='text'
                id='userName'
                placeholder="Insira seu usuário"
                {...register('userName')}
                autoComplete='off'
              />
              {errors.userName && (
                <p className="mt-1 text-xs text-red-400">{errors.userName.message}</p>
              )}
            </div>
            <div>
              <label className="text-primary" htmlFor="">Password: </label>
              <Input
                type='password'
                id='password'
                placeholder="Insira sua senha"
                {...register('password')}
                autoComplete='off'
              />
              {errors.password && (
                <p className="mt-1 text-xs text-red-400">{errors.password.message}</p>
              )}
            </div>

            <Button
              type="submit"
              size='default'
              variant='default'
            >
              <span>
                Acessar
              </span>
            </Button>
          </>
        </form>


      </div>
    </div >
  )
}