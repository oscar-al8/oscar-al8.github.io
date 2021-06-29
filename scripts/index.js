function copyGmail(){
  var copyText = document.querySelector("#copy-gmail");
  var email = copyText.innerHTML;
  copy(email);
}

document.querySelector("#copy-gmail-click").addEventListener("click", copyGmail);

function copyHotmail(){
  var copyText = document.querySelector("#copy-hotmail");
  var email = copyText.innerHTML;
  copy(email);
}

document.querySelector("#copy-hotmail-click").addEventListener("click", copyHotmail);

function copy(email) {
  var createInput = document.createElement('textarea');
  createInput.value = email;
  document.body.appendChild(createInput);
  createInput.select();
  document.execCommand("copy");
  createInput.remove();
}
  
