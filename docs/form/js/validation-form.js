var id = false;
var name = false;
var lastname = false;
var date = false;
var email = false;
var password = false;

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
      if (elemento.id == "direccion") {
        document.getElementById("message-date").innerHTML = "<br>La fecha de nacimiento esta vacia";
      }
      if (elemento.id == "telefono") {
        document.getElementById("message-email").innerHTML = "<br>El email esta vacio";
      }
      if (elemento.type == "password") {
        document.getElementById("message-password").innerHTML = "<br>La contraseña esta vacia";
      }
    }
    flag = false;
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

/* Clean Form */

function cleanForm() {
  location.reload();
}

/*Validations for type*/

function validateID() {
  id = false;
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
        id = true;
        return true;
      } else {
        id = false;
        document.getElementById("message-id").innerHTML =
          "<br>Numero de cedula invalida";
      }
    }
  } else {
    id = false;
    document.getElementById("message-id").innerHTML =
      "<br>La cedula no se compone de 10 digitos";
  }
  return false;
}

function validateName() {
  name = false;
  var elemento = document.getElementById("name");
  if (elemento.value.length > 2) {
    name = true;
    return true;
  } else {
    document.getElementById("message-name").innerHTML =
      "<br>Ingrese nombre valido";
  }
  return false;
}

function validateLastname() {
  lastname = false;
  var elemento = document.getElementById("lastname");
  if (elemento.value.length > 2) {
    lastname = true;
    return true;
  } else {
    document.getElementById("message-lastname").innerHTML =
      "<br>Ingrese apellido valido";
  }
  return false;
}

function validateDate() {
  date = false;
  var elemento = document.getElementById("date");
  var fecha = elemento.value.split("/");
  if (elemento.value.length != 10) {
    document.getElementById("message-date").innerHTML =
      "<br>Ingrese fecha valida: 04/11/1990";
    return false;
  }
  try {
    if (fecha.length == 3 && fecha[2].length == 4) {
      var dia = fecha[0];
      var mes = fecha[1];
      var year = fecha[2];
      var dmax;
      if (year < 1000 || year > new Date().getFullYear()) {
        alert("error año");
        if (year > new Date().getFullYear())
          document.getElementById("message-date").innerHTML =
            "<br>El año no debe ser mayor al actual";
        return false;
      }
      if (dia.length == 2 && mes.length == 2 && year.length == 4) {
        switch (parseInt(mes)) {
          case 1:
            dmax = 31;
            break;
          case 2:
            if (year % 4 == 0) dmax = 29;
            else dmax = 28;
            break;
          case 3:
            dmax = 31;
            break;
          case 4:
            dmax = 30;
            break;
          case 5:
            dmax = 31;
            break;
          case 6:
            dmax = 30;
            break;
          case 7:
            dmax = 31;
            break;
          case 8:
            dmax = 31;
            break;
          case 9:
            dmax = 30;
            break;
          case 10:
            dmax = 31;
            break;
          case 11:
            dmax = 30;
            break;
          case 12:
            dmax = 31;
            break;
          default:
            alert("error mes");
            document.getElementById("message-date").innerHTML =
              "<br>El mes ingresado no existe";
            return false;
        }
        if (dia < 1 || dia > dmax) {
          alert("error dia");
          document.getElementById("message-date").innerHTML =
            "<br>El dia ingresado no existe";
          return false;
        }
      } else {
        alert("Error fechas");
        estado = false;
      }
    }
    if (
      (fecha.length != 3 || fecha[2].length < 4) &&
      elemento.value.length == 10
    ) {
      alert("Error fecha");
      document.getElementById("message-date").innerHTML =
        "<br>Ingrese fecha valida: 04/11/1990";
      return false;
    }
  } catch (err) {
    alert("Error fechas");
    return false;
  }
  date = true;

  return true;
}

function validateEmail() {
  email = false;
  var elemento = document.getElementById("email");
  var correo = elemento.value.split("@");
  if (correo.length == 2) {
    if (correo[0].length < 3) {
      document.getElementById("message-email").innerHTML =
        "<br>Posibles direcciones validas 123@ups.edu.ec ; 123@est.ups.edu.ec";
      return false;
    }
    if (
      correo[1].localeCompare("est.ups.edu.ec") == "0" ||
      correo[1].localeCompare("ups.edu.ec") == "0"
    ) {
      document.getElementById("message-email").innerHTML = "";
    } else {
      document.getElementById("message-email").innerHTML =
        "<br>@ups.edu.ec <br> @est.ups.edu.ec";
      return false;
    }
  } else {
    document.getElementById("message-email").innerHTML =
      "<br>Direccion no valido 123@ups.edu.ec <br>Direccion no valido 123@est.ups.edu.ec";
    return false;
  }
  email = true;

  return true;
}

function validatePassword() {
  password = false;
  var elemento = document.getElementById("password");
  if (elemento.value.length >= 8) {
    document.getElementById("mensajePassword").innerHTML = "";
    var banCaracter = false;
    var banMayus = false;
    var banMinus = false;
    for (var i = 0; i < elemento.value.length; i++) {
      var codigo = elemento.value.charCodeAt(i);
      if ((codigo == 95 || codigo == 64 || codigo == 36) && !banCaracter)
        banCaracter = true;
      else if (codigo > 64 && codigo < 91 && !banMayus) banMayus = true;
      else if (codigo > 96 && codigo < 123 && !banMinus) banMinus = true;
    }
    if (!banCaracter)
      document.getElementById("mensajePassword").innerHTML =
        "<br>Debe contener un caracter especial @ _ $";
    if (!banMayus)
      document.getElementById("mensajePassword").innerHTML =
        "<br>Debe contener una Mayuscula";
    if (!banMinus)
      document.getElementById("mensajePassword").innerHTML =
        "<br>Debe contener una minuscula";
  } else {
    document.getElementById("mensajePassword").innerHTML =
      "<br>Contraseña debe tener minimo 8 caracteres";
    return false;
  }
  if (banCaracter && banMayus && banMinus) password = true;

  return true;
}

function checkDate(evt) {
  var charCode = evt.which ? evt.which : event.keyCode;
  if (!(charCode >= 47 && charCode <= 57)) {
    alert("Ingrese solo numeros.");
    return false;
  }
}
