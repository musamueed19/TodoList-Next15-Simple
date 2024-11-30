"use client";
import { useState, useEffect} from "react";

import Button from "./Button";

const TodoForm = ({tasks, setTasks}) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
    
    

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  function submitHandler(e) {
      e.preventDefault();
      

      console.log('---', formData, '---');
      setTasks([...tasks, formData]);
      

    console.log("List Added Successfully");
    }
    
    useEffect(() => {
        console.log(tasks);
        
    }, [tasks])

  return (
    <form onSubmit={submitHandler} className="bg-slate-900 rounded-sm py-8">
      <h1 className="text-center mb-5 text-3xl text-blue-400 font-bold">
        Add New List
      </h1>
      <div className="w-[90%] mx-auto">
        {/* Form Input Fields - Group Container */}

        <div className="space-y-10">
          {/* Todo List name - title Section */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-lg">
              List Title
            </label>
            <input
              name="name"
              className="text-black outline-none px-2 py-1 rounded-md focus:ring-4 focus:ring-slate-500 md:w-[85%]"
              placeholder="List name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          {/* Todo List Description */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="description" className="text-lg">
              List Description
            </label>
            <textarea
              rows={4}
              name="description"
              className="text-black outline-none px-2 py-1 rounded-md focus:ring-4 focus:ring-slate-500 md:w-[85%]"
              placeholder="Description ..."
              type="text"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Button - Section */}
        <div className="mt-6 flex justify-center md:justify-start items-center">
          <Button label="Done" type='submit' />
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
