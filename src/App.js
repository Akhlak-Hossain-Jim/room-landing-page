import React, { useState } from "react";
import styled from "styled-components";

function App() {
  const [slide, setslide] = useState(1);
  const [toggle, settoggle] = useState(false);

  return (
    <>
      <Header>
        <div className="ham" onClick={() => settoggle(!toggle)}>
          {toggle ? (
            <img src="/images/icon-close.svg" alt="ham close" />
          ) : (
            <img src="/images/icon-hamburger.svg" alt="ham" />
          )}
        </div>
        <a href="/" className="logo">
          <img src="/images/logo.svg" alt="brand logo" />
        </a>
        <nav className={toggle ? "m" : null}>
          <a className="link" href="home">
            home
          </a>
          <a className="link" href="s">
            shop
          </a>
          <a className="link" href="a">
            about
          </a>
          <a className="link" href="c">
            contact
          </a>
        </nav>
      </Header>
      <Section className="one">
        <div className="left">
          {slide === 1 ? (
            <>
              <img
                className="web"
                src="/images/desktop-image-hero-1.jpg"
                alt="cover 1"
              />
              <img
                className="m"
                src="/images/mobile-image-hero-1.jpg"
                alt="cover 1"
              />
            </>
          ) : slide === 2 ? (
            <>
              <img
                className="web"
                src="/images/desktop-image-hero-2.jpg"
                alt="cover 2"
              />
              <img
                className="m"
                src="/images/mobile-image-hero-2.jpg"
                alt="cover 2"
              />
            </>
          ) : slide === 3 ? (
            <>
              <img
                className="web"
                src="/images/desktop-image-hero-3.jpg"
                alt="cover 3"
              />
              <img
                className="m"
                src="/images/mobile-image-hero-3.jpg"
                alt="cover 2"
              />
            </>
          ) : (
            <>
              <img
                className="web"
                src="/images/desktop-image-hero-1.jpg"
                alt="cover 1"
              />
              <img
                className="m"
                src="/images/mobile-image-hero-2.jpg"
                alt="cover 2"
              />
            </>
          )}
        </div>
        <div className="right">
          {slide === 1 ? (
            <h1>Discover innovative ways to decorate</h1>
          ) : slide === 2 ? (
            <h1>We are available all across the globe</h1>
          ) : slide === 3 ? (
            <h1>Manufactured with the best materials</h1>
          ) : (
            <h1>Discover innovative ways to decorate</h1>
          )}

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            dicta neque excepturi cupiditate doloribus quaerat minus nisi culpa
            explicabo, ipsum beatae quo quibusdam minima cumque quas,
            atexplicabo, ipsum beatae quo quibusdam minima cumque quas, at
          </p>
          <a href="#s">
            SHOP NOW <img src="/images/icon-arrow.svg" alt="arrow" />
          </a>
          <div className="but">
            <img
              src="/images/icon-angle-left.svg"
              alt="left-arrow"
              onClick={() =>
                setslide(
                  slide === 1 ? 3 : slide === 3 ? 2 : slide === 2 ? 1 : 1
                )
              }
            />
            <img
              src="/images/icon-angle-right.svg"
              alt="right-arrow"
              onClick={() =>
                setslide(
                  slide === 1 ? 2 : slide === 2 ? 3 : slide === 3 ? 1 : 1
                )
              }
            />
          </div>
        </div>
      </Section>
      <Section className="two">
        <div className="img">
          <img src="/images/image-about-dark.jpg" alt={`about dark`} />
        </div>
        <div className="text">
          <h2>About Our Furniture</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quam
            iste nostrum. Eveniet sequi natus ullam totam quisquam iusto tempore
            eum culpa. Consequuntur aut iste laudantium! Minima neque maxime
            voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Vero quam iste nostrum. Eveniet sequi natus ullam totam
            quisquam iusto tempore eum culpa. Consequuntur aut iste laudantium!
            Minima neque maxime voluptatibus.
          </p>
        </div>
        <div className="img">
          <img src="/images/image-about-light.jpg" alt="about light" />
        </div>
      </Section>
    </>
  );
}

