"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { UserAuth } from "../../types/auth";

const cookieStore = cookies();
const supabase = createClient(cookieStore);

export async function signUp(dataAuth: UserAuth) {
  const { data, error } = await supabase.auth.signUp(dataAuth);
  // console.log(data);

  if (error) {
    redirect("/404");
  }
  await SignName(data.user?.id!, dataAuth.name!);
}

async function SignName(id: string, full_name: string) {
  console.log(id, full_name);

  const { data, error } = await supabase
    .from("profiles")
    .update({ full_name: full_name })
    .eq("id", id)
    .select();
  // console.log(data);

  if (error) {
    redirect("/404");
  }
  revalidatePath("/", "layout");
  redirect("/");
}
