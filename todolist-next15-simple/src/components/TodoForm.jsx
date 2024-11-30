'use client'

import Button from "./Button";

const TodoForm = () => {
  return (
    <form className="bg-slate-900 rounded-sm">
      <div className="w-[90%] mx-auto py-10">
        {/* Form Input Fields - Group Container */}

        <div className="space-y-10">
          {/* Todo List name - title Section */}
          <div className="flex flex-col w-full md:w-[85%] space-y-2">
            <label htmlFor="name" className="text-lg">
              List Title:
            </label>
            <input
              name="name"
              className="text-black outline-none px-2 py-1 rounded-md focus:ring-4 focus:ring-slate-500"
              placeholder="List name"
              type="text"
            />
          </div>

          {/* Todo List Description */}
          <div className="flex flex-col w-full md:w-[85%] space-y-2">
            <label htmlFor="name" className="text-lg">
              List Description:
            </label>
            <textarea
              rows={4}
              name="name"
              className="text-black outline-none px-2 py-1 rounded-md focus:ring-4 focus:ring-slate-500"
              placeholder="Description ..."
              type="text"
            />
          </div>
        </div>

        {/* Button - Section */}
        <div className="mt-6 flex justify-center items-center md:w-[85%]">
          <Button label="Done" />
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
