import { useLoaderData, Link, Navigate } from 'react-router-dom';
import customFetch from '../axios/customFetch';
import Wrapper from '../assets/wrappers/CocktailPage';

const singleCocktailUrl = '/lookup.php?i=';

export async function loader({ params }) {
  const { id } = params;
  const { data } = await customFetch.get(`${singleCocktailUrl}${id}`);
  return { id, data };
}
function Cocktail() {
  const { id, data } = useLoaderData();

  // if (!data || data.drinks === null) {
  //   return <h2>something went wrong....</h2>;
  // }
  if (!data || data.drinks === null) return <Navigate to="/" />;

  const singleDrink = data.drinks[0];
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  const validIngredients = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith('strIngredient') && singleDrink[key] !== null
    )
    .map((key) => singleDrink[key]);

  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          back home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category :</span>
            {category}
          </p>
          <p>
            <span className="drink-data">info :</span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass :</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {validIngredients.map((ingredient, index) => {
              return (
                <span key={index} className="ing">
                  {ingredient}
                  {index < validIngredients.length - 1 ? ', ' : ''}
                </span>
              );
            })}
          </p>
          <p>
            <span className="drink-data">instructions :</span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
}
export default Cocktail;
