const listItem = [];

export const getListTodo = () => new Promise((resolve)=> resolve(listItem));
export const getItemById = (id) => new Promise((resolve)=> resolve(listItem.find(x=>x.id===id)));