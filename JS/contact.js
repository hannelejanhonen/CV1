function validate_form() {
  valid = true;

  if (document.myForm.fname.value == "") {
    alert("Please fill in the 'Firstname' box");
    valid = false;
    return valid;
  }

  if (document.myForm.lname.value == "") {
    alert("Please fill in the 'Lastname' box");
    valid = false;
    return valid;
  }

  if (document.myForm.gender.selectedIndex == "") {
    alert("Please select your 'Gender'");
    valid = false;
    return valid;
  }

  if (document.myForm.age.value == "") {
    alert("Please fill your 'Age'");
    valid = false;
    return valid;
  }

  if (document.myForm.email.value == "") {
    alert("Please fill your 'Email'");
    valid = false;
    return valid;

  }

  if (document.myForm.website.value == "") {
    alert("Please fill your 'Website address'");
    valid = false;
    return valid;

  }

  if (document.myForm.comments.value == "") {
    alert("Please fill in the 'Your message' box");
    valid = false;
    return valid;

  }

  return valid;
}

function myFunction() {
  alert("The form was submitted");
}
