'use client'

import { ReactNode } from 'react';
import { AuthProvider } from '@/hooks/useAuth';

type ProviderProps = {
    children: ReactNode
}

export const Providers = ({ children }: ProviderProps) => {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}
