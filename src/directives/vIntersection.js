export default {
  mounted(el, binding) {
    var options = {
      rootMargin: "0px",
      threshold: 0.3,
    };
    var callback = function (entries) {
      if (entries[0].isIntersecting) {
        binding.value();
        
      }
    };
    var observer = new IntersectionObserver(callback, options);
    observer.observe(el);
  },
};
