import { z } from "zod";

export const authSchema = z.object({
  emailSignUp: z.string().email({ message: "البريد الالكتروني المدخل غير صحيح" }),
  fullName: z.string()
    .regex(/^[A-Za-z\u0600-\u06FF\s]+$/, { message: "الاسم يجب أن يحتوي فقط على حروف ومسافات" })
    .min(2, { message: "اكتب الاسم بشكل صحيح" })
    .max(255),
  passwordSignUp: z.string()
    .min(8, { message: "يجب أن تحتوي كلمة المرور على 8 خانات على الأقل" })
    .max(100),
  passwordSignUpConfirm: z.string()
    .min(8, { message: "يجب أن تحتوي كلمة المرور على 8 خانات على الأقل" })
    .max(100),
}).refine((data) => data.passwordSignUp === data.passwordSignUpConfirm, {
  message: "كلمة المرور وتأكيد كلمة المرور لا تتطابقان",
  path: ["passwordConfirm"],
});