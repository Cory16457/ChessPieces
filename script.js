function confirmation() {
  var confirmation = "confirm"
  var input =             document.getElementById("confirm").value;
  if (input == confirmation) {
    alert('Thank you for confirming your purchase! Thank you.')
  }
  else {
    alert('Wrong confirmation code! Type confirm to confirm your purchase.')
  }
}