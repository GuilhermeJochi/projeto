function toggleMode() {
  const html = document.documentElement

  // if(html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }
  // (isso tudo se resume a isso aqui embaixo)

  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }

  //mesma coisa de cima, porém mudando a descrição da foto com o setAttribute("alt", "...")
  if (html.classList.contains("light")) {
    //novo texto para quando for light mode
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos escuro, camisa preta, jaqueta preta e fundo azul."
    )
  } else {
    //texto padrão se estiver sem light mode
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo."
    )
  }
}
