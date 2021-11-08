import { useRouter } from 'next/dist/client/router';
import CustomLink from '../../../components/CustomLink';

export default function CodeAndName(): JSX.Element {
  const router = useRouter();
  let code: any = '';
  let name: any = '';
  if (router.query != null) {
    code = router.query?.code;
    name = router.query?.name;
  }

  return (
    <div>
      <h1>
        routes / {code} / {name}
      </h1>
      <CustomLink />
    </div>
  );
}
