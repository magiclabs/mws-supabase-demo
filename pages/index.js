import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div>
        <h1>Supabase with Magic Wallet Services</h1>
      </div>
      <div className="w-1/3">
        <LoginForm />
      </div>
    </div>
  );
}
