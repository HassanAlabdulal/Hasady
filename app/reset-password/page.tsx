"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";

// Define the shape of the errors object
interface FormErrors {
  password?: string;
  passwordConfirm?: string;
}

// Password reset validation schema
const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(6, { message: "يجب أن تحتوي كلمة المرور على ٦ خانات على الأقل" })
      .max(100),
    passwordConfirm: z
      .string()
      .min(6, { message: "يجب أن تحتوي كلمة المرور على ٦ خانات على الأقل" })
      .max(100),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "كلمة المرور وتأكيد كلمة المرور لا تتطابقان",
    path: ["passwordConfirm"],
  });

export default function ResetPassword() {
  const [formData, setFormData] = useState({
    password: "",
    passwordConfirm: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    // Validate passwords
    const result = resetPasswordSchema.safeParse(formData);

    if (!result.success) {
      // Convert the Zod error issues to a more accessible errors object
      const newErrors = result.error.issues.reduce((acc, issue) => {
        acc[issue.path[0] as keyof FormErrors] = issue.message;
        return acc;
      }, {} as FormErrors);
      setErrors(newErrors);
    } else {
      // Passwords are valid, process the reset
      console.log("Passwords are valid:", formData);
      // Here you would typically handle the password reset logic
    }
  };

  return (
    <div className="flex md:items-center items-start max-sm:mt-24 justify-center h-screen">
      <Card className="w-full max-w-md p-4">
        <CardHeader>
          <CardTitle>إعادة تعيين كلمة المرور</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="space-y-5">
              <div>
                <Label htmlFor="password">كلمة المرور الجديدة</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="يجب أن تحتوي كلمة المرور على ٦ خانات على الأقل"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full"
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password}</p>
                )}
              </div>

              <div>
                <Label htmlFor="passwordConfirm">
                  تأكيد كلمة المرور الجديدة
                </Label>
                <Input
                  id="passwordConfirm"
                  name="passwordConfirm"
                  type="password"
                  placeholder="يجب أن تحتوي كلمة المرور على ٦ خانات على الأقل"
                  value={formData.passwordConfirm}
                  onChange={handleChange}
                  className="w-full"
                />
                {errors.passwordConfirm && (
                  <p className="text-red-500">{errors.passwordConfirm}</p>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              تغيير كلمة المرور
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
