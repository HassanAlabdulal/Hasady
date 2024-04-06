import { z } from "zod";

export const authSchema = z.object({
  emailSignIn: z.string().email({ message: "البريد الالكتروني المدخل غير صحيح" }),
  passwordSignIn: z.string()
  .min(8, { message: "كلمة المرور المدخلة غير صحيحة" })
  .max(100),
});