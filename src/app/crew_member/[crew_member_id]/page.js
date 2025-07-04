import { getCrewMemberById } from "../../../db";

import Main from "../../../components/Main/Main";
import SearchResult from "../../../components/SearchResult/SearchResult";

export default async function CrewMemberDisplay({params}) {
    const data_info = await params;
    const data = await getCrewMemberById(data_info.crew_member_id);

    return (
        <Main>
            <SearchResult data={data} editable={false}/>
        </Main>
    );
}