const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];

const salaJava = [6, 5, 8, 9, 5, 6];

const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasSala){
    const mediaSala = notasSala.reduce((somaNotas,nota)=>{
      return somaNotas+nota;
    },0);

    return  mediaSala/notasSala.length;

   
}

console.log(`A media da sala é ${calculaMedia(salaJS)}`)