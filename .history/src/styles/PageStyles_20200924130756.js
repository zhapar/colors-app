export default {
  page: {
    height: `${window.innerHeight}`,
    width: "100%",
    position: "fixed",
    top: "0",
    transition: "opacity 0.5s ease-in-out !important",
  },
  "@global": {
    ".fade-enter": {
      opacity: "0 !important",
    },

    ".fade-enter-active": {
      opacity: "1 !important",
    },

    ".fade-exit-active": {
      opacity: "0 !important",
    },
  },
};
