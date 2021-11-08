import { useRouter } from 'next/dist/client/router';
import CustomLink from '../../../components/CustomLink';

export default function Search(): JSX.Element {
  const router = useRouter();
  const code = router.query.code;

  return (
    <div>
      <h1>routes / {code} / search</h1>
      <CustomLink />
    </div>
  );
}
