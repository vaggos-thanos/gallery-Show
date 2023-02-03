document.body.onload = addElements;

const displayImage = document.getElementById("image");

food = [
  { imgFile: "pizza.jpg", imgName: "Πίτσα" },
  { imgFile: "hamburger.jpg", imgName: "Χάμπουργκερ" },
  { imgFile: "salad.jpg", imgName: "Σαλάτα" },
  { imgFile: "makaronia.jpg", imgName: "Μακαρόνια" },
  { imgFile: "sokolatopita.jpg", imgName: "Γλυκό" },
  { imgFile: "orangejuice.jpg", imgName: "Χυμός" },
  { imgFile: "pizza.jpg", imgName: "Πίτσα" },
  { imgFile: "hamburger.jpg", imgName: "Χάμπουργκερ" },
  { imgFile: "salad.jpg", imgName: "Σαλάτα" },
];

function addElements() {}

function upDate(previewPic) {
  displayImage.style.backgroundImage = "url(" + previewPic.src + ")";
  displayImage.innerHTML = previewPic.alt;
}

function unDo() {
  /* Αυτή η συνάρτηση πρέπει:
 1) Να αλλάζει το κείμενο στο στοιχείο με id "image" ώστε να εμφανίζει το αρχικό κείμενο
 2) Να αλλάζει την background εικόνα στο στοιχείο με id "image" σε κενή "url('')"
 */
  displayImage.style.backgroundImage = "url('')";
  displayImage.innerHTML = "Δείξε με το ποντίκι το φαγητό που θέλεις";
}
