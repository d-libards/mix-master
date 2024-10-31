import { useLoaderData } from 'react-router-dom';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';
import axios from 'axios';

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export async function loader() {
  const searchTerm = 'a';
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  return { drinks: response.data.drinks, searchTerm };
}

function Landing() {
  const { drinks, searchTerm } = useLoaderData();
  return (
    <>
      <CocktailList drinks={drinks} />
    </>
  );
}
export default Landing;
