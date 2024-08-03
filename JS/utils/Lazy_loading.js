const lazyLoading = () => {
  const lazyElements = document.querySelectorAll(".lazy");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let element = entry.target;

        if (element.dataset.src) {
          element.src = element.dataset.src;
          element.classList.replace("loading", "loaded");
        }

        if (element.classList.contains("loading2")) {
          element.classList.replace("loading2", "loaded2");
        }

        if (element.classList.contains("loading3")) {
          element.classList.replace("loading3", "loaded3");
        }

        if (element.classList.contains("loading4")) {
          element.classList.replace("loading4", "loaded4");
        }

        if (element.classList.contains("loading5")) {
          element.classList.replace("loading5", "loaded5");
        }

        if (element.classList.contains("loading6")) {
          element.classList.replace("loading6", "loaded6");
        }

        if (element.classList.contains("loading7")) {
          element.classList.replace("loading7", "loaded7");
        }

        observer.unobserve(element);
      }
    });
  });

  lazyElements.forEach((element) => {
    observer.observe(element);
  });
};

export default lazyLoading;
