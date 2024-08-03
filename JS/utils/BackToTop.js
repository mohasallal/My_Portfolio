const BackTop = () => {
  const BackToTop = document.getElementById("BackToTop");

  window.onscroll = function () {
    scrolling();
  };

  function scrolling() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      BackToTop.style.display = "block";
    } else {
      BackToTop.style.display = "none";
    }
  }

  BackToTop.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
};

export default BackTop;
