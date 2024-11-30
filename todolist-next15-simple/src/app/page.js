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
        {/* <div className="w-[95%] md:w-[90%] flex justify-end mt-12 mb-8 gap-4">

         
        </div> */}

        {/* List Add, All Lists Show - Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 w-[95%] md:w-[90%] mx-auto">
          <TodoForm tasks={tasks} setTasks={setTasks} />

          <ListTodos tasks={tasks} />
        </div>
      </div>
    </>
  );
}
