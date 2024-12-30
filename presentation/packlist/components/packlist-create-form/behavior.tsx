import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Presentation } from "./presentation";
import { z } from 'zod';
import { PTextInputProps } from "@/presentation/shared/components/text-input";
import { PPacklistCreateFormProps } from ".";


const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
  });
  
type FormData = z.infer<typeof formSchema>;

export function Behavior()
{
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(formSchema),
      });
    
      const onSubmit = (data: FormData) => {
        console.log("Form Submitted:", data);
      };

      const nameProps: PTextInputProps = {
        ...register('name')
      };

      const presentationErrors: PPacklistCreateFormProps['errors'] = {
        name: errors.name?.message
      };

    return <Presentation nameProps={nameProps} 
      onSubmit={handleSubmit(onSubmit)} 
      errors={presentationErrors}
    ></Presentation>
}