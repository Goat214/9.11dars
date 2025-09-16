// import React from "react";
// import { v4 as uuidv4 } from "uuid";

// function Home() {
//   const recepiec = [];
//   function hendleSubit(e) {
//     e.preventDefault();
//     const formData = new FormData(e.target);

//     const title = formData.get("title");
//     const image = formData.get("image");
//     const overview = formData.get("overview");
//     const servings = formData.get("servings");
//     const prepMinutes = formData.get("prepMinutes");
//     const cookMinutes = formData.get("cookMinutes");
//     const ingredients = formData.get("ingredients");
//     const instructions = formData.get("instructions");

//     console.log({
//       id: uuidv4(),
//       title,
//       image,
//       overview,
//       servings,
//       prepMinutes,
//       cookMinutes,
//       ingredients,
//       instructions,
//     });
//   }

//   return (
//     <div>
//       <form onSubmit={hendleSubit} className="form">
//         <input type="text" name="title" placeholder="title" id="title" />
//         <input type="text" name="image" id="image" placeholder="imgURL" />
//         <input
//           type="text"
//           name="overview"
//           id="overview"
//           placeholder="overview"
//         />
//         <input
//           type="number"
//           name="servings"
//           id="servings"
//           placeholder="servings"
//         />
//         <input
//           type="number"
//           name="prepMinutes"
//           id="prepMinutes"
//           placeholder="prepMinutes"
//         />
//         <input
//           type="number"
//           name="cookMinutes"
//           id="cookMinutes"
//           placeholder="cookMinutes"
//         />
//         <input
//           type="text"
//           name="ingredients"
//           id="ingredients"
//           placeholder="ingredients"
//         />
//         <input
//           type="text"
//           name="instructions"
//           id="instructions"
//           placeholder="instructions"
//         />
//         <button
//           onClick={() => {
//             hendleSubit;
//           }}
//         >
//           add
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Home;

import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import useDatabase from "../hooks/useDatabase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../index.css";

function Home() {
  const { postData, getData, data, isPending, error, deletePost } =
    useDatabase();

  useEffect(() => {
    getData("/recipes");
  }, []);

  function hendleSubit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const ingredients = formData
      .get("ingredients")
      .split(",")
      .map((item) => item.trim());

    const instructions = formData
      .get("instructions")
      .split(",")
      .map((item) => item.trim());

    postData("/recipes", {
      title: formData.get("title"),
      image: formData.get("image"),
      overview: formData.get("overview"),
      servings: Number(formData.get("servings")),
      prepMinutes: Number(formData.get("prepMinutes")),
      cookMinutes: Number(formData.get("cookMinutes")),
      ingredients,
      instructions,
    }).then(() => {
      getData("/recipes");
      toast.success("✅ Recipe added successfully!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
      });
    });

    e.target.reset();
  }

  const handleDelete = (id) => {
    deletePost(`/recipes?id=eq.${id}`).then(() => {
      getData("/recipes");
      toast.info("Recipe deleted!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
      });
    });
  };

  return (
    <div className="form-wrapper">
        
      <h1 className="title">Add recipes</h1>
      <ToastContainer />
      <form onSubmit={hendleSubit} className="form">
        <input
          type="text"
          name="title"
          placeholder="title"
          id="title"
          className="form-input"
        />
        <input
          type="text"
          name="image"
          id="image"
          placeholder="imgURL"
          className="form-input"
        />
        <input
          type="text"
          name="overview"
          id="overview"
          placeholder="overview"
          className="form-input"
        />
        <input
          type="number"
          name="servings"
          id="servings"
          placeholder="servings"
          className="form-input"
        />
        <input
          type="number"
          name="prepMinutes"
          id="prepMinutes"
          placeholder="prepMinutes"
          className="form-input"
        />
        <input
          type="number"
          name="cookMinutes"
          id="cookMinutes"
          placeholder="cookMinutes"
          className="form-input"
        />
        <input
          type="text"
          name="ingredients"
          id="ingredients"
          placeholder="ingredients"
          className="form-input"
        />
        <input
          type="text"
          name="instructions"
          id="instructions"
          placeholder="instructions"
          className="form-input"
        />

        <button type="submit" className="submit-btn">
          ➕ Add
        </button>
      </form>

      {isPending && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}


      <div className="recipes">
        {Array.isArray(data) &&
          data.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <h2 className="recipe-title">{recipe.title}</h2>
              <img
                src={
                  recipe.image ||
                  "https://th.bing.com/th/id/R.51879f9aeaaf6060aa42a64df71696f1?rik=h8Ox9c2rUwGi%2fg&pid=ImgRaw&r=0"
                }
                alt={recipe.title}
                className="recipe-image"
              />
              <p className="recipe-overview">{recipe.overview}</p>
              <p className="recipe-servings">Servings: {recipe.servings}</p>
              <p className="recipe-time">
                Prep: {recipe.prepMinutes} min | Cook: {recipe.cookMinutes} min
              </p>
              <button
                onClick={() => handleDelete(recipe.id)}
                className="delete-btn"
              >
                ❌ Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
