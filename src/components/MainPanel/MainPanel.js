import Breadcrumb from "../Breadcrumb/Breadcrumb";
import styles from "./MainPanel.module.css";

export default function MainPanel({breadCrumbPath, changePage, children}) {
    return (
        <div className={styles.MainPanel}>
            <Breadcrumb path={breadCrumbPath} changePage={changePage}/>
            {children}
            <div className={styles.backgroundTexture}></div>
        </div>
    );
}