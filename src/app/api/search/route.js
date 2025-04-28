import { NextResponse } from 'next/server';

// DB operations
import {globalSearch} from "../../../db";
   
export async function POST(request) {
    const body = await request.json();

    let searchResults = [];
    if(body.keyword && body.keyword.length) {
        searchResults = await globalSearch(body.keyword);
    }
   
    return NextResponse.json(searchResults);
}