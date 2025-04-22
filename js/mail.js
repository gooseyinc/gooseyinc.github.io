// Butona tıklanınca modal'ı göster
document.getElementById("openModalBtn").onclick = function(event) {
  event.preventDefault(); // Link'in varsayılan davranışını engelle
  document.getElementById("contactModal").style.display = "flex";
}

// Modal kapanma (X işaretine tıklanınca)
document.querySelector(".close").onclick = function() {
  document.getElementById("contactModal").style.display = "none";
}

// Modal dışına tıklanırsa da modal kapanacak
window.onclick = function(e) {
  if (e.target == document.getElementById("contactModal")) {
    document.getElementById("contactModal").style.display = "none";
  }
}
