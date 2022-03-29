import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import Navbar from '../Navbar';

const Payslip = () => {
    return (
        <View style={payslipStyles.container}>
            <Navbar />

            <View style={payslipStyles.headerBar}>
                <Text style={payslipStyles.headerTitle}>給与明細</Text>
            </View>

            <View style={payslipStyles.body}>
                <View style={payslipStyles.tableHeader}>
                    <Text style={payslipStyles.tableHeaderText}>所属氏名</Text>
                </View>
                
                <View>
                    <Text>勤怠他</Text>
                </View>
                
                <View>
                    <Text>支給</Text>
                </View>
                
                <View>
                    <Text>控除</Text>
                </View>
                
                <View>
                    <Text>過不足税金</Text>
                </View>
                
                <View>
                    <Text>支給額</Text>
                </View>
            </View>
        </View>
    )
}

const payslipStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },

    headerBar: {
        flex: 1,
        top: 30,
        maxHeight: 60,
        width: '95%',
        marginLeft: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DDDDDD',
    },

    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    body: {
        flex: 1,
        height: 500,
    },

    tableHeader: {
        backgroundColor: '#0F0049',
    },

    tableHeaderText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
});

export default Payslip;