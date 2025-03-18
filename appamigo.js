// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
document.addEventListener("DOMContentLoaded", () => {
    const inputAmigo = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    let amigos = [];
    
    window.agregarAmigo = function () {
        const nombre = inputAmigo.value.trim();
        
        if (nombre === "") {
            alert("Por favor, inserte un nombre");
            return;
        }
        
        if (amigos.includes(nombre)) {
            alert("Este nombre ya está en la lista.");
            return;
        }
        
        amigos.push(nombre);
        console.log("Lista de amigos:", amigos);
        actualizarLista();
        inputAmigo.value = ""; 
    };

    function actualizarLista() {
        listaAmigos.innerHTML = "";
        
        for (let i = 0; i < amigos.length; i++) {
            const nuevoElemento = document.createElement("li");
            nuevoElemento.textContent = amigos[i];
            listaAmigos.appendChild(nuevoElemento);
        }
    }

    window.sortearAmigo = function () {
        if (amigos.length === 0) {
            alert("Agrega al menos un nombre antes de sortear.");
            return;
        }
        
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indiceAleatorio];
        console.log("Amigo sorteado:", amigoSorteado);
        
        resultado.innerHTML = `<p>🎉 Amigo Secreto: <strong>${amigoSorteado}</strong> 🎉</p>`;
    };
});