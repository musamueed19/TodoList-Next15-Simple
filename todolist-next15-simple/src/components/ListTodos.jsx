"use client";


const ListTodos = ({ tasks, setTasks }) => {
  
  function handleDelete(index) {
    let mirrorTask = [ ...tasks ];
    mirrorTask.splice(index, 1);
    setTasks(mirrorTask);
  }


  return (
    <div className="bg-slate-900 rounded-sm py-8" id="allTodos">
      {/* Container Title Heading */}
      <h1 className="text-center mb-5 text-3xl text-blue-400 font-bold">
        All Todos
      </h1>

      {/* All Tasks Container */}
      <div>
        {tasks.length === 0 ? (
          <p className="bg-slate-800 rounded-sm p-4 w-[95%] mx-auto flex flex-col justify-center gap-2">
            No Tasks (Add some tasks)
          </p>
        ) : (
          tasks.map((task, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-sm p-4 w-[95%] mx-auto flex flex-col justify-center gap-2"
            >
              <div className="flex justify-between">
                <h2 className="text-lg text-white font-bold">
                  {`${index + 1}) ${task.name}`}:
                </h2>

                <button
                  className="text-red-500 border border-red-500 hover:bg-red-200 px-2 rounded-full"
                  onClick={() => handleDelete(index)}
                >
                  delete
                </button>
              </div>
              <p className="text-base ml-3 px-2 rounded-lg py-1 bg-slate-700">
                {task.description}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ListTodos;
