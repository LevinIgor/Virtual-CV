export default {
  mounted(el, binding) {
    var options = {
      rootMargin: "0px",
      threshold: 0.1,
    };
    var callback = function (entries) {
      entries[0].isIntersecting ? binding.value() : null;
    };
    var observer = new IntersectionObserver(callback, options);
    observer.observe(el);
  },
};
