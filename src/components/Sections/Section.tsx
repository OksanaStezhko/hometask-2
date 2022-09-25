import styles from './Section.module.css';

interface Props {
  children: JSX.Element[]|JSX.Element
}

const Section = ({ children }:Props) => {
  return <section className={styles.section}>{children}</section>
}

export default Section;
