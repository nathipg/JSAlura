getDadosPacienteForm = (form) => {
    return {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    };
};

montaTrPaciente = (paciente) => {

};

document.querySelector('#adicionar-paciente').addEventListener('click', (event) => {
    event.preventDefault();
    
    const form = document.querySelector('#form-adiciona');
    const paciente = getDadosPacienteForm(form);

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
    imcTd.textContent = paciente.imc;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    document.querySelector('#tabela-pacientes').appendChild(pacienteTr);
});