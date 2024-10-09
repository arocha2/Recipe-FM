import PropTypes from "prop-types";

export const Ingredients = ({ ingredients }) => {
  return (
    <article className="px-6 py-8">
      <h2 className="text-rose-800 text-3xl font-bold font-title mb-4">
        Ingredients
      </h2>
      <ol className="px-6 mb-8">
        {ingredients.map((ingredient) => (
          <li className="list-disc" key={ingredient}>
            {ingredient}
          </li>
        ))}
      </ol>
      <hr />
    </article>
  );
};

Ingredients.propTypes = {
  ingredients: PropTypes.array,
};
