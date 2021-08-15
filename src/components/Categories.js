
import { NavLink, useLocation  } from "react-router-dom";
const Categories = ({ categories }) => {
    
  return (
    <section className="card-container">
      {categories.map((tag, index) => {
        const [text, value] = tag;
        return (
          <NavLink key={index} to={text} className="category-card" activeClassName="active">
              <p>{text}</p>
              <span>{value}</span>
          </NavLink>
        );
      })}
    </section>
  );
};

export default Categories;
