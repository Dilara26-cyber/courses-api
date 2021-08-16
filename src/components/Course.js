const Course = ({ course }) => {
  return (
    <div className="course-card">
      {/* Create a course card for re-using */}
      <img src={course.thumbnailImageURL} alt={course.title} />
      <p>{course.title}</p>
    </div>
  );
};

export default Course;
