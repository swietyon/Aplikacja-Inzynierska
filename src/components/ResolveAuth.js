import React from 'react';
import { useEffect, useContext, useState } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';

const ResolveAuth = (props) => {
    const { tryLocalSignin } = useContext(AuthContext);
    useEffect (() => {
        tryLocalSignin();
    }, []);

  return null;
}

export default ResolveAuth;
