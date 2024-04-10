kaboom()


// carregar sprites
loadSprite("backgroud", "backgroud.png")
loadSprite("logo", "logo.png")
loadSprite("menu", "menuButton.png")
loadSprite("back", "backButton.png")

// variáveis
let buttonPressed = ""


// Cena de Carregamento
scene("loadingGame", () => {
  add([
    rect(width(), height()),
    color(3,53,86),
  ])
  
  add([
    sprite("logo", {width: 50}),
    pos(width() - 70, height() - 50)
  ])
  
  add([
    sprite("backgroud", {height: height()}),
    pos((width() / 2) - (height() / 2), 0),
  ])
  
  wait(1.5, () => {
    go("menu")
  })
  
})


// Cena do Menu
scene("menu", () => {
  // plano de fundo
  add([
    rect(width(), height()),
    color(3,53,86),
  ])
  
  // logotipo do jogo 
  add([
    sprite("logo", {width: 50}),
    pos(width()-70, height()-50),
  ])
  
  
  //botão das configurações
  const btnCfg = add([
    rect(300,50, {radius: 8}),
    pos(center()),
    color(251,223,0),
    scale(1.2),
    anchor("center"),
    outline(2),
    area()
  ])
  
  btnCfg.add([
    text("CONFIGURAÇÕES"),
    pos(0,3),
    anchor("center"),
    color(0,0,0),
    
  ])
  
    // botão jogar
  const btnStart = add([
    rect(300,50, {radius: 8}),
    pos(center().x, btnCfg.pos.y - 70),
    color(251,223,0),
    scale(1.2),
    anchor("center"),
    outline(2),
    area()
  ])
  
  btnStart.add([
    text("JOGAR"),
    pos(0,3),
    anchor("center"),
    color(0,0,0),
  ])
  
  // botão da pontuação
  const btnScore = add([
    rect(300,50, {radius: 8}),
    pos(center().x, btnCfg.pos.y + 70),
    color(251,223,0),
    scale(1.2),
    anchor("center"),
    outline(2),
    area()
  ])
  
  btnScore.add([
    text("PONTUAÇÃO"),
    pos(0,3),
    anchor("center"),
    color(0,0,0),
    
  ])
  
  // quando clicar em qualquer botão
  onTouchStart((pos) => {
    // botão jogar foi apertado?
    if (btnStart.hasPoint(pos)) {
      btnStart.color = rgb(120,120,0)
      btnStart.width = 315
      btnStart.height = 55
      buttonPressed = "startPress"
    }
    
    // botão configurações foi apertado?
    else if (btnCfg.hasPoint(pos)) {
      btnCfg.color = rgb(120,120,0)
      btnCfg.width = 315
      btnCfg.height = 55
      buttonPressed = "cfgPress"
    }
    
    // botão Pontuação foi apertado?
    else if (btnScore.hasPoint(pos)) {
      btnScore.color = rgb(120,120,0)
      btnScore.width = 315
      btnScore.height = 55
      buttonPressed = "scorePress"
    }
  })
  
  // quando soltar qualquer botão
  onTouchEnd(() => {
    if (!btnStart.hasPoint(pos) && buttonPressed == "startPress") {
    btnStart.color = rgb(251,223,0)
    btnStart.width = 300
    btnStart.height = 50
    go("game")
    buttonPressed = ""
    }
    
    else if (!btnCfg.hasPoint(pos) && buttonPressed == "cfgPress") {
    btnCfg.color = rgb(251,223,0)
    btnCfg.width = 300
    btnCfg.height = 50
    go("settings")
    buttonPressed = ""
    }
    
    else if (!btnScore.hasPoint(pos) && buttonPressed == "scorePress") {
    btnScore.color = rgb(251,223,0)
    btnScore.width = 300
    btnScore.height = 50
    go("score")
    buttonPressed = ""
    }
  })
  
})


// cena do jogo
scene("game", () => {
  debug.log("jogo")
})


// cena das configurações
scene("settings", () => {
  add([
    rect(width(), height()),
    color(3,53,86),
  ])
  
  // logotipo do jogo 
  add([
    sprite("logo", {width: 50}),
    pos(width()-70, height()-50),
  ])
  
    
  // botão voltar
  const btnBack = add([
    rect(40,40, {radius: 8}),
    pos(35, 35),
    color(251,223,0),
    anchor("center"),
    area(),
  ])
  
  btnBack.add([
    sprite("back", {width: btnBack.width, height: btnBack.height}),
    anchor("center"),
  ])
  
  
  // tela de configurações
  const settingsScreen = add([
    rect(500, height() -20, {radius: 20}),
    pos(center()),
    anchor("center"),
    color(3,33,66)
  ])
  
  // algum botão foi apertado?
  onTouchStart((pos) => {
    //botão voltar
    if (btnBack.hasPoint(pos)) {
      btnBack.width = 50
      btnBack.height = 50
      btnBack.color = rgb(120, 120, 0)
      buttonPressed = "backMenu"
    }
    
  })
  
  // algum botão foi solto?
  onTouchEnd(() => {
    //botão voltar
    if (!btnBack.hasPoint(pos) && buttonPressed == "backMenu") {
    btnBack.width = 40
    btnBack.height = 40
    btnBack.color = rgb(251, 223, 0)
    go("menu")
    }
  })
  
})


// cena das pontuações
scene("score", () => {
  add([
    rect(width(), height()),
    color(3,53,86),
  ])
  
  // logotipo do jogo 
  add([
    sprite("logo", {width: 50}),
    pos(width()-70, height()-50),
  ])
  
  // imprimir pontuação total
  add([
    text("PONTUAÇÃO: "+localStorage.getItem("score")),
    pos(center()),
    anchor("center"),
  ])
    
  // botão voltar
  const btnBack = add([
    rect(40,40, {radius: 8}),
    pos(35, 35),
    color(251,223,0),
    anchor("center"),
    area(),
  ])
  
  btnBack.add([
    sprite("back", {width: btnBack.width, height: btnBack.height}),
    anchor("center"),
  ])
  
  // botão voltar foi apertado?
  onTouchStart((pos) => {
    if (btnBack.hasPoint(pos)) {
      btnBack.width = 50
      btnBack.height = 50
      btnBack.color = rgb(120, 120, 0)
      buttonPressed = "backMenu"
    }
    
  })
  
  onTouchEnd(() => {
    if (!btnBack.hasPoint(pos) && buttonPressed == "backMenu") {
    btnBack.width = 40
    btnBack.height = 40
    btnBack.color = rgb(251, 223, 0)
    go("menu")
    }
  })
  
})

// iniciar cena de carregamento
go("menu")
