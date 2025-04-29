import { Provider } from '@/components/ui/provider';
import { SessionContext } from 'next-auth/react';
import React, { ReactNode } from 'react'

export const NextAuthProvider = ({ children }: { children: ReactNode }) => {
    const mockSessionData = {
        expires: '',
        user: {
            name: "Storybook",
            email: "storybook@storybook.com"
        },
        access_token: ""
    }

    return (
        <Provider>
            <SessionContext.Provider
                value={{
                    update: () => {
                        return Promise.resolve(mockSessionData)
                    },
                    data: mockSessionData,
                    status: 'authenticated'
                }}>
                {children}
            </SessionContext.Provider>
        </Provider>
    );

}