import React, { useState, useRef } from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const FaceDetect = () => {
  const [image, setImage] = useState(null);
  const [cameraOpen, setCameraOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const videoRef = useRef(null);


  const relatedItems= [
    {
      name: "Sweets",
      image: "https://firebasestorage.googleapis.com/v0/b/wallmart-instore.appspot.com/o/sweet.jpg?alt=media&token=dd13629e-fb88-4ea4-a4c8-5c283c038970",
    },
    {
      name: "Perfumes",
      image: "https://firebasestorage.googleapis.com/v0/b/wallmart-instore.appspot.com/o/perfume.jpg?alt=media&token=ec9fbe06-cdf8-4df3-b0e0-a29b26e4d67f",
    }
  ];

  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
      setCameraOpen(true);
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const takePicture = () => {
    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageUrl = canvas.toDataURL('image/png');
    setImage(imageUrl);

    const stream = video.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach((track) => track.stop());

    setTimeout(() => {
      setShowContent(true);
    }, 2000); // Show content after 2 seconds
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Shop By Mood</h2>
      <div style={styles.box}>
        {image ? (
          <img src={image} alt="Captured" style={styles.image} />
        ) : (
          <>
            <video ref={videoRef} style={styles.video} />
            {!cameraOpen && (
              <button onClick={openCamera} style={styles.button}>
                Open Camera
              </button>
            )}
            <button onClick={takePicture} style={styles.button}>
              Take Picture
            </button>
          </>
        )}
      </div>
      {showContent && (
        <>
          <p style={{ marginTop: '10px' }}>You seem to be happy</p>
          <p>Wanna buy some:</p>
          <h4>Related Products:</h4>
          <Row className="justify-content-center">
            {relatedItems.map(product => (
              <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex justify-content-center">
                <Card className="text-center">
                  <Card.Img variant="top" src={product.image} className="related-product-img" />
                  <Card.Title className="related-product-title">{product.name}</Card.Title>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  title: {
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333',
  },
  box: {
    width: '300px',
    height: '300px',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid #0071DC',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '10px',
  },
  video: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    marginBottom: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#0071DC',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '5px 0',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '10px',
  },
};

export default FaceDetect;
