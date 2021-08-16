import { useState, useEffect } from "react";
import axios from "axios";
import { createCategories } from "./Helpers";
import { useLocation } from "react-router-dom";
import Categories from "./Categories";
import List from "./List";
import Between from "./Between";
const Main = () => {
  const [data, setData] = useState([]);
  const [sections, setSections] = useState([]);
  const [courses, setCourses] = useState([]);
  //Get category from parameter
  const { pathname } = useLocation();
  //Compare which parameter came, then set State accordingly
  const [category, setCategory] = useState(
    pathname === "/How to" ? "How to?" : pathname.replace("/", "")
  );
  //Set Category again when it changes, filter data accordingly
  useEffect(() => {
    setCategory(pathname === "/How to" ? "How to?" : pathname.replace("/", ""));
    setCourses(data.filter((item) => item.category.includes(category)));
  }, [pathname, category, data]);

  //Fetch Data all courses data from API, deconstruct the object and set state
  const fetchData = async () => {
    const response = await axios.get(`/academy/get`);
    const {
      data: {
        data: { courses },
      },
    } = response;
    setData(courses);
  };

  //Fetch specified courses from API
  const fetchForSections = async () => {
    const response = await axios.get(`/academy/getprep`);
    setSections(response.data.data.lists);
  };
  //Use helper function to count categories
  const categories = createCategories(data);
  //Call fetch functions when component did mount and clean the functions
  useEffect(() => {
    const abortCont = new AbortController();
    fetchData();
    fetchForSections();
    return () => abortCont.abort();
  }, []);

  return (
    <main>
      <Categories categories={categories} />
      <List title={category} courses={courses} />
      <Between />
      {sections &&
        sections.map((section, index) => (
          <List title={section.title} courses={section.courses} key={index} />
        ))}
      <List title="All" courses={data} />
    </main>
  );
};

export default Main;
