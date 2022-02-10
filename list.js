var to_do = document.getElementsByClassName("to-do")[0];

var input = document.getElementById("input");

input.addEventListener('keydown', function(event){
    if(event.key==='Enter')
    {
        add_items();
    }
})

function add_items(){
    let parentDiv= document.createElement("div");
    let childDiv= document.createElement("div");

    parentDiv.className= "items";
    parentDiv.innerHTML='<div>'+input.value+'</div>';

    let checkbox=document.createElement("span");
    checkbox.className="material-icons";
    checkbox.innerHTML='<span>'+'check_box'+'</span>';
    checkbox.style.color="grey";
    checkbox.addEventListener('click',()=>{
        checkbox.style.color="limegreen";
    });

    let bin=document.createElement("span");
    bin.className="material-icons";
    bin.innerHTML='<span>'+'delete_forever'+'</span>';
    bin.style.color="#ff3333";
    bin.addEventListener('click', ()=>{
        parentDiv.remove();
    });

    childDiv.appendChild(checkbox);
    childDiv.appendChild(bin);

    parentDiv.appendChild(childDiv);
    
    to_do.appendChild(parentDiv);

    input.value='';
}