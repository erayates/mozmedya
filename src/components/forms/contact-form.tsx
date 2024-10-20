"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import Input from "../ui/input";
import Textarea from "../ui/textarea";

const schema = z.object({
  fullname: z
    .string({ required_error: "İsim ve soyisim alanı boş bırakılamaz." })
    .min(1, { message: "İsim ve soyisim alanı boş bırakılamaz." }),
  email: z
    .string({ required_error: "E-mail alanı boş bırakılamaz." })
    .email({ message: "Lütfen geçerli bir e-posta adresi giriniz." })
    .min(1, { message: "E-mail alanı boş bırakılamaz." }),
  phone: z
    .string({ required_error: "Telefon numarası alanı boş bırakılamaz." })
    .min(1, { message: "Telefon numarası alanı boş bırakılamaz." }),
  website: z
    .string({ required_error: "Web site adresi alanı boş bırakılamaz." })
    .min(1, { message: "Web site adresi alanı boş bırakılamaz." })
    .url({ message: "Lütfen geçerli bir URL girin." }),
  message: z
    .string({ required_error: "Mesajınız minimum 50 karakter içermelidir." })
    .min(50, { message: "Mesajınız minimum 50 karakter içermelidir." }),
});

type FormData = z.infer<typeof schema>;

const ContactForm = () => {
  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
        <Input placeholder="İsim Soyisim" name="fullname" />
        <Input placeholder="E-Posta Adresiniz" name="email" />
        <Input placeholder="Telefon Numaranız" name="phone" />
        <Input placeholder="Web site adresiniz" name="website" />
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
