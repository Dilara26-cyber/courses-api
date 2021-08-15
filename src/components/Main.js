import { useState, useEffect } from "react";
import axios from "axios";
import { createCategories } from "./Helpers";
import { useLocation } from "react-router-dom";
import Categories from "./Categories";
const Main = () => {
  const [course, setCourse] = useState([]);
  const { pathname } = useLocation();
  const [category, setCategory] = useState(
    pathname === "/How to" ? "How to?" : pathname.replace("/", "")
  );
  useEffect(() => {
    setCategory(pathname === "/How to" ? "How to?" : pathname.replace("/", ""));
    console.log(
      course.filter((c) => c.category.includes(category))
    );
  }, [pathname]);
  const fetchData = async () => {
    const response = await axios.get(`/academy/get`);
    const {
      data: {
        data: { courses },
      },
    } = response;
    setCourse(courses);
  };
  const categories = createCategories(course);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <Categories categories={categories} />
    </main>
  );
};

export default Main;
