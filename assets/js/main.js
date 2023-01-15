function globalFunction() {
    const form = document.querySelector('.formMainContent')
    const resultado = document.querySelector('.formResultadoData')
    const pesoAlert = document.querySelector('#formMainContentPesoAlert')
    const alturaAlert = document.querySelector('#formMainContentAlturaAlert')


    function imcEvento(imcEvento) {
        imcEvento.preventDefault();

        const peso = Number(form.querySelector('#peso').value);
        const altura = Number(form.querySelector('#altura').value);
        const IMC = Number(((peso) / (Math.pow(altura, 2))).toFixed(2));

        if ((peso === 0)) {
            pesoAlert.innerHTML = 'Valor inválido';
        } else if ((altura === 0)) {
            pesoAlert.innerHTML = ''
            alturaAlert.innerHTML = 'Valor inválido';
        } else {
            pesoAlert.innerHTML = ''
            alturaAlert.innerHTML = ''
        }

        if ((peso !== 0) && (altura !== 0)) {
            if (IMC < 18.5) {
                resultado.innerHTML = `${IMC} (Abaixo do peso)`;
            }
            else if (18.5 <= IMC && IMC <= 24.9) {
                resultado.innerHTML = `${IMC} (Peso normal)`;
            }
            else if (25 <= IMC && IMC <= 29.9) {
                resultado.innerHTML = `${IMC} (Sobrepeso)`;
            }
            else if (30 <= IMC && IMC <= 34.9) {
                resultado.innerHTML = `${IMC} (Obesidade grau 1)`;
            }
            else if (35 <= IMC && IMC <= 39.9) {
                resultado.innerHTML = `${IMC} (Obesidade grau 2)`;
            }
            else if (IMC >= 40) {
                resultado.innerHTML = `${IMC} (Obesidade grau 3)`;
            }
        }

        console.log(peso, altura, IMC);
    }
    form.addEventListener('submit', imcEvento);
};

globalFunction();