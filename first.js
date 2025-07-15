const scroller = document.getElementById("scroller");
  console.log(scroller);
  let scrollSpeed = 4;

  function autoScroll() {
    scroller.scrollLeft += scrollSpeed;
    if (scroller.scrollLeft >= scroller.scrollWidth - scroller.clientWidth) {
      scroller.scrollLeft = 0;
    }
  }

  setInterval(autoScroll, 8);
