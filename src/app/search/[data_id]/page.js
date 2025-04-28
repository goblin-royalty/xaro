import { getCrewMemberById } from "../../../db";

import Main from "../../../components/Main/Main";
import SearchResult from "../../../components/SearchResult/SearchResult";

export default async function DataDisplay({params}) {
    const data_info = await params;
    const data = await getCrewMemberById(data_info.data_id);

    return (
        <Main>
            <SearchResult data={data}/>
        </Main>
    );
}