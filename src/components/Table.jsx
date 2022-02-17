import React, { useState } from "react";
import Parse from "parse/dist/parse.min.js";
import "./CSS/Table.css";
import { Button, Input, List } from "antd";
import {
  CheckOutlined,
  CloseOutlined,
  PlusOutlined,
  RedoOutlined,
} from "@ant-design/icons";

export const Table = () => {
  // State variables
  const [readResults, setReadResults] = useState({
    title: "",
    unit: "",
    quantity: "",
    delete: "",
  });
  const [newShoppingTitle, setNewShoppingTitle] = useState("");
  const [newQuantity, setNewQuantity] = useState("");
  const [newUnit, setNewUnit] = useState("");

  // Functions used by the screen components
  const createShopping = async function () {
    // This value comes from a state variable
    const newShoppingTitleValue = newShoppingTitle;
    const newQuantityValue = newQuantity;
    const newUnitValue = newUnit;
    // Creates a new Shopping parse object instance
    let Shopping = new Parse.Object("Shopping");
    Shopping.set("title", newShoppingTitleValue);
    Shopping.set("quantity", newQuantityValue);
    Shopping.set("unit", newUnitValue);
    // After setting the to-do values, save it on the server
    try {
      await Shopping.save();
      // Success
      alert("Success! To-do created!");
      // Refresh to-dos list to show the new one (you will create this function later)
      readShoppings();
      return true;
    } catch (error) {
      // Error can be caused by lack of Internet connection
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  const readShoppings = async function () {
    // Reading parse objects is done by using Parse.Query
    const parseQuery = new Parse.Query("Shopping");
    try {
      let Shoppings = await parseQuery.find();
      // Be aware that empty or invalid queries return as an empty array
      // Set results to state variable
      setReadResults(Shoppings);
      return true;
    } catch (error) {
      // Error can be caused by lack of Internet connection
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  const updateShopping = async function (shoppingId, done) {
    // Create a new to-do parse object instance and set Shopping id
    let Shopping = new Parse.Object("Shopping");
    Shopping.set("objectId", shoppingId);
    // Set new done value and save Parse Object changes

    try {
      await Shopping.save();
      // Success
      alert("Success! To-do updated!");
      // Refresh Shoppings list
      readShoppings();
      return true;
    } catch (error) {
      // Error can be caused by lack of Internet connection
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  const deleteShopping = async function (shoppingId) {
    // Create a new Shopping parse object instance and set Shopping id
    let Shopping = new Parse.Object("Shopping");
    Shopping.set("objectId", shoppingId);
    // .destroy should be called to delete a parse object
    try {
      await Shopping.destroy();
      alert("Success! To-do deleted!");
      // Refresh to-dos list to remove this one
      readShoppings();
      return true;
    } catch (error) {
      // Error can be caused by lack of Internet connection
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  return (
    <div>
      <div className="container">
        {/* To-do read (refresh) button */}
        <Button
          type="primary"
          shape="circle"
          color={"#208AEC"}
          size={"default"}
          onClick={readShoppings}
          icon={<RedoOutlined />}
        ></Button>

        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Quantity</th>
              <th>Unit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* Shopping read results list */}

            <tr>
              <td></td>
            </tr>
            {readResults !== null &&
              readResults !== undefined &&
              readResults.length > 0 && (
                <List
                  dataSource={readResults}
                  renderItem={(item) => (
                    <div>
                      <td>{item.get("title")}</td>

                      <td>{item.get("unit")}</td>
                      <td>{item.get("quantity")}</td>

                      {/* Shopping delete button */}
                      <td>
                        <Button
                          type="primary"
                          shape="circle"
                          className="Shopping_button"
                          onClick={() => deleteShopping(item.id)}
                          icon={
                            <CloseOutlined className="Shopping_button_icon_remove" />
                          }
                        ></Button>
                      </td>
                    </div>
                  )}
                />
              )}

            <tr>
              {/* Shopping create text input */}
              <th>
                <Input
                  value={newShoppingTitle}
                  onChange={(event) => setNewShoppingTitle(event.target.value)}
                  placeholder="New Shopping"
                  size="large"
                />{" "}
              </th>
              <th>
                <Input
                  value={newQuantity}
                  onChange={(event) => setNewQuantity(event.target.value)}
                  placeholder="New Quantity"
                  size="large"
                />
              </th>
              <th>
                <Input
                  value={newUnit}
                  onChange={(event) => setNewUnit(event.target.value)}
                  placeholder="New Unit"
                  size="large"
                />
              </th>

              {/* Shopping create button */}

              <th>
                <Button
                  type="primary"
                  className="create_Shopping_button"
                  color={"#208AEC"}
                  size={"large"}
                  onClick={createShopping}
                  icon={<PlusOutlined />}
                >
                  Add
                </Button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
