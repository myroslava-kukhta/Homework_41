import Header from '../components/Header/Header';
import HomePage from '../pages/Home';

import styles from './Main.module.css';

const MainLayout = () => {
  return (
    <div className={styles.Layout}>
      <Header/>
      <HomePage/>
    </div>
  )
}

export default MainLayout;
