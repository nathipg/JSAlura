const titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

calculaImc = (peso, altura) => (peso / (altura * altura)).toFixed(2);

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

    paciente.querySelector('.info-imc').textContent = calculaImc(peso, altura);
});