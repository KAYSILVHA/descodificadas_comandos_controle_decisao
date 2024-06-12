
document.getElementById('media-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const media = (num1 + num2 + num3) / 3;
    document.getElementById('media-result').textContent = 'A média é: ' + media.toFixed(2);
});

document.getElementById('idade-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const idade = parseInt(document.getElementById('idade').value);
    if (idade < 18) {
        alert('Você é menor de idade.');
    } else {
        alert('Você é maior de idade.');
    }
});

document.getElementById('mes-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const mes = parseInt(document.getElementById('mes').value);
    const meses = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    if (mes >= 1 && mes <= 12) {
        document.getElementById('mes-result').textContent = 'O mês é: ' + meses[mes - 1];
    } else {
        document.getElementById('mes-result').textContent = 'Número inválido. Por favor, insira um número entre 1 e 12.';
    }
});