const Header = styled.header`
  padding: 0 58px;
  display: flex;
  align-items: center;
  gap: 28px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 133.6px;
  @media (max-width: 548px) {
    padding: 0 20px;
    height: 100px;
  }
  nav {
    display: flex;
    align-items: center;
    gap: 28px;
    @media (max-width: 548px) {
      display: none;
      &.m {
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding: 40px 0 40px 100px;
        background-color: white;
        a {
          color: hsl(0, 0%, 4%);
          font-weight: 700;
          text-decoration: none;
          font-size: 11px;
          padding-bottom: 3px;
          position: relative;
          &.link {
            &:hover {
              &::after {
                position: absolute;
                bottom: -10px;
                left: 10%;
                content: "";
                height: 2px;
                width: 20px;
                background-color: hsl(0, 0%, 95%);
              }
            }
            &:last-child {
              &::after {
                left: 20%;
              }
            }
          }
          &.logo {
            padding-bottom: 0px;
          }
        }
      }
    }
  }
  .ham {
    padding-right: 60px;
    z-index: 30;
    @media (min-width: 549px) {
      display: none;
    }
  }
  a {
    color: hsl(0, 0%, 95%);
    font-weight: 600;
    text-decoration: none;
    font-size: 11px;
    padding-bottom: 3px;
    position: relative;
    &.link {
      &:hover {
        &::after {
          position: absolute;
          bottom: -10px;
          left: 10%;
          content: "";
          height: 2px;
          width: 20px;
          background-color: hsl(0, 0%, 95%);
        }
      }
      &:last-child {
        &::after {
          left: 20%;
        }
      }
    }
    &.logo {
      padding-bottom: 0px;
    }
  }
  img {
    height: 13px;
    margin-right: 22px;
  }
`;

const Section = styled.section`
  &.one {
    display: grid;
    grid-template-columns: 6.8fr 5fr;
    @media (max-width: 548px) {
      grid-template-columns: 1fr;
    }
    .left {
      overflow: hidden;
      object-position: center;
      object-fit: cover;
      @media (max-width: 548px) {
        aspect-ratio: 1/1;
        width: 100vw;
      }
      img {
        width: 102%;
        aspect-ratio: 16/10;
        @media (max-width: 548px) {
          aspect-ratio: 1/1;
          &.web {
            display: none;
          }
        }
        @media (min-width: 549px) {
          &.m {
            display: none;
          }
        }
      }
    }
    .right {
      position: relative;
      padding: 90px;
      padding-right: 50px;
      display: grid;
      h1 {
        color: hsl(0, 0%, 4%);
        font-size: 37px;
        margin: 20px 0 -10px;
        letter-spacing: -3px;
        line-height: 40px;
        max-width: 330px;
        font-weight: 600;
      }
      p {
        color: hsl(0, 0%, 63%);
        font-size: 11px;
        line-height: 18px;
        margin-bottom: 0px;
        font-weight: 500;
        max-width: 370px;
      }
      a {
        color: hsl(0, 0%, 27%);
        text-decoration: none;
        letter-spacing: 9px;
        font-weight: 600;
        font-size: 12px;
        padding: 0;
      }
      @media (max-width: 548px) {
        padding: 50px 30px 80px;
        gap: 30px;
        h1 {
          font-size: 30px;
        }
      }
    }
    .but {
      position: absolute;
      bottom: 0px;
      img {
        background-color: black;
        padding: 24px 30px;
        height: 22px;
        &:hover {
          background-color: #444444;
        }
      }
      @media (max-width: 548px) {
        right: 0;
        top: -52px;
        img {
          height: 16px;
          padding: 18px 20px;
        }
      }
      @media (min-width: 549px) {
        left: 0;
      }
    }
  }
  &.two {
    margin: -5px 0;
    display: grid;
    grid-template-columns: 4fr 5.5fr 4fr;
    @media (max-width: 548px) {
      grid-template-columns: 1fr;
    }
    .img {
      overflow: hidden;
      width: 100%;
      @media (max-width: 548px) {
        width: 100vw;
      }
    }
    .text {
      padding: 50px 40px;
      h2 {
        font-size: 12px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 4px;
        color: hsl(0, 0%, 10%);
      }
      p {
        color: hsl(0, 0%, 63%);
        font-size: 11px;
        line-height: 18px;
        margin-bottom: 0px;
        font-weight: 500;
      }
    }
  }
`;

export default App;
