"use server";

import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

const supabase = createClient();

export async function isAuthenticated() {
  try {
    const { data, error } = await supabase.auth.getUser();
    // console.log(data.user);

    if (error) {
      throw new Error("Error");
    }
    return data.user.aud === "authenticated";
  } catch {
    return false;
  }
}

export async function LogOut() {
  try {
    const { error } = await supabase.auth.signOut();
    if(error){
        throw new Error("Error to signOut")
    }
  } catch {
    console.log(Error);
  }
}
