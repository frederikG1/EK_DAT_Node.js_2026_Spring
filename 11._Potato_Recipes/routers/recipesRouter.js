import { Router } from "express";
import db from "../database/connection.js";

const router = Router();

router.get("/recipes", async (req, res) => {
  const recipes = await db.all(`SELECT * FROM recipes`);

  console.log(recipes);

  res.send({ data: recipes });
});

router.post("/recipes", async (req, res) => {
  const { recipeName, description, minutesToCook } = req.body;

  const result = await db.run(
    `
        INSERT INTO recipes
        (recipe_name, description, minutes_to_cook)
        VALUES (?, ?, ?);
        `,
    [recipeName, description, minutesToCook],
  );

  res.send({ data: result });

  // Beware of SQL Inection. Use prepared statements
  // dont use string interpolation with database
});

// router.post("/recipes", (req, res) => {
//   if (!req.body.recipe_name) {
//     return res
//       .statusCode(404)
//       .send({ errorMessage: `Name of ingredient is required` });
//   }

//   const newRecipe = {
//     recipe_name: req.body.recipe_name,
//     description: req.body.description,
//     minutes_to_cook: req.body.minutes_to_cook,
//   };

//   newRecipe.push(newRecipe);
//   res.statusCode(200).send({ data: newRecipe });
// });

router.get("/ingredients", async (req, res) => {
  const ingredients = await db.all(`SELECT * FROM ingredients`);

  console.log(ingredients);

  res.send({ data: ingredients });
});

export default router;
