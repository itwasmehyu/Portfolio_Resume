// import React, { useState, useEffect } from "react";
// import { Container, Row } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Particle from "../Particle";
// // import pdf from "../../Assets/../Assets/Soumyajit_Behera-BIT_MESRA.pdf";
// import pdf from "C:/Users/OS/personal_portfolio/src/Assets/Projects/Resume_CV.pdf";
// import { AiOutlineDownload } from "react-icons/ai";
// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// function ResumeNew() {
//   const [width, setWidth] = useState(1200);

//   useEffect(() => {
//     setWidth(window.innerWidth);
//   }, []);

//   return (
//     <div>
//       <Container fluid className="resume-section">
//         <Particle />
//         <Row style={{ justifyContent: "center", position: "relative" }}>
//           <Button
//             variant="primary"
//             href={pdf}
//             target="_blank"
//             style={{ maxWidth: "250px" }}
//           >
//             <AiOutlineDownload />
//             &nbsp;Download CV
//           </Button>
//         </Row>

//         <Row className="resume">
//           <Document file={pdf} className="d-flex justify-content-center">
//             <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
//           </Document>
//         </Row>

//         <Row style={{ justifyContent: "center", position: "relative" }}>
//           <Button
//             variant="primary"
//             href={pdf}
//             target="_blank"
//             style={{ maxWidth: "250px" }}
//           >
//             <AiOutlineDownload />
//             &nbsp;Download CV
//           </Button>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default ResumeNew;

import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { AiOutlineDownload } from "react-icons/ai";

const ResumeNew = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [pdfError, setPdfError] = useState(false);
  
  // Update width on window resize
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Move PDF to public folder
  const pdfUrl = '/Resume_CV.pdf';
  
  return (
    <div>
      <Container fluid className="resume-section">
        {/* Top download button */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            onClick={() => window.open(pdfUrl, '_blank')}
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* PDF Preview */}
        <Row className="resume my-5">
          <Col className="d-flex justify-content-center">
            {!pdfError ? (
              <iframe
                src={`${pdfUrl}#view=FitH`}
                style={{ 
                  width: '100%',
                  height: width > 768 ? '842px' : '500px',
                  border: 'none',
                  maxWidth: '1000px'
                }}
                onError={() => setPdfError(true)}
              />
            ) : (
              <div className="text-center p-5">
                <p className="mb-4">Unable to preview PDF. Please download directly.</p>
                <Button
                  variant="primary"
                  onClick={() => window.open(pdfUrl, '_blank')}
                  style={{ maxWidth: "250px" }}
                >
                  <AiOutlineDownload />
                  &nbsp;Download CV
                </Button>
              </div>
            )}
          </Col>
        </Row>

        {/* Bottom download button */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            onClick={() => window.open(pdfUrl, '_blank')}
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export default ResumeNew;