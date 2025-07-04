import { getSubsystemById } from "../../../db";

import Main from "../../../components/Main/Main";
import SearchResult from "../../../components/SearchResult/SearchResult";

export default async function SubsystemDisplay({params}) {
    const data_info = await params;
    const data = await getSubsystemById(data_info.subsystem_id);

    return (
        <Main>
            <SearchResult data={data} editable={false}/>
        </Main>
    );
}