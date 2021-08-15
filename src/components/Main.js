import { useState, useEffect } from "react";
import axios from "axios";
import { createCategories } from "./Helpers";
import { useLocation } from "react-router-dom";
import Categories from "./Categories";
import List from "./List";
const Main = () => {
  const [data, setData] = useState([]);
  const [sections, setSections] = useState([]);
  const [courses, setCourses] = useState([]);
  const { pathname } = useLocation();
  const [category, setCategory] = useState(
    pathname === "/How to" ? "How to?" : pathname.replace("/", "")
  );
  useEffect(() => {
    setCategory(pathname === "/How to" ? "How to?" : pathname.replace("/", ""));
    setCourses(data.filter((item) => item.category.includes(category)));
  }, [pathname, category, data]);
  const fetchData = async () => {
    const response = await axios.get(`/academy/get`);
    const {
      data: {
        data: { courses },
      },
    } = response;
    setData(courses);
  };
  const fetchForSections = async () => {
    const response = await axios.get(`/academy/getprep`);
    setSections(response.data.data.lists);
  };
  const categories = createCategories(data);
  useEffect(() => {
    fetchData();
    fetchForSections();
  }, []);

  return (
    <main>
      <Categories categories={categories} />
      <List title={category} courses={courses} />
      {sections &&
        sections.map((section, index) => (
          <List title={section.title} courses={section.courses} key={index} />
        ))}
      <List title="All" courses={data} />
    </main>
  );
};

export default Main;
