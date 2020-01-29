const titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

document.querySelectorAll('#tabela-pacientes tr').forEach(paciente => {
    const peso = paciente.querySelector('.info-peso').textContent;
    const altura = paciente.querySelector('.info-altura').textContent;

    if(peso <= 0 || peso > 1000) {
        paciente.classList.add('invalido');
        paciente.querySelector('.info-imc').textContent = 'Peso inválido';
        return false;
    }

    if(altura <= 0 || altura > 3) {
        paciente.classList.add('invalido');
        paciente.querySelector('.info-imc').textContent = 'Altura inválida';
        return false;
    }

    const imc = peso / (altura * altura);
    paciente.querySelector('.info-imc').textContent = imc.toFixed(2);
});

document.querySelector('#adicionar-paciente').addEventListener('click', (event) => {
    event.preventDefault();
    
    const form = document.querySelector('#form-adiciona');
    const paciente = {
        'nome': form.nome.value,
        'peso': form.peso.value,
        'altura': form.altura.value,
        'gordura': form.gordura.value
    };

    let pacienteTr = document.createElement('tr');
    let nomeTd = document.createElement('td');
    let pesoTd = document.createElement('td');
    let alturaTd = document.createElement('td');
    let gorduraTd = document.createElement('td');
    let imcTd = document.createElement('td');

    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.peso / (paciente.altura * paciente.altura);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    document.querySelector('#tabela-pacientes').appendChild(pacienteTr);
});