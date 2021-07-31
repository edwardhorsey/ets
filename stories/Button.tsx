import React from 'react';

export interface ButtonProps {
  text: string;
  submit?: boolean;
}

export const Button = ({
  text,
  submit = false,
}: ButtonProps): JSX.Element => (
  <button
    className="bg-blue-300 text-xl font-bold pt-2 pb-2 pl-4 pr-4
    rounded-lg"
    type={submit ? 'submit' : 'button'}
  >
    {text}
  </button>
);
