import { getShipRecordById } from "../../../db";

import Main from "../../../components/Main/Main";
import ShipRecordCreator from "../../../components/ShipRecordCreator/ShipRecordCreator";

export default async function EditShipRecord({params}) {
    const record_info = await params;
    const data = await getShipRecordById(record_info.record_id);

    return (
        <Main>
            <ShipRecordCreator predefinedData={data}/>
        </Main>
    );
}