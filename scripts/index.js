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
  var div = document.getElementById('alertCopy');
  var newFirstElement = `
      <div class="alert alert-success alert-dismissible fade show" role="alert" id='copy-alert'>
          <strong>Email copied!</strong>
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
  `;
  div.innerHTML = newFirstElement;
  setTimeout(function(){
    div.innerHTML = '';
  }, 3500);
}
  
