// import React, { useState, useEffect } from "react";
// import { Container, Row } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Particle from "../Particle";
// // import pdf from "../../Assets/../Assets/Soumyajit_Behera-BIT_MESRA.pdf";
// import pdf from "C:/Users/OS/personal_portfolio/src/Assets/Resume_CV.pdf";
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

import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Cấu hình workerSrc cho pdf.js
try {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;
} catch (error) {
  console.error("Không thể tải PDF worker:", error);
}

// Đường dẫn đến file PDF (nên đặt trong thư mục public)
const pdfFile = "/Resume_CV.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  // Cập nhật chiều rộng màn hình khi resize
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        
        {/* Nút tải xuống PDF */}
        <Row className="justify-content-center my-3">
          <Button
            variant="primary"
            href={pdfFile}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* Hiển thị bản xem trước PDF */}
        <Row className="justify-content-center my-4">
          <Document
            file={pdfFile}
            onLoadError={(error) => console.error("Lỗi tải PDF:", error)}
          >
            <Page
              pageNumber={1}
              scale={width > 786 ? 1.5 : 0.6}
              loading="Đang tải PDF..."
            />
          </Document>
        </Row>

        {/* Nút tải xuống PDF (lặp lại ở cuối) */}
        <Row className="justify-content-center my-3">
          <Button
            variant="primary"
            href={pdfFile}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;