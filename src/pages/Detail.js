import {
  useParams,
  Outlet,
  Link
} from 'react-router-dom';
import {
  useState,
  useEffect
} from 'react';

const Detail = () => {
  const {
    id
  } = useParams();
  const [
    user,
    setUser
  ] = useState(null)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setUser(data);
      })
      .catch(err => console.debug(err));
  }, [id]);
  return <div >
    <
    h1 > Detail Page < /h1> <
  h2 > Params id: {
    id
  } < /h2> <
  pre > {
    JSON.stringify(user, null, 2)
  } </pre>
    <hr />
    <nav>
      <Link to="post">POST</Link> | 
      <Link to="product">PRODUCT</Link>
    </nav>
    <Outlet />
    < /div >
}

export default Detail;
