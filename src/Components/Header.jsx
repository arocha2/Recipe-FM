import headerPhoto from "../assets/images/image-omelette.jpeg";

export const Header = () => {
  return (
    <header>
      <img src={headerPhoto} alt="header" />
      <div className="px-6 pt-8">
        <h1 className="font-title font-bold text-3xl">
          Simple Omelette Recipe
        </h1>
        <p className="font-paragraph mt-4 text-stone-600">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
      </div>
    </header>
  );
};
