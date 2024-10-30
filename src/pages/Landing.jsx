import { useLoaderData } from 'react-router-dom';
import customFetch from '../axios/customFetch';

const cocktailSearchUrl = '/search.php?s=';

export async function loader() {
  const searchTerm = 'a';
  const response = await customFetch.get(`${cocktailSearchUrl}${searchTerm}`);
  return { drinks: response.data.drinks, searchTerm };
}

function Landing() {
  const { drinks, searchTerm } = useLoaderData();
  console.log(drinks);
  return <div>Landing</div>;
}
export default Landing;
