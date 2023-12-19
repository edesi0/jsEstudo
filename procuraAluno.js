const alunos = ['Edesio','Gabriela','Thulio'];
const notas = [10,9,8];
const alunosNotas = [alunos,notas];
let indice=0;

function exibeNoneNotas(aluno){
  if (alunosNotas[0].includes(aluno)){
    indice = alunosNotas[0].indexOf(aluno);
    console.log('A média do aluno: '+aluno+' é :'+alunosNotas[1][indice]);
    
  }
  else{
    console.log('Aluno não encontrado!');
  }
}

exibeNoneNotas('Edesio');