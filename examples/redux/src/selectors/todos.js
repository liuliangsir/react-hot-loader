const getTodos = store => store.todos;

export const getTodoList = store => (getTodos(store) ? getTodos(store).allIds : []);

export const getTodoById = (store, id) => (getTodos(store) ? { ...getTodos(store).byIds[id], id } : {});

export const getAllTodo = store => getTodoList(store).map(id => getTodoById(store, id));
