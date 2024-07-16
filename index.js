let img0, img00, img000, img1, img2, img3, img4, img5, img6, relojito, click, dragndrop, hover, carpetadocs, carpetafotos, carpetalab, carpetapod, trash, archivoerror, archivoerror2, archivoerror3,archivoerror4, archivoerror5, brishito, brishitoblanco, caritafelizverde, caritatriste1, corazonazul, corazonblanco, tipito1, tipito2azul, headerinicial, headerfinal, porcentaje, terastreamos, tusmovimientos, otrosusuarios, usuariosclick, usuariosdrag, usuarioshover;


let comienzo, act1, ventana1, ventana2, ventana3, ventana4,ventana5,ventana6, act2, act3, visualizar; // Botones
let checking, checkAct1, checkAct2, checkAct3; //checkbox
//contadores 
let mostrarContador1 = false;
let mostrarContador2 = false;
let mostrarContador3 = false;

let mostrarOjos = true
let mostrarImagen0 = false;
let mostrarImagen00 = false;
let mostrarImagen000 = false;
let mostrarImagen1 = false;
let mostrarImagen2 = false;
let mostrarImagen3 = false;
let mostrarImagen4 = false;
let mostrarImagen5 = false;
let mostrarImagen6 = false;
let mostrarReloj = false;
let mostrarcarpetadocs = false;
let mostrarcarpetafotos = false;
let mostrarcarpetapod = false;
let mostrarcarpetalab = false;
let mostrartrash = false;
let mostrarClick = false
let mostrarDragndrop = false
let mostrarHover = false


//drag&drop
let mostrararchivoerror = false;
let mostrararchivoerror2 = false;
let mostrararchivoerror3 = false;
let mostrararchivoerror4 = false;
let mostrararchivoerror5 = false;

//hover
let mostrarbrishito = false;
let mostrarbrishitoblanco = false; 
let mostrarcaritafelizverde = false;
let mostrarcaritatriste1 = false;
let mostrarcorazonazul = false;
let mostrarcorazonblanco = false;
let mostrartipito1 = false;
let mostrartipito2azul = false;

//fin
let mostrarheaderinicial = false;
let mostrarheaderfinal = false;
let mostrarporcentaje = false;
let mostrarterastreamos = false;
let actividad3activa = false //hover
let mostrarotrosusuarios = false;
let mostrartusmovimientos = false;
let mostrarusuariosclick = false;
let mostrarusuariosdrag = false;
let mostrarusuarioshover = false;

//visualizar 3 mapas
let mouseListPos1=[] //arrays
let timerValue1 = 5;
let timerActive1 = false; //para verificar si el temporizador está activo
let viewActive = false; // para verificar si el botón de visualización está activo
let verAct1 = true //checkbox


let mouseListPos2=[]
let timerValue2 = 5;
let timerActive2 = false;
let viewActive2 = false; 
let verAct2 = true


let mouseListPos3=[]
let timerValue3 = 5;
let timerActive3 = false;
let viewActive3 = false
let verAct3 = true

//dragndrop
let archivoerrorX = 300; 
let archivoerrorY = 300;
let archivoerror2X = 1200; 
let archivoerror2Y = 350;
let archivoerror3X = 650; 
let archivoerror3Y = 300;
let archivoerror4X = 750; 
let archivoerror4Y = 500;
let archivoerror5X = 1000; 
let archivoerror5Y = 700;
let dragging = false;
let dragging2 = false;
let dragging3 = false;
let dragging4 = false;
let dragging5 = false;
let offsetX, offsetY;
let dropX = 1700-140;
let dropY = 750;
let dropsize = 75;

let timerStarted = false; // verifica si el contador empezo
let startTime; // guarda el tiempo de inicio del temporizador


