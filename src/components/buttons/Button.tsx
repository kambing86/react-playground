import styles from './Button.module.scss';
import clsx from 'clsx';

type ButtonVariant = Exclude<keyof typeof styles, 'normalButton'>;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children?: React.ReactNode;
}

const Button = ({ variant, children, ...props }: Props) => {
  return (
    <button
      className={clsx(variant == null ? styles.normalButton : styles[variant])}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
