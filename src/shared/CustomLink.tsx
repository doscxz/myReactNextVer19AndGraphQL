import Link from 'next/link';
import type { LinkProps } from 'next/link';

type Props = LinkProps & {
  children: React.ReactNode;
};

export const CustomLink = ({ children, ...props }: Props) => {
  return (
    <Link {...props} className="text-amber-100 font-bold text-2xl">
      {children}{' '}
    </Link>
  );
};