function preload() {
  font = loadFont("raster.ttf");
  
  img0 = loadImage('imagenes/leidoterminos.png');
  img00 = loadImage('imagenes/comenzar.png');
  img000 = loadImage('imagenes/actua.png');

  //cerrar pestañas
  img1 = loadImage('imagenes/error 404.svg');
  img2 = loadImage('imagenes/error box.svg');
  img3 = loadImage('imagenes/fail.svg')
  img4 = loadImage ('imagenes/pagenotfound.svg')
  img5 = loadImage ('imagenes/sometngwentwrong.svg')
  img6 = loadImage ('imagenes/notfounoriginal.svg')
  relojito = loadImage ('imagenes/relojito.svg')
 
  carpetadocs = loadImage ('imagenes/carpeta docs.svg')
  carpetafotos = loadImage ('imagenes/carpeta fotos.svg')
  carpetalab = loadImage ('imagenes/carpeta lab.svg')
  carpetapod = loadImage ('imagenes/CARPETA POD.svg')
  trash = loadImage ('imagenes/trash.svg')

  //dragndrop
  archivoerror = loadImage ('imagenes/drag n drop/archivoerror2.svg')
  archivoerror2 = loadImage ('imagenes/drag n drop/archivoerror1.svg')
  archivoerror3 = loadImage ('imagenes/drag n drop/archivoerror3.svg')
  archivoerror4 = loadImage ('imagenes/drag n drop/archivoerror4.svg')
  archivoerror5 = loadImage ('imagenes/drag n drop/archivoerror5.svg')
 
  //hover
  brishito = loadImage('imagenes/brishito.svg')
  caritafelizverde = loadImage ('imagenes/caritafelizverde.svg')
  brishitoblanco = loadImage ('imagenes/brishitoblanco.svg')
  caritatriste1 = loadImage ('imagenes/caritatriste1.svg')
  tipito1 = loadImage ('imagenes/tipito1.svg')
  tipito2azul = loadImage ('imagenes/tipito2azul.svg')
  corazonazul = loadImage('imagenes/corazonazul.svg')
  corazonblanco = loadImage ('imagenes/corazonblanco.svg')
  
  //fin
  headerinicial = loadImage ('imagenes/headerinicial.png')
  headerfinal = loadImage('imagenes/headerfinal.png')
  mapa1 = loadImage ('imagenes/mapa de calor.jpg')
  tusmovimientos = loadImage ('imagenes/tusmovimientos.svg')
  otrosusuarios = loadImage ('imagenes/otrosusuarios.svg')
  click = loadImage ('imagenes/click.svg')
  dragndrop = loadImage ('imagenes/dragndrop.svg')
  hover = loadImage ('imagenes/hover.svg')

  //final
  terastreamos = loadImage ('imagenes/terastreamos.svg')
  porcentaje = loadImage ('imagenes/porcentaje.svg')
  usuariosclick = loadImage ('imagenes/usuariosclick.png')
  usuariosdrag = loadImage ('imagenes/usuariosdrag.png')
  usuarioshover = loadImage ('imagenes/usuarioshover.png')

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  checking = createCheckbox();
  checking.position(740, 423);
  checking.class('checking');
  checking.mouseClicked(comenzar)

  checkAct1 = createCheckbox('tudesafío_01', verAct1);
  checkAct1.class('checkAct1');
  checkAct1.position(110, windowHeight-150);

  checkAct2 = createCheckbox ("  tudesafío_02", verAct2);
  checkAct2.class ('checkAct2')
  checkAct2.position(110, windowHeight-120);

  checkAct3 = createCheckbox ("  tudesafío_03", verAct3);
  checkAct3.class ('checkAct3')
  checkAct3.position(110, windowHeight-90); 

  checkUsuarios1 = createCheckbox ("desafío_01");
  checkUsuarios1.class ('checkUsuarios1')
  checkUsuarios1.position(280, windowHeight-150); 

  
  checkUsuarios2 = createCheckbox ("desafío_02");
  checkUsuarios2.class ('checkUsuarios2')
  checkUsuarios2.position(280, windowHeight-120); 
  
  checkUsuarios3 = createCheckbox ("desafío_03");
  checkUsuarios3.class ('checkUsuarios3')
  checkUsuarios3.position(280, windowHeight-90); 

  comienzo = createButton ("comenzar")
  comienzo.position(780, 620);
  comienzo.class('comienzo')
  comienzo.mouseClicked(enterComenzar)

  //EMPIEZA CANVAS DE ACT1
  act1 = createButton("DESAFÍO_01");
  act1.position(850-400, windowHeight - 120);
  act1.class('act1');
  act1.mouseClicked(actividad1);

  //error404
  ventana1 = createButton("X");
  ventana1.position(318+212+70, 145+140);
  ventana1.class('ventana1');
  ventana1.mouseClicked(cerrar1);

  //toomanyerrors
  ventana2 = createButton("X");
  ventana2.position(320+212+70, 216+140);
  ventana2.class('ventana2');
  ventana2.mouseClicked(cerrar2);

  //fail
  ventana3 = createButton("X");
  ventana3.position(808+212+70, 273+138);
  ventana3.class('ventana3');
  ventana3.mouseClicked(cerrar3);

  //pagenotfound
  ventana4 = createButton("X");
  ventana4.position(1025+212+70, 95+140);
  ventana4.class('ventana4');
  ventana4.mouseClicked(cerrar4);

  //somethingwentwrong
  ventana5 = createButton("X");
  ventana5.position(1225+212+70, 305+140);
  ventana5.class('ventana5');
  ventana5.mouseClicked(cerrar5);

 //notfound
 ventana6 = createButton("X");
 ventana6.position(650+212+72, 500+125);
 ventana6.class('ventana6');
 ventana6.mouseClicked(cerrar6);

 //EMPIEZA CANVAS DE ACT2
  act2 = createButton("DESAFÍO_02");
  act2.position(850-200, windowHeight - 120);
  act2.class('act2');
  act2.mouseClicked(actividad2);

  act3 = createButton("DESAFÍO_03");
  act3.position(850, windowHeight - 120);
  act3.class('act3');
  act3.mouseClicked(actividad3);

  visualizar = createButton("VISUALIZAR");
  visualizar.position(850+500, windowHeight - 120);
  visualizar.class('visualizar');
  visualizar.mousePressed(toggleView);

  aviso = createButton("X");
  aviso.position(1195, 340);
  aviso.class('aviso');
  aviso.mousePressed(cerraraviso);

  masinfo = createButton("+ INFO");
  masinfo.position(120, 48);
  masinfo.class('masinfo');
  masinfo.mousePressed(abrirporcentaje);

  timerStarted = true;
  startTime = millis();

}

