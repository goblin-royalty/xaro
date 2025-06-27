import { NextResponse } from 'next/server';

// DB operations
import {updateRecord} from "../../../db";
   
export async function PUT(request) {
    const body = await request.json();

    let insertResults = [];
    if(body.id && body.title && body.title.length && body.text && body.text.length) {
        insertResults = await updateRecord(body.id, body.title, body.text);
    }
   
    return NextResponse.json(insertResults);
}