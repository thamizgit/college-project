import "../App.css";
import useWindowSize from "../hooks/useWindowSize";
function Header() {
  const { width } = useWindowSize();
  const num =
    width > 1500
      ? 1150
      : width > 1300
        ? 950
        : width > 1100
          ? 750
          : width > 1000
            ? 650
            : width > 700
              ? 650
              : width > 500
                ? 450
                : width > 410
                  ? 390
                  : width > 390
                    ? 370 : width > 350 ? 350
                      : width > 270 ? 260 : 200;
  return (
    <article className="for-header">
      <img
        className="head-image"
        src={require("../images/header-image.jpg")}
        alt="logo"
        width={num}
        height={200}
      />
    </article>
  );
}

export default Header;
