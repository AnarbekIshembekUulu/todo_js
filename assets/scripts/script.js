const inputTitle = document.querySelector("input");
const textArea = document.querySelector("textarea");
const btnAdd = document.querySelector("button");
const todoListContainer = document.querySelector(".list");
/////
const createTodo = () => {
    const divTodo = document.createElement("div");
    const h4TodoTitle = document.createElement("h4");
    const todoDesc_P = document.createElement("p");
    const btnDelete = document.createElement("button");

    divTodo.classList = "todo";
    h4TodoTitle.classList = "todo__title";
    todoDesc_P.classList = "todo__desc";

    btnDelete.innerText = "delete";
    btnDelete.addEventListener("click", () => {
        todoListContainer.removeChild(divTodo);
    });

    h4TodoTitle.innerText = inputTitle.value;
    todoDesc_P.innerText = textArea.value;
    divTodo.append(h4TodoTitle, todoDesc_P, btnDelete);
    todoListContainer.append(divTodo);
};
/////
btnAdd.addEventListener("click", () => {
    if (inputTitle.value.trim() && textArea.value.trim()) {
        createTodo();
        inputTitle.value = "";
        textArea.value = "";
    }
});
