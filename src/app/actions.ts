"use server"
import { VerificationEmailActionResponse } from "@/types/types"
import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import { SendEmailCommand, SESClient } from "@aws-sdk/client-ses"
import { PutCommand } from "@aws-sdk/lib-dynamodb"


const createVerificationEmail = (to: string, from: string, code: number) => {
    return new SendEmailCommand({
        Destination: {
            ToAddresses: [to]
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: "HTML_FORMAT_BODY"
                },
                Text: {
                    Charset: "UTF-8",
                    Data: "This is a verfiication email test"
                },
            },
            Subject: {
                Charset: "UTF-8",
                Data: "Testing 123"
            },
        },
        Source: from
    })
}

const createDynamoDBEntry = (emailAddress: string, code: number) => {
    const expireAt = Math.floor((new Date().getTime() + 30000) / 1000) //expire in 30 seconds
    return new PutCommand({
        TableName: "immersion-verification",
        Item: {
            "email": emailAddress,
            "code": code,
            "expiration": expireAt.toString()
        },
    })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sendVerificationEmail = async (emailAddress: string): Promise<VerificationEmailActionResponse> => {
    const sesClient = new SESClient({ region: "us-east-1" })
    const randomSixDigitCode = Math.floor(Math.random() * 900000) + 100000;
    const ddbClient = new DynamoDBClient({ region: "us-east-1" })

    const ddbDocument = createDynamoDBEntry("nbottari9@gmail.com", randomSixDigitCode)
    await ddbClient.send(ddbDocument)

    // const verificationEmail = createVerificationEmail("myhorsefly12345@gmail.com", "no-reply@umlcloudcomputing.org", code);
    // try {
    //     await sesClient.send(verificationEmail)

    //     return Promise.resolve({
    //         status: "success",
    //         message: "Email sent"
    //     })
    // } catch (e) {
    //     console.log(e)
    //     return Promise.reject({
    //         status: "error",
    //         message: e
    //     })
    // }
    const promise = new Promise<VerificationEmailActionResponse>((resolve, reject) => {
        setTimeout(() => {
            resolve({
                status: "success",
                message: "Email sent"
            })
        }, 2000)
    }
    )

    return promise

}

export const confirmVerificationCode = async () => {
    //check verification code
}