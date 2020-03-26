var content = document.querySelector('.relogio')
const data = new Date();

var diaSemana = data.getDay();
var dia = data.getDate();
var mes = data.getMonth();
var ano = data.getFullYear();
var hora = data.getHours();
var minutos = data.getMinutes();

function day() {
  switch (diaSemana) {
    case 0:
      return 'Domingo'
    case 1:
      return 'Segunda-Feira'
    case 2:
      return 'Terça-Feira'
    case 3:
      return 'Quarta-Feira'
    case 4:
      return 'Quinta-Feira'
    case 5:
      return 'Sexta-Feira'
    case 6:
      return 'Sabado'
  }
}

function mounth() {
  switch (mes) {
    case 0:
      return 'Janeiro'
    case 1:
      return 'Fevereiro'
    case 2:
      return 'Março'
    case 3:
      return 'Abril'
    case 4:
      return 'Maio'
    case 5:
      return 'Junho'
    case 6:
      return 'Julho'
    case 7:
      return 'Agosto'
    case 8:
      return 'Setembro'
    case 9:
      return 'Outubro'
    case 10:
      return 'Novembro'
    case 11:
      return 'Dezembro'
  }
}

function relogio() {
  var date = document.createTextNode(`${day()}, ${dia} de ${mounth()} de ${ano}`);
  content.appendChild(date);

  var p = document.createElement('p')
  content.appendChild(p);
  var hour = document.createTextNode(`${hora}:${minutos}`);
  p.appendChild(hour);
};

relogio();