function draw() {
  

  if (viewActive || viewActive2 || viewActive3){
    background(255)

  } else {
  background(75)
  } 

  
  if (timerStarted && millis() - startTime >= 3000) {
    previoComenzar();
    timerStarted = false; 
  }

if (mostrarOjos){
   if (frameCount % 60 < 20) {
    ojoCostado(830, 425, 0.8);
  } else if (frameCount % 60 >= 20 && frameCount % 60 < 40) {
    ojoFrente(830, 425, 0.8);
  } else if (frameCount % 60 >= 40 && frameCount % 60 < 50) {
    push(); 
translate(1075, 578);
rotate(radians(-180)); 
ojoCostado(0, 0, 0.8); 
    pop();
  } else {
    ojoFrente(830, 425, 0.8);
  }  
}

  push()
  if (mostrarheaderinicial) {
    scale (0.43)
  image(headerinicial, 580, 100)

  }
  pop()
  push()
  if (mostrarheaderfinal){
    scale (0.43)
    image(headerfinal, 260, 100)
  }
pop()

//aclaraciones de acciones p cada boton

push()
scale (0.2)
if (mostrarClick) {
  
  image (click, 2250, 4350)
}

if (mostrarDragndrop) {
  image (dragndrop, 3250, 4350)
}

if (mostrarHover) {
  image (hover, 4250, 4350)
}
pop()

  if (mostrarImagen0) {
    image(img0, 650, 350);
  }

  push();
  if (mostrarImagen00) {
    scale(0.9);
    image(img00, 640, 300);
  }
  pop();

  push();
  if (mostrarImagen000) {
    if (frameCount % 40 < 30) {
      scale(0.06);
      image(img000, 17800, 6500);
    }
  }
  pop();

  push();
  scale(0.7);
  if (mostrarImagen1) {
    image(img1, 100 + 300+100, 200+200);
  }
  if (mostrarImagen2) {
    image(img2, 450 + 300+100, 300+200);
  }
  if (mostrarImagen4) {
    image(img4, 1150 + 300+100, 120+200);
  }
  if (mostrarImagen3) {
    image(img3, 800 + 300+100, 380+200);
  }
  if (mostrarImagen5) {
    image(img5, 1400 + 300+100, 420+200);
  }
  if (mostrarImagen6) {
    image(img6, 925 + 300+100, 705+180);
  }

  if (mostrarReloj) {
    image(relojito, 320, 1315);
  }
  pop();
  
  //DRAG
  if (mostrararchivoerror) {
    image(archivoerror, archivoerrorX, archivoerrorY);
  }
  if (mostrararchivoerror2) {
    image(archivoerror2, archivoerror2X, archivoerror2Y);
  }
  if (mostrararchivoerror3) {
    image(archivoerror3, archivoerror3X, archivoerror3Y);
  }
  if (mostrararchivoerror4) {
    image(archivoerror4, archivoerror4X, archivoerror4Y);
  }
  if (mostrararchivoerror5) {
    image(archivoerror5, archivoerror5X, archivoerror5Y);
  }
  //


if (mostrarbrishito) {
  image (brishito, 400, 300)
}
if (mostrarbrishitoblanco) {
image(brishitoblanco, 300, 700)
}
if(mostrarcaritafelizverde){
  image(caritafelizverde, 1500, 450)
}
if (mostrarcaritatriste1){
  image(caritatriste1, 650, 180)
}
if (mostrarcorazonazul) {
  image(corazonazul, 600, 600)
}
if (mostrarcorazonblanco){
  image(corazonblanco, 1200, 700)
}
if (mostrartipito1) {
  image(tipito1, 900, 400)
}
if (mostrartipito2azul) {
image(tipito2azul, 1200, 250)}

if(actividad3activa){

  if ((mouseX > 400) && (mouseX < 550) &&
(mouseY > 300) && (mouseY < 450)) {
mostrarbrishito = true 
}
if ((mouseX > 300) && (mouseX < 450) &&
(mouseY > 700) && (mouseY < 850)) {
mostrarbrishitoblanco = true
}
if ((mouseX > 1500) && (mouseX < 1650) &&
(mouseY > 450) && (mouseY < 600)) {
mostrarcaritafelizverde = true
} 
if ((mouseX > 650) && (mouseX < 800) &&
(mouseY > 180) && (mouseY < 330)) {
mostrarcaritatriste1 = true
}  
if ((mouseX > 600) && (mouseX < 750) &&
(mouseY > 600) && (mouseY < 750)) {
mostrarcorazonazul = true
} 
if ((mouseX > 1200) && (mouseX < 1350) &&
(mouseY > 700) && (mouseY < 850)) {
mostrarcorazonblanco = true
} 
if ((mouseX > 900) && (mouseX < 1050) &&
(mouseY > 400) && (mouseY < 550)) {
mostrartipito1 = true
} 
if ((mouseX > 1200) && (mouseX < 1350) &&
(mouseY > 250) && (mouseY < 400)) {
mostrartipito2azul = true
} 
}


  if (mostrarcarpetadocs) {
    image(carpetadocs, 1700-140, 330+150);
  }

  if (mostrarcarpetafotos) {
    image(carpetafotos, 1700-140, 70+150);
  }

  if (mostrarcarpetalab) {
    image(carpetalab, 1580-160, 70+150);
  }

  if (mostrarcarpetapod) {
    image(carpetapod, 1700-140, 200+150);
  }

  if (mostrartrash) {
    image(trash, dropX, dropY, dropsize);
  }

  if (mostrarContador1) {
    textFont('raster');
    textSize(30);
    fill(255);
    if (timerValue1 < 10) {
      text("0:0" + timerValue1, 275, windowHeight-84);
    } 
    if (timerValue1 <= 0) {
      mostrarContador1 = false;
      mostrarReloj = false;
      mostrarClick = false
      cerrar1();
      cerrar2();
      cerrar3();
      cerrar4();
      cerrar5();
      cerrar6();
    }
  }

  if (mostrarContador2) {
    textFont('raster');
    textSize(30);
    fill(255);
    push()
    strokeWeight (0);
    fill (0,0,0,0)
    rect(1640, 700, 75,110);
    pop()
    
    if (timerValue2 < 10) {
      text("0:0" + timerValue2, 275, windowHeight-84);
    } 

    //drag img1
    if (dragging) {
      archivoerrorX = mouseX + offsetX;
      archivoerrorY = mouseY + offsetY;
    }

    if (archivoerrorX < dropX + dropsize &&
        archivoerrorX + archivoerror.width > dropX &&
        archivoerrorY < dropY + dropsize &&
        archivoerrorY + archivoerror.height > dropY) {
      mostrararchivoerror = false;
    }
    
    //drag img2
    if (dragging2) {
      archivoerror2X = mouseX + offsetX;
      archivoerror2Y = mouseY + offsetY;
    }

    if (archivoerror2X < dropX + dropsize &&
        archivoerror2X + archivoerror2.width > dropX &&
        archivoerror2Y < dropY + dropsize &&
        archivoerror2Y + archivoerror2.height > dropY) {
      mostrararchivoerror2 = false;
    }

     //drag img3
     if (dragging3) {
      archivoerror3X = mouseX + offsetX;
      archivoerror3Y = mouseY + offsetY;
    }

    if (archivoerror3X < dropX + dropsize &&
        archivoerror3X + archivoerror3.width > dropX &&
        archivoerror3Y < dropY + dropsize &&
        archivoerror3Y + archivoerror3.height > dropY) {
      mostrararchivoerror3 = false;
    }

     //drag img4
     if (dragging4) {
      archivoerror4X = mouseX + offsetX;
      archivoerror4Y = mouseY + offsetY;
    }

    if (archivoerror4X < dropX + dropsize &&
        archivoerror4X + archivoerror4.width > dropX &&
        archivoerror4Y < dropY + dropsize &&
        archivoerror4Y + archivoerror4.height > dropY) {
      mostrararchivoerror4 = false;
    }

      //drag img5
      if (dragging5) {
        archivoerror5X = mouseX + offsetX;
        archivoerror5Y = mouseY + offsetY;
      }
  
      if (archivoerror5X < dropX + dropsize &&
          archivoerror5X + archivoerror5.width > dropX &&
          archivoerror5Y < dropY + dropsize &&
          archivoerror5Y + archivoerror5.height > dropY) {
        mostrararchivoerror5 = false;
      }
    
    if (timerValue2 <= 0) {
      mostrarDragndrop = false
      mostrarContador2 = false;
      mostrarReloj = false;
      mostrarcarpetadocs = false;
      mostrarcarpetafotos = false;
      mostrarcarpetapod = false;
      mostrarcarpetalab = false;
      mostrartrash = false;
      mostrararchivoerror = false;
      mostrararchivoerror2 = false;
      mostrararchivoerror3 = false;
      mostrararchivoerror4 = false;
      mostrararchivoerror5 = false;
    }
  }

  if (mostrarContador3) {
    textFont('raster');
    textSize(30);
    fill(255);
    if (timerValue3 < 10) {
      text("0:0" + timerValue3, 275, windowHeight-84);
    } 
    if (timerValue3 <= 0) {
      mostrarHover = false
      actividad3activa=false
      mostrarContador3 = false;
      mostrarReloj = false;
      mostrarbrishito = false;
      mostrarbrishitoblanco = false;
      mostrarcaritafelizverde = false;
      mostrarcaritatriste1 = false;
      mostrarcorazonazul = false;
      mostrarcorazonblanco = false;
      mostrartipito1 = false;
      mostrartipito2azul = false;
    }
  }

  if (timerActive1) {
    let mouse = {
      x: mouseX,
      y: mouseY
    };
    if (mouseListPos1.length < 300) {
      mouseListPos1.push(mouse);
    }
  }

  if (timerActive2) {
    let mouse = {
      x: mouseX,
      y: mouseY
    };
    if (mouseListPos2.length < 300) {
      mouseListPos2.push(mouse);
    }
  }

  if (timerActive3) {
    let mouse = {
      x: mouseX,
      y: mouseY
    };
    if (mouseListPos3.length < 300) {
      mouseListPos3.push(mouse);
    }
  }

push()
  blendMode(MULTIPLY)
  tint(255, 200)
  scale (1.2)
if(mostrarusuariosclick){
  image(usuariosclick, 30,35)
}
if(mostrarusuariosdrag){
  image(usuariosdrag, 30,35)
}
if(mostrarusuarioshover){
  image(usuarioshover, 30,35)
}
pop()

  if (viewActive && checkAct1.checked()) {
    drawMouseList();
  }
  if (viewActive2 && checkAct2.checked()) {
    drawMouseList2();
  }
  if (viewActive3 && checkAct3.checked()) {
    drawMouseList3();
  }
if (checkUsuarios1.checked()){
  mostrarusuariosclick = true
} else  {mostrarusuariosclick = false}
if (checkUsuarios2.checked()){
  mostrarusuariosdrag = true
}else  {mostrarusuariosdrag = false}
if (checkUsuarios3.checked()){
  mostrarusuarioshover = true
} else  {mostrarusuarioshover = false}



push()
  if (mostrarterastreamos) {
    scale(0.3)
    image(terastreamos, 2050, 1100)
  }
pop ()
push()
  if (mostrarporcentaje) {
    scale (0.425)
    image (porcentaje, 262,235)
  }
pop()

push()
if (mostrartusmovimientos) {
  scale(0.5)
  image(tusmovimientos, 220, 1680,)
}
pop()

push()
if (mostrarotrosusuarios) {
  scale(0.5)
  image(otrosusuarios, 570, 1680,)
}
pop()

}
//termina DRAW


