import React from 'react';
import { useEffect, useContext } from 'react';
import { View, Text } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';

const ResolveAuth = () => {
    const { tryLocalSignin } = useContext(AuthContext);

    useEffect (() => {
        tryLocalSignin();
    }, []);

  return null;
}

export default ResolveAuth;
