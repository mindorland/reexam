import { useEffect, useState } from "react";
import Parse from "parse/dist/parse.min.js";
import icelandImage from "../../img/skogafoss.jpg";
import "../../OurStyle.css";

export default function InfoRead(props) {
  const [title, setTitle] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [location, setLocation] = useState();
  const [description, setDescription] = useState();
  const [excursion, setExcursion] = useState();
  const [url, setUrl] = useState();
  //   const [imageFile, setImageFile] = useState();

  const getExcursion = async () => {
    const Excursion = Parse.Object.extend("Excursion");
    const query = new Parse.Query(Excursion);
    const res = await query.find();
    // const Image = Parse.Object.extend("Image")
    // const imageQuery = new Parse.Query(Image)
    if (res) {
      //   setExcursion(res)
      console.log(res[0]);
      console.log(res[0].id);
      const newQuery = new Parse.Query(Excursion);
      newQuery.get(res[0].id).then((ex) => {
        setExcursion(ex);
        //console.log(ex.attributes.title)
        setTitle(ex.attributes.title);
        setStartDate(ex.attributes.startDate);
        setEndDate(ex.attributes.endDate);
        setLocation(ex.attributes.location);
        setDescription(ex.attributes.description);
        //setImageFile(imageQuery.get(ex.attributes.image.id))
        //console.log(ex.attributes.image.id)
        // imageQuery.get(imageFile.id).file().link()

        //console.log(ex)
        setUrl(ex.get("image").get("file").url());
      });
    }
  };

  useEffect(() => {
    getExcursion();
  }, []);

  return (
    <div className="pageContent">
      <h1>Next Excursion</h1>
      <h4>Title: {title} </h4>
      <h4>Location: {location} </h4>
      <h4>
        Date: {startDate} ~ {endDate}
      </h4>

      {excursion && (
        <img alt="" style={{ maxWidth: "400px" }} src={url || icelandImage} />
      )}

      <div className="description-margin">
        {" "}
        <p className="no-account-text no-account"> {description} </p>
      </div>
    </div>
  );
}
