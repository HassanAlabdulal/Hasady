import { z } from "zod";

// Email validation schema
export const authSchema = z.object({
    emailForgotPassword: z.string().email({ message: "البريد الالكتروني المدخل غير صحيح" }),
});

