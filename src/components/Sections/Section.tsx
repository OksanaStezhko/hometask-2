import classNames from 'classnames/bind'
import styles from './Section.module.css'
let cx = classNames.bind(styles)

interface IProps {
  children: JSX.Element[] | JSX.Element
  width?: 'normal' | 'full'
  height?: 'normal' | 'stretch'
}

const Section = ({ children, width = 'normal', height = 'normal' }: IProps) => {
  return <section className={cx('section', width, height)}>{children}</section>
}

export default Section
