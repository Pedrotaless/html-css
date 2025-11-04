var titulo = document.getElementById("titulo");
var btn = document.getElementById("bscrBtn");
var livrosContainer = document.getElementById("livros");
var tabela = document.createElement("table");
tabela.id = "tabela";
btn.addEventListener('click', function() {
   // alert(titulo.value)

fetch('https://livros.acilab.com.br/api/livros/'+titulo.value)
     .then(response => response.json())
     .then(data => {
        console.log(data);
     })
     .catch(error => {
        console.error('Error: ', error);
     });
});
  
     data.forEach(livro => {
        innertext += "<tr><td>" + livro.id + "</td><td>" + livro.titulo + "</td><td>" + livro.autor + "</td><td>" + livro.ano + "</td></tr>";
     });
     