import styles from "./XaroStatus.module.css";
import ShipStatus from "../ShipStatus/ShipStatus";
import AskXaro from "../AskXaro/AskXaro";

export default function XaroStatus({changePage, objectToArray}) {
    return (
        <div className={styles.xaroStatus}>
            <ShipStatus objectToArray={objectToArray} changePage={changePage}/>
            <AskXaro/>
        </div>
    );
}