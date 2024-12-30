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

export function Behavior()
{
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(formSchema),
      });
    
      
      const nameProps: PTextInputProps = {
        id: 'name',
        ...register('name')
      };
      const onSubmit = (data: FormData) => {
        const payload = {
          ...data,
          items: []
        };
        createPacklist(payload);
        alert("Form Submitted:" + JSON.stringify(data) + JSON.stringify(nameProps));
      };

      const presentationErrors: PPacklistCreateFormProps['errors'] = {
        name: errors.name?.message
      };

    return <Presentation nameProps={nameProps} 
      onSubmit={handleSubmit(onSubmit)} 
      errors={presentationErrors}
    ></Presentation>
}