"use client";

import { useState } from "react";

const ListTodos = ({tasks}) => {
  return (
    <div className="bg-slate-900 rounded-sm py-8" id="allTodos">

      {/* Container Title Heading */}
      <h1 className="text-center mb-5 text-3xl text-blue-400 font-bold">
        All Todos
      </h1>

      {/* All Tasks Container */}
      <div>
        {tasks.map((task, index) => (
          <div key={index} className="bg-slate-800 rounded-sm p-4 w-[95%] mx-auto flex flex-col justify-center gap-2">
            <h2 className="text-lg text-white font-bold">{`${index+1}) ${task.name}`}:</h2>
            <p className="text-base ml-3 px-2 rounded-lg py-1 bg-slate-700">{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListTodos;
