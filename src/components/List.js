import { Link } from "react-router-dom";
import Course from "./Course";

const List = ({ courses, title }) => {
  return (
    <>
      {title && <h1 className="list-heading">{title}</h1>}
      {/* Create a list courses component for re-using */}
      <section className="list-section">
        {courses.map((course) => (
         <Link to={`/course/${course.id}`} key={course.id}><Course course={course} /></Link> 
        ))}
      </section>
    </>
  );
};

export default List;
