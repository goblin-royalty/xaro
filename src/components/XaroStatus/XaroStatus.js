import styles from "./XaroStatus.module.css";
import ShipStatus from "../ShipStatus/ShipStatus";
import AskXaro from "../AskXaro/AskXaro";

export default function XaroStatus({changePage}) {
    return (
        <div className={styles.xaroStatus}>
            <ShipStatus changePage={changePage}/>
            <AskXaro/>
        </div>
    );
}