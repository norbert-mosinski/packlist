"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Presentation } from "./presentation";
import { z } from 'zod';
import { PTextInputProps } from "@/presentation/shared/components/text-input";
import { PPacklistCreateFormProps } from ".";
import { createPacklist } from "@/application/packlist/actions/create-packlist";


const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
});

type FormData = z.infer<typeof formSchema>;

// Passed data is mapped to presentation props.
// Presentation events are being handled.
export function Behavior() {
  // React hook form with zod implementation is being used
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });


  // Registers input field or name input with react hook form
  const nameProps: PTextInputProps = {
    id: 'name',
    ...register('name')
  };
  const onSubmit = (data: FormData) => {
    // todo implement and handler
    // Payload for createPacklist is being created
    // No factory needed as this logic does not repeat
    const payload = {
      ...data,
      items: []
    };
    // Action is being called with expected payload
    createPacklist(payload);
    alert("Form Submitted:" + JSON.stringify(data) + JSON.stringify(nameProps));
  };

  // Errors from hook form are mapped to the presentations error bag
  // Factory is used as this logic repeats
  // todo factory
  const presentationErrors: PPacklistCreateFormProps['errors'] = {
    name: errors.name?.message ? [errors.name?.message] : []
  };

  // No need to define props separately as only this component is reaturned,
  // therefore its readable like this
  return <Presentation nameProps={nameProps}
    onSubmit={handleSubmit(onSubmit)}
    errors={presentationErrors}
  ></Presentation>
}