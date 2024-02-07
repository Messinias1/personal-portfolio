// import { Container, Row, Col } from "react-bootstrap";
// import { ArrowRightCircle } from "react-bootstrap-icons";
// import headerImg from "../assets/img/download.svg";
// import { useState, useEffect } from "react";
// import "animate.css";
// import TrackVisibility from "react-on-screen";

// export const Banner = () => {
//   const [setActiveLink] = useState("home");
//   const [loopNum, setLoopNum] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);

//   const [text, setText] = useState("");
//   const [delta, setDelta] = useState(300 - Math.random() * 100);
//   const period = 2000;

//   useEffect(() => {
//     const toRotate = [
//       "Software Engineer",
//       "Web Developer",
//       "Fullstack Developer",
//     ];
//     const tick = () => {
//       let i = loopNum % toRotate.length;
//       let fullText = toRotate[i];
//       let updatedText = isDeleting
//         ? fullText.substring(0, text.length - 1)
//         : fullText.substring(0, text.length + 1);

//       setText(updatedText);

//       if (isDeleting) {
//         setDelta((prevDelta) => prevDelta / 2);
//       }

//       if (!isDeleting && updatedText === fullText) {
//         setIsDeleting(true);
//         setDelta(period);
//       } else if (isDeleting && updatedText === "") {
//         setIsDeleting(false);
//         setLoopNum(loopNum + 1);
//         setDelta(500);
//       }
//     };

//     let ticker = setInterval(() => {
//       tick();
//     }, delta);

//     return () => {
//       clearInterval(ticker);
//     };
//   }, [delta, isDeleting, loopNum, text]);

//   const onUpdateActiveLink = (value) => {
//     setActiveLink(value);
//   };

//   return (
//     <section className="banner" id="home">
//       <Container>
//         <Row className="align-items-center">
//           <Col xs={12} md={6} xl={7}>
//             <TrackVisibility>
//               {({ isVisible }) => (
//                 <div
//                   className={
//                     isVisible ? "animate__animated animate__pulse" : ""
//                   }
//                 >
//                   <span className="tagLine">Welcome to my Portfolio</span>
//                   <h1>
//                     {`Hi I'm Carl Kakisis, a `}
//                     <span className="wrap">{text}</span>
//                   </h1>
//                   <p className="intro">
//                     Diving deep into the world of code, I sculpt digital
//                     experiences that resonate and transform. I'm dedicated to
//                     turning complex problems into elegant solutions.
//                   </p>
//                   <a href="#connect">
//                     <button onClick={() => onUpdateActiveLink("connect")}>
//                       Let's Connect <ArrowRightCircle size={25} />
//                     </button>
//                   </a>
//                 </div>
//               )}
//             </TrackVisibility>
//           </Col>
//           <Col xs={12} md={6} xl={2}>
//             <img src={headerImg} alt="Header Img" />
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/download.svg"; // Adjust the path as necessary
import { useState, useEffect } from "react";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [text, setText] = useState("");
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const toRotate = [
      "Software Engineer",
      "Web Developer",
      "Fullstack Developer",
    ];
    setText(toRotate[activeIndex]);

    const interval = setInterval(() => {
      setIsFadingOut(true);

      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % toRotate.length);
        setIsFadingOut(false);
      }, 1000); // Wait for the fade-out to complete before changing the word
    }, 2000); // Total time for each word is 2 seconds

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__pulse" : ""
                  }
                >
                  <span className="tagLine">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi I'm Carl Kakisis, a `}
                    <span
                      className={`wrap ${isFadingOut ? "fade-out" : "fade-in"}`}
                    >
                      {text}
                    </span>
                  </h1>
                  <p>
                    Diving deep into the world of code, I sculpt digital
                    experiences that resonate and transform. I'm dedicated to
                    turning complex problems into elegant solutions.
                  </p>
                  <a href="#connect">
                    <button>
                      Let's Connect <ArrowRightCircle size={25} />
                    </button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={2}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
