import { z } from "zod";

export const authSchema = z.object({
  email: z.string().email({ message: "البريد الالكتروني المدخل غير صحيح" }),
  password: z
    .string()
    .min(8, { message: "كلمة المرور المدخلة غير صحيحة" })
    .max(100),
});
