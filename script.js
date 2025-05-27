function sortear() {
  const quantidade = parseInt(document.getElementById("quantidade").value);
  const de = parseInt(document.getElementById("de").value);
  const ate = parseInt(document.getElementById("ate").value);
  const noRepeat = document.getElementById("noRepeat").checked;

  const intervalo = ate - de + 1;

  if (quantidade < 1 || quantidade > 2) {
    alert("Você pode sortear no mínimo 1 e no máximo 2 números.");
    return;
  }

  if (noRepeat && quantidade > intervalo) {
    alert("Não é possível sortear essa quantidade sem repetir número.");
    return;
  }

  const numeros = [];
  const usados = new Set();

  document.getElementById('tela-form').classList.remove('active');
  document.getElementById('tela-resultado').classList.add('active');

  const containerNumeros = document.getElementById("resultado-numeros");
  containerNumeros.innerHTML = "";

  setTimeout(() => {
    while (numeros.length < quantidade) {
      const n = Math.floor(Math.random() * intervalo) + de;
      if (noRepeat) {
        if (!usados.has(n)) {
          usados.add(n);
          numeros.push(n);
        }
      } else {
        numeros.push(n);
      }
    }

    const span1 = document.createElement("span");
    span1.className = "result-number";
    span1.textContent = numeros[0];
    containerNumeros.appendChild(span1);

    if (quantidade === 2) {
      setTimeout(() => {
        const span2 = document.createElement("span");
        span2.className = "result-number";
        span2.textContent = numeros[1];
        containerNumeros.appendChild(span2);

        document.getElementById("btn-novamente").style.display = "block";
      }, 1000);
    } else {
      document.getElementById("btn-novamente").style.display = "block";
    }
  }, 1000);
}

function resetar() {
  document.getElementById("resultado-numeros").innerHTML = "";
  document.getElementById("btn-novamente").style.display = "none";
  document.getElementById("tela-resultado").classList.remove("active");
  document.getElementById("tela-form").classList.add("active");
}
