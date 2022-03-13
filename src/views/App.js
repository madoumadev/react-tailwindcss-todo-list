import React,{useState} from "react";
import '../assets/index.css'
import { PlusCircleIcon,TrashIcon  ,ChevronDownIcon, CheckCircleIcon  } from '@heroicons/react/solid'
import "react-datepicker/dist/react-datepicker.css";


function App() {
    const [list, setList] = useState([]);
    const [service, setService] = useState("");
    const [input, setInput] = useState("");

    const addTodo = (title, service) => {
        const newTodo =  {
            id: Math.random(),
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
            title: title,
            service: service
        };

        if (newTodo.title.length > 0 && newTodo.service.length > 0){
            setList([newTodo, ...list]);
            setInput("");
            setService("");
        }else{
            alert('Empty Fields')
        }

    }

    const deleteTodo = (id) => {
        const newList = list.filter((todo) => todo.id !==id);

        setList(newList);
    }

  return (
      <div className="bg-gray-200 flex flex-col space-y-3 h-screen w-full items-center justify-center lg:p-10">
          <div className="flex flex-col  bg-white lg:rounded-2xl shadow-lg h-full  w-full lg:w-6/12">
                <div className="flex justify-between items-center border-b border-gray-100 my-4 p-4">
                    <div className="flex space-x-4 items-center">
                        <span className="font-bold uppercase">my todo list</span>

                    </div>
                    <div className="flex items-center space-x-1">
                        <span className="capitalize text-sm">junaury 28</span>
                        <span className="bg-gray-100 rounded-md p-1">
                            <ChevronDownIcon  className="h-3 w-3 text-gray-500"/>
                        </span>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-2 lg:space-x-2 pl-4 pr-4">
                    <div className="lg:w-6/12 w-full">
                        <label>
                            <span>Task</span>
                            <input value={service} onChange={(e) => setService(e.target.value)} type="text" className="block w-full px-3 rounded-md border border-gray-100 bg-white py-2 outline-none "/>
                        </label>
                    </div>
                    <div className="lg:w-6/12 w-full">
                        <label>
                            <span>Service</span>
                            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" className="block w-full px-3 rounded-md border bg-white py-2 outline-none border-gray-100 "/>
                        </label>
                    </div>
                </div>

                <div className="p-4 flex justify-between">
                    <button onClick={()=> addTodo(input, service)} className="flex items-center space-x-2 px-3 py-1 hover:bg-purple-800 bg-purple-600 uppercase text-white rounded-md">
                        <PlusCircleIcon className="w-5 h-5"/>
                        <span>Add todo</span>
                    </button>
                    <span className="text-xs text-gray-500 mt-3">
                        You have {list.length} task(s)
                    </span>
                </div>

              <div className="flex flex-col pl-4 pr-4  overflow-x-hidden overflow-y-auto h-80 mb-10">
                  {list.map((todo) => (
                      <div key={todo.id} className="w-full border rounded-md flex flex-row justify-between shadow-sm   mb-2 p-2">
                          <div className="flex flex-row space-x-3">
                              <span className="rounded-full h-10 w-10  flex justify-center items-center">
                                  <CheckCircleIcon  className="w-10 h-10 text-purple-600"/>
                              </span>
                              <div className="flex flex-col text-gray-500">
                                  <span className="font-bold uppercase">{todo.service}</span>
                                  <div className="flex space-x-2 text-sm">
                                      <span>{todo.date}</span>
                                      <span className="ml-3">{todo.time}</span>
                                      <span className="ml-3 uppercase">{todo.title}</span>
                                  </div>
                              </div>
                          </div>
                          <button onClick={() => deleteTodo(todo.id)} className="mr-3 text-red-500 hover:text-red-600">
                            <TrashIcon className="w-5 h-5"/>
                          </button>
                      </div>
                  ))}
              </div>
          </div>


      </div>
  );
}

export default App;