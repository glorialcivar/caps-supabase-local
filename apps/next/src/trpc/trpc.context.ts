// TRPC context
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const createContext = async () => {
  const supabase = createRouteHandlerClient<DB>({ cookies });
  const res = await supabase.auth.getSession();
  const { session } = res.data;
  const userId = session?.user.id;

  return { supabase, session, userId };
};
