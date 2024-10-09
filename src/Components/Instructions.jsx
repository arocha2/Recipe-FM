import PropTypes from "prop-types";

export const Instructions = ({ instructions }) => {
  return (
    <article className="px-6">
      <h3 className="text-rose-800 text-3xl font-bold font-title mb-4 ">
        Instructions
      </h3>
      <ol className="px-6 mb-6">
        {Object.entries(instructions).map(([clave, valor]) => (
          <li className="list-decimal  mb-4" key={clave}>
            <span className="font-bold">{clave}</span>: {valor}{" "}
          </li>
        ))}
      </ol>
      <hr />
    </article>
  );
};

Instructions.propTypes = {
  instructions: PropTypes.object,
};
