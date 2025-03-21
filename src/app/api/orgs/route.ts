import { NextRequest, NextResponse } from "next/server";
import { tempOrgs } from "../../../data/testOrgs"

import { DynamoDBClient, ScanCommand, ScanCommandOutput, ScanCommandInput } from "@aws-sdk/client-dynamodb"
import { ok } from "assert";


const createDynamoDBScanCommand = (): ScanCommand => {
    return new ScanCommand({
        TableName: "", // TODO: add correct table name
    })
}

export async function GET(req: NextRequest) {
    const ddbClient = new DynamoDBClient({ region: "us-east-1" })
    // const data: ScanCommandOutput = await ddbClient.send(createDynamoDBScanCommand())
    const data = tempOrgs
    if (data) {
        return NextResponse.json({ message: "Error fetching orgs. Try again later" }, { status: 500 })
    }
    return NextResponse.json(data, { status: 200 })
}