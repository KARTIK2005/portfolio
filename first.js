function autoScroll() {
  const scrollContainer = document.getElementById("scroller");
  const scrollContent = document.getElementById("scroll-content");

  // Clone the content for seamless looping
  const clone = scrollContent.cloneNode(true);
  scrollContainer.appendChild(clone);

  let scrollPos = 0;

  const scrollInterval = setInterval(() => {
    scrollPos += 1;
    scrollContainer.scrollLeft = scrollPos;

    // Reset smoothly when original content fully scrolled
    if (scrollPos >= scrollContent.scrollWidth-10) {
      scrollPos = 0;
    }
  }, 20);

  return () => clearInterval(scrollInterval);
}

autoScroll();

function autoScroll1() {
  const scrollContainer1 = document.getElementById("scroller1");
  const scrollContent1 = document.getElementById("scroll-content1");

  // Clone the content for seamless looping
  const clone1 = scrollContent1.cloneNode(true);
  scrollContainer1.appendChild(clone1);

  let scrollPos1 = 0;

  const scrollInterval1 = setInterval(() => {
    scrollPos1 += 1;
    scrollContainer1.scrollLeft = scrollPos1;

    // Reset smoothly when original content fully scrolled
    if (scrollPos1 >= scrollContent1.scrollWidth-10) {
      scrollPos1 = 0;
    }
  }, 20);

  return () => clearInterval(scrollInterval1);
}

autoScroll1();
