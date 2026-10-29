// Site navigation only. No analytics, third-party scripts, or cookies.
(() => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("primary-nav");
  if (toggle && nav) {
    const close = () => { document.body.classList.remove("nav-open"); toggle.setAttribute("aria-expanded","false"); toggle.setAttribute("aria-label","Open navigation"); };
    toggle.addEventListener("click", () => {
      const open = !document.body.classList.contains("nav-open");
      document.body.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", close));
    document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
  }
  document.querySelectorAll("[data-year]").forEach(el => { el.textContent = String(new Date().getFullYear()); });
})();
// Language navigation: static pages, no cookies or tracking.
document.querySelectorAll("select[data-language-switch]").forEach(select => select.addEventListener("change", event => { const path=event.target.value; if (path.startsWith("/") && !path.startsWith("//")) window.location.assign(path); }));
