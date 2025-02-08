import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Greetings Visitors, I am <span className="purple">Huy 'Tobias' Nguyen </span>
            from <span className="purple"> Hanoi, Vietnam.</span>
            <br />
            {/* I am currently employed as a software developer at Juspay. */}
            I am currently an undergraduated student at PTIT, Hanoi.
            <br />
            {/* I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
            Mesra. */}
            I'm about to graduate from a 4-year study at PTIT. My major is Information Technology, Software Development.            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Novels
            </li>
            <li className="about-activity">
              <ImPointRight /> Hanging out w friends
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I never wish to be easily defined"{" "}
          </p>
          <footer className="blockquote-footer">F. Kafka</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
