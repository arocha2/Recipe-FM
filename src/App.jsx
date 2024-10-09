import { Header } from "./Components/Header";
import { Preparation } from "./Components/Preparation";
import { Recipes } from "../src/data/data.json";

export const App = () => {
  console.log(Recipes);
  return (
    <>
      {Recipes.map((recipe) => (
        <section key={recipe.id}>
          <Header title={recipe.title} description={recipe.description} />
          <Preparation prep={recipe.preparation_time} />
        </section>
      ))}
    </>
  );
};
