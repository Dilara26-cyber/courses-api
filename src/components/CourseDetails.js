import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player";
const CourseDetails = () => {
  const [details, setDetails] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    const abortCont = new AbortController();
    axios
      .get(`/academy/get?id=${id}`)
      .then((res) => setDetails(res.data.data.courses))
      .catch((err) => console.log(err));
    return () => abortCont.abort();
  }, [id]);

  return (
    <section>
      <Link to="/Mountaineering">All Courses</Link>
      <h1>{details.length > 0 && details[0].title}</h1>
      <p>{details.length > 0 && details[0].date}</p>
      <ReactPlayer className="react-player" url={details.length > 0 ? details[0].videoURL : ""} width="100%" height="100%" controls/>
      <p>
        {details.length > 0 &&
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus ipsum, mattis vitae est sit amet, fermentum imperdiet dolor. Sed tincidunt fringilla sem, hendrerit pharetra neque ultrices eu. Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque nisi sem, ullamcorper in hendrerit id, rutrum vitae orci. Suspendisse potenti. Duis efficitur sed risus eget efficitur. Nam nec libero imperdiet odio interdum dignissim. Aenean sed lacus lobortis, cursus massa sagittis, facilisis tortor."}
      </p>
    </section>
  );
};

export default CourseDetails;
