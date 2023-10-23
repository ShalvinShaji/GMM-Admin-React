import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Sectionhead from "../components/Sectionhead";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faCloudArrowUp,
  faHouseMedical,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import CustomPopup from "../components/CustomPopup";

const NewFacilityAdder = () => {
  const [showFacilitySavePopup, setShowFacilitySavePopup] = useState(false);
  const imageInput = useRef(null);
  const [imageUrl, setImageUrl] = useState(
    "https://st3.depositphotos.com/23594922/31822/v/450/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
  ); // Set the initial sample image URL

  const [facilityName, setFacilityName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFacilityNameChange = (event) => {
    setFacilityName(event.target.value);
  };

  const handleSaveFacility = () => {
    if (!facilityName || !imageUrl) {
      // If any field is empty, show an alert
      alert("Please fill in all the fields");
    } else {
      // If all fields are filled, show the save popup
      setShowFacilitySavePopup(true);
    }
  };

  const handleConfirmSaveFacility = () => {
    const NewFacilityData = {
      imageUrl: imageUrl,
      facilityName: facilityName,
    };
    console.log(NewFacilityData);

    setFacilityName("");
    setImageUrl(
      "https://st3.depositphotos.com/23594922/31822/v/450/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
    );
    setShowFacilitySavePopup(false);
  };

  const handleFacilitySavePopupClose = () => {
    setShowFacilitySavePopup(false);
  };

  return (
    <>
      <section className="NewFacilityAdder">
        <Sectionhead sectionname="Add Facility" />
        <div className="container">
          <div className="back-to-prev d-flex justify-content-end align-items-start mb-4">
            <Link to="/Facilities">
              <Button className="image-select-delete-btn">
                <span className="text-white">Back to Facilities</span>
                <FontAwesomeIcon
                  icon={faHouseMedical}
                  className="ms-2 text-white"
                />
              </Button>
            </Link>
          </div>
          <div className="facility p-2 d-flex flex-column justify-content-center align-items-start ">
            <div className="facility-add-img border-0 m-0 p-1  d-flex justify-content-around align-items-center">
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt="Uploaded"
                  className="display-facility-image me-2 "
                />
              )}
              <Button
                onClick={() => imageInput.current.click()}
                className="image-select-delete-btn mt-3 mb-3"
              >
                <span>Select Logo</span>
                <FontAwesomeIcon icon={faImage} className="ms-2" />
              </Button>

              <input
                ref={imageInput}
                type="file"
                className="image-input-selecter hidden"
                onChange={handleFileChange}
              />
            </div>

            <div className="facility-add-name mt-1">
              <input
                type="text"
                name="facility-add-name"
                id="facility-add-name"
                placeholder="Enter facility name here."
                className="p-2"
                value={facilityName}
                onChange={handleFacilityNameChange}
              />
            </div>
          </div>
          <Button
            variant="primary"
            className="image-select-delete-btn mt-3 mb-3"
            onClick={handleSaveFacility}
          >
            <span>Save Facility</span>
            <FontAwesomeIcon icon={faCloudArrowUp} className="ms-2" />
          </Button>
        </div>
      </section>
      <CustomPopup
        show={showFacilitySavePopup}
        onHide={handleFacilitySavePopupClose}
        onConfirm={handleConfirmSaveFacility}
        message="Do you want to save this facility?"
      />
    </>
  );
};

export default NewFacilityAdder;
