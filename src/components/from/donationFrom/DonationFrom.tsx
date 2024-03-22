/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, SubmitHandler } from "react-hook-form";
import { AnyZodObject } from "zod";
import { SELECTDONATIONARRAY } from "../../../constants";
import From from "../From";
import FromSubmit from "../FromSubmit";
import FromTextArea from "../FromTextArea";
import InputField from "../InputField";
import InputFile from "../InputFile";
import InputSelect from "../InputSelect";

type TCreateDonation = {
  handler: SubmitHandler<FieldValues>;
  isLoading: boolean;
  isCreate?: boolean;
  schema: AnyZodObject;
};

export default function DonationFrom({
  handler,
  isLoading,
  schema,
  isCreate = true,
}: TCreateDonation) {
  return (
    <From handler={handler} schema={schema}>
      <InputField name="title" label="Title" type="text" />
      <InputField name="amount" label="Amount" type="number" />
      <FromTextArea name="description" label="Description" type="text" />
      {isCreate && <InputFile name="image" />}
      <InputSelect
        label="Category"
        name="category"
        items={SELECTDONATIONARRAY}
      />
      <FromSubmit text="Create" loading={isLoading} />
    </From>
  );
}
