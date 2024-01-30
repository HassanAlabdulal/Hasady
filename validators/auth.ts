import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email({ message: "البريد الالكتروني المدخل غير صحيح" }),
  emailSignUp: z.string().email({ message: "البريد الالكتروني المدخل غير صحيح" }),
  firstname: z.string()
        .min(2, { message: "اكتب الاسم بشكل صحيح" })
        .max(255),
  lastname: z.string()
        .min(2, { message: "اكتب الاسم بشكل صحيح" })
        .max(255),
  password: z.string()
        .min(6, { message: "يجب أن تحتوي كلمة المرور على ٦ خانات على الأقل" })
        .max(100),
  passwordSignUp: z.string()
        .min(6, { message: "يجب أن تحتوي كلمة المرور على ٦ خانات على الأقل" })
        .max(100),
  passwordConfirm:z.string()
  .min(6, { message: "يجب أن تحتوي كلمة المرور على ٦ خانات على الأقل" })
  .max(100),
}).refine((data) => data.passwordSignUp === data.passwordConfirm, {
  message: "كلمة المرور وتأكيد كلمة المرور لا تتطابقان",
  path: ["confirmPassword"], // This path is where the error message will be attached
});
