import theme from "../../../constants/themes";
import { texts } from "../../../constants/texts";
import "../home/Home.css";

export default function Home() {
  //estilos colores
  const { background, primary, secondary, accent, softGrey, vibrantBlue } =
    theme.colors;
  return (
    <>
      <div
        className="Home py-5 px-7"
        style={{ backgroundColor: background, textAlign: "left" }}
      >
        <div className="hero-content" style={{ backgroundColor: secondary }}>
          <div className="hero-content-left whitespace-pre-line px-5 py-2 ">
            {" "}
            <h2
              style={{
                fontWeight: "900",
                fontSize: "40px",
                color: primary,
              }}
              className="leading-[3rem]"
            >
              {texts.title}
            </h2>
            <p
              style={{ color: primary, fontSize: "16px" }}
              className="leading-[1.5rem]"
            >
              {texts.subtitle}
            </p>
            <a href="">
              <button
                className="border-none rounded-[20px] px-5 py-1 mt-4 mb-2 cursor-pointer"
                style={{ backgroundColor: accent, fontSize: "12px" }}
              >
                {texts.adoptionTitle}
              </button>
            </a>{" "}
            {/* falta agregar la ruta */}
          </div>
          <div className="hero-content-right">
            {" "}
            <img src="null" alt="" className="img-hero" />
          </div>
        </div>

        <div className="service-banner">
          <div className="service-banner-card ">
            <h3
              className="whitespace-pre-line ml-1"
              style={{ color: primary, fontSize: "35px", fontWeight: "700" }}
            >
              {texts.freeServiceTitle}.
            </h3>
            <p
              className="ml-1"
              style={{ color: primary, fontSize: "13px", marginTop: "10px" }}
            >
              {texts.freeServiceText}
            </p>
          </div>
          <div className="service-banner-card flex flex-row">
            <div
              className="service-banner-cc whitespace-pre-line border-none rounded-[10px] px-5 py-2 mr-3"
              style={{ backgroundColor: softGrey }}
            >
              <img src="null" alt="" className="img-service" />
              <h3
                className="mb-2"
                style={{ color: primary, fontSize: "15px", fontWeight: "600" }}
              >
                {texts.shelterTitle}
              </h3>
              <p style={{ color: primary, fontSize: "11px" }}>
                {texts.shelterText}
              </p>
            </div>
            <div
              className="service-banner-cc whitespace-pre-line border-none rounded-[10px] px-5 py-2 mr-3"
              style={{ backgroundColor: accent }}
            >
              <img src="null" alt="" className="img-service" />
              <h3
                className="mb-2"
                style={{ color: primary, fontSize: "15px", fontWeight: "600" }}
              >
                {texts.lookingForPetTitle}
              </h3>
              <p style={{ color: primary, fontSize: "11px" }}>
                {texts.lookingForPetText}
              </p>
            </div>
          </div>
        </div>

        <div className="numbers-banner">
          <div className="numbers-banner-card px-5 py-2">
            <h2
              style={{
                color: vibrantBlue,
                fontSize: "40px",
                fontWeight: "700",
              }}
            >
              {texts.adoptedPetsNumber}
            </h2>
            <h3 style={{ color: primary, fontSize: "15px", fontWeight: "600" }}>
              {texts.adoptedPetsText}
            </h3>
            <p style={{ color: primary, fontSize: "12px" }}>
              {texts.adoptedPetsDescription}
            </p>
          </div>
          <div className="numbers-banner-card">
            <img src="null" alt="" className="img-numbers" />
          </div>
          <div
            className="numbers-banner-card px-5 py-2"
            style={{ textAlign: "left" }}
          >
            <h2
              style={{
                color: vibrantBlue,
                fontSize: "40px",
                fontWeight: "700",
              }}
            >
              {texts.dailyUsersNumber}
            </h2>
            <h3 style={{ color: primary, fontSize: "15px", fontWeight: "600" }}>
              {texts.dailyUsersText}
            </h3>
            <p style={{ color: primary, fontSize: "12px" }}>
              {texts.dailyUserDescription}
            </p>
          </div>
        </div>

        <div className="adoption-banner">
            <div className="adoption-banner-content">
          <h2 style={{ color: primary, fontSize: "35px", fontWeight: "700" }}>
            {texts.titleTwo}
          </h2>
          <p style={{ color: primary, fontSize: "16px" }}>
            {texts.subtitleTwo}
          </p>
          <a href="">
            <button
              className="border-none rounded-[20px] px-5 py-1 mt-4 mb-2 cursor-pointer"
              style={{ backgroundColor: accent, fontSize: "12px" }}
            >
              {texts.adoptionTitle}
            </button>
          </a>{" "}
          {/* falta agregar la ruta */}
        </div>
        </div>
      </div>
    </>
  );
}
