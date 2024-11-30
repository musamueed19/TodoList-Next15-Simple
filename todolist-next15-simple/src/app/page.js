import Header from "@/components/Header";
import TodoForm from "@/components/TodoForm";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-black min-h-screen h-fit text-white">

        <Header />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 w-[95%] md:w-[90%] mx-auto">
          <TodoForm />
        </div>

      </div>
    </>
  );
}
