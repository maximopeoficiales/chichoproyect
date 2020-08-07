let ano = new Date().getFullYear();
let edad = ano - 2001;
document.querySelector("#edad").innerHTML = edad;
document.querySelector("#ano").innerHTML = ano;

window.sr = ScrollReveal();
sr.reveal("#datos_principales", {
  duration: 1000,
  origin: "top",
  distance: "300px" /* distancia desde arriba en este caso */,
  reset: true,
});
sr.reveal("#algunas_palabras", {
  duration: 1000,
  origin: "left",
  distance: "100px" /* distancia desde arriba en este caso */,
});
sr.reveal("#breve_descripcion", {
  duration: 1000,
  origin: "left",
  distance: "100px" /* distancia desde arriba en este caso */,
});
sr.reveal("#mis_habilidades", {
  duration: 1000,
  origin: "left",
  distance: "100px" /* distancia desde arriba en este caso */,
});

sr.reveal(".card-proyect", {
  duration: 1000,
  origin: "left",
  distance: "100px" /* distancia desde arriba en este caso */,
});

sr.reveal(".card-custom", {
  duration: 1000,
  origin: "left",
  distance: "100px" /* distancia desde arriba en este caso */,
});

sr.reveal(".contacto_m", {
  duration: 1000,
  origin: "left",
  distance: "100px" /* distancia desde arriba en este caso */,
});
