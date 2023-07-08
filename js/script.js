// copy text

    const $content = document.getElementById('cuadrodetexto'),
        $btncopy = document.getElementById('btncopy'),
        $title = document.getElementById('title');

$btncopy.addEventListener('click', e =>{
    $content.select();
    document.execCommand('copy');

    $title.innerHTML = 'Copiado!'

    setTimeout(() => {
    $title.innerHTML = 'Bloc de notas para tu disfrute';
  }, 2000); // 2000 milisegundos = 2 segundos

})




// button switch
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



// pdf


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


function toggleDarkMode() {
  var body = document.body;
  body.classList.toggle("dark-mode");
}
