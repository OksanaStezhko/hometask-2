import styles from './Button.module.css'

interface IProps {
  children: string
}

const Button = ({ children }: IProps) => {
  return <button className={styles.button}>{children}</button>
}

export default Button
