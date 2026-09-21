/* Contador de dias desde el 09/08/2026 */
const fechaInicio = new Date(2026, 7, 9);
const hoy = new Date();
const diffDias = Math.max(0, Math.floor((hoy - fechaInicio) / (1000*60*60*24)));
document.getElementById('dias-contador').textContent = diffDias;

/* Fondo de ramos neon generandose continuamente */
const fondo = document.getElementById('fondo-neon');
const emojisFlor = ["🌼","🌻","🌷"];

function crearRamoNeon(){
  const ramo = document.createElement('div');
  ramo.className = 'ramo-neon';

  const cantidadFlores = 3 + Math.floor(Math.random()*3); // 3 a 5 flores
  const contenedorFlores = document.createElement('div');
  contenedorFlores.className = 'flores';

  for(let i=0;i<cantidadFlores;i++){
    const f = document.createElement('span');
    f.className = 'flor-n';
    f.textContent = emojisFlor[Math.floor(Math.random()*emojisFlor.length)];
    const tam = 20 + Math.random()*18;
    f.style.fontSize = tam + 'px';
    f.style.transform = `translateY(${Math.abs((i - (cantidadFlores-1)/2)) * -6}px) rotate(${(i - (cantidadFlores-1)/2)*14}deg)`;
    f.style.animationDelay = (Math.random()*2) + 's';
    contenedorFlores.appendChild(f);
  }

  const tallo = document.createElement('div');
  tallo.className = 'tallo';
  tallo.textContent = '🌿';

  ramo.appendChild(contenedorFlores);
  ramo.appendChild(tallo);

  const posX = Math.random()*94 + 2;
  const posY = Math.random()*90 + 4;
  ramo.style.left = posX + 'vw';
  ramo.style.top = posY + 'vh';

  const duracion = 6 + Math.random()*5;
  ramo.style.animationDuration = duracion + 's';

  fondo.appendChild(ramo);

  for(let e=0; e<4; e++){
    const estrella = document.createElement('span');
    estrella.className = 'estrella';
    estrella.textContent = '✨';
    estrella.style.left = (posX + (Math.random()*8 - 4)) + 'vw';
    estrella.style.top = (posY + (Math.random()*8 - 4)) + 'vh';
    estrella.style.fontSize = (10 + Math.random()*10) + 'px';
    estrella.style.animationDuration = (1.4 + Math.random()*1.8) + 's';
    estrella.style.animationDelay = (Math.random()*2) + 's';
    fondo.appendChild(estrella);
    setTimeout(()=> estrella.remove(), (duracion*1000) + 500);
  }

  setTimeout(()=> ramo.remove(), duracion*1000 + 200);
}

setInterval(crearRamoNeon, 900);
for(let i=0;i<6;i++){ setTimeout(crearRamoNeon, i*300); }

/* Reproductor de musica */
const audio = document.getElementById('audio-fondo');
const botonMusica = document.getElementById('musica-flotante');
const aviso = document.getElementById('musica-aviso');
let sonando = false;

aviso.style.display = "block";
setTimeout(()=>{ aviso.style.display = "none"; }, 5000);

botonMusica.addEventListener('click', () => {
  if(!sonando){
    audio.play().then(()=>{
      sonando = true;
      botonMusica.textContent = "⏸";
      botonMusica.classList.add('girando');
      aviso.style.display = "none";
    }).catch(()=>{
      aviso.textContent = "Agrega 'cancion.mp3' en la misma carpeta que este archivo.";
      aviso.style.display = "block";
    });
  } else {
    audio.pause();
    sonando = false;
    botonMusica.textContent = "🎵";
    botonMusica.classList.remove('girando');
  }
});

/* Carta secreta / sobre */
const sobre = document.getElementById('sobre');
const cartaSecreta = document.getElementById('carta-secreta');
const instruccionSobre = document.getElementById('instruccion-sobre');
const cerrarCarta = document.getElementById('cerrar-carta');

sobre.addEventListener('click', () => {
  sobre.classList.add('abierto');
  cartaSecreta.classList.add('visible');
  instruccionSobre.style.display = 'none';
});

cerrarCarta.addEventListener('click', () => {
  cartaSecreta.classList.remove('visible');
  sobre.classList.remove('abierto');
  instruccionSobre.style.display = 'block';
});
