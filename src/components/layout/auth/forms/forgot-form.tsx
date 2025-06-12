"use client";

import CustomInput from "@/components/shared/custom-input";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { phoneSchema } from "../schemas";

export function ForgotForm() {
  const t = useTranslations("auth");
  const errors = useTranslations("errors");
  const requiredMessage = errors("required");
  const formSchema = z.object({
    phone: phoneSchema(requiredMessage),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="xl:w-1/2 max-xl:bg-white xl:p-12 xl:ps-0 p-6 rounded-md ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* name email phone  */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <CustomInput
                id="phone"
                label={t("phone")}
                field={field}
                placeholder={t("phone")}
                type="tel"
              />
            )}
          />
       
          <Button
            type="submit"
            className="w-full text-lg font-semibold h-14 rounded-lg "
          >
            {t("send")}
          </Button>
          
        </form>
      </Form>
    </div>
  );
}
