swal({
    title: "Task 1 & 2",
    text: "HEADLINE BAR! & ADD AND DELETE ITEM!",
  });

let btn = document.getElementById('add_btn');
btn.addEventListener('click' , addFood);
function addFood(e){
    let currentBtn = e.currentTarget;
    console.log(currentBtn);
    let currentInput = currentBtn.previousElementSibling;
    console.log(currentInput.value);
    let currentFoodName = currentInput.value;
    let newLi = document.createElement('li');
    newLi.className = `list-group-item d-flex justify-content-between my-1`;
    newLi.innerHTML =`
                <h4 class="flex-grow-1">${currentFoodName}</h4>
                <button class="btn-a mx-2">Read More!</button>
                <button id="btn1" class="btn-b" onclick="removeFood(this)">Delete</button>
    
    `
    let parentList = document.getElementById('parentList');
    parentList.appendChild(newLi);
    if(btn.click){
        currentInput.value = "";
    }
  
}
function removeFood(currentElement){
    currentElement.parentElement.remove()
}