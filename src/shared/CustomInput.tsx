import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const CustomInput = ({ ...props }: Props) => {
  return (
    <input
      {...props}
      className="border-2 border-b-amber-800 mx-1 my-1 rounded-2xl disabled:bg-amber-800"
    />
  );
};
