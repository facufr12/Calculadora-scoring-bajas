function calculateResult() {
  const pathology = document.getElementById("pathology").value;
  const consumption = document.querySelector(
    'input[name="consumption"]:checked'
  ).value;
  const capitas = parseInt(document.getElementById("capitas").value);
  const ageRange = document.querySelector(
    'input[name="ageRange"]:checked'
  ).value;

  let result = "";

  // Condiciones para epilepsia
  if (pathology === "epilepsia") {
    if (consumption === "no") {
      if (capitas >= 2 && ageRange === "under65") {
        result = "Consultar con Fidelización"; // Epilepsia, sin consumo, 2 o más cápitas, menor de 65
      } else if (capitas === 1 && ageRange === "under65") {
        result = "GC"; // Epilepsia, sin consumo, 1 cápita, menor de 65
      } else if (capitas === 1 && ageRange === "over65") {
        result = "Consultar Con Fidelización"; // Epilepsia, sin consumo, 1 cápita, mayor de 65
      }
    } else {
      // Con consumo
      if (capitas === 1 && ageRange === "under65") {
        result = "GM"; // Epilepsia, con consumo, 1 cápita, menor de 65
      } else if (capitas >= 2) {
        result = "Consultar con Fidelización"; // Epilepsia, con consumo, 2 o más cápitas
      } else if (capitas === 1 && ageRange === "over65") {
        result = "GM"; // Epilepsia, con consumo, 1 cápita, mayor de 65
      }
    }
  }

  // Celiaquía con consumo, 1 cápita, mayor de 65 años
// Celiaquía con consumo, 1 cápita, mayor de 65 años
else if (pathology === "celiaquia") {
    if (consumption === "yes" && capitas === 1 && ageRange === "over65") {
      result = "GM"; // Celiaquía, con consumo, 1 cápita, mayor de 65
    }
  }
  

  // Condiciones para estudios neurológicos en pediátricos
  // Condiciones para estudios neurológicos en pediátricos
else if (pathology === "neurologicos") {
  if (consumption === "no") {
      if (capitas === 1 || capitas === 2) {
          result = "Consultar con Fidelización"; // Estudios neurológicos, sin consumo, 1 o 2 cápitas, menor de 65
      } else if (capitas >= 2 && ageRange === "over65") {
          result = "GC"; // Estudios neurológicos, sin consumo, 2 o más cápitas, mayor de 65
      }
  } else {
      // Con consumo
      if (capitas >= 1) {
          result = "GM"; // Estudios neurológicos, con consumo, 1 o más cápitas
      }
  }
}

  // Condiciones para enfermedades cardíacas
  else if (pathology === "cardiacas") {
    if (consumption === "no") {
      if (capitas === 1 && ageRange === "under65") {
        result = "GC"; // Sin consumo, 1 cápita, menor a 65
      } else if (capitas === 1 && ageRange === "over65") {
        result = "Consultar con Fidelización"; // Sin consumo, 1 cápita, mayor a 65
      } else if (capitas >= 2 && ageRange === "over65") {
        result = "GC"; // Sin consumo, 2 o más cápitas, mayor a 65
      } else if (capitas >= 2 && ageRange === "under65") {
        result = "GC"; // Sin consumo, 2 o más cápitas, menor a 65
      }
    } else {
      // Con consumo
      if (capitas === 1) {
        result = "GM"; // Con consumo, 1 cápita
      } else if (capitas >= 2) {
        result = "Consultar con Fidelización"; // Con consumo, 2 o más cápitas
      }
    }
  }

  // Condiciones para pacientes psiquiátricos
  else if (pathology === "psiquiatrico") {
    if (consumption === "no") {
      if (capitas >= 1) {
        result = "GC"; // Psiquiátricos, sin consumo, 1 o más cápitas
      }
    } else {
      // Con consumo
      if (capitas === 1) {
        if (ageRange === "under65") {
          result = "Consultar con Fidelización"; // Psiquiátricos, con consumo, 1 cápita, menor de 65
        } else {
          result = "GM"; // Psiquiátricos, con consumo, 1 cápita, mayor de 65
        }
      } else if (capitas >= 2) {
        // Psiquiátricos, con consumo, 2 o más cápitas
        result = "GM"; // En este caso, debe devolver GM independientemente de la edad
      }
    }
  }
  

  // Osteoporosis
  else if (pathology === "osteoporosis") {
    if (consumption === "yes" && capitas === 1 && ageRange === "over65") {
      result = "GM"; // Osteoporosis, con consumo, 1 cápita, mayor de 65
    }
  }
// Judicializados
else if (pathology === "judicializados") {
  if (consumption === "yes" && capitas === 1 && ageRange === "over65") {
      result = "GM"; // Judicializados, con consumo, 1 cápita, mayor de 65
  } else {
      result = "GM"; // En todas las combinaciones con Judicializados debe ser GM
  }
}
  // Otras patologías
  else if (
    ["diabetes", "oncológicas", "trasplantados", "artritis", "hiv"].includes(
      pathology
    )
  ) {
    result = "GM"; // Estas patologías tienen un resultado fijo "GM"
  } else if (pathology === "obesidad" && consumption === "yes") {
    result = "GM"; // Obesidad con consumo
  } else if (pathology === "cud") {
    result = "GM"; // CUD con cualquier condición
  } else {
    result = "GC"; // Por defecto, cualquier otra patología devuelve "GC"
  }

  document.getElementById("result").innerText = result; // Mostrar el resultado en el DOM
}
