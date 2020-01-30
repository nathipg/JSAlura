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
    let pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(montaTd(paciente.nome, 'nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'imc'));

    return pacienteTr;
};

montaTd = (dado, classe) => {
    let td = document.createElement('td');
    td.classList.add(`info-${classe}`);
    td.textContent = dado;
    return td;
};

document.querySelector('#adicionar-paciente').addEventListener('click', (event) => {
    event.preventDefault();
    
    const form = document.querySelector('#form-adiciona');
    const paciente = getDadosPacienteForm(form);
    const mensagemErro = document.querySelector('#mensagem-erro');
    const erroPaciente = validaPaciente(paciente);

    mensagemErro.textContent = '';

    if(erroPaciente.length > 0) {
        mensagemErro.textContent = erroPaciente;
        return false;
    }

    paciente.gordura = paciente.gordura.length == 0 ? 0 : paciente.gordura;

    const pacienteTr = montaTrPaciente(paciente);

    document.querySelector('#tabela-pacientes').appendChild(pacienteTr);

    form.reset();
});