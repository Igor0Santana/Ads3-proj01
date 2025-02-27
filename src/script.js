function calcularIdade(){
    let anoNascimento = document.getElementById("anoNascimento").value;
    let idade = 2025 - anoNascimento;
    document.getElementById("resultado").innerHTML = `Idade é : ${idade}`;
}