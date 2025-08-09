"use client"

import { useState } from "react";
import { TodoItem } from "./types/TodoItem";

const Page = () => {
  const [itemInput, setItemInput] = useState('');

  const [list, setList] = useState<TodoItem[]>([
    { id: 1, label: 'Fazer dever de casa', checked: true },
    { id: 2, label: 'Comprar o bolo', checked: false }
  ]);

  const handleAddButton = () => {
    if(itemInput.trim() === '') return;

    setList([
      ...list,
      { id: list.length + 1, label: itemInput, checked: false }
    ]);
    setItemInput('');
  }

  const deleteItem = (id: number) => {
    setList(
      list.filter(item => item.id !== id)
    );
  }

  const toggleItem = (id: number) => {
    const newList = [...list];

    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].checked = !newList[i].checked;
      } 
    }

    setList(newList);
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center text-2xl">
      <h1 className=" lg:text-4xl mt-5">Lista de Tarefas</h1>

      <div className="w-3/4 flex lg:w-full lg:max-w-lg my-3 p-3 rounded-md bg-black border-2">
        <input 
          type="text"
          placeholder="O que deseja fazer?" 
          className="w-5 text-sm flex-1 border border-black bg-white p-3 lg:text-2xl text-black rounded-md mr-3"
          value={itemInput}
          onChange={e => setItemInput(e.target.value)}
        />
        <button onClick={handleAddButton} className="text-lg lg:text-2xl">Adicionar</button>
      </div>

      <p className="my-4">{list.length} itens na lista</p>

      <ul className="pl-10 text-xl w-full max-w-lg list-disc lg:pl-5 lg:text-2xl">
        {list.map((item) => (
          <li key={item.id}>
            <input onClick={() =>toggleItem(item.id)} type="checkbox" checked={item.checked} className="w-6 h-6 mr-3"/>
            {item.label} -  <button onClick={() => deleteItem(item.id)} className="hover:underline cursor-pointer">[ Deletar ]</button></li>
        ))}
      </ul>
    </div>
  );
}

export default Page;