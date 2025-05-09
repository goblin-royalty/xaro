import { NextResponse } from 'next/server';

// DB operations
import {createRecord} from "../../../db";
   
export async function POST(request) {
    const body = await request.json();

    let insertResults = [];
    if(body.title && body.title.length && body.text && body.text.length) {
        insertResults = await createRecord(body.title, body.text);
    }
   
    return NextResponse.json(insertResults);
}