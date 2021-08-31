function copyGmail(){
    var copyText = document.querySelector("#gmail");
    copy(copyText);
  }
  
document.querySelector("#gmail").addEventListener("click", copyGmail);

function copyHotmail(){
    var copyText = document.querySelector("#hotmail");
    copy(copyText);
}
  
document.querySelector("#hotmail").addEventListener("click", copyHotmail);

function copy(copyText) {

    var email = copyText.innerHTML;
    var createInput = document.createElement('textarea');
    createInput.value = email;
    document.body.appendChild(createInput);
    createInput.select();
    document.execCommand("copy");
    createInput.remove();
    if(document.getElementById('alert').classList[1] !== 'show'){
        document.getElementById('alert').classList.toggle('show');
        setTimeout(function(){
            document.getElementById('alert').classList.toggle('show');
        }, 2500);
    }

}
    
  

  
