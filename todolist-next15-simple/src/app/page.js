'use client'

import {useState} from 'react'

import Header from "@/components/Header";
import ListTodos from "@/components/ListTodos";
import TodoForm from "@/components/TodoForm";
import Link from "next/link";


export default function Home() {

const [tasks, setTasks] = useState([]);

  return (
    <>
      <div className="bg-black min-h-screen h-fit text-white">
        <Header />

        {/* Add Todo & All Todos - Link Button */}
        <div className="sm:hidden w-[95%] md:w-[90%] flex justify-end mt-12 gap-4">
          {/* List All Todos */}
          <Link
            href="#allTodos"
            className="py-1 px-2.5 border-[1.5px] rounded-lg text-lg text-blue-400 font-semibold border-blue-700 hover:bg-[#142128]"
          >
            All Todos
          </Link>
        </div>

        {/* List Add, All Lists Show - Section */}
        <div className="mt-6 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 w-[95%] md:w-[90%] mx-auto">
          <TodoForm tasks={tasks} setTasks={setTasks} />

          <ListTodos tasks={tasks} setTasks={setTasks} />
        </div>
      </div>
    </>
  );
}
