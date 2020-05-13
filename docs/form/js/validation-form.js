/*General Validations*/

function validateRequiredInput() {
  var flag = true;
  for (var i = 0; i < document.forms[0].elements.length; i++) {
    var elemento = document.forms[0].elements[i];
    if (elemento.value == "" && elemento.type == "text") {
      elemento.className = "error";
      if (elemento.id == "id") {
        document.getElementById("message-id").innerHTML = "<br>La cedula esta vacio";
      }
      if (elemento.id == "name") {
        document.getElementById("message-name").innerHTML = "<br>El nombre esta vacio";
      }
      if (elemento.id == "lastname") {
        document.getElementById("message-lastname").innerHTML = "<br>El Apellido esta vacio";
      }
      if (elemento.id == "direction") {
        document.getElementById("message-direction").innerHTML = "<br>La direccion esta vacio";
      }
      if (elemento.id == "phone") {
        document.getElementById("message-phone").innerHTML = "<br>El telefono esta vacio";
      }
      if (elemento.id == "date") {
        document.getElementById("message-date").innerHTML = "<br>La fecha de nacimiento esta vacia";
      }
      if (elemento.id == "email") {
        document.getElementById("message-email").innerHTML = "<br>El email esta vacio";
      }
      if (elemento.type == "password") {
        document.getElementById("message-password").innerHTML = "<br>La contraseña esta vacia";
      }
    }
    return flag;
  }
  if (!flag) {
    alert("Error: revisar los comentario");
  }
  return flag;
}

function validateOnlyNumbers(evt) {
  var charCode = evt.which ? evt.which : event.keyCode;
  if (!(charCode >= 48 && charCode <= 57)) {
    alert("Ingrese solo numeros.");
    return false;
  }
  return true;
}

function validateOnlyText(evt) {
  evt = evt ? evt : event;
  var charCode = evt.charCode
    ? evt.charCode
    : evt.keyCode
      ? evt.keyCode
      : evt.which
        ? evt.which
        : 0;
  if (
    charCode > 32 &&
    (charCode < 65 || charCode > 90) &&
    (charCode < 97 || charCode > 122)
  ) {
    alert("Ingrese solo letras.");
    return false;
  }
  return true;
}

function checkDate(evt) {
  var charCode = evt.which ? evt.which : event.keyCode;
  if (!(charCode >= 47 && charCode <= 57)) {
    alert("Ingrese solo numeros.");
    return false;
  }
}

/* Clean Form */

function cleanForm() {
  location.reload();
}

/*Validations for type*/

function validateID() {
  var elemento = document.getElementById("id");
  var id_numbers = [];
  if (elemento.value.length == 10) {
    for (var i = 0; i < elemento.value.length; i++) {
      id_numbers[i] = parseInt(elemento.value.charAt(i));
    }
    if (id_numbers[2] <= 6 && id_numbers[2] >= 0) {
      var comprobar = [2, 1, 2, 1, 2, 1, 2, 1, 2];
      var varID = 0;
      for (i = 0; i < comprobar.length; i++) {
        id_numbers[i] *= comprobar[i];
        if (id_numbers[i] >= 10) {
          id_numbers[i] -= 9;
        }
        varID += id_numbers[i];
      }
      varID += id_numbers[i];
      varID %= 10;
      if (varID == 0) {
        document.getElementById("message-id").innerHTML = "";
        return true;
      } else {
        document.getElementById("message-id").innerHTML = "<br>Numero de cedula invalida";
      }
    }
  } else {
    document.getElementById("message-id").innerHTML = "<br>La cedula no se compone de 10 digitos";
  }
  return false;
}

function validateName() {
  var elemento = document.getElementById("name");
  if (elemento.value.indexOf(" ") == -1) {
    document.getElementById("message-name").innerHTML = "<br>Ingrese dos nombres";
  } else if (elemento.value.indexOf(" ") >= 3 && elemento.value.substring(elemento.value.indexOf(" "), elemento.value.length).length > 3) {
    document.getElementById("message-name").innerHTML = "";
    return true;
  } else {
    document.getElementById("message-name").innerHTML = "<br> Ingresar un nombre Valido";
  }
  return false;
}

