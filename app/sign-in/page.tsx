"use client";

// Import necessary React and component modules.
import React, { useState } from 'react';
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
import { Checkbox } from "@/components/ui/checkbox"
import { authSchema } from "@/validators/sign-in"; 

// Define the interface for form error messages.
interface FormErrors {
   emailSignIn?: string;
   passwordSignIn?: string;
}

// SignIn component definition.
export default function SignIn() {
  // State for storing form data.
  const [formData, setFormData] = useState({
    emailSignIn: '',
    passwordSignIn: '',
  });

  // State for storing validation errors.
  const [errors, setErrors] = useState<FormErrors>({});

  // Handler for form input changes, updating the state with new values.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handler for form submission.
  const handleSubmit = (e: React.FormEvent) => {
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
      console.log('Form data is valid:', formData);
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
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[400px]">
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>تسجيل الدخول</CardTitle>
            <CardDescription>
              قم بتسجيل الدخول من هنا
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="emailSignIn">البريد الالكتروني</Label>
              <Input name="emailSignIn" id="emailSignIn" type="email" placeholder="tryhasady@gmail.com" onChange={handleChange} />
              {errors.emailSignIn && <p className="text-red-500">{errors.emailSignIn}</p>}
            </div>
            <div className="space-y-1">
              <Label htmlFor="passwordSignIn">كلمة المرور</Label>
              <Input name="passwordSignIn" id="passwordSignIn" type="password" placeholder="********" onChange={handleChange} />
              {errors.passwordSignIn && <p className="text-red-500">{errors.passwordSignIn}</p>}
            </div>

            {/* Section for 'Remember Me' checkbox and 'Forgot Password' link. */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Checkbox
                  id="rememberMe"
                  checked={rememberMe}
                  onCheckedChange={handleRememberMeChange}
                />
                <Label htmlFor="rememberMe" className="ml-2 mr-1 text-sm">تذكرني</Label>
              </div>
              <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">هل نسيت كلمة المرور؟</a>
            </div>
          </CardContent>
          <CardFooter>
            {/* Sign-in button */}
            <Button type="submit" className="w-full mb-2">تسجيل الدخول</Button>
          </CardFooter>
          {/* Link to sign-up page */}
          <div className="text-center">
            <span className="text-sm text-gray-600">ليس لديك حساب؟ </span>
            <a href="/sign-up" className="text-sm text-blue-600 hover:underline">سجل الآن</a>
          </div>
        </form>
      </Card>
    </div>
  );
}