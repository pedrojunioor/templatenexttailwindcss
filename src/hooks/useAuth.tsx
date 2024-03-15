'use client'

import { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react'
import api from '@/services/api'
// import { encrypt, decrypt } from '../util/rotinas'
import { UserI } from '../util/interfaces'
import { useToast } from '@/components/ui/use-toast'
import Cookie from "js-cookie";

interface UserResume {
    Cod_Usuari: number
    Nom_Usuari: string
}
interface StoreResume {
    Cod_loja: number
    Description: string
}


interface CurrentUserContextType {
    userInfo: UserResume | undefined
    stores: StoreResume[] | undefined
    authenticated: boolean
    logged: boolean
    firstAccess: boolean
    loading: boolean
    handleLogin: (
        userName: string,
        password: string) => void
    handleLogout: () => void
    handleFirstAccess: (value: boolean) => void
}

const AuthContext = createContext<CurrentUserContextType | null>(null)

interface AuthPropsContext {
    children: ReactNode
}

const AuthProvider = ({ children }: AuthPropsContext) => {
    const { toast } = useToast()

    const [loading, setLoading] = useState<boolean>(false)
    const [authenticated, setAuthenticated] = useState<boolean>(false)
    const [firstAccess, setFirstAccess] = useState<boolean>(false)
    const [userInfo, setUserInfo] = useState<UserResume | undefined>(undefined)
    const [stores, setStores] = useState<StoreResume[] | undefined>(undefined)

    useEffect(() => {
        const userTemp = Cookie.get('user')
        const userParse = userTemp !== undefined ? JSON.parse(userTemp) : undefined
        setUserInfo(userParse)
    }, [])
    useEffect(() => {
        const storesTemp = Cookie.get('stores')
        const storesParse = storesTemp !== undefined ? JSON.parse(storesTemp) : undefined
        setStores(storesParse)
    }, [])

    const [logged, setLogged] = useState<boolean>(false)

    const handleLogin = async (userName: string, password: string) => {

        const payload = {
            userName,
            password,
        }

        try {

            await api.post('/auth/signin', payload).then(res => {
                const data: UserI = res.data
                const token = data.token
                const user = {
                    Nom_Usuari: data.Nom_Usuari,
                    Cod_Usuari: data.Cod_Usuari

                }
                const storesTemp = data.stores.map(store => {
                    return {
                        Cod_loja: store.Cod_Loja,
                        Description: `${store.Des_Loja} (LJ${store.Cod_Loja <= 9 ? `0${store.Cod_Loja}` : store.Cod_Loja}) - ${store.Des_Endere}, ${store.Num_Endere} - ${store.Des_Bairro} ${store.Des_Cidade}/${store.Des_Estado}`
                    }
                })

                Cookie.set('user', JSON.stringify(user))
                Cookie.set('stores', JSON.stringify(storesTemp))
                Cookie.set('token', token)
                api.defaults.headers.common['Authorization'] = `Bearer ${token}`
                setUserInfo(data)
                setStores(storesTemp)
                window.location.href = '/painel'
            }).catch(err => {
                toast({
                    variant: 'destructive',
                    title: "Erro",
                    description: err.response.data.message,
                })
            })
            setAuthenticated(true)
            setLogged(true)
            setFirstAccess(true)
            setLoading(false)

        } catch (err) {
            setLoading(false)
            console.log(err)
        }

    }

    const handleLogout = useCallback(() => {
        Cookie.remove('token')
        Cookie.remove('user')
        Cookie.remove('stores')
        Cookie.remove('storeCurrent')
        setUserInfo(undefined)
        setAuthenticated(false)
        setLogged(false)
        window.location.href = '/'
    }, [])

    const handleFirstAccess = useCallback((value: boolean) => {
        setFirstAccess(value)
    }, [])

    return (
        <AuthContext.Provider
            value={{
                userInfo,
                stores,
                authenticated,
                handleLogin,
                handleLogout,
                logged,
                firstAccess,
                loading,
                handleFirstAccess,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

function useAuthentication() {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error('useAuthentication must be used within an AuthProvider')
    }

    return context
}

export { AuthProvider, useAuthentication, AuthContext }
