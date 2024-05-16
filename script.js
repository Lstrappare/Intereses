function calcularPeriodos(A, P, r) {
  // Convertir la tasa de interés a decimal
  r = r / 100; // Si la tasa está en porcentaje

  // Calcular el número de periodos usando la fórmula
  var n = Math.log(A / P) / Math.log(1 + r);

  return n;
}

function imprimir(){
  event.preventDefault(); // Evita que el formulario se envíe y recargue la página
  let montoInicial = parseFloat(document.getElementById("montoInicial").value);
  let montoFinal = parseFloat(document.getElementById("montoFinal").value);
  let interes = parseFloat(document.getElementById("intereses").value);
  let tipoDeInteres = document.getElementById("tipoDeInteres").value;
  let numeroDePlazos = parseInt(document.getElementById("numeroDePlazos").value);
  let container = document.getElementById("container");
  let tasaDeInteres = 0;

  if (interes > 1 && montoInicial > 0) {
    interes /= montoInicial;
    montoFinal = 0;
  } else if (interes > 1 && montoFinal > 0){
    montoInicial = montoFinal - interes;
    interes /= montoInicial
    montoInicial = 0;
  }
 
  if(tipoDeInteres == "compuesto"){
    if((montoInicial == 0 || montoInicial) == NaN && montoFinal > 0 && interes < 1 && numeroDePlazos > 0){
      
      montoInicial = montoFinal/(1 + interes)**numeroDePlazos;
      tasaDeInteres = interes * montoInicial;

      container.innerHTML += `<h2>Se calculó su inversión presente con interés compuesto.</h2>
                              <table>
                                <tr>
                                  <th>Tu inversión presente es de</th>
                                  <th>Tu tasa de interes es de</th>
                                  <th>Tus intereses son de</th>
                                  <th>Tu inversión final es de</th>
                                </tr>
                                <tr>
                                  <td>${montoInicial.toFixed(2)}</td>
                                  <td>${interes}</td>
                                  <td>${tasaDeInteres.toFixed(2)}</td>
                                  <td>${montoFinal.toFixed(2)}</td>
                                </tr>
                              </table>`;
    } else if ((montoFinal == 0 || montoFinal == NaN) && montoInicial > 0 && interes < 1 && numeroDePlazos > 0) {
      
      montoFinal = montoInicial*(1 + interes)**numeroDePlazos;
      tasaDeInteres = interes * montoInicial;
      
      container.innerHTML += `<h2>Se calculó su inversión futura con interés compuesto.</h2>
                              <table>
                                <tr>
                                  <th>Tu inversión presente es de</th>
                                  <th>Tu tasa de interes es de</th>
                                  <th>Tus intereses son de</th>
                                  <th>Tu inversión final es de</th>
                                </tr>
                                <tr>
                                  <td>${montoInicial.toFixed(2)}</td>
                                  <td>${interes}</td>
                                  <td>${tasaDeInteres.toFixed(2)}</td>
                                  <td>${montoFinal.toFixed(2)}</td>
                                </tr>
                              </table>`;
    } else if ((interes == 0 || interes == NaN) && montoInicial > 0 && montoFinal > 0 && numeroDePlazos > 0) {
      
      interes = Math.pow(montoFinal / montoInicial, 1 / periodos) - 1;
      tasaDeInteres = interes * montoInicial;

      container.innerHTML += `<h2>Se calculó su interes compuesto.</h2>
                              <table>
                                <tr>
                                  <th>Tu inversión presente es de</th>
                                  <th>Tu tasa de interes es de</th>
                                  <th>Tus intereses son de</th>
                                  <th>Tu inversión final es de</th>
                                </tr>
                                <tr>
                                  <td>${montoInicial.toFixed(2)}</td>
                                  <td>${interes}</td>
                                  <td>${tasaDeInteres.toFixed(2)}</td>
                                  <td>${montoFinal.toFixed(2)}</td>
                                </tr>
                              </table>`;
    } else if ((numeroDePlazos == 0 || numeroDePlazos == NaN) && montoInicial > 0 && montoFinal > 0 && interes < 1){
      numeroDePlazos = calcularPeriodos(montoInicial, montoInicial, interes)
      tasaDeInteres = interes * montoInicial;

      container.innerHTML += `<h2>Se calculó sus plazos con interes compuesto.</h2>
                              <table>
                                <tr>
                                  <th>Tu inversión presente es de</th>
                                  <th>Tu tasa de interes es de</th>
                                  <th>Tus intereses son de</th>
                                  <th>Tu inversión final es de</th>
                                  <th>Numero de Periodos</th>
                                </tr>
                                <tr>
                                  <td>${montoInicial.toFixed(2)}</td>
                                  <td>${interes}</td>
                                  <td>${tasaDeInteres.toFixed(2)}</td>
                                  <td>${montoFinal.toFixed(2)}</td>
                                  <td>${numeroDePlazos.toFixed(2)}</td>
                                </tr>
                              </table>`;
    } else {
      container.innerHTML += `<h2>Se calculó su interes compuesto.</h2>
                              <table>
                                <tr>
                                  <th>Tu inversión presente es de</th>
                                  <th>Tu tasa de interes es de</th>
                                  <th>Tus intereses son de</th>
                                  <th>Tu inversión final es de</th>
                                  <th>Numero de Periodos</th>
                                </tr>
                                <tr>
                                  <td>${montoInicial.toFixed(2)}</td>
                                  <td>${interes}</td>
                                  <td>${tasaDeInteres.toFixed(2)}</td>
                                  <td>${montoFinal.toFixed(2)}</td>
                                  <td>${numeroDePlazos.toFixed(2)}</td>
                                </tr>
                              </table>`;
    }
  } else {
    if((montoInicial == 0 || montoInicial == NaN) && montoFinal > 0 && interes < 1 && numeroDePlazos > 0){
      
      montoInicial = montoFinal/(1 + (numeroDePlazos * interes));
      tasaDeInteres = interes * montoInicial;

      container.innerHTML += `<h2>Se calculó su inversión presente con interés simple.</h2>
                              <table>
                                <tr>
                                  <th>Tu inversión presente es de</th>
                                  <th>Tu tasa de interes es de</th>
                                  <th>Tus intereses son de</th>
                                  <th>Tu inversión final es de</th>
                                </tr>
                                <tr>
                                  <td>${montoInicial.toFixed(2)}</td>
                                  <td>${interes}</td>
                                  <td>${tasaDeInteres.toFixed(2)}</td>
                                  <td>${montoFinal.toFixed(2)}</td>
                                </tr>
                              </table>`;
    } else if ((montoFinal == 0 || montoFinal == NaN) && montoInicial > 0 && interes < 1 && numeroDePlazos > 0) {
      
      montoFinal = montoInicial * (1 + (numeroDePlazos * interes));
      tasaDeInteres = interes * montoInicial;
      
      container.innerHTML += `<h2>Se calculó su inversión futura con interés simple.</h2>
                              <table>
                                <tr>
                                  <th>Tu inversión presente es de</th>
                                  <th>Tu tasa de interes es de</th>
                                  <th>Tus intereses son de</th>
                                  <th>Tu inversión final es de</th>
                                </tr>
                                <tr>
                                  <td>${montoInicial.toFixed(2)}</td>
                                  <td>${interes}</td>
                                  <td>${tasaDeInteres.toFixed(2)}</td>
                                  <td>${montoFinal.toFixed(2)}</td>
                                </tr>
                              </table>`;
    } else if ((interes == 0 || interes == NaN) && montoInicial > 0 && montoFinal > 0 && numeroDePlazos > 0) {
      
      interes = ((montoFinal/montoInicial) - 1)/numeroDePlazos;
      tasaDeInteres = interes * montoInicial;

      container.innerHTML += `<h2>Se calculó su interes simple.</h2>
                              <table>
                                <tr>
                                  <th>Tu inversión presente es de</th>
                                  <th>Tu tasa de interes es de</th>
                                  <th>Tus intereses son de</th>
                                  <th>Tu inversión final es de</th>
                                </tr>
                                <tr>
                                  <td>${montoInicial.toFixed(2)}</td>
                                  <td>${interes.toFixed(2)}</td>
                                  <td>${tasaDeInteres.toFixed(2)}</td>
                                  <td>${montoFinal.toFixed(2)}</td>
                                </tr>
                              </table>`;
    } else if ((numeroDePlazos == 0 || numeroDePlazos == NaN) && montoInicial > 0 && montoFinal > 0 && (interes < 1 || interes > 0)){
      numeroDePlazos = ((montoFinal/montoInicial) - 1)/interes;
      tasaDeInteres = interes * montoInicial;

      container.innerHTML += `<h2>Se calculó sus plazos con interes simple.</h2>
                              <table>
                                <tr>
                                  <th>Tu inversión presente es de</th>
                                  <th>Tu tasa de interes es de</th>
                                  <th>Tus intereses son de</th>
                                  <th>Tu inversión final es de</th>
                                  <th>Numero de Periodos</th>
                                </tr>
                                <tr>
                                  <td>${montoInicial.toFixed(2)}</td>
                                  <td>${interes}</td>
                                  <td>${tasaDeInteres.toFixed(2)}</td>
                                  <td>${montoFinal.toFixed(2)}</td>
                                  <td>${numeroDePlazos.toFixed(2)}</td>
                                </tr>
                              </table>`;
    } else {
      container.innerHTML += `<h2>Se calculó su interes simple.</h2>
                              <table>
                                <tr>
                                  <th>Tu inversión presente es de</th>
                                  <th>Tu tasa de interes es de</th>
                                  <th>Tus intereses son de</th>
                                  <th>Tu inversión final es de</th>
                                  <th>Numero de Periodos</th>
                                </tr>
                                <tr>
                                  <td>${montoInicial.toFixed(2)}</td>
                                  <td>${interes}</td>
                                  <td>${tasaDeInteres.toFixed(2)}</td>
                                  <td>${montoFinal.toFixed(2)}</td>
                                  <td>${numeroDePlazos.toFixed(2)}</td>
                                </tr>
                              </table>`;
    }
  }
}
   