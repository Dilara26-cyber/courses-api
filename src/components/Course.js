
const Course = ({course}) => {
    
    return (
        <div className="course-card">
           <img src={course.thumbnailImageURL} alt={course.title}/>
           <p>{course.title}</p>
        </div>
    )
}

export default Course
