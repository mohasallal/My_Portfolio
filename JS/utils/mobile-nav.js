const mobileNav = () => {
  const mobileNavElement = document.getElementById("mobile__nav");
  const menuBtn = document.getElementById("SideMenu");
  const menuLinks = document.querySelectorAll(".Mobile__links");

  let isMenuOpened = false;

  const preventTouchMove = (e) => {
    e.preventDefault();
  };

  const toggleMenu = () => {
    isMenuOpened = !isMenuOpened;
    if (isMenuOpened) {
      mobileNavElement.style.display = "flex";
      document.body.style.overflowY = "hidden";
      document.addEventListener("touchmove", preventTouchMove, {
        passive: false,
      });
    } else {
      mobileNavElement.style.display = "none";
      document.body.style.overflowY = "auto";
      document.removeEventListener("touchmove", preventTouchMove);
    }
  };

  const closeMenu = () => {
    isMenuOpened = false;
    mobileNavElement.style.display = "none";
    document.body.style.overflowY = "auto";
    document.removeEventListener("touchmove", preventTouchMove);
  };

  menuBtn.addEventListener("click", toggleMenu);

  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
};

export default mobileNav;
