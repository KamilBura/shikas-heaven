function validateForm() {
  var a = document.forms["report-form"]["ingame-name"].value;
  var b = document.forms["report-form"]["_replyto"].value;
  var c = document.forms["report-form"]["message"].value;
  var d = document.forms["report-form"]["reason"].value;
  if (a == null || a == "", b == null || b == "", c == null || c == "", d == undefined || d == "") { 
    alert("Please Fill All Required Field!");
    document.getElementById('submit-btn').classList.add('btn-danger');
    return false;
  } else {
    document.getElementById('submit-btn').classList.add('btn-success');
    alert("You will be redirected to the Verification Site! After Succesfully Verifiaction the E-Mail will be Sended.");
    return false;
  }
};
