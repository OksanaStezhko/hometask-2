import classNames from 'classnames/bind'
import styles from './Section.module.css'
let cx = classNames.bind(styles)

interface Props {
  children: JSX.Element[] | JSX.Element
  width: string
  height: string
}

const Section = ({ children, width = 'normal', height = 'normal' }: Props) => {
  return <section className={cx('section', width, height)}>{children}</section>
}

export default Section
