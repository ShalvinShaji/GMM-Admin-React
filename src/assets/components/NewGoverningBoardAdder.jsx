import React, { useState } from "react";
import Sectionhead from "./Sectionhead";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomPopup from "../components/CustomPopup";

const GoverningBoardViewer = () => {
  const [patronName, setPatronName] = useState("");
  const [presidentName, setPresidentName] = useState("");
  const [jointSecretaryName, setJointSecretaryName] = useState("");
  const [secretaryName, setSecretaryName] = useState("");
  const [treasurerName, setTreasurerName] = useState("");
  const [administratorName, setAdministratorName] = useState("");
  const [chiefMedicalOfficerName, setChiefMedicalOfficerName] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handlepatronNameChange = (event) => {
    setPatronName(event.target.value);
  };
  const handlePresidentNameChange = (event) => {
    setPresidentName(event.target.value);
  };
  const handleSecretaryNameChange = (event) => {
    setSecretaryName(event.target.value);
  };
  const handleJointSecretaryNameChange = (event) => {
    setJointSecretaryName(event.target.value);
  };
  const handleTreasurerNameChange = (event) => {
    setTreasurerName(event.target.value);
  };
  const handleAdministratorNameChange = (event) => {
    setAdministratorName(event.target.value);
  };
  const handleChiefMedicalOfficerNameChange = (event) => {
    setChiefMedicalOfficerName(event.target.value);
  };

  const saveGoverningBoard = () => {
    const allFieldsEmpty =
      patronName === "" &&
      presidentName === "" &&
      jointSecretaryName === "" &&
      secretaryName === "" &&
      treasurerName === "" &&
      administratorName === "" &&
      chiefMedicalOfficerName === "";

    if (allFieldsEmpty) {
      alert("Please fill in at least one field before saving.");
    } else {
      setShowPopup(true);
    }
  };

  const handleConfirmSaveGoverningBoard = () => {
    const GoverningBoardNames = [
      { role: "Patron", name: patronName },
      { role: "President", name: presidentName },
      { role: "Joint Secretary", name: jointSecretaryName },
      { role: "Secretary", name: secretaryName },
      { role: "Treasurer", name: treasurerName },
      { role: "Administrator", name: administratorName },
      { role: "Chief Medical Officer", name: chiefMedicalOfficerName },
    ];

    const nonEmptyGoverningBoardNames = GoverningBoardNames.filter(
      (item) => item.name.trim() !== ""
    );

    console.log(nonEmptyGoverningBoardNames);

    setPatronName("");
    setPresidentName("");
    setJointSecretaryName("");
    setSecretaryName("");
    setTreasurerName("");
    setAdministratorName("");
    setChiefMedicalOfficerName("");
    setShowPopup(false);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  function newGoverningBoardData() {
    return (
      <div className="row g-3">
        <div className="col-md-4 governing-board-fields">
          <div className="patron">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label className="input-labels">
                  Add patron name
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter patron name here..."
                  value={patronName}
                  onChange={handlepatronNameChange}
                  className="input-fields"
                  required
                />
              </Form.Group>
            </Form>
          </div>
        </div>
        <div className="col-md-4 governing-board-fields">
          <div className="president">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label className="input-labels">
                  Add president name
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter president name here..."
                  value={presidentName}
                  onChange={handlePresidentNameChange}
                  className="input-fields"
                  required
                />
              </Form.Group>
            </Form>
          </div>
        </div>
        <div className="col-md-4 governing-board-fields">
          <div className="secretary">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label className="input-labels">
                  Add secretary name
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter secretary name here..."
                  value={secretaryName}
                  onChange={handleSecretaryNameChange}
                  className="input-fields"
                  required
                />
              </Form.Group>
            </Form>
          </div>
        </div>
        <div className="col-md-4 governing-board-fields">
          <div className="joint-secretary">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label className="input-labels">
                  Add joint secretary name
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter joint secretary name here..."
                  value={jointSecretaryName}
                  onChange={handleJointSecretaryNameChange}
                  className="input-fields"
                  required
                />
              </Form.Group>
            </Form>
          </div>
        </div>
        <div className="col-md-4 governing-board-fields">
          <div className="Treasurer">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label className="input-labels">
                  Add treasurer name
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter treasurer name here..."
                  value={treasurerName}
                  onChange={handleTreasurerNameChange}
                  className="input-fields"
                  required
                />
              </Form.Group>
            </Form>
          </div>
        </div>
        <div className="col-md-4 governing-board-fields">
          <div className="Hon-Administrator">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label className="input-labels">
                  Add Hon. Administrator name
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Hon. Administrator name here..."
                  value={administratorName}
                  onChange={handleAdministratorNameChange}
                  className="input-fields"
                  required
                />
              </Form.Group>
            </Form>
          </div>
        </div>
        <div className="col-md-4 governing-board-fields">
          <div className="Chief-Medical-Officer">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label className="input-labels">
                  Add Chief Medical Officer name
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter chief medical officer name here..."
                  value={chiefMedicalOfficerName}
                  onChange={handleChiefMedicalOfficerNameChange}
                  className="input-fields"
                  required
                />
              </Form.Group>
            </Form>
          </div>
        </div>
        <div className="save-governing-board d-flex justify-content-center align-items-center col-12">
          <Button
            onClick={saveGoverningBoard}
            className="image-select-delete-btn  mb-2"
          >
            <span>Save Changes</span>
            <FontAwesomeIcon icon={faCloudArrowUp} className="ms-2" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <section>
        <Sectionhead sectionname="Edit Governing board" />
        <div className="container">
          <div className="row mb-4">
            <div className="col d-flex justify-content-end">
              <Link to="/Governing-Board">
                <Button className="image-select-delete-btn">
                  <span className="text-white">Governing Board</span>
                  <FontAwesomeIcon
                    icon={faUserGroup}
                    className="ms-2 text-white"
                  />
                </Button>
              </Link>
            </div>
          </div>
          <div className="data-adder">{newGoverningBoardData()}</div>
        </div>
      </section>
      <CustomPopup
        show={showPopup}
        onHide={handlePopupClose}
        onConfirm={handleConfirmSaveGoverningBoard}
        message="Do you want to save the changes?"
      />
    </>
  );
};

export default GoverningBoardViewer;
