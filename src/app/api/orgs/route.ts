import { NextRequest, NextResponse } from "next/server";
import { tempOrgs } from "../../../data/testOrgs"
import { DynamoDBClient, ScanCommand, ScanCommandOutput, ScanCommandInput } from "@aws-sdk/client-dynamodb"
import { CloudFormationClient, DescribeStackResourceCommand } from "@aws-sdk/client-cloudformation";
import { fromIni } from "@aws-sdk/credential-provider-ini";

const createDynamoDBScanCommand = (tableName: string): ScanCommand => {
    return new ScanCommand({
        TableName: "", // TODO: add correct table name
    })
}

const createDescribeStackResourceCommand = (resourceId: string): DescribeStackResourceCommand => {
    return new DescribeStackResourceCommand({
        StackName: "ImmersionStack",
        LogicalResourceId: resourceId
    })
}

export async function GET(req: NextRequest) {
    const ddbClient = new DynamoDBClient({ region: "us-east-1" })
    const cfClient = new CloudFormationClient({
        region: "us-east-1",
        credentials: fromIni({ profile: "dev" })
    })

    const table = await cfClient.send(createDescribeStackResourceCommand("ImmersionOrganizationTable"))
    console.log(table)
    if (!table) {
        return NextResponse.json({ message: "Could not find DDB table" }, { status: 500 })
    }
    const tableName = table.StackResourceDetail.PhysicalResourceId
    const data: ScanCommandOutput = await ddbClient.send(createDynamoDBScanCommand(tableName))
    console.log(data)
    //const data = tempOrgs
    if (!data) {
        return NextResponse.json({ message: "Error fetching orgs. Try again later" }, { status: 500 })
    }
    return NextResponse.json(data, { status: 200 })
}