function previoComenzar (){
  mostrarOjos = false  
  mostrarImagen0 = true
  checking.class('checking-visible');
}

function comenzar(){
  mostrarImagen0 = false
  mostrarImagen00 = true
  mostrarImagen000= true

  checking.class('checking');
  comienzo.class('comienzo-visible')
}

function enterComenzar (){
  mostrarImagen00 = false
  mostrarImagen000 = false
  comienzo.class('comienzo')
  mostrarheaderinicial = true;
  
  mostrarClick = true
  mostrarDragndrop = true
  mostrarHover = true

  act1.class('act1-visible')
  act2.class('act2-visible')
  act3.class ('act3-visible')
  visualizar.class('visualizar-visible')
  visualizar.addClass('disabled')
}


function startTimer1() {
  if (!timerActive1) {
    timerActive1 = true;
    setInterval(function() {
      if (timerValue1 > 0) {
        timerValue1--;
      }
    }, 1000);
  }
}

function startTimer2() {
  if (!timerActive2) {
    timerActive2 = true;
    setInterval(function() {
      if (timerValue2 > 0) {
        timerValue2--;
      }
    }, 1000);
  }
}

function startTimer3() {
  if (!timerActive3) {
    timerActive3 = true;
    setInterval(function() {
      if (timerValue3 > 0) {
        timerValue3--;
      }
    }, 1000);
  }
}


