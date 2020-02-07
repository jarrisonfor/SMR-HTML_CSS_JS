function primo(numero) {
for (i = 2; i < numero; i++) {
    if (numero % i == 0) {
      return "no es primo";
    }
  }
  return "Es primo";
}

var num = prompt("Dame un numero", "10");

document.write(primo(num));