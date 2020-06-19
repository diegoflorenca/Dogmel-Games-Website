gsap.from("#logo img", {
  opacity: 0,
  duration: 1,
  y: -50,
  ease: "elastic(1, 0.3)",
  delay: 0.1,
});

gsap.from("#logo h2", {
  duration: 1,
  y: 30,
  opacity: 0,
  ease: "elastic(1, 0.3)",
  delay: 0.5,
});
gsap.from("#slogan img", {
  opacity: 0,
  duration: 1,
  delay: 0.8,
  x: -45,
  ease: "elastic(1, 0.3)",
});
