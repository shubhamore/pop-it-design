let bubble=document.querySelectorAll(".bubble")

bubble.forEach(function (i) {
  i.addEventListener('click', function() {
    // console.log(i);
    if (i.style.visibility === "hidden") {
    i.style.visibility = "visible";
  } else {
    i.style.visibility = "hidden";
  }
  });
});