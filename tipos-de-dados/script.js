function definir() {
    let valorSigno = Number(document.querySelector('select[id="signo"]').value);
    let valorTimeFutebol = Number(document.querySelector('select[id="time"]').value);
    let valorEscolaridade = Number(document.querySelector('input[name="escolaridade"]:checked').value);
    let qtdeSoftskill = Number(document.querySelectorAll('input[name="softskill"]:checked').length);
    

    let resultado = valorSigno + valorTimeFutebol + valorEscolaridade + qtdeSoftskill;
    document.getElementById("resultado").value = resultado;
}