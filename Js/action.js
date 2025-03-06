AOS.init();
document.addEventListener("DOMContentLoaded", function () {
    let dropdowns = document.querySelectorAll(".dropdown");
  
    dropdowns.forEach(function (dropdown) {
      dropdown.addEventListener("mouseenter", function () {
        let menu = this.querySelector(".dropdown-menu");
        menu.classList.add("show");
      });
  
      dropdown.addEventListener("mouseleave", function () {
        let menu = this.querySelector(".dropdown-menu");
        if (!this.classList.contains("show")) {
          menu.classList.remove("show");
        }
      });
    });


    document.querySelectorAll(".counter").forEach(counterElement => {
      // Get the target number from the data-count attribute
      const targetNumber = parseInt(counterElement.dataset.count, 10);
      
      // Check if CountUp.js is loaded
      if (typeof countUp === "undefined") {
          console.error("CountUp.js is not loaded.");
          return;
      }

      // Create a CountUp instance for each counter
      const countUpInstance = new countUp.CountUp(counterElement, targetNumber, {
          duration: 5,  // Animation lasts 3 seconds
          separator: "",  // Adds commas (e.g., 1,000 instead of 1000)
      });

      // Create an Intersection Observer to detect when the element appears
      const observer = new IntersectionObserver(entries => {
          if (entries[0].isIntersecting) {
              countUpInstance.start();  // Start animation
              observer.unobserve(counterElement);  // Stop observing after animation starts
          }
      }, { threshold: 0.5 });

      observer.observe(counterElement); // Start observing each counter
  });

  const targert_Home =document.querySelector(".Home");
  const targert_Arrow =document.querySelector(".Scroll-Up");
  let link = document.querySelector('a[href="#Home"]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
       
        targert_Arrow.classList.add("d-none");
        
      }
      else{
        targert_Arrow.classList.remove("d-none");
      }
    });
  } ,{ threshold: 1 } );
      observer.observe(targert_Home);

});
