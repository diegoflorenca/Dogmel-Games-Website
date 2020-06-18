new fullpage("#wrapper", {
  licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
  autoScrolling: true,
  navigation: true,
  onLeave: (origin, destination, direction) => {
    const section = destination.index;
    const logo = document.querySelector("#logo img");
    const text = document.querySelector("#logo h2");

    const tl = new TimelineLite({ delay: 0 });

    if (section === 0) {
      tl.to(logo, { x: 0, y: 0, scale: 1 });
      tl.to(text, { opacity: 1 });
    }

    if (section === 1) {
      tl.to(text, { opacity: 0 });
      tl.to(logo, { x: -820, y: -250, scale: 0.6 });
    }

    if (section === 2) {
      tl.to(text, { opacity: 0 });
      tl.to(logo, { x: -800, y: -185, scale: 0.8 });
    }

    // const tl = new TimelineMax({ delay: 0 });

    // if (section === 1) {
    //   tl.fromTo(
    //     logo,
    //     0.5,
    //     { left: "0", top: "0", scale: "1" },
    //     { left: "-820", top: "-250", scale: "0.6" }
    //   );
    // }
  },
});
