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
import { registerSchema } from "@/validators/auth";
import { z } from 'zod';

// Define the shape of the errors object
interface FormErrors {
  firstname?: string;
  lastname?: string;
  emailSignUp?: string;
  passwordSignUp?: string;
  passwordConfirm?: string;
}

export function TabsDemo() {
  // Form state
  const [formData, setFormData] = useState({
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
      // Convert the Zod error format to a more convenient object
      const newErrors = result.error.issues.reduce((acc, issue) => {
        acc[issue.path[0]] = issue.message;
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

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Tabs defaultValue="signIn" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signIn">تسجيل الدخول</TabsTrigger>
          <TabsTrigger value="signUp">التسجيل</TabsTrigger>
        </TabsList>
        <TabsContent value="signIn">
          {/* ...signIn content... */}
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
                <div className="flex space-x-4">
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
