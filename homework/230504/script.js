const form = document.querySelector(".todo-form");

const init = () => {
  form.addEventListener("submit", addTodoItem);
};

//submit 시 새로고침 방지, 입력한 텍스트를 todoContent 변수로 받아옴
const addTodoItem = () => {
  event.preventDefault();
  const todoContent = document.querySelector(".todo-input").value;
  if (todoContent) printTodoItem(todoContent);
};
