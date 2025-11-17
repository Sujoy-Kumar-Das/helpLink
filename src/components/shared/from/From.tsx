"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { AnyZodObject, z } from "zod";

type TFrom = {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  schema: AnyZodObject;
};

export default function Form({ children, onSubmit, schema }: TFrom) {
  const methods = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}
