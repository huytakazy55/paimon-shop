import React, { useState } from 'react';
import axios from 'axios';
import { FaUpload} from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';

const UploadFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      axios.post('https://localhost:7039/api/musicplayer/upload', formData)
        .then(response => {
          // Xử lý phản hồi từ server (nếu cần)
          console.log(response.data);
        })
        .catch(error => {
          // Xử lý lỗi (nếu có)
          console.error(error);
        });
    }
  };

  return (
    <Container className="uploadFile">
        <Row>
            <Col md={7}></Col>
            <Col md={5}>
                <input type="file" onChange={handleFileChange} />
                <button onClick={handleUpload}><span><FaUpload /></span>Upload File</button>
            </Col>
        </Row>
    </Container>
  );
};

export default UploadFile;