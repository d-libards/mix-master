import { useLoaderData } from 'react-router-dom';
import customFetch from '../axios/customFetch';
import CocktailCard from '../components/CocktailCard';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';

const cocktailSearchUrl = '/search.php?s=';

export async function loader() {
  const searchTerm = 'a';
  const response = await customFetch.get(`${cocktailSearchUrl}${searchTerm}`);
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
