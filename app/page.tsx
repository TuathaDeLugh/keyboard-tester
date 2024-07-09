import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TKLKeyboard from "@/components/TKL";

export default function Home() {
  return (
    <main className="">
      <Navbar/>
            <div className="flex flex-col items-center justify-center min-h-[93dvh] bg-gray-600">
      <h1 className="text-4xl font-bold mb-8 text-white">Keyboard Tester</h1>
      <TKLKeyboard />
    </div>
    <Footer/>
    </main>
  );
}
