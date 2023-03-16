import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";

const LoginForm = () => {
  const supabaseClient = useSupabaseClient();
  const user = useUser();
  const [data, setData] = useState();

  useEffect(() => {
    async function loadData() {
      const { data } = await supabaseClient.from("profiles").select("*");
      setData(data);
    }
    if (user) loadData();
  }, [user]);

  if (!user)
    return (
      <Auth
        redirectTo="http://localhost:3000/"
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "#6851FF",
                brandAccent: "#6851FF",
              },
              radii: {
                borderRadiusButton: "18px",
                inputBorderRadius: "10px",
              },
            },
          },
        }}
        supabaseClient={supabaseClient}
        providers={["google", "github", "discord"]}
        socialLayout="vertical"
      />
    );

  return (
    <>
      <button onClick={() => supabaseClient.auth.signOut()}>Sign out</button>
      <p>user:</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <p>client-side data fetching with RLS</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

export default LoginForm;
