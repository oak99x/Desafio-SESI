// Movimentacao suave
// Captura todos os links de navegação na página
const navLinks = document.querySelectorAll("a");

// Adiciona um evento de clique a cada link de navegação
navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Impede o comportamento padrão de redirecionamento do link

    const targetSectionId = link.getAttribute("href"); // Obtém o ID da seção de destino

    // Obtém a posição (offset) vertical da seção de destino
    const targetSection = document.querySelector(targetSectionId);
    const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - 96;

    // Anima o rolagem (scroll) para a seção de destino
    window.scroll({
      top: targetPosition,
      behavior: "smooth", // Animação suave
    });
  });
});


// Expandindo informacoes
const toggleButtons = document.querySelectorAll(".toggle-button");
const infoContents = document.querySelectorAll(".info-content");
const icons = document.querySelectorAll(".info-icon-container");

// Adiciona um evento de clique a todos os botões "mais"
toggleButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Verifica se o conteúdo adicional está oculto
    if (infoContents[index].classList.contains("hidden")) {
      // Se estiver oculto, remove a classe "hidden" para mostrar o conteúdo
      infoContents[index].classList.remove("hidden");
      infoContents[index].classList.add("show");
      infoContents[index].style.margin = "30px 0 5px 0";
      icons[index].style.transform = "rotate(0deg)"; // Gira o ícone em 90 graus
    } else {
      // Se não estiver oculto, adiciona a classe "hidden" para ocultar o conteúdo
    infoContents[index].classList.add("hidden");
    icons[index].style.transform = "rotate(-45deg)"; // Gira o ícone de volta para a posição original
    infoContents[index].classList.remove("show");
    infoContents[index].style.margin = "0";
    }
  });
});
