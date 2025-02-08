import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mazedfs from "../../Assets/Projects/mazedfs.jpg";
import tikicrawl from "../../Assets/Projects/tikicrawl.png";
import lstm from "../../Assets/Projects/lstm.jpg";
import iot_webpage from "../../Assets/Projects/iot_webpage.jpg";
import salelr from "../../Assets/Projects/salelr.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tikicrawl}
              isBlog={false}
              title="Tiki Product Crawler"
              description="A web scraping tool designed to extract product data from Tiki.vn, a popular e-commerce platform in Vietnam. It utilizes Python with libraries like BeautifulSoup and requests to crawl product details such as names, prices, ratings, and images. The collected data is then structured and stored for further analysis or application. This tool is useful for market research, price comparison, or e-commerce data analysis."
              ghLink="https://github.com/itwasmehyu/tikiCrawler"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lstm}
              isBlog={false}
              title="Eng_Vie Translator"
              description="A neural machine translation (NMT) project that uses Long Short-Term Memory (LSTM) networks to translate between English and Vietnamese. Built with Python and TensorFlow/Keras, the model is trained on a dataset of bilingual sentence pairs to learn language patterns and improve translation accuracy. The repository includes data preprocessing steps, model training scripts, and evaluation methods to assess translation quality. This project is useful for natural language processing (NLP) research, educational purposes, or as a foundation for developing custom machine translation systems."
              ghLink="https://github.com/itwasmehyu/LSTM_EngVie"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={salelr}
              isBlog={false}
              title="Sales Prediction using LR"
              description="A machine learning project focused on sales prediction using historical data. Built with Python, it utilizes libraries such as pandas, scikit-learn, and matplotlib for data preprocessing, model training, and visualization. The project applies regression techniques to analyze past sales trends and predict future performance, making it valuable for business analytics, demand forecasting, and decision-making. With a structured workflow, this repository can be extended to incorporate more advanced models like deep learning or integrated into a larger data-driven sales strategy."
              ghLink="https://github.com/itwasmehyu/Sales_Predict"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mazedfs}
              isBlog={false}
              title="Maze Runner based on DFS"
              description="A maze generation and solving project implemented in Python. It uses Depth-First Search (DFS) to both generate random mazes and find solutions to them. The project likely employs graph-based algorithms to construct the maze as a grid of nodes and traverse it systematically to find a valid path. This repository is useful for understanding graph traversal, backtracking techniques, and algorithmic problem-solving. It can be expanded with other pathfinding algorithms like A or BFS* to compare efficiency and effectiveness."
              ghLink="https://github.com/itwasmehyu/Maze_Gen_and_Solve_using_DFS"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iot_webpage}
              isBlog={false}
              title="IOT Report Webpage"
              description="A web-based IoT device management system designed to monitor and control connected devices. Built with full-stack web technologies, the project likely includes a backend for handling device communication and a frontend for user interaction. It enables users to view real-time device status, send commands, and analyze collected data, making it useful for smart home automation, industrial IoT, or remote monitoring applications. The repository can be extended with features like MQTT integration, cloud storage, or AI-driven analytics to enhance functionality."
              ghLink="https://github.com/itwasmehyu/iot_admin"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
