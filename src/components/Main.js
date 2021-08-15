import { useState, useEffect } from "react";
import axios from "axios";
import { createCategories } from "./Helpers";
import Categories from "./Categories";
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
  const categories = createCategories(course);

  return <main><Categories categories={categories}/></main>;
};

export default Main;
