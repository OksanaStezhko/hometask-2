import classNames from 'classnames/bind'
import styles from './Title.module.css'
let cx = classNames.bind(styles)

interface IProps {
  text: string
  type?: 'error' | 'normal'
}

const Title: React.FC<IProps> = ({ text, type = 'normal' }) => {
  return <h1 className={cx('title', type)}>{text}</h1>
}

export default Title
