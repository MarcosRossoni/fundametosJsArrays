const alunos = ['Joao', 'Juliana', 'Caio', 'Ana']

const mediasDosAlunos = [10,7,9,6]

let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ',sua nota e ' + listaDeNotasEAlunos[1][indice]
    } else {
        return "Aluno nao cadastrado"
    }
}

console.log(exibeNomeNota("Joao"))