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
  pdfMake.createPdf(docDefinition).download('Nota.pdf');
}



// EXPORT TXT
document.getElementById("downloadtxt").addEventListener("click", function() {
  // Obtener el contenido del textarea
  var textToSave = document.getElementById("cuadrodetexto").value;

  // Crear un elemento <a> para descargar el archivo
  var downloadLink = document.createElement("a");
  downloadLink.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(textToSave));
  downloadLink.setAttribute("download", "Nota.txt");

  // Simular el clic en el enlace de descarga
  downloadLink.click();
});



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
document.getElementById("btn-generar-audio").addEventListener("click", generarAudio);



// contador de palabras
var textarea = document.getElementById("cuadrodetexto");
var wordCountElement = document.getElementById("wordCount");

textarea.addEventListener("input", function() {
  var text = textarea.value;
  var words = text.trim().split(/\s+/);
  var wordCount = words.length;

  wordCountElement.textContent = "Número de palabras: " + wordCount;
});







// dibujo
var canvas = new fabric.Canvas('canvas', {
  width: window.innerWidth - 80,
  height: 500
});
var undoButton = document.getElementById('undoButton');
var redoButton = document.getElementById('redoButton');
var exportButton = document.getElementById('exportButton');
var clearButton = document.getElementById('clearButton');
var undoHistory = [];
var redoHistory = [];

undoButton.addEventListener('click', undo);
redoButton.addEventListener('click', redo);
exportButton.addEventListener('click', exportImage);
clearButton.addEventListener('click', clearCanvas);

canvas.isDrawingMode = true;
canvas.freeDrawingBrush.width = 2;
canvas.freeDrawingBrush.color = 'purple';

canvas.on('path:created', function(e) {
  undoHistory.push(e.path);
  redoHistory = [];
});

function undo() {
  if (undoHistory.length > 0) {
    var path = undoHistory.pop();
    redoHistory.push(path);
    canvas.remove(path);
    canvas.renderAll();
  }
}

function redo() {
  if (redoHistory.length > 0) {
    var path = redoHistory.pop();
    undoHistory.push(path);
    canvas.add(path);
    canvas.renderAll();
  }
}

function exportImage() {
  canvas.backgroundColor = '#ffffff';
  canvas.renderAll();

  var dataURL = canvas.toDataURL({
    format: 'jpeg',
    quality: 0.8
  });
  var link = document.createElement('a');
  link.href = dataURL;
  link.download = 'canvas_image.jpg';
  link.click();
}

function clearCanvas() {
  canvas.clear();
  canvas.backgroundColor = '#ffffff';
  canvas.renderAll();
  undoHistory = [];
  redoHistory = [];
}

window.addEventListener('resize', function() {
  canvas.setWidth(window.innerWidth - 80);
});
