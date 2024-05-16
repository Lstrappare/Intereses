document.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById("excel");

  input.addEventListener('change', function (event) {
    const file = event.target.files[0];

    readXlsxFile(file).then(function (rows) {
      const cellValues = rows.slice(2, 12).map(function (row) {
        return row[1]; // Obtiene el valor de la columna B (index 1) para cada fila
      });

      // Asignar los valores a las variables
      const [caja, bancos, clientes, deudores, documentos, segurosPagados, rentasPagadas, ivaAcreditable, ivaPorAcreditar, almacen] = cellValues;

      // Mostrar los valores en la consola
      console.log("Caja:", caja);
      console.log("Bancos:", bancos);
      console.log("Clientes:", clientes);
      console.log("Deudores:", deudores);
      console.log("Documentos:", documentos);
      console.log("Seguros Pagados:", segurosPagados);
      console.log("Rentas Pagadas:", rentasPagadas);
      console.log("IVA Acreditable:", ivaAcreditable);
      console.log("IVA por Acreditar:", ivaPorAcreditar);
      console.log("Almacen:", almacen);
    });
  });
});
