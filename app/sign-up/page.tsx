"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authSchema } from "@/validators/sign-up";
import { SignUpForm, UserAuth } from "../../types/auth";
import { signUp } from "./actions";

// Define the shape of the errors object

export default function SignUp() {
  const [formData, setFormData] = useState<SignUpForm>();

  // Error state
  const [errors, setErrors] = useState<SignUpForm>();

  // Handle input changes
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if passwords match before running schema validation
    if (formData?.password !== formData?.passwordConfirm) {
      setErrors({
        ...errors,
        passwordConfirm: "كلمة المرور وتأكيد كلمة المرور لا تتطابقان",
      });
      return; // Stop the form submission if passwords don't match
    }

    const result = authSchema.safeParse(formData);

    if (!result.success) {
      // Loop over the issues and assign them to errors
      const newErrors: SignUpForm = {};
      for (const issue of result.error.issues) {
        if (typeof issue.path[0] === "string") {
          newErrors[issue.path[0] as keyof SignUpForm] = issue.message;
        }
      }
      setErrors(newErrors);
    } else {
      // If there are no errors, log the valid data and presumably send it to the server
      // signUp({})
      setErrors({});
      // console.log("Form data is valid:", formData);
      await signUp({
        name: formData?.name,
        email: formData?.email!,
        password: formData?.password!,
      });
      // Send data to the server here
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#f9f9f9]">
      <Card className="w-[400px] mt-10 bg-[#f9f9f9]">
        <CardHeader>
          <CardTitle className="text-center">التسجيل</CardTitle>
          <CardDescription className="text-center">
            قم بتسجيل حساب جديد من هنا
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="name">الاسم الكامل</Label>
              <Input
                name="name"
                id="name"
                placeholder="محمد عبدالله"
                onChange={handleChange}
              />
              {errors?.name && (
                <p className="mt-1 text-red-500">{errors.name}</p>
              )}
            </div>
            <div>
              <Label htmlFor="email">البريد الالكتروني</Label>
              <Input
                name="email"
                id="email"
                type="email"
                placeholder="tryhasady@gmail.com"
                onChange={handleChange}
              />
              {errors?.email && (
                <p className="mt-1 text-red-500">{errors.email}</p>
              )}
            </div>
            <div>
              <Label htmlFor="password">كلمة المرور</Label>
              <Input
                name="password"
                id="password"
                type="password"
                placeholder="********"
                onChange={handleChange}
              />
              {errors?.password && (
                <p className="mt-1 text-red-500">{errors.password}</p>
              )}
            </div>
            <div>
              <Label htmlFor="passwordConfirm">تأكيد كلمة المرور</Label>
              <Input
                name="passwordConfirm"
                id="passwordConfirm"
                type="password"
                placeholder="********"
                onChange={handleChange}
              />
              {errors?.passwordConfirm && (
                <p className="mt-1 text-red-500">{errors.passwordConfirm}</p>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full mb-2 bg-black rounded-full px-5 shadow-2xl font-bold hover:bg-neutral-800"
            >
              إنشاء حساب
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
