// Use the client-only imports for the Next.js framework
"use client";

import * as React from "react";
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

import { useForm } from "react-hook-form";
import { z } from "zod"; // Zod library for schema definition
import { registerSchema } from "@/validators/auth"; // Import the validation schema
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormMessage } from "@/components/ui/form";
import { Label } from "@/components/ui/label";

// Infer the type for our form inputs from the Zod schema
type Input = z.infer<typeof registerSchema>;

export default function RegisterByID() {
  // Initialize the form with react-hook-form and Zod for validation
  const form = useForm<Input>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      studentID: "",
    },
  });

  // Handle form submission with validation
  const onSubmit = (data: Input) => {
    // This is where you would handle the form submission after validation
    // For now, we just log the data to the console
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[350px]">
        <CardHeader className="mb-10 text-center">
          <CardTitle>تسجيل الدخول</CardTitle>
          <CardDescription>
            ادخل الرقم الأكاديمي الخاص بك للوصول إلى بياناتك
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Bind the form with react-hook-form using the spread operator */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex flex-col mb-6 space-y-3">
                {/* Student ID field with validation message */}
                <FormField
                  control={form.control}
                  name="studentID"
                  render={({ field }) => (
                    <>
                      <Label htmlFor="studentID">الرقم الأكاديمي</Label>
                      <Input
                        id="studentID"
                        placeholder="ادخل الرقم الأكاديمي الخاص بالطالب"
                        {...field}
                      />
                      {/* This will show the error message when validation fails */}
                      <FormMessage />
                    </>
                  )}
                />
              </div>
              {/* Submit button */}
              <CardFooter className="flex justify-center">
                <Button type="submit">تقدم</Button>
              </CardFooter>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}