export default {
  mounted(el) {
    var options = {
      rootMargin: "0px",
      threshold: 0.3,
    };
    var callback = function (entries) {
      if (entries[0].isIntersecting) {
        entries[0].target.classList.add("active");
      }
    };
    var observer = new IntersectionObserver(callback, options);
    observer.observe(el);
  },
};