function actividad1() {
  mostrarImagen1 = true;
  mostrarImagen2 = true;
  mostrarImagen3 = true; 
  mostrarImagen4 = true;
  mostrarImagen5 = true;
  mostrarImagen6 = true;
  ventana1.class('ventana1-visible');
  ventana2.class('ventana2-visible');
  ventana3.class('ventana3-visible');
  ventana4.class('ventana4-visible');
  ventana5.class('ventana5-visible');
  ventana6.class('ventana6-visible');
  mostrarContador1 = true;
  mostrarReloj = true;

  act1.addClass('disabled'); // 'disabled' para deshabilitar visualmente
  checkButtons(); // verifica los botones después de cambiar la clase

  startTimer1(); // empieza el temporizador al activar actividad1

}


function cerrar1() {
  ventana1.class('ventana1');
  mostrarImagen1 = false;
}
function cerrar2() {
  ventana2.class('ventana2');
  mostrarImagen2 = false;
}
function cerrar3() {
  ventana3.class('ventana3');
  mostrarImagen3 = false;
}
function cerrar4() {
  ventana4.class('ventana4');
  mostrarImagen4 = false;
}
function cerrar5() {
  ventana5.class('ventana5');
  mostrarImagen5 = false;
}
function cerrar6() {
  ventana6.class('ventana6');
  mostrarImagen6 = false;
}


