//1.Assigning the input,button and the output container.
const addbtn = document.getElementById('addbtn');
const inputSearchbox = document.getElementById('inputsearchbox');
const outputcontainer = document.getElementById('outputcontainer');
const quote = document.getElementById('quote');
//2.Adding the function for the addbutton.
addbtn.addEventListener('click',function(){
    if (inputSearchbox.value.trim()==''){
        alert("dont forget to add task");
        }
        else{

    var outputbox = document.createElement('div');
    var checkbox = document.createElement('input');
    var output = document.createElement('span');
    var textNode = document.createTextNode(inputSearchbox.value.trim());
    output.appendChild(textNode);
    var trashicon = document.createElement('i');

    outputcontainer.appendChild(outputbox);
    outputcontainer.appendChild(quote);
    outputbox.appendChild(checkbox);
    outputbox.appendChild(output);
    outputbox.appendChild(trashicon);
    
    quote.style.display = 'none';
    outputbox.setAttribute('Class','outputbox');
    checkbox.setAttribute('Id','checkbox');
    checkbox.setAttribute('type','checkbox');
    checkbox.addEventListener('click',function(){
            output.style.textDecoration ='line-through';
    })
    output.setAttribute('Id','span');
    trashicon.setAttribute('Id','trashicon');
    trashicon.setAttribute('Class','fa-solid fa-trash-can');
    trashicon.addEventListener('click',function(){
        outputbox.remove();
    })

     }
     document.getElementById("inputsearchbox").value = "";
     
})




