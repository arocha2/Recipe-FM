import { Header } from "./Components/Header";
import { Preparation } from "./Components/Preparation";
import { Recipes } from "../src/data/data.json";
import { Ingredients } from "./Components/Ingredients";
import { Instructions } from "./Components/Instructions";
import { Nutrition } from "./Components/Nutrition";

export const App = () => {
  console.log(Recipes);
  return (
    <main className="bg-orange-100 md:py-24">
      {Recipes.map((recipe) => (
        <section
          className=" bg-slate-100 max-w-2xl m-auto md:rounded-3xl overflow-hidden"
          key={recipe.id}
        >
          <Header title={recipe.title} description={recipe.description} />
          <Preparation prep={recipe.preparation_time} />
          <Ingredients ingredients={recipe.ingredients} />
          <Instructions instructions={recipe.instructions} />
          <Nutrition nutrition={recipe.nutrition} />
        </section>
      ))}
    </main>
  );
};
