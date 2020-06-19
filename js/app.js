new fullpage("#wrapper", {
  licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
  autoScrolling: true,
  onLeave(origin, destination, direction) {
    const section = destination.index;

    if (section === 0) {
      gsap.from("#logo img", {
        opacity: 0,
        duration: 1,
        y: -50,
        ease: "elastic(1, 0.3)",
        delay: 0.5,
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
        delay: 0.5,
        x: -45,
        ease: "elastic(1, 0.3)",
      });
    }

    if (section === 1) {
      gsap.from("#logoGame img", {
        opacity: 0,
        x: -45,
        delay: 0.5,
        ease: "elastic(1, 0.3)",
      });
      gsap.from("#topbar img", {
        opacity: 0,
        x: 45,
        delay: 0.5,
        ease: "elastic(1, 0.3)",
      });
    }

    if (section === 2) {
      gsap.from("#logoBonde img", {
        opacity: 0,
        x: -45,
        y: -45,
        delay: 0.5,
        ease: "elastic(1, 0.3)",
      });
      gsap.from("#sloganBonde img", {
        opacity: 0,
        x: -45,
        delay: 0.5,
        ease: "elastic(1, 0.3)",
      });

      gsap.from("#approved", {
        opacity: 0,
        scale: 1.2,
        duration: 0.3,
        x: 30,
        y: 50,
        ease: Strong.easeOut,
        delay: 0.8,
      });
    }
  },
});
