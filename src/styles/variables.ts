export const sizes = {
  chessTile: 74,
};

const screenSize = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(min-width: ${screenSize.mobileS})`,
  mobileM: `(min-width: ${screenSize.mobileM})`,
  mobileL: `(min-width: ${screenSize.mobileL})`,
  tablet: `(min-width: ${screenSize.tablet})`,
  laptop: `(min-width: ${screenSize.laptop})`,
  laptopL: `(min-width: ${screenSize.laptopL})`,
  desktop: `(min-width: ${screenSize.desktop})`,
  desktopL: `(min-width: ${screenSize.desktop})`,
};

export const colours = {
  darkTile: "rgb(119,153,84)",
  lightTile: "rgb(233,237,204)",
  highlighted: "rgb(188,203,74)",
  highlightGlow: "rgb(245,245,138)",
  sideBar: "#41241A;",
};
