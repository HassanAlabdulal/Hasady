import { z } from "zod";

export const authSchema = z
  .object({
    email: z.string().email({ message: "البريد الالكتروني المدخل غير صحيح" }),
    name: z
      .string()
      .regex(/^[A-Za-z\u0600-\u06FF\s]+$/, {
        message: "الاسم يجب أن يحتوي فقط على حروف ومسافات",
      })
      .min(2, { message: "اكتب الاسم بشكل صحيح" })
      .max(255),
    password: z
      .string()
      .min(8, { message: "يجب أن تحتوي كلمة المرور على 8 خانات على الأقل" })
      .max(100),
    passwordConfirm: z
      .string()
      .min(8, { message: "يجب أن تحتوي كلمة المرور على 8 خانات على الأقل" })
      .max(100),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "كلمة المرور وتأكيد كلمة المرور لا تتطابقان",
    path: ["passwordConfirm"],
  });
