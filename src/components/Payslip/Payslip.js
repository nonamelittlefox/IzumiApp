import { View, Text } from 'react-native';
import React from 'react';
import Navbar from '../Navbar';

const Payslip = () => {
    return (
        <View style={{ flex: 1 }}>
            <Navbar />
            <View style={{ flex: 1, padding: 10 }}>
                <Text>Payslip</Text>
            </View>
        </View>
    )
}

export default Payslip;