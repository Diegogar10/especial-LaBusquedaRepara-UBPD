const fondo = document.querySelector('.voices__container--exterior');
fondo.onclick = (e) => {
  console.group('condenadas');
  console.log('x:',e.layerX);
  console.log('y',e.layerY);
  console.groupEnd('condenadas');
}
