import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Spacer = ( { children }) => {
        return (
            <View>
                <Text style={styles.spacer}>{children}</Text>
            </View>
        );
};

const styles = StyleSheet.create({
    spacer: {
        margin:15
    }
});

export default Spacer;
