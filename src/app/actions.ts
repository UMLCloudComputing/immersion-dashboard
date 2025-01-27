"use server"
import { VerificationEmailActionResponse } from "@/types/types"
import { SendEmailCommand, SESClient } from "@aws-sdk/client-ses"



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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sendVerificationEmail = async (): Promise<VerificationEmailActionResponse> => {
    const sesClient = new SESClient({ region: "us-east-1" })
    const code = 123456
    // const verificationEmail = createVerificationEmail("nbottari9@gmail.com", "no-reply@umlcloudcomputing.org", code);
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