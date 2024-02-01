"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { z } from 'zod';
import { registerSchema } from "@/validators/auth";
import { Checkbox } from "@/components/ui/checkbox"



// Define the shape of the errors object
interface FormErrors {
  email?: string;
  password?: string;
  firstname?: string;
  lastname?: string;
  emailSignUp?: string;
  passwordSignUp?: string;
  passwordConfirm?: string;
}

export function TabsDemo() {
  // Form state
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    emailSignUp: '',
    firstname: '',
    lastname: '',
    passwordSignUp: '',
    passwordConfirm: '',
  });

  // Error state
  const [errors, setErrors] = useState<FormErrors>({});

  // Handle input changes
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const result = registerSchema.safeParse(formData);

    if (!result.success) {
      // Define the initial value of the accumulator with the correct type
      const newErrors = result.error.issues.reduce<FormErrors>((acc, issue) => {
        const path = issue.path[0]; // Assuming path is not nested for simplicity
        if (typeof path === "string" || typeof path === "number") {
          acc[path] = issue.message;
        }
        return acc;
      }, {});
    
      setErrors(newErrors);
    } else {
      // No errors, proceed with the form submission
      setErrors({});
      console.log('Form data is valid:', formData);
      // Here you would typically send the data to your server
    }
  };
  
  const [rememberMe, setRememberMe] = useState(false);
  // Handle Remember Me change
  const handleRememberMeChange = (e: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setRememberMe(e.target.checked);
  };

  const [termsAccepted, setTermsAccepted] = useState(false);
  const handleTermsChange = (e: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setTermsAccepted(e.target.checked);
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <Tabs defaultValue="signIn" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signIn">تسجيل الدخول</TabsTrigger>
          <TabsTrigger value="signUp">التسجيل</TabsTrigger>
        </TabsList>
        <TabsContent value="signIn">
        <Card>
          <CardHeader>
            <CardTitle>تسجيل الدخول</CardTitle>
            <CardDescription>
              قم بتسجيل الدخول من هنا
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">البريد الالكتروني</Label>
              <Input id="email" type="email" placeholder="flosya.help@gmail.com" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">كلمة المرور</Label>
              <Input id="password" type="password" placeholder="********" />
            </div>

                {/* New - Remember Me Checkbox and Forgot Password link */}
                <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input 
                    id="rememberMe" 
                    type="checkbox" 
                    checked={rememberMe} 
                    onChange={handleRememberMeChange} 
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-900">تذكرني</label>
                </div>
                <a href="#" className="text-sm text-blue-600 hover:underline">هل نسيت كلمة المرور؟</a>
              </div>

          </CardContent>
          <CardFooter>
            <Button className="w-full">تسجيل الدخول</Button>
          </CardFooter>
        </Card>
      </TabsContent>
        <TabsContent value="signUp">
          <Card>
            <CardHeader>
              <CardTitle>التسجيل</CardTitle>
              <CardDescription>
                قم بتسجيل حساب جديد من هنا
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <div className="flex-1">
                    <Label htmlFor="firstname">الاسم الأول</Label>
                    <Input name="firstname" id="firstname" placeholder="محمد" onChange={handleChange} />
                    {errors.firstname && <p className="text-red-500">{errors.firstname}</p>}
                  </div>
                  <div className="flex-1">
                    <Label htmlFor="lastname">الاسم الثاني</Label>
                    <Input name="lastname" id="lastname" placeholder="عبدالله" onChange={handleChange} />
                    {errors.lastname && <p className="text-red-500">{errors.lastname}</p>}
                  </div>
                </div>
                <div>
                  <Label htmlFor="emailSignUp">البريد الالكتروني</Label>
                  <Input name="emailSignUp" id="emailSignUp" type="email" placeholder="flosya.help@gmail.com" onChange={handleChange} />
                  {errors.emailSignUp && <p className="text-red-500">{errors.emailSignUp}</p>}
                </div>
                <div>
                  <Label htmlFor="passwordSignUp">كلمة المرور</Label>
                  <Input name="passwordSignUp" id="passwordSignUp" type="password" placeholder="********" onChange={handleChange} />
                  {errors.passwordSignUp && <p className="text-red-500">{errors.passwordSignUp}</p>}
                </div>
                <div>
                  <Label htmlFor="passwordConfirm">تأكيد كلمة المرور</Label>
                  <Input name="passwordConfirm" id="passwordConfirm" type="password" placeholder="********" onChange={handleChange} />
                  {errors.passwordConfirm && <p className="text-red-500">{errors.passwordConfirm}</p>}
                </div>
                <div className="flex items-center mt-2">
                <input
                  id="terms"
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={handleTermsChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-2"
                />
                <label htmlFor="terms" className="text-sm">
                  تمت الموافقة على    
                  <a href="/terms" className="text-blue-600 hover:underline"> الشروط والأحكام</a>
                </label>
              </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full">إنشاء حساب</Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default TabsDemo;