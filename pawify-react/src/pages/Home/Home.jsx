import React from "react";
import theme from "@/constants/themes";
import { texts } from "../../constants/texts";
import Button from "../../components/ui/Button/Button";
import "./home.css";

//------------------------descomentar onClick desde component Button.jsx cuando se necesite-------------

export default function Home() {
  //estilos colores
  const {
    background,
    primary,
    secondary,
    goldenYellow,
    softGrey,
    vibrantBlue,
    vibrantBlue2,
  } = theme.colors;

  return (
    <div>
      {/* HERO CONTENT */}

      <div
        className="Home py-5 px-7"
        style={{ backgroundColor: background, textAlign: "left" }}
      >
        <div
          className="hero-content"
          style={{
            backgroundColor: softGrey,
            position: "relative",
            width: "100%",
            height: "auto",
            minHeight: "100%",
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cg transform='scale(1,-1) translate(0,-320)'%3E%3Cpath fill='%23ffffff' fill-opacity='0.8' d='M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,128C672,128,768,160,864,176C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundSize: "100%",
          }}
        >
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
              <Button> {texts.adoptionTitle} </Button>
            </a>{" "}
            {/* falta agregar la ruta */}
          </div>
          <div className="hero-content-right">
            {" "}
            <img src="hero-home.png" alt="" className="img-hero" />
          </div>
        </div>

        {/* BANNER SERVICIO GRATUITO */}

        <div className="service-banner">
          <div className="service-banner-card ">
            <h3
              className="whitespace-pre-line ml-1"
              style={{ color: primary, fontWeight: "700" }}
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
              <img
                src="new_imgs_hero/pet-food.png"
                alt="Pet food"
                className="img-our-service"
              />
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
              style={{ backgroundColor: goldenYellow }}
            >
              <img
                src="new_imgs_hero/dog-training.png"
                alt="Dog"
                className="img-our-service"
              />
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

        {/* BANNER VISITAS Y ADOPCIONES */}

        <div
          className="numbers-banner"
          style={{
            backgroundColor: softGrey,
            position: "relative",
            width: "100%",
            height: "300px",
            minHeight: "100%",
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cg transform='scale(1,-1) translate(0,-320)'%3E%3Cpath fill='%23ffffff' fill-opacity='0.8' d='M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,128C672,128,768,160,864,176C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundSize: "100%",
          }}
        >
          <div className="numbers-banner-card px-5 py-1">
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
            <img
              src="numbers-img.png"
              alt="Puppy and kitten"
              className="img-numbers"
            />
          </div>
          <div
            className="numbers-banner-card px-5 py-1"
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

        {/* BANNER ADOPCION */}

        <div
          className="adoption-banner border-none rounded-[10px]"
          style={{ background: vibrantBlue }}
        >
          <div className="adoption-banner-content p-1">
            <h2 style={{ color: primary, fontWeight: "700" }}>
              {texts.titleTwo}
            </h2>
            <p style={{ color: primary, fontSize: "16px" }}>
              {texts.subtitleTwo}
            </p>
            <a href="">
              <Button> {texts.adoptionTitle} </Button>
            </a>{" "}
            {/* falta agregar la ruta */}
          </div>
        </div>

        {/* NUESTRO SERVICIO */}

        <div className="service-section">
          <div className="service-content">
            <div className="header-left">
              <h4 style={{ color: vibrantBlue, fontSize: "16px" }}>
                {texts.serviceSection}
              </h4>
              <h2 style={{ color: primary, fontWeight: "700" }}>
                {texts.serviceTitle}
              </h2>
            </div>
            <div className="header-right">
              {/* <p style={{ color: primary, fontSize: "16px" }}>
                {texts.serviceSubtitle}
              </p> */}
              <p style={{ color: primary, fontSize: "16px" }}>
                Somos el nuevo buscador para{" "}
                <span style={{ fontWeight: 600 }}>mascotas invisibles</span> en
                todo el mundo, ayudándolas a encontrar un hogar lo antes
                posible.
              </p>
              <a href="">
                <Button> {texts.adoptionTitle} </Button>
              </a>{" "}
            </div>
          </div>

          <div className="service-card-container">
            {/* Card 1 */}
            <div className="service-card whitespace-pre-line border-none rounded-[10px]">
              <img
                src="new_imgs_hero/dog-wash.png"
                alt="Dog having a bath"
                className="img-service"
              />
              <h3
                className="mb-2"
                style={{ color: primary, fontSize: "15px", fontWeight: "600" }}
              >
                {texts.serviceOne}
              </h3>
              <p style={{ color: primary }}>{texts.serviceOneDescription}</p>
              <a href="">
                <Button> {texts.proximamente} </Button>
              </a>{" "}
            </div>
            {/* Card 2 */}
            <div className="service-card whitespace-pre-line border-none rounded-[10px]">
              <img
                src="new_imgs_hero/dog-training.png"
                alt="Dog"
                className="img-service"
              />
              <h3
                className="mb-2"
                style={{ color: primary, fontSize: "15px", fontWeight: "600" }}
              >
                {texts.serviceTwo}
              </h3>
              <p style={{ color: primary }}>{texts.serviceTwoDescription}</p>
              <a href="">
                <Button> {texts.proximamente} </Button>
              </a>{" "}
            </div>
            {/* Card 3 */}
            <div className="service-card whitespace-pre-line border-none rounded-[10px]">
              <img
                src="new_imgs_hero/dog-adopt.png"
                alt="A cat and a dog in a box"
                className="img-service"
              />
              <h3
                className="mb-2"
                style={{ color: primary, fontSize: "15px", fontWeight: "600" }}
              >
                {texts.serviceThree}
              </h3>
              <p style={{ color: primary }}>{texts.serviceThreeDescription}</p>
              <a href="">
                <Button> {texts.adoptionTitle} </Button>
              </a>{" "}
            </div>
            {/* Card 4 */}
            <div className="service-card whitespace-pre-line border-none rounded-[10px]">
              <img
                src="new_imgs_hero/adoption.png"
                alt="A heart in a hand"
                className="img-service"
              />
              <h3
                className="mb-2"
                style={{ color: primary, fontSize: "15px", fontWeight: "600" }}
              >
                {texts.serviceFour}
              </h3>
              <p style={{ color: primary }}>{texts.serviceFourDescription}</p>
              <a href="">
                <Button> {texts.proximamente} </Button>
              </a>{" "}
            </div>
            {/* Card 5 */}
            <div className="service-card whitespace-pre-line border-none rounded-[10px]">
              <img
                src="new_imgs_hero/fan.png"
                alt="A dog getting its fur dried"
                className="img-service"
              />
              <h3
                className="mb-2"
                style={{ color: primary, fontSize: "15px", fontWeight: "600" }}
              >
                {texts.serviceFive}
              </h3>
              <p style={{ color: primary }}>{texts.serviceFiveDescription}</p>
              <a href="">
                <Button> {texts.proximamente} </Button>
              </a>{" "}
            </div>
            {/* Card 6 */}
            <div className="service-card whitespace-pre-line border-none rounded-[10px]">
              <img
                src="new_imgs_hero/pet-food.png"
                alt="Pet food"
                className="img-service"
              />
              <h3
                className="mb-2"
                style={{ color: primary, fontSize: "15px", fontWeight: "600" }}
              >
                {texts.serviceSix}
              </h3>
              <p style={{ color: primary }}>{texts.serviceSixDescription}</p>
              <a href="">
                <Button> {texts.proximamente} </Button>
              </a>{" "}
            </div>
          </div>
        </div>

        {/* POR QUE ELEGIR PAWIFY */}

        <div
          className="why-section"
          style={{
            backgroundColor: softGrey,
            position: "relative",
            width: "100%",
            height: "auto",
            minHeight: "100%",
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='0.8' d='M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,128C672,128,768,160,864,176C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'%3E%3C/path%3E%3C/svg%3E\")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
            backgroundSize: "100%",
          }}
        >
          <div className="why-content px-5 pt-[100px]">
            <div className="header-left">
              <h4
                style={{
                  color: vibrantBlue,
                  fontSize: "16px",
                  textAlign: "left",
                }}
              >
                {texts.whySection}
              </h4>
              <h2
                style={{
                  color: primary,
                  fontSize: "35px",
                  fontWeight: "700",
                  textAlign: "left",
                }}
              >
                {texts.whyTitle}
              </h2>
              <p
                className="pt-5 mb-5"
                style={{ color: primary, fontSize: "16px", textAlign: "left" }}
              >
                {texts.whySubtitle}
              </p>
              <div className="why-cards flex flex-row flex-wrap pt-5">
                {/* Card 1 */}
                <div
                  className="why-cards-cc whitespace-pre-line border-none rounded-[10px] px-5 py-2 mr-3 mb-3"
                  style={{
                    width: "200px",
                    height: "auto",
                    backgroundColor: background,
                  }}
                >
                  <img
                    src="new_imgs_hero/owner.png"
                    alt="A dog with its owner"
                    className="img-service"
                  />
                  <h3
                    className="my-1"
                    style={{
                      color: primary,
                      fontSize: "15px",
                      fontWeight: "600",
                    }}
                  >
                    {texts.reasonOne}
                  </h3>
                  <p style={{ color: primary, fontSize: "11px" }}>
                    {texts.reasonOneDescription}
                  </p>
                </div>
                {/* Card 2 */}
                <div
                  className="why-cards-cc whitespace-pre-line border-none rounded-[10px] px-5 py-2 mr-3 mb-3"
                  style={{
                    width: "200px",
                    height: "auto",
                    backgroundColor: background,
                  }}
                >
                  <img
                    src="new_imgs_hero/certificate.png"
                    alt="Certificate"
                    className="img-service"
                  />
                  <h3
                    className="my-1"
                    style={{
                      color: primary,
                      fontSize: "15px",
                      fontWeight: "600",
                    }}
                  >
                    {texts.reasonTwo}
                  </h3>
                  <p style={{ color: primary, fontSize: "11px" }}>
                    {texts.reasonTwoDescription}
                  </p>
                </div>
                {/* Card 3 */}
                <div
                  className="why-cards-cc whitespace-pre-line border-none rounded-[10px] px-5 py-2 mr-3 mb-3"
                  style={{
                    width: "200px",
                    height: "auto",
                    backgroundColor: background,
                  }}
                >
                  <img
                    src="new_imgs_hero/chat.png"
                    alt="A mobile"
                    className="img-service"
                  />
                  <h3
                    className="my-1"
                    style={{
                      color: primary,
                      fontSize: "15px",
                      fontWeight: "600",
                    }}
                  >
                    {texts.reasonThree}
                  </h3>
                  <p style={{ color: primary, fontSize: "11px" }}>
                    {texts.reasonThreeDescription}
                  </p>
                </div>
                {/* Card 4 */}
                <div
                  className="why-cards-cc whitespace-pre-line border-none rounded-[10px] px-5 py-2 mr-3 mb-3"
                  style={{
                    width: "200px",
                    height: "auto",
                    backgroundColor: background,
                  }}
                >
                  <img
                    src="new_imgs_hero/lifebuoy.png"
                    alt="A lifebuoy"
                    className="img-service"
                  />
                  <h3
                    className="my-1"
                    style={{
                      color: primary,
                      fontSize: "15px",
                      fontWeight: "600",
                    }}
                  >
                    {texts.reasonFour}
                  </h3>
                  <p style={{ color: primary, fontSize: "11px" }}>
                    {texts.reasonFourDescription}
                    <a href="">{texts.reasonFourDescriptionLink}</a>{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="img-why-container">
              <img
                src="why-us-img.png"
                alt="Cat with a ball of yarn"
                className="img-why"
              />
            </div>
          </div>
        </div>

        {/* DESCUBRE MÁS*/}

        <div
          className="more-section"
          style={{
            backgroundColor: softGrey,
            position: "relative",
            width: "100%",
            height: "auto",
            minHeight: "100%",
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cg transform='scale(1,-1) translate(0,-320)'%3E%3Cpath fill='%23ffffff' fill-opacity='0.8' d='M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,128C672,128,768,160,864,176C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundSize: "100%",
          }}
        >
          <div className="more-content px-5 ">
            <div className="header-left">
              <h4 style={{ color: vibrantBlue, fontSize: "16px" }}>
                {texts.moreSection}
              </h4>
              <h2
                style={{ color: primary, fontSize: "35px", fontWeight: "700" }}
              >
                {texts.moreTitle}
              </h2>
              {/* <p className="pt-5" style={{ color: primary, fontSize: "16px" }}>
                {texts.moreSubtitle}
              </p> */}
              <p style={{ color: primary, fontSize: "16px" }}>
                Descubre una amplia gama de{" "}
                <span style={{ fontWeight: 600 }}>servicios y productos</span>{" "}
                diseñados para cubrir todas las necesidades de tu mascota.
              </p>
              <div className="more-cards flex flex-col flex-wrap items-center pt-2">
                {/* Card 1 */}
                <div
                  className="more-cards-cc flex flex-row items-center whitespace-pre-line border-none rounded-[10px] px-5 py-2 mr-3 mb-2"
                  style={{
                    width: "100%",
                    height: "auto",
                    gap: "15px",
                    backgroundColor: background,
                  }}
                >
                  <div className="img-more-container">
                    <img
                      src="new_imgs_hero/pet-food.png"
                      alt="Dog food"
                      className="img-more"
                    />
                  </div>
                  <div>
                    <h3
                      className="mb-0"
                      style={{
                        color: primary,
                        fontSize: "15px",
                        fontWeight: "600",
                      }}
                    >
                      {texts.moreInfoOne}
                    </h3>
                    <p style={{ color: primary, fontSize: "11px" }}>
                      {texts.moreInfoOneDescription}
                    </p>
                  </div>
                </div>
                {/* Card 2 */}
                <div
                  className="more-cards-cc flex flex-row items-center whitespace-pre-line border-none rounded-[10px] px-5 py-2 mr-3 mb-1"
                  style={{
                    width: "100%",
                    height: "auto",
                    gap: "15px",
                    backgroundColor: background,
                  }}
                >
                  <div className="img-more-container">
                    <img
                      src="new_imgs_hero/adoption.png"
                      alt="A heart in a hand"
                      className="img-more"
                    />
                  </div>
                  <div>
                    <h3
                      className="mb-0"
                      style={{
                        color: primary,
                        fontSize: "15px",
                        fontWeight: "600",
                      }}
                    >
                      {texts.moreInfoTwo}
                    </h3>
                    <p style={{ color: primary, fontSize: "11px" }}>
                      {texts.moreInfoTwoDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="header-right">
              <div
                className="contact-info border-none rounded-[10px] p-5 w-[275px]"
                style={{ background: vibrantBlue2, color: background }}
              >
                <img
                  src="new_imgs_hero/chat.png"
                  alt="A mobile"
                  className="img-more-contact"
                />
                <p className="pt-1" style={{ fontSize: "16px" }}>
                  {texts.moreContactTitle}
                </p>
                <p style={{ fontSize: "11px" }}>{texts.moreContactInfo}</p>
                <hr className="m-3"></hr>
                <p style={{ fontSize: "16px" }}>{texts.moreAdoptionTitle}</p>
                <p style={{ fontSize: "11px" }}>{texts.moreAdoptionInfo}</p>
                <p className="pt-2" style={{ fontSize: "16px" }}>
                  {texts.moreCareTitle}
                </p>
                <p style={{ fontSize: "11px" }}>{texts.moreCareInfo}</p>
                <p className="pt-2" style={{ fontSize: "16px" }}>
                  {texts.moreShopTitle}
                </p>
                <p style={{ fontSize: "11px" }}>{texts.moreShopInfo}</p>
                <hr className="m-3"></hr>
                <p style={{ fontSize: "11px" }}>{texts.moreExtraInfo}</p>
              </div>
            </div>
          </div>
        </div>

        {/* TESTIMONIAL */}

        <div className="testimonial-section">
          <div className="testimonial-content text-center">
            <h4 style={{ color: vibrantBlue, fontSize: "16px" }}>
              {texts.testimonialSection}
            </h4>
            <h2 style={{ color: primary, fontSize: "35px", fontWeight: "700" }}>
              {texts.testimonialTitle}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
