import { useState } from "react";
import { Form, Button, DropdownButton, Dropdown } from "react-bootstrap";
import Parse from "parse/dist/parse.min.js";
import { queryByTitle } from "@testing-library/react";
import "/Users/kdawg/Documents/School/reexam/src/OurStyle.css";

export default function SingleParticipant(props) {
  const [name, setName] = useState();
  const [agegroup, setAgegroup] = useState();
  const [favoredDuty, setFavoredDuty] = useState();
  const [saved, setSaved] = useState(false);

  async function handleRegister(e) {
    e.preventDefault();

    setSaved(true);
    const Participants = new Parse.Object.extend("Participants"); //create a new Parse Object subclass
    const participant = new Participants(); // Create a new instance of that Participants class

    participant.set("name", name);
    participant.set("agegroup", agegroup);
    participant.set("favoredDuty", favoredDuty);

    /*
    This is to save the information about participants and their favored duties 
    in two different classes. 
    - Duties, and Participants. 
    */
    const currentUser = Parse.User.current(); //get current user

    const Duties = Parse.Object.extend("Duties");
    const dutyQuery = new Parse.Query(Duties); // find the duty type according to favored duty user chose.
    dutyQuery.equalTo("dutyType", favoredDuty);
    const myDuty = await dutyQuery.find();
    console.log(myDuty);

    participant.set("parent", myDuty); //Add the duty as a value in the participant.
    // const oldCandidates = await myDuty.get("candidates")
    // myDuty.set("candidates", [...oldCandidates, currentUser]) //updating duty's candidates.
    // if (await myDuty.get("candidates")) { // if candidates is not empty(null)
    //     const oldCandidates = await myDuty.get("candidates")
    //     myDuty.set("candidates", [...oldCandidates, currentUser]) //updating duty's candidates.
    // } else {
    //     myDuty.set("candidates", currentUser)
    // }

    participant
      .save() // This saves both duty and participant
      .then(
        (participant) => {
          // navigate('/excursion');
          alert("New object created with objectId: " + participant.id);
        },
        (error) => {
          alert("Failed to create new object" + error.message);
        }
      );
  }

  const [addNew, setAddNew] = useState([]);

  function addParticipant() {
    console.log("added a new participant");
    setAddNew([...addNew, <SingleParticipant />]);
  }

  function handleSelect(e) {
    console.log(e);
    setFavoredDuty(e);
  }

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder={Parse.User.current().get("name")} //to show the current user's name automatically
            autoFocus
          />
        </Form.Group>
        <Form.Label>Age Group</Form.Label>
        <div key={`inline-radio`} className="mb-3">
          <Form.Check
            inline
            type="radio"
            id={`default-radio`}
            name="agegroup"
            label="Adult"
            value="adult"
            onChange={(e) => setAgegroup(e.target.value)}
          />
          <Form.Check
            inline
            type="radio"
            id={`default-radio`}
            name="agegroup"
            label="Child"
            value="child"
            onChange={(e) => setAgegroup(e.target.value)}
          />
        </div>

        {agegroup === "adult" && ( //inline conditional rendering
          <>
            <Form.Label>Preferred Duties</Form.Label>
            <p>
              Please select your favorite type of work. You will get to know
              what you are assigned later.
            </p>
            <DropdownButton
              id="dropdown-basic"
              title="Select Favorite Duty"
              onSelect={handleSelect}
              autoClose={false}
            >
              <Dropdown.Item href="#/action-1" eventKey="cleaning">
                Cleaning
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2" eventKey="cooking">
                Cooking
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3" eventKey="settingATable">
                Setting a table
              </Dropdown.Item>
              <Dropdown.Item href="#/action-4" eventKey="makingCoffeeTea">
                Making coffee/tea
              </Dropdown.Item>
              <Dropdown.Item href="#/action-5" eventKey="shopping">
                Shopping
              </Dropdown.Item>
              <Dropdown.Item href="#/action-6" eventKey="playingMusic">
                Playing Music
              </Dropdown.Item>
            </DropdownButton>
          </>
        )}
      </Form>
      <Button onClick={handleRegister} variant="primary" type="submit">
        Save
      </Button>
      <Button onClick={addParticipant} disabled={!saved} type="submit">
        Add family member
      </Button>
      <div>{addNew}</div>
    </div>
  );
}
