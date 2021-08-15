import Course from "./Course"

const List = ({courses}) => {
   
    return (
        <section className="list-section">
    {courses.map((course) => <Course course={course}/>)}
        </section>
    )
}

export default List