function actividad2 () {
  act2.addClass('disabled');

  checkButtons(); // verifica los botones después de cambiar la clase
  startTimer2(); // inicia el temporizador al activar actividad2

  mostrarContador2 = true;
  mostrarReloj = true;
  mostrarcarpetadocs = true;
  mostrarcarpetafotos = true;
  mostrarcarpetapod = true;
  mostrarcarpetalab = true;
  mostrartrash = true;
  mostrararchivoerror = true; 
  mostrararchivoerror2 = true;
  mostrararchivoerror3 = true;
  mostrararchivoerror4 = true;
  mostrararchivoerror5 = true;
}

function mousePressed() {
  if (mouseX > archivoerrorX && mouseX < archivoerrorX  +    archivoerror.width &&
      mouseY > archivoerrorY && mouseY < archivoerrorY + archivoerror.height) {
    dragging = true;
    offsetX = archivoerrorX - mouseX;
    offsetY = archivoerrorY - mouseY;
  }
  if (mouseX > archivoerror2X && mouseX < archivoerror2X  +    archivoerror2.width &&
    mouseY > archivoerror2Y && mouseY < archivoerror2Y + archivoerror2.height) {
  dragging2 = true;
  offsetX = archivoerror2X - mouseX;
  offsetY = archivoerror2Y - mouseY;
  }
  if (mouseX > archivoerror3X && mouseX < archivoerror3X  +    archivoerror3.width &&
    mouseY > archivoerror3Y && mouseY < archivoerror3Y + archivoerror3.height) {
  dragging3 = true;
  offsetX = archivoerror3X - mouseX;
  offsetY = archivoerror3Y - mouseY;
  }
  if (mouseX > archivoerror4X && mouseX < archivoerror4X  +    archivoerror4.width &&
    mouseY > archivoerror4Y && mouseY < archivoerror4Y + archivoerror4.height) {
  dragging4 = true;
  offsetX = archivoerror4X - mouseX;
  offsetY = archivoerror4Y - mouseY;
  }
  if (mouseX > archivoerror5X && mouseX < archivoerror5X  +    archivoerror5.width &&
    mouseY > archivoerror5Y && mouseY < archivoerror5Y + archivoerror5.height) {
  dragging5 = true;
  offsetX = archivoerror5X - mouseX;
  offsetY = archivoerror5Y - mouseY;
  }
}

