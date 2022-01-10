import React from 'react';
import { useEffect, useContext } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';

const ResolveAuth = (props) => {
    const { tryLocalSignin } = useContext(AuthContext);
    const email = props.email;
    const username = props.username;
    const birth = props.birth;
    const password = props.password;
    useEffect (() => {
        tryLocalSignin({email,username,birth,password});
    }, []);

  return null;
}

export default ResolveAuth;
