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

// Email validation schema
const emailSchema = z.object({
  email: z.string().email({ message: "الرجاء إدخال بريد إلكتروني صالح." }),
});

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  // Handle form submission
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError("");

    // Validate email
    const result = emailSchema.safeParse({ email });

    if (!result.success) {
      // If validation fails, show an error
      setError(result.error.issues[0].message);
    } else {
      // If validation succeeds, show the message box
      setShowMessage(true);
      // Email would be sent to the server here
    }
  };

  // Handle closing the message box
  const handleCloseMessage = () => {
    setShowMessage(false);
  };

  return (
    <div className="flex md:items-center items-start mt-24 justify-center h-screen">
      <Card className="w-full max-w-md p-4">
        <CardHeader>
          <CardTitle>استعادة كلمة المرور</CardTitle>
        </CardHeader>
        {!showMessage ? (
          // Email input form
          <form onSubmit={handleSubmit}>
            <CardContent>
              <div className="space-y-5">
                <div>
                  <Label htmlFor="email">البريد الإلكتروني</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="hasady.help@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mt-1"
                  />
                  {error && <p className="text-red-500">{error}</p>}
                </div>

                <Button type="submit" className="w-full">
                  إرسال رابط إعادة التعيين
                </Button>
              </div>
            </CardContent>
          </form>
        ) : (
          // Temporary message box
          <div className="flex flex-col items-center justify-center p-4">
            <p className="mb-4 text-center">
              يرجى مراجعة بريدك الالكتروني لإعادة تعيين كلمة المرور.
            </p>
            <Button onClick={handleCloseMessage}>موافق</Button>
          </div>
        )}
      </Card>
    </div>
  );
}
