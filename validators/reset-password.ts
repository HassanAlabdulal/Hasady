import { z } from "zod";


// Password reset validation schema
export const authSchema = z.object({
    passwordReset: z.string()
      .min(8, { message: "يجب أن تحتوي كلمة المرور على 8 خانات على الأقل" })
      .max(100),
    passwordResetConfirm: z.string()
      .min(8, { message: "يجب أن تحتوي كلمة المرور على 8 خانات على الأقل" })
      .max(100),
  })
  .refine((data) => data.passwordReset === data.passwordResetConfirm, {
    message: "كلمة المرور وتأكيد كلمة المرور لا تتطابقان",
    path: ["passwordResetConfirm"],
  });

