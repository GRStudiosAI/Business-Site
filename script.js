
/*
 * GR Studios AI LLC
 * Shared Website Navigation
 *
 * Supports:
 * - Grouped desktop dropdown menus
 * - Mobile navigation
 * - Single open dropdown at a time
 * - Click-outside closing
 * - Escape keyboard handling
 * - Responsive breakpoint changes
 * - Automatic copyright year
 */

(() => {
  "use strict";

  const MOBILE_BREAKPOINT = 1150;

  const button = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#site-nav");

  const dropdowns = Array.from(
    document.querySelectorAll(".site-nav .nav-dropdown")
  );

  const isMobile = () =>
    window.innerWidth <= MOBILE_BREAKPOINT;

  function closeDropdowns(except = null) {
    dropdowns.forEach(dropdown => {
      if (dropdown !== except && dropdown.open) {
        dropdown.open = false;
      }
    });
  }

  function setMobileMenu(open) {
    if (!button || !nav) return;

    nav.classList.toggle("open", open);

    button.setAttribute(
      "aria-expanded",
      String(open)
    );

    button.setAttribute(
      "aria-label",
      open ? "Close navigation" : "Open navigation"
    );

    if (!open) {
      closeDropdowns();
    }
  }

  function closeMobileMenu() {
    setMobileMenu(false);
  }

  /* Mobile menu button */

  if (button && nav) {
    button.addEventListener("click", event => {
      event.stopPropagation();

      const currentlyOpen =
        nav.classList.contains("open");

      setMobileMenu(!currentlyOpen);
    });
  }

  /* Dropdown group behavior */

  dropdowns.forEach(dropdown => {
    const summary = dropdown.querySelector("summary");

    if (!summary) return;

    dropdown.addEventListener("toggle", () => {
      if (dropdown.open) {
        closeDropdowns(dropdown);
      }
    });

    /* Prevent menu interactions from being
       mistaken for outside clicks. */

    dropdown.addEventListener("click", event => {
      event.stopPropagation();
    });
  });

  /* Close dropdowns when clicking outside */

  document.addEventListener("click", event => {
    const target = event.target;

    if (!(target instanceof Element)) return;

    const insideDropdown =
      target.closest(".nav-dropdown");

    if (!insideDropdown) {
      closeDropdowns();
    }

    if (
      isMobile() &&
      nav &&
      button &&
      nav.classList.contains("open") &&
      !nav.contains(target) &&
      !button.contains(target)
    ) {
      closeMobileMenu();
    }
  });

  /* Escape closes dropdowns or mobile menu */

  document.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;

    const activeDropdown = dropdowns.find(
      dropdown => dropdown.open
    );

    if (activeDropdown) {
      const summary =
        activeDropdown.querySelector("summary");

      closeDropdowns();

      if (summary) {
        summary.focus();
      }

      event.preventDefault();
      return;
    }

    if (
      nav &&
      button &&
      nav.classList.contains("open")
    ) {
      closeMobileMenu();
      button.focus();
      event.preventDefault();
    }
  });

  /* Close mobile menu after navigating */

  if (nav) {
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        if (isMobile()) {
          closeMobileMenu();
        }
      });
    });
  }

  /* Handle desktop/mobile transitions */

  let previousMobileState = isMobile();

  window.addEventListener("resize", () => {
    const currentMobileState = isMobile();

    if (currentMobileState !== previousMobileState) {
      closeMobileMenu();
      closeDropdowns();

      previousMobileState = currentMobileState;
    }
  });

  /* Reset stale menu state when page is restored */

  window.addEventListener("pageshow", () => {
    closeMobileMenu();
    closeDropdowns();
  });

  /* Automatic copyright year */

  const year = document.getElementById("year");

  if (year) {
    year.textContent = String(
      new Date().getFullYear()
    );
  }
})();
