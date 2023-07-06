    const $content = document.getElementById('cuadrodetexto'),
        $btncopy = document.getElementById('btncopy'),
        $title = document.getElementById('title');

$btncopy.addEventListener('click', e =>{
    $content.select();
    document.execCommand('copy');

    $title.innerHTML = 'Copiado!'
})

var switchButton = document.getElementById("switch-button");
var myDiv = document.getElementById("agrandarcuadrotxt");

switchButton.addEventListener("click", function() {
  if (myDiv.classList.contains("col-lg-5")) {
    myDiv.classList.remove("col-lg-5");
    myDiv.classList.add("col-lg-12");
  } else {
    myDiv.classList.remove("col-lg-12");
    myDiv.classList.add("col-lg-5");
  }
});




function exportToPDF() {
  var contenido = document.getElementById('cuadrodetexto').value;

  // Crear el objeto de definición del documento PDF
  var docDefinition = {
    content: [
      { text: contenido }
    ]
  };

  // Generar el PDF
  pdfMake.createPdf(docDefinition).download('archivo.pdf');
}
