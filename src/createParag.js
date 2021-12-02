export function createParag(element) {
  element.innerHTML = `<input class ="text"
       type="text" placeholder="следующий">
<button class="button">добавить</button>
<div class="block">
    <p>Первый параграф</p>
    <p>Второй параграф</p>
    <p>Третий параграф</p>
    <p>Четвертый параграф</p>
    </div>
`;
  const input = element.querySelector(".text");
  const button = element.querySelector(".button");
  button.hidden = !input.value;
  input.addEventListener("input", () => {
    button.hidden = false;
  });
  button.addEventListener("click", buttonClick);
}
function buttonClick() {
  addElementDiv();
  clearInput();
  deleteText();
}

function addElementDiv() {
  const input = document.querySelector(".text");
  const nextEl = document.createElement("p");
  nextEl.innerHTML = input.value;
  const block = document.querySelector(".block");
  block.append(nextEl);
}

function clearInput() {
  const input = document.querySelector(".text");
  const button = document.querySelector(".button");
  input.value = "";
  button.hidden = true;
}
function deleteText() {
  const el = document.querySelectorAll("p");
  if (el.length > 5) {
    el[0].remove();
  }
}
