import Link from 'next/link';
import { LinkConfig } from '../interfaces/link-config';

export default function CustomLink(params: LinkConfig): JSX.Element {
  return (
    <Link href={params.href ?? '/routes'}>
      {params.child ?? <li className='li-link'>return</li>}
    </Link>
  );
}