function validateLastname() {
  var elemento = document.getElementById("lastname");
  if (elemento.value.indexOf(" ") == -1) {
    document.getElementById("message-lastname").innerHTML = "<br>Ingrese dos apellidos";
  } else if (elemento.value.indexOf(" ") >= 3 && elemento.value.substring(elemento.value.indexOf(" "), elemento.value.length).length > 3) {
    document.getElementById("message-lastname").innerHTML = "";
    return true;
  } else {
    document.getElementById("message-lastname").innerHTML = "<br> Ingresar un apellido Valido";
  }
  return false;
}

function validateDate() {
  var elemento = document.getElementById("date");
  var state = true;
  if (elemento.value.length == 10) {
    var date = elemento.value.split("/");
    var day = date[0];
    var month = date[1];
    var year = date[2];
    var maxDay = 31;

    /* Validate Year */

    if (year > new Date().getFullYear()) {
      document.getElementById("message-date").innerHTML = "<br>El año no debe ser mayor al actual";
      state = false;
    } else if (year < 1900) {
      document.getElementById("message-date").innerHTML = "<br>El año no debe ser menor a 1900";
      state = false;
    }

    /* Validate Month */

    switch (parseInt(month)) {
      case 1:
        maxDay = 31;
        break;
      case 2:
        if (year % 4 == 0) maxDay = 29;
        else maxDay = 28;
        break;
      case 3:
        maxDay = 31;
        break;
      case 4:
        maxDay = 30;
        break;
      case 5:
        maxDay = 31;
        break;
      case 6:
        maxDay = 30;
        break;
      case 7:
        maxDay = 31;
        break;
      case 8:
        maxDay = 31;
        break;
      case 9:
        maxDay = 30;
        break;
      case 10:
        maxDay = 31;
        break;
      case 11:
        maxDay = 30;
        break;
      case 12:
        maxDay = 31;
        break;
      default:
        document.getElementById("message-date").innerHTML = "<br>El mes ingresado no existe";
        state = false;
    }

    /* Validate Day */

    if (day < 1 || day > maxDay) {
      document.getElementById("message-date").innerHTML = "<br>El dia ingresado no existe";
      state = false;
    }
  }
  if (state == true) document.getElementById("message-date").innerHTML = ""; return true;
  return false;
}

function validateEmail() {
  var elemento = document.getElementById("email");
  var email = elemento.value.split("@");
  if (email[0].length < 3) {
    document.getElementById("message-email").innerHTML = "<br>El correo debe tener minimo 3 caracteres antes del @";
  }
  if (email[1].localeCompare("est.ups.edu.ec") == "0" || email[1].localeCompare("ups.edu.ec") == "0") {
    document.getElementById("message-email").innerHTML = "";
    return true;
  } else {
    document.getElementById("message-email").innerHTML = "<br>Posibles direcciones validas 123@ups.edu.ec ; 123@est.ups.edu.ec";
  }
  return false;
}

function validatePassword() {
  var elemento = document.getElementById("password");
  if (elemento.value.length >= 8) {
    document.getElementById("message-password").innerHTML = "";
    var character = false;
    var upperLetter = false;
    var lowerLetter = false;
    for (var i = 0; i < elemento.value.length; i++) {
      var codigo = elemento.value.charCodeAt(i);
      if ((codigo == 95 || codigo == 64 || codigo == 36) && !character) character = true;
      else if (codigo > 64 && codigo < 91 && !upperLetter) upperLetter = true;
      else if (codigo > 96 && codigo < 123 && !lowerLetter) lowerLetter = true;
    }
    if (!character)
      document.getElementById("message-password").innerHTML = "<br>Debe contener un caracter especial @ _ $";
    if (!upperLetter)
      document.getElementById("message-password").innerHTML = "<br>Debe contener una Mayuscula";
    if (!lowerLetter)
      document.getElementById("message-password").innerHTML = "<br>Debe contener una minuscula";
  } else {
    document.getElementById("message-password").innerHTML = "<br>Contraseña debe tener minimo 8 caracteres";
  }
  if (character && upperLetter && lowerLetter) return true;
  return false;
}