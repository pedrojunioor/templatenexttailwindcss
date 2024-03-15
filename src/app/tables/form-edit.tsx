"use client"

import { Button } from "@/components/ui/button"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Input } from "@/components/ui/input";

const schema = z.object({
  amount: z
    .number(),
  email: z
    .string()
    .email({ message: "O email não está no formato correto" })
    .min(1, { message: "Insira o e-mail" }),
  status: z
    .string()
    .min(1)
})

type ValidationSchema = z.infer<typeof schema>

import { Payment } from "./colums"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { useState, useEffect } from "react"
// import { useEffect, useState } from "react"

type FormEditProps = {
  data: Payment
}

type optionsStatus = "pending" | "processing" | "success" | "failed"

export default function FormEdit({ data }: FormEditProps) {

  const options: optionsStatus[] = ["pending", "processing", "success", "failed"]

  const { register, handleSubmit, watch, formState: { errors } } = useForm<ValidationSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      amount: data.amount,
      email: data.email,
      status: data.status
    }
  })

  const [status, setStatus] = useState<optionsStatus>(data.status)

  useEffect(() => {
    if (data.status) {
      setStatus(data.status)
    }
  }, [])


  const onSubmit = async (data: ValidationSchema) => {
    const dateTemp = data
    dateTemp.status = status
    alert(JSON.stringify(dateTemp))
    window.location.reload()
  }

  return (

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 backdrop-blur-sm rounded-xl w-full px-4 py-8" >
      <>
        <div>
          <label className="text-primary" htmlFor="">Valor: </label>
          <Input
            type='number'
            id='amount'
            placeholder="Insira seu usuário"
            {...register('amount')}
            autoComplete='off'
          />
          {errors.amount && (
            <p id="amount_input" className="mt-1 text-xs text-red-400">{errors.amount.message}</p>
          )}
        </div>
        <div>
          <label className="text-primary" htmlFor="">Email: </label>
          <Input
            type='email'
            id='email'
            placeholder="Insira sua senha"
            {...register('email')}
            autoComplete='off'
          />
          {errors.email && (
            <p id="email_input" className="mt-1 text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>
        <div>
          <span
            className=" text-primary"
          >Status:</span>
          <Select
            onValueChange={(e: optionsStatus) => setStatus(e)}
            defaultValue={data.status}
          >
            <div className="w-full flex flex-col gap-2 ">
              <SelectTrigger
                className="w-full"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {options.map(value => {
                  return <SelectItem key={value} value={String(value)}>{value} </SelectItem>
                })}
              </SelectContent>
            </div>
          </Select>
        </div>

        <div className="flex gap-4 justify-end">
          <Button
            id="buttonsubmitlogin"
            type="button"
            size='default'
            variant='secondary'
          >
            <span>
              Cancelar
            </span>
          </Button>
          <Button
            id="buttonsubmitlogin"
            type="submit"
            size='default'
            variant='default'
          >
            <span>
              Salvar
            </span>
          </Button>
        </div>
      </>
    </form>

  )
}