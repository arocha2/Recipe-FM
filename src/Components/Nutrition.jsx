import PropTypes from "prop-types";

export const Nutrition = ({ nutrition }) => {
  return (
    <article className="px-6 py-8">
      <h3 className="text-rose-800 text-3xl font-bold font-title mb-4 ">
        Nutrition
      </h3>
      <p className="mb-4">
        The table below shows nutritional values per serving without the
        additional tillings
      </p>
      <table className="table-auto w-full ">
        <tbody>
          {Object.entries(nutrition).map(([clave, valor]) => (
            <>
              <tr className="w-full border-b border-neutral-200" key={clave}>
                <td className="py-4">{clave}</td>
                <td className="font-bold text-rose-800">{valor}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </article>
  );
};

Nutrition.propTypes = {
  nutrition: PropTypes.object,
};
