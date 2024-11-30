import Link from "next/link";

const Header = () => {
  return (
    <div className="h-[10vh] bg-[#252525] sticky top-0 shadow-sm shadow-gray-600">
      <div className="h-full w-[90%] md:w-[80%] mx-auto flex items-center justify-between">
        <div>
          <h1 className="font-bold text-3xl uppercase text-center w-full">
            Todo List App
          </h1>
        </div>

        {/* Add Todo & All Todos - Link Button */}
        <div className="space-x-4">
          {/* Add Todo Button */}
          <Link
            href="#addTodo"
            className="py-1 px-2.5 border-[1.5px] rounded-lg text-lg bg-blue-100 font-semibold text-blue-700 hover:bg-blue-200"
          >
            Add Todo
          </Link>

          {/* List All Todos */}
          <Link
            href="#allTodos"
            className="py-1 px-2.5 border-[1.5px] rounded-lg text-lg text-blue-400 font-semibold border-blue-700 hover:bg-[#142128]"
          >
            All Todos
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header