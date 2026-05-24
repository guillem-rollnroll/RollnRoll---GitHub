import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();
  if (!session) redirect("/login");

  return (
    <iframe
      src="/report"
      style={{
        width: "100vw",
        height: "100vh",
        border: "none",
        display: "block"
      }}
    />
  );
}