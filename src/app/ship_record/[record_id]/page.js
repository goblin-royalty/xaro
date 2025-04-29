import { getShipRecordById } from "../../../db";

import Main from "../../../components/Main/Main";
import SearchResult from "../../../components/SearchResult/SearchResult";

export default async function ShipRecordDisplay({params}) {
    const record_info = await params;
    const data = await getShipRecordById(record_info.record_id);

    return (
        <Main>
            <SearchResult data={data}/>
        </Main>
    );
}