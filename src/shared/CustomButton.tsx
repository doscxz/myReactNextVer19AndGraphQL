import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { children: React.ReactNode };

export const CustomButton = ({ children, ...props }: Props) => {
  return (
    <button
      {...props}
      className="px-2 py-3 rounded-full bg-amber-700 text-amber-100 w-[200px] hover:bg-amber-600 disabled:bg-amber-900 "
    >
      {children || 'Запросить пользака'}
    </button>
  );
};
