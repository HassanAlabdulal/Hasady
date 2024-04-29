"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { UserAuth } from "../../types/auth";
import { createClient } from "@/utils/supabase/server";

export async function login(data: UserAuth) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  // type-casting here for convenience
  // in practice, you should validate your inputs

  const { error } = await supabase.auth.signInWithPassword(data);
  console.log(await supabase.auth.getUser());

  if (error) {
    redirect("/404");
  }

  revalidatePath("/", "layout");
  redirect("/");
}
