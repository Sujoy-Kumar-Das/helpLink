/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import { z } from "zod";

type TFormConfig = {
  schema?: any;
  defaultValues?: Record<string, any>;
};

type TFrom = {
  children: ReactNode;
  onSubmit?: SubmitHandler<FieldValues>;
  methods?: UseFormReturn<any, any, any>;
} & TFormConfig;

export default function Form({
  children,
  onSubmit,
  schema,
  defaultValues,
  methods,
}: TFrom) {
  const formConfig: TFormConfig = {};

  if (schema) {
    formConfig["schema"] = schema;
  }

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  const defaultMethods = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const currentMethods = methods ? methods : defaultMethods;

  const { handleSubmit, reset } = currentMethods;

  const submit: SubmitHandler<FieldValues> = async (data) => {
    if (onSubmit) {
      await onSubmit(data);
      reset();
    }
  };

  return (
    <FormProvider {...currentMethods}>
      <form onSubmit={handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
}