function mouseReleased() {
  dragging = false;
  dragging2 = false;
  dragging3 = false;
  dragging4 = false;
  dragging5 = false;
}


function actividad3 () {
  actividad3activa = true
  act3.addClass('disabled');
  checkButtons();
  startTimer3();

  mostrarContador3 = true;
  mostrarReloj = true;
}


function toggleView () {
  
  viewActive = !viewActive; 
  viewActive2 = !viewActive2;
  viewActive3 = !viewActive3;

  mostrarheaderinicial = false
  mostrarheaderfinal = true
  mostrarterastreamos = true
  mostrarotrosusuarios = true
  mostrartusmovimientos = true
  aviso.class('aviso-visible')
  masinfo.class ('masinfo-visible');
  checkAct1.class('checkAct1-visible');
  checkAct2.class('checkAct2-visible');
  checkAct3.class ('checkAct3-visible');
  checkUsuarios1.class('checkUsuarios1-visible')
  checkUsuarios2.class('checkUsuarios2-visible')
  checkUsuarios3.class('checkUsuarios3-visible')
  visualizar.addClass ('disabled')

}

function cerraraviso () {
  aviso.class ('aviso');
  mostrarterastreamos = false;
}
function abrirporcentaje () {
  mostrarporcentaje = true
}

function drawMouseList() {
  
  for (const pos of mouseListPos1) {
    fill(108, 235, 26, 40);
    stroke(60, 0, 0, 20);
    strokeWeight(0.5);
    rect(pos.x, pos.y, 30, 30);
  }

}
function drawMouseList2 () {
  for (const pos of mouseListPos2) {
    fill(1, 1, 177, 40);
    stroke(60, 0, 0, 20);
    strokeWeight(0.5);
    rect(pos.x, pos.y, 30, 30);
  }
}
function drawMouseList3 () {
  for (const pos of mouseListPos3) {
    fill(199, 242, 255, 40);
    stroke(60, 0, 0, 20);
    strokeWeight(0.5);
    rect(pos.x, pos.y, 30, 30);
  }
}

function checkButtons() {
  if (act1.class().includes('disabled') && act2.class().includes('disabled') && act3.class().includes('disabled') ) {
    visualizar.class('visualizar-visible');
  } 
}

