import Main from "../components/Main/Main";
import ShipStatus from "../components/ShipStatus/ShipStatus";

export default async function Index() {
    return (
        <Main>
            <ShipStatus />
        </Main>
    );
}