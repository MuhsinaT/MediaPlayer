import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { deleteVideo, addHistory } from '../services/allApis';
import { toast } from 'react-toastify';

function VideoCard({ video, response, cat }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    const dt = new Date();
    const data = {
      videoId: video.videoId, title: video.title, url: video.videoUrl, datetime: dt
    };
    console.log(data);
    const result = await addHistory(data);
    console.log(result);
  };

  const handleDelete = async () => {
    const res = await deleteVideo(video.id);
    console.log(res);
    if (res.status === 200) {
      toast.success("Deletion Successful");
      response(res);
    } else {
      toast.error("Deletion Failed");
    }
  };

  const dragHandler = (e) => {
    console.log(e);
    console.log(video);
    e.dataTransfer.setData("video", JSON.stringify(video));
  };

  return (
    <>
      {/* Video Card */}
      <Card
        style={cat ? { width: "100%" } : { width: '100%', maxWidth: '18rem', marginTop: '20px', backgroundColor: "white", color: "black" }}
        onDragStart={(e) => { dragHandler(e) }}
        draggable
      >
        <Card.Img
          style={{ cursor: 'pointer' }}
          onClick={handleShow}
          variant="top"
          src={video?.imageUrl}
          className="img-fluid"
        />
        <Card.Body>
          <Card.Title>{video?.title}</Card.Title>
          {!cat && (
            <Button variant="btn" onClick={handleDelete}>
              <i className="fa-solid fa-trash" style={{ color: "#ec0914" }} />
            </Button>
          )}
        </Card.Body>
      </Card>

      {/* Video Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{video.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="ratio ratio-16x9">
            <iframe
              src={video.videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default VideoCard;
