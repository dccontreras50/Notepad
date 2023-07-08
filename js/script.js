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

// dark mode
function toggleDarkMode() {
  var body = document.body;
  body.classList.toggle("dark-mode");
}



// Función para generar el audio
function generarAudio() {
  const texto = document.getElementById("cuadrodetexto").value; // Obtener el contenido del textarea
  const synth = window.speechSynthesis; // Objeto de síntesis de voz del navegador
  const utterance = new SpeechSynthesisUtterance(texto); // Crear una nueva instancia de mensaje de síntesis de voz
  synth.speak(utterance); // Generar el audio
}

// Evento clic del botón
document.getElementById("btn-generar").addEventListener("click", generarAudio);
