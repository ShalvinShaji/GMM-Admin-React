import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faCloudArrowUp,
  faSuitcase,
} from "@fortawesome/free-solid-svg-icons";
import Sectionhead from "../components/Sectionhead";
import { Link } from "react-router-dom";
import CustomPopup from "../components/CustomPopup";

const NewCareerAdder = () => {
  const imageInput = useRef(null);
  const [CareerTitle, setCareerTitle] = useState("");
  const [CareerDescription, setCareerDescription] = useState("");
  const [CareerDate, setCareerDate] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [showSavePopup, setShowSavePopup] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageUrl(e.target.result);
        console.log(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCareerTitleChange = (event) => {
    setCareerTitle(event.target.value);
  };
  const handleCareerDescriptionChange = (event) => {
    setCareerDescription(event.target.value);
  };
  const handleCareerDateChange = (event) => {
    setCareerDate(event.target.value);
  };

  const handleSaveCareer = () => {
    if (!CareerTitle || !CareerDescription || !CareerDate || !imageUrl) {
      // If any of the required fields are empty, show an alert
      alert("Please fill in all the required fields.");
    } else {
      setShowSavePopup(true);
    }
  };

  const handleConfirmSaveCareer = () => {
    const newCareerItem = {
      title: CareerTitle,
      description: CareerDescription,
      date: CareerDate,
      image: imageUrl,
    };
    console.log(newCareerItem);

    setShowSavePopup(false);
    setCareerTitle("");
    setCareerDescription("");
    setCareerDate("");
    setImageUrl("");
  };

  const handleSavePopupClose = () => {
    setShowSavePopup(false);
  };

  function newCareerData() {
    return (
      <div className="data-adder">
        <Form>
          <Form.Group>
            <Form.Label className="input-labels">
              Add Career Banner Image
            </Form.Label>
            <Form.Control
              ref={imageInput}
              type="file"
              className="image-input-selecter"
              onChange={handleFileChange}
              required
            />
          </Form.Group>
          <Button
            onClick={() => imageInput.current.click()}
            className="image-select-delete-btn mb-3"
          >
            <span>Select Image</span>
            <FontAwesomeIcon icon={faImage} className="ms-2" />
          </Button>
          <div className="news-image">
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Uploaded"
                className="img-fluid mb-2 mt-1"
              />
            )}
          </div>
          <Form.Group className="mt-2">
            <Form.Label className="input-labels">Add Career Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter career title here..."
              value={CareerTitle}
              onChange={handleCareerTitleChange}
              className="input-fields"
              required
            />
          </Form.Group>
          <Form.Group className="mb-4 mt-4" as={Col} md="3">
            <Form.Label className="input-labels">Add Career Month</Form.Label>
            <Form.Control
              type="month"
              value={CareerDate}
              onChange={handleCareerDateChange}
              className="news-date-area"
              min="2023-08"
              max="3000-08"
              required
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label className="input-labels">
              Add Career Description
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={10}
              className="input-fields"
              placeholder="Enter the career description here..."
              value={CareerDescription}
              onChange={handleCareerDescriptionChange}
              required
            />
          </Form.Group>
        </Form>
        <div className="save-news-btn d-flex justify-content-center align-items-center">
          <Button
            className="image-select-delete-btn mt-2"
            onClick={handleSaveCareer}
          >
            <span>Save Career</span>
            <FontAwesomeIcon icon={faCloudArrowUp} className="ms-2" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <section>
        <Sectionhead sectionname="Add new Career" />
        <div className="container">
          <div className="row mb-4">
            <div className="col d-flex justify-content-end">
              <Link to="/Careers">
                <Button className="image-select-delete-btn">
                  <span className="text-white">Back to Careers</span>
                  <FontAwesomeIcon
                    icon={faSuitcase}
                    className="ms-2 text-white"
                  />
                </Button>
              </Link>
            </div>
          </div>
          {newCareerData()}
        </div>
      </section>
      <CustomPopup
        show={showSavePopup}
        onHide={handleSavePopupClose}
        onConfirm={handleConfirmSaveCareer}
        message="Do you really want to save this Career?"
      />
    </>
  );
};

export default NewCareerAdder;
