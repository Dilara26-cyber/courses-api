import { useState, useEffect } from "react";
import axios from "axios";
import { createCategories } from "./Helpers";
const Main = () => {
  const [course, setCourse] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(`/academy/get`);
    const {
      data: {
        data: { courses },
      },
    } = response;
    setCourse(courses);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const category = createCategories(course);

  return <div>{console.log(category)}</div>;
};

export default Main;
