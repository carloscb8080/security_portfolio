import confetti from "canvas-confetti";
import { RegisterOptions, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Contact } from "../../interfaces/contact";
import { Area, Button, Input } from "../common";
export const ContactForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<Contact>({
    mode: "onChange",
  });

  const onSubmit = async (data: Contact) => {
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      console.log(res);
      if (!res.ok) throw Error(json.message);

      toast.success(json?.message || "Mensaje enviado");
      confetti({ particleCount: 400, spread: 100 });
      reset();
    } catch (error: any) {
      toast.error(error?.message || "Error al enviar el mensaje");
    }
  };

  const getRegister = (name: keyof Contact, option?: RegisterOptions) => {
    const { ref, ...props } = register(name, {
      required: { value: true, message: "Este campo es requerido" },
      ...option,
    });
    return { inputRef: ref, ...props };
  };

  return (
    <form
      className=" flex flex-col justify-center items-center p-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col w-full lg:flex-row gap-4">
        <Input
          label="Nombre"
          {...getRegister("firstName")}
          error={errors.firstName?.message}
        />
        <Input
          label="Apellido"
          {...getRegister("lastName")}
          error={errors.lastName?.message}
        />
      </div>
      <div className="flex flex-col w-full lg:flex-row gap-4">
        <Input
          type="email"
          label="Correo"
          {...getRegister("email", {
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Correo inválido",
            },
          })}
          error={errors.email?.message}
        />
        <Input
          type="number"
          label="Celular"
          {...getRegister("phone", {
            pattern: {
              value: /^[0-9]{9}$/,
              message: "Celular inválido",
            },
          })}
          error={errors.phone?.message}
        />
      </div>
      <Input
        label="Asunto"
        {...getRegister("affair")}
        error={errors.affair?.message}
      />
      <Area
        label="Mensaje"
        {...getRegister("message")}
        error={errors.message?.message}
      />
      <Button
        variant="contained"
        className="w-full mt-2"
        type="submit"
        disabled={!isValid || isSubmitting}
      >
        Enviar
      </Button>
    </form>
  );
};
