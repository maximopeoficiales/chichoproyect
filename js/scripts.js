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

sr.reveal(".contacto_m", {
  duration: 1000,
  origin: "left",
  distance: "100px" /* distancia desde arriba en este caso */,
});

const number = "51928644700";
const api_wsp = `https://api.whatsapp.com/send/?phone=${number}&text=`;
const nombre = document.querySelector("#nombre_form");
const correo = document.querySelector("#form_correo");
const mensaje = document.querySelector("#form_mensaje");
document.querySelector("#form_enviar_mensaje").addEventListener("submit", (e) => {
  e.preventDefault();
  if (nombre.value != "" && correo.value != "" && mensaje.value != "") {

    let url = `${api_wsp}Hola soy ${nombre.value} queria decirte: ${mensaje.value}, cualquier cosa me puede contactar por aqui: ${correo.value}`;
    window.open(url, "Contancto");
  }
  return null;
})