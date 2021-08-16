import { NavLink } from "react-router-dom";
const Categories = ({ categories }) => {
  return (
    <section className="card-container">
      {categories.map((tag, index) => {
        const [text, value] = tag;
        return (
          /* Used NavLink to benefit from params and active state */
          <NavLink
            key={index}
            to={text}
            className="category-card"
            activeClassName="active"
          >
            <p>{text}</p>
            <span>{value}</span>
          </NavLink>
        );
      })}
    </section>
  );
};

export default Categories;
