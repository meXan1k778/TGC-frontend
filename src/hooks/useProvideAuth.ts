import { useState } from 'react';
import {IUserData, IUserToken} from '../components/ProvideAuth/types';
import { LS, parsedLSitem } from '../utils/helpers';

export function useProvideAuth() {
    const [userData, setUserData] = useState<IUserData | null>(parsedLSitem('userData'));
    const [userToken, setUserToken] = useState<IUserToken | null>(parsedLSitem('userToken'));

    const setUser = (userData: IUserData) => {
        LS.set('userData', JSON.stringify(userData));
        setUserData(userData);
    }

    const signin = (userToken: IUserToken) => {
        LS.set('userToken', JSON.stringify(userToken));
        setUserToken(userToken);
    };

    const signout = () => {
        LS.remove(['userToken']);
        LS.remove(['userData']);
        setUserData(null);
        setUserToken(null);
    };

    // TODO: fetch real id
    const tournamentId = 1;

    return {
        userData,
        userToken,
        tournamentId,
        setUser,
        signin,
        signout
    };
}