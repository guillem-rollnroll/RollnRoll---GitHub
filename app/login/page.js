import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (!session) redirect("/login");

  return (
    <iframe
      src="/index.html"
      style={{ width: "100vw", height: "100vh", border: "none", display: "block" }}
    />
  );
}