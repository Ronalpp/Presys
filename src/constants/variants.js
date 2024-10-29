import ScrollReveal from "scrollreveal";

const sr = ScrollReveal();

export default function Variants() {
  sr.reveal(".reveal-top", {
    origin: "top",
    distance: "50px",
    duration: 2000,
    reset: false,
    interval: 200,
  });
};

export const revealFromBottom = () => {
  sr.reveal(".reveal-bottom", {
    origin: "bottom",
    distance: "100px",
    opacity: 0,
    duration: 1000,
    reset: false,
    interval: 300,
  });
};

export const revealFromLeft = () => {
  sr.reveal(".reveal-left", {
    origin: "left",
    distance: "100px",
    duration: 2000,
    reset: false,
    interval: 200,
  });
};

export const revealFromRight = () => {
  sr.reveal(".reveal-right", {
    origin: "right",
    distance: "100px",
    duration: 2000,
    reset: false,
    interval: 200,
  });
};

export const revealFadeIn = () => {
  sr.reveal(".reveal-fade", {
    opacity: 0,
    duration: 2000,
    reset: false,
  });
};
