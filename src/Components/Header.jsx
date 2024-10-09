import headerPhoto from "../assets/images/image-omelette.jpeg";
import PropTypes from "prop-types";

export const Header = ({ title, description }) => {
  return (
    <header>
      <img className="md:px-6 md:pt-6" src={headerPhoto} alt="header" />
      <div className="px-6 pt-8">
        <h1 className="font-title font-bold text-3xl">{title}</h1>
        <p className="font-paragraph mt-4 text-stone-600">{description}</p>
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
