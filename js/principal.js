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