

import React, { useState, useRef } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ReactStars from "./Star-Rating";
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";


export default function ReviewModal(props) {
    const [show, setShow] = useState(false);
    const [reviewList, setReviewList] = useState([
      {
            id: 1,
            name: 'Silly Scribe',
            info: 'A tickle full of laughs!',
            star: '5★',
      }
    ]);

  const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const name = useRef(null);
    const info = useRef(null);
    let starRating = [];

    const changedStarRating = (newStarRating) => {
        let newRating = `${newStarRating}★`;
        starRating.push(newRating)
    }

  
    function saveNewReviewButton() {
        setReviewList(current => [...current, {
            name: name.current.value,
            info: info.current.value,
            star: starRating[starRating.length-1]
        }]);
        console.log(`Saved`);
        name.current.value = '';
        info.current.value = '';
        starRating = [];
    }


  function AllReviews() {
        const itemList = reviewList.map((review) => (
          <>
            <ListGroup>
              <ListGroupItem variant ="primary">{review.info}</ListGroupItem>
              <ListGroupItem> {review.star}</ListGroupItem>
              <ListGroupItem>{review.name}</ListGroupItem>
           </ListGroup>
          </>
        ));

        return (
          <div>
            {itemList}
          </div>
        );
    }


  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        LensLaugh User Movie Review
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Review Form for {props.movieTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="reviewForm">
            <Form.Group className="mb-3">
              <Form.Control ref={name} type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group
              className="mb-4"
              controlId="exampleForm.ControlTextarea1"
             >
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Write your review here"
                ref={info}
              />

              <ReactStars count={5} size={28} onChange={changedStarRating} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveNewReviewButton}>
            Submit Review
          </Button>
        </Modal.Footer>
        <h3 className="text-center">
          <b><strong>LensLaugh Reviews</strong></b>
        </h3>
        <div>
          <AllReviews key={reviewList.id} />
        </div>
      </Modal>
    </>
  );
}