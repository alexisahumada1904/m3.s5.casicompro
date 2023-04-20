let laptop = {
  nombre:"ASUS ROG Strix G15",
  precio:"$2.990.000",
  url_imagen:"https://home.ripley.cl/store/Attachment/WOP/D113/2000393505678/2000393505678-1.jpg"
}
function cargarLaptop() {  
$("#imagen").attr("src", laptop.url_imagen)
$("#nombre").text(laptop.nombre)
$("#precio").text(laptop.precio)
}

$("#alternativa").on("click", function () {
laptop.nombre ="Apple Macbook Pro 16' "
laptop.precio ="$3.799.000"
laptop.url_imagen="https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP858/mbp16-gray.png"
cargarLaptop()
});

cargarLaptop()