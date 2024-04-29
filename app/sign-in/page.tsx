"use client";

// Import necessary React and component modules.
import React, { useEffect, useState } from "react";
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
import { Checkbox } from "@/components/ui/checkbox";
import { authSchema } from "@/validators/sign-in";
import { UserAuth } from "../../types/auth";
import { Route, login } from "./actions";
import { isAuthenticated } from "../auth_actions";
import { redirect } from "next/navigation";

// Define the interface for form error messages.
interface FormErrors {
  email?: string;
  password?: string;
}

// SignIn component definition.
export default function SignIn() {
  // Route();
  // States for storing form data & validation errors.
  const [formData, setFormData] = useState<UserAuth>();
  const [errors, setErrors] = useState<FormErrors>({});

  // Handler for form input changes, updating the state with new values.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      // Ensure prev is not undefined
      const safePrev: UserAuth = {
        email: "", // Provide default values
        password: "", // Provide default values
        ...prev,
      };
      return {
        ...safePrev,
        [name]: value, // Update the field dynamically
      };
    });
  };

  // Handler for form submission.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validate form data against the schema.
    const result = authSchema.safeParse(formData);

    interface FormErrors {
      [key: string]: string | undefined; // This is the index signature
      // ... other explicitly defined keys can go here
    }

    // Accumulate errors if validation fails.
    if (!result.success) {
      const newErrors = result.error.issues.reduce<FormErrors>((acc, issue) => {
        const path = issue.path[0];
        if (typeof path === "string") {
          acc[path] = issue.message;
        }
        return acc;
      }, {});

      // Update the errors state with the new errors.
      setErrors(newErrors);
    } else {
      // Clear errors and log valid form data or send to server.
      setErrors({});
      // console.log("Form data is valid:", formData);

      await login(formData!);
    }
  };

  // State for the 'Remember Me' checkbox.
  const [rememberMe, setRememberMe] = useState(false);

  // Handler for when 'Remember Me' checkbox value changes.
  const handleRememberMeChange = (checked: boolean) => {
    setRememberMe(checked);
  };

  // Render the sign-in form.
  return (
    <div className="flex items-center justify-center h-screen bg-[#f9f9f9]">
      <Card className="w-[400px] bg-[#f9f9f9]">
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle className="text-center">تسجيل الدخول</CardTitle>
            <CardDescription className="text-center">
              قم بتسجيل الدخول من هنا
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="email">البريد الالكتروني</Label>
              <Input
                name="email"
                id="email"
                type="email"
                placeholder="tryhasady@gmail.com"
                onChange={handleChange}
              />
              {errors.email && (
                <p className="mt-1 text-red-500">{errors.email}</p>
              )}
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">كلمة المرور</Label>
              <Input
                name="password"
                id="password"
                type="password"
                placeholder="********"
                onChange={handleChange}
              />
              {errors.password && (
                <p className="mt-1 text-red-500">{errors.password}</p>
              )}
            </div>

            {/* Section for 'Remember Me' checkbox and 'Forgot Password' link. */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Checkbox
                  id="rememberMe"
                  checked={rememberMe}
                  onCheckedChange={handleRememberMeChange}
                />
                <Label htmlFor="rememberMe" className="ml-2 mr-1 text-sm">
                  تذكرني
                </Label>
              </div>
              <a
                href="/forgot-password"
                className="text-sm text-blue-600 hover:underline"
              >
                هل نسيت كلمة المرور؟
              </a>
            </div>
          </CardContent>
          <CardFooter>
            {/* Sign-in button */}
            <Button
              type="submit"
              className="w-full mb-2 bg-black rounded-full px-5 shadow-2xl font-bold hover:bg-neutral-800"
            >
              تسجيل الدخول
            </Button>
          </CardFooter>
          {/* Link to sign-up page */}
          <div className="text-center mb-10">
            <span className="text-sm text-gray-600">ليس لديك حساب؟ </span>
            <a
              href="/sign-up"
              className="text-sm text-blue-600 hover:underline"
            >
              سجل الآن
            </a>
          </div>
        </form>
      </Card>
    </div>
  );
}
