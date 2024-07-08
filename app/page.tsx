import TKLKeyboard from "@/components/TKL";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">TKL Keyboard Tester</h1>
      <TKLKeyboard />
    </div>
    </main>
  );
}
