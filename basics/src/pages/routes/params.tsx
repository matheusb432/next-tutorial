import { useRouter } from 'next/dist/client/router';
import CustomLink from '../../components/CustomLink';

export default function Params() {
  const router = useRouter();
  const queryParams = { ...router.query };

  return (
    <div>
      <h1>@ route params / queryParams are:</h1>
      <h3>{JSON.stringify(queryParams)}</h3>
      <CustomLink />
      {/* // ? You can pass dynamic JSX.Elements to a child component easily like this:  */}
      {/* <CustomLink href='/routes/code123/search' child={<h1 className='li-link'>HELLOOOO!</h1>} /> */}
    </div>
  );
}
