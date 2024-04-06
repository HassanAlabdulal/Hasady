"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {authSchema} from "@/validators/reset-password"; 

// Define the shape of the errors object for forms
export interface FormErrors {
  passwordReset?: string;
  passwordResetConfirm?: string;
}

export default function ResetPassword() {
  const [formData, setFormData] = useState({
    passwordReset: "",
    passwordResetConfirm: "",
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
    const result = authSchema.safeParse(formData);

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
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>إعادة تعيين كلمة المرور</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="space-y-5">
              <div>
                <Label htmlFor="passwordReset">كلمة المرور الجديدة</Label>
                <Input
                  id="passwordReset"
                  name="passwordReset"
                  type="password"
                  placeholder="********"
                  value={formData.passwordReset}
                  onChange={handleChange}
                  className="w-full"
                />
                {errors.passwordReset && (
                  <p className="mt-1 text-red-500">{errors.passwordReset}</p>
                )}
              </div>
              <div>
                <Label htmlFor="passwordResetConfirm">تأكيد كلمة المرور الجديدة</Label>
                <Input
                  id="passwordResetConfirm"
                  name="passwordResetConfirm"
                  type="password"
                  placeholder="********"
                  value={formData.passwordResetConfirm}
                  onChange={handleChange}
                  className="w-full"
                />
                {errors.passwordResetConfirm && (
                  <p className="mt-1 text-red-500">{errors.passwordResetConfirm}</p>
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
