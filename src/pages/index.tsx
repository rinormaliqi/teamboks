import localFont from "next/font/local";
import { Alert } from "@/components/ui/alert";
import { RocketIcon } from "lucide-react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Alert
          type="success"
          title="Success!"
          description="Operation completed successfully"
        />
        <Alert
          type="error"
          variant="subtle"
          title="Error!"
          description="Something went wrong"
          dismissible
        />
        <Alert
          type="info"
          variant="outline"
          title="Update Available"
          description="New version 2.0 is released"
          icon={<RocketIcon className="text-purple-600" />}
        />
      </main>
    </div>
  );
}
