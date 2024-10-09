import PropTypes from "prop-types";

export const Preparation = ({ prep }) => {
  return (
    <section className="mx-6 px-6 py-8 bg-rose-50 rounded-lg mt-4">
      <h3 className="text-rose-800 text-lg font-bold mb-2 ">
        Preparation Time
      </h3>
      <ol>
        {Object.entries(prep).map(([clave, valor]) => (
          <li className="list-disc ml-6" key={clave}>
            <span className="font-bold">{clave}</span> : {valor}
          </li>
        ))}
      </ol>
    </section>
  );
};

Preparation.propTypes = {
  prep: PropTypes.object,
};
