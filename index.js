// Intersection Observer for project slide-ins

let options = {
  rootMargin: "-100px 0px -100px 0px",
};
let callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
};
let projects = document.querySelectorAll(".project>div");
let observer = new IntersectionObserver(callback, options);
projects.forEach((project) => observer.observe(project));
