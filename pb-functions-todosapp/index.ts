/* ToDos List App
"Shopping"
"Home work"
"Go to the gym"
create TODOs App
create function
Add item
create function to Insert new items to toDosStore
Add Items
create function to insert array of todos
Remove Item
create function to remove any item by order number
the function takes one Argument as item order number
Edit Item
create function to edit any item by order number
the function takes 2 Arguments ==> the first Argument is item order number and the Second Argument is new item value
Edit Items
creat function to edit todos by passing array of todos order numbers
Read TodosList
RenderToDosListTemplate function
this function prints the end Results as string template.
check if toDosStore is empty return a message (To do list stor is empty)
else return todos template
Call Stack
insertTodo("test1");
insertTodo("test2");
insertTodo("test4");
insertTodo("test5");
removeTodo(3);
removeTodo(5);
insertTodo("Call Alex");
editTodo(3, "Pay bills");
editTodo(5, "Visiting Tommy");
createTodos(["Go to supermarket", "Meet with Ghassan", "New test"]);

updateTodos(
  [2, 4, 6],
  ["Meet with PR department", "By milk", "Check the internet connection"]
);
render to do template
console.log(RenderToDosListTemplate());
// toDosStore is empty ==> To do list is empty


ToDo List: 
 1- Shopping 
 2- Meet with PR department 
 3- Pay bills 
 4- By milk 
 5- Visiting Tommy 
 6- Check the internet connection 
 7- Go to supermarket 
 8- Meet with Ghassan 
 9- New test */

 const getId = (()=>{
   let id = 0;
   return ()=>id++
 })()

 class ToDoList {
   constructor(listName: string, todos: {id: number, todo: string}[] = []){
     this.listName = listName;
     this.toDosStore = todos;
   }
   listName;
   toDosStore;
   insertTodo(todo: string){
     this.toDosStore.push({id: getId(), todo: todo})
   }
   createTodos(todos: string[]){
     todos.forEach((item)=>this.insertTodo(item))
   }
   removeTodo(id: number){
     this.toDosStore.splice(this.toDosStore.findIndex(item=> item.id === id), 1)
   }
   editTodo(id: number, todo: string){
     const item = this.toDosStore.find(item => item.id === id);
     if(item) item.todo = todo;
   }

   updateTodos(ids: number[], todos: string[]){
     ids.forEach((id,index) => this.editTodo(id, todos[index]))
   }

   renderToDoList(){
     console.log("ToDo List:");
     let line = 1;
     for (const todo of this.toDosStore) {
       console.log(`${line++}- ${todo.todo}`);
     }
     
   }
 }

 const list = new ToDoList("MyTodos")

list.insertTodo("test1");
list.insertTodo("test2");
list.insertTodo("test4");
list.insertTodo("test5");
list.removeTodo(3);
list.removeTodo(5);
list.renderToDoList()
list.insertTodo("Call Alex");
list.editTodo(3, "Pay bills");
list.editTodo(5, "Visiting Tommy");
list.createTodos(["Go to supermarket", "Meet with Ghassan", "New test"]);

list.updateTodos(
  [2, 4, 6],
  ["Meet with PR department", "By milk", "Check the internet connection"]
);
list.renderToDoList()

console.log(list);
