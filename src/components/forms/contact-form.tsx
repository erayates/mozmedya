"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import Input from "../ui/input";
import Textarea from "../ui/textarea";

const schema = z.object({
  fullname: z
    .string({ required_error: "İsim ve soyisim alanı boş bırakılamaz." })
    .min(1, { message: "İsim ve soyisim alanı boş bırakılamaz." }),
  email: z
    .string({ required_error: "E-mail alanı boş bırakılamaz." })
    .email()
    .min(1, { message: "E-mail alanı boş bırakılamaz." }),
  phone: z
    .string({ required_error: "Telefon numarası alanı boş bırakılamaz." })
    .min(1, { message: "Telefon numarası alanı boş bırakılamaz." }),
  website: z
    .string({ required_error: "Web site adresi alanı boş bırakılamaz." })
    .min(1, { message: "Web site adresi alanı boş bırakılamaz." }),
  message: z
    .string({ required_error: "Mesajınız minimum 50 karakter içermelidir." })
    .min(50, { message: "Mesajınız minimum 50 karakter içermelidir." }),
});

const ContactForm = () => {
  const methods = useForm({
    resolver: zodResolver(schema),
  });

  // const onSubmit = (data: any) => {
  //   console.log(data);
  // };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
        <Input placeholder="İsim Soyisim" name="fullname" />
        <Input placeholder="E-Posta Adresiniz" name="email" />
        <Input placeholder="Telefon Numaranız" name="phone" />
        <Input placeholder="Web site adresiniz" name="Website" />
        <Textarea placeholder="Mesajınız" name="message" />

        <button
          type="submit"
          className="py-3 bg-blue text-center w-full text-[12px] font-medium text-white leading-6 rounded-2xl"
        >
          Mesajınızı Gönderin
        </button>
      </form>
    </FormProvider>
  );
};

export default ContactForm;
