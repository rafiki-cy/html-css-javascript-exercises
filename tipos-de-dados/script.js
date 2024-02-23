function definir() {
    let valorSigno = Number(document.getElementsByName("signo").value);
    let valorTimeFutebol = Number(document.getElementsByName("time").value);
    let valorEscolaridade = Number(document.getElementsByName("escolaridade").value);
    let qtdeSoftskill = Number(document.getElementsByName("softskill").value);

    let resultado = valorSigno + valorTimeFutebol + valorEscolaridade + qtdeSoftskill;
    document.getElementById(resultado).value = resultado
}