const titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

calculaImc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
validaPeso = (peso) => !(peso <= 0 || peso > 1000);
validaAltura = (altura) => !(altura <= 0 || altura > 3);
validaGordura = (gordura) => !(gordura < 0 || gordura > 100);
validaNome = (nome) => !(nome.length == 0);

validaPaciente = (paciente) => {
    const erros = [];

    if(!validaNome(paciente.nome)) {
        erros.push('Nome');
    }

    if(!validaPeso(paciente.peso)) {
        erros.push('Peso');
    }

    if(!validaAltura(paciente.altura)) {
        erros.push('Altura');
    }

    if(!validaGordura(paciente.gordura)) {
        erros.push('Gordura');
    }

    return erros.length > 0 ? `Campos inválidos: ${erros.join('; ')}` : '';
};

document.querySelectorAll('#tabela-pacientes tr').forEach(paciente => {
    const nome = paciente.querySelector('.info-nome').textContent;
    const peso = paciente.querySelector('.info-peso').textContent;
    const altura = paciente.querySelector('.info-altura').textContent;
    const gordura = paciente.querySelector('.info-gordura').textContent;

    const erroPaciente = validaPaciente({
        nome,
        peso,
        altura,
        gordura
    });

    if(erroPaciente.length > 0) {
        paciente.classList.add('invalido');
        paciente.querySelector('.info-imc').textContent = erroPaciente;
        return false;
    }

    paciente.querySelector('.info-imc').textContent = calculaImc(peso, altura);
});