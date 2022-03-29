import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import React from 'react';
import Navbar from '../Navbar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

const CONTENT = {
    tableAlert: [
        '',
        'Red',
        'Red',
        'Red',
        'Blue',
        'Red',
        'Blue',
        'Red',
        'Blue',
        'Red',
        'Blue',
        'Red',
        'Blue',
        'Red',
        'Blue',
        'Red',
        'Blue',
        'Red',
        'Blue',
        'Red',
        'Blue',
        'Red',
        'Blue',
        'Red',
        'Blue',
        'Red',
        'Blue',
        'Red',
        'Blue',
        'Red',
        'Blue',
        '',
        '',
        '',
        '',
        '',
        '',
    ],

    tableAlertFlexArray: [299, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 600],

    tableHead: [
        '氏名',
        '役職',
        'ルートタイプ',
        '金1',
        '土2',
        '日3',
        '月4',
        '火5',
        '水6',
        '木7',
        '金8',
        '土9',
        '日10',
        '月11',
        '火12',
        '水13',
        '木14',
        '金15',
        '土16',
        '日17',
        '月18',
        '火19',
        '水20',
        '木21',
        '金22',
        '土23',
        '日24',
        '月25',
        '火26',
        '水27',
        '木28',
        '金29',
        '土30',
        '公休数',
        '有休数',
        '同乗数',
        '連勤数',
        '連勤開始日',
        '最低公休数',
    ],

    tableHeadFlexArray: [100, 100 , 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],

    tableData: [
        [   
            'Thanh Nghiên',
            '-',
            '一便 二便',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '3',
            '0',
            '0',
            '0',
            '',
            '4',
        ],
        [   
            'Vu Duck',
            '-',
            '一便 二便',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '3',
            '0',
            '0',
            '0',
            '',
            '4',
        ],
        [   
            'Tien Simp',
            '-',
            '一便 二便',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '3',
            '0',
            '0',
            '0',
            '',
            '4',
        ],
        [   
            'Mèo Hắc Ám',
            '-',
            '一便 二便',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '公',
            '3',
            '0',
            '0',
            '0',
            '',
            '4',
        ],
    ],

    tableDataFlexArray: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],

    tableFooterData: [
        '休日合計数',
        '11',
        '11',	
        '11',
        '11',
        '11',
        '11',
        '11',
        '11',
        '11',
        '11',
        '11',
        '11',
        '11',
        '11',
        '11',
        '11',
        '11',
        '11',
        '11',
        '11',
        '11',
        '11',
        '11',
        '11',
        '11',
        '11',
        '11',
        '11',
        '11',
        '11',
        '',
        '',
        '',
        '',
        '',
        '',
    ],

    tableFooterFlexArray: [300, 100 , 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],

};

const Workshift = () => {
    return (
        <SafeAreaView style={workshiftStyles.container} edges={['top', 'left', 'right']}>
            <Navbar />

            <View style={workshiftStyles.headerBar}>
                <Text style={workshiftStyles.headerTitle}>Workshift</Text>
            </View>

            <View style={workshiftStyles.monthYearSelector}>
                <View style={workshiftStyles.prev}>
                    <Pressable>
                        <FontAwesome5 name="angle-double-left" size={20}></FontAwesome5>
                    </Pressable>
                </View>
                
                <View style={workshiftStyles.monthYear}>
                    <Text style={workshiftStyles.text}>4月 | 2022</Text>
                </View>
                
                <View style={workshiftStyles.next}>
                    <Pressable>
                        <FontAwesome5 name="angle-double-right" size={20}></FontAwesome5>
                    </Pressable>
                </View>
                </View>

            <ScrollView>
                <View style={{ flex: 1}}>
                    <View style={workshiftStyles.tableWorkshift}>
                        <View>
                            <ScrollView horizontal={true}>
                                <View>
                                    <Table borderStyle={{ borderWidth: 1 }}>

                                        <Row
                                            data={CONTENT.tableAlert}
                                            widthArr={CONTENT.tableAlertFlexArray}
                                            style={workshiftStyles.alert}
                                            textStyle={workshiftStyles.tableAlertText}
                                        />

                                        <Row
                                            data={CONTENT.tableHead}
                                            widthArr={CONTENT.tableHeadFlexArray}
                                            style={workshiftStyles.head}
                                            textStyle={workshiftStyles.tableHeaderText}
                                        />

                                        <TableWrapper style={workshiftStyles.wrapper}>
                                            <Rows
                                                data={CONTENT.tableData}
                                                widthArr={CONTENT.tableDataFlexArray}
                                                style={workshiftStyles.row}
                                                textStyle={workshiftStyles.tableBodyText}
                                            />
                                        </TableWrapper>

                                        <Row
                                            data={CONTENT.tableFooterData}
                                            widthArr={CONTENT.tableFooterFlexArray}
                                            style={workshiftStyles.foot}
                                            textStyle={workshiftStyles.tableHeaderText}
                                        />
                                    </Table>
                                </View>
                            </ScrollView>
                        </View>
                    </View>

                    <View style={workshiftStyles.footerDescription}>
                        <View style={workshiftStyles.descriptionRow}>
                            <Fontisto name="stop" size={25} style={workshiftStyles.iconRedSquare}></Fontisto> 
                            <Text style={workshiftStyles.footerText}>公休（確定）</Text>
                        </View>

                        <View style={workshiftStyles.descriptionRow}>
                            <Fontisto name="stop" size={25} style={workshiftStyles.iconYellowSquare}></Fontisto>
                            <Text style={workshiftStyles.footerText}>公休（希望）</Text>
                        </View>
                        
                        <View style={workshiftStyles.descriptionRow}>
                            <Fontisto name="stop" size={25} style={workshiftStyles.iconGreenSquare}></Fontisto>
                            <Text style={workshiftStyles.footerText}>公休（通常）</Text>
                        </View>
                        
                        <View style={workshiftStyles.descriptionRow}>
                            <Fontisto name="stop" size={25} style={workshiftStyles.iconBlueSquare}></Fontisto>
                            <Text style={workshiftStyles.footerText}>その他勤務</Text>
                        </View>
                        
                        <View style={workshiftStyles.descriptionRow}>
                            <Fontisto name="stop" size={25} style={workshiftStyles.iconPurpleSquare}></Fontisto>
                            <Text style={workshiftStyles.footerText}>同乗</Text>
                        </View>
                        
                        <View style={workshiftStyles.descriptionRow}>
                            <Text style={workshiftStyles.iconOutlineGraySquare}></Text>
                            <Text style={workshiftStyles.footerText}>配送不要日</Text>
                        </View>
                        
                        <View style={workshiftStyles.descriptionRow}>
                            <Text style={workshiftStyles.iconOutlineRedSquare}></Text>
                            <Text style={workshiftStyles.footerText}>連勤アラート</Text>
                        </View>
                        
                        <View style={workshiftStyles.descriptionRow}>
                            <Fontisto name="record" size={25} style={workshiftStyles.iconRedCircle}></Fontisto>
                            <Text style={workshiftStyles.footerText}>ドライバー不足アラート</Text>
                        </View>
                        
                        <View style={workshiftStyles.descriptionRow}>
                            <Text style={workshiftStyles.iconBannedCircle}>🚫</Text>
                            <Text style={workshiftStyles.footerText}>有給休暇を取得するには、少なくとも6か月間働く必要があります。</Text>
                        </View>
                        
                        <View style={workshiftStyles.descriptionRow}>
                            <Fontisto name="record" size={25} style={workshiftStyles.iconBlueCircle}></Fontisto>
                            <Text style={workshiftStyles.footerText}>ドライバー余剰アラート</Text>
                        </View>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const workshiftStyles = StyleSheet.create({
    container: {
        flex: 1,
    },

    headerBar: {
        flex: 1,
        minHeight: 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        backgroundColor: '#DDD',
    },

    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    monthYearSelector: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#A8D6F4',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 200,
        borderRadius: 5,
        minHeight: 40,
        marginBottom: 10,
        elevation: 12,
    },

    prev: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    monthYear: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },

    next: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        fontSize: 15,
        fontWeight: 'bold'
    },

    tableWorkshift: {
        flex: 5,
        borderRadius: 5,
        marginTop: 20,
        marginHorizontal: 10,
    },

    footerDescription: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 20,
        marginHorizontal: 10,
        backgroundColor: '#DDD',
        borderRadius: 5,
        padding: 10,
    },

    footerIcon: {
        padding: 100,
    },

    footerText: {
        fontSize: 10,
        marginLeft: 10,
        marginTop: 5,
    },

    descriptionRow: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10
    },

    iconRedSquare: {
        color: '#ED2A2A',
    },

    iconYellowSquare: {
        color: '#FCEA4B',
    },

    iconGreenSquare: {
        color: '#70D560',
    },

    iconBlueSquare: {
        color: '#00A6FF',
    },

    iconPurpleSquare: {
        color: '#9B51E0',
    },

    iconOutlineGraySquare: {
        width: 25,
        height: 25,
        backgroundColor: '#FFFFFF',
        borderWidth: 3,
        borderColor: '#898181',
    },

    iconOutlineRedSquare: {
        width: 25,
        height: 25,
        backgroundColor: '#FFFFFF',
        borderWidth: 3,
        borderColor: '#ED2A2A',
    },

    iconRedCircle: {
        color: '#ED2A2A',
    },

    iconBannedCircle: {
        fontSize: 23,
        marginLeft: -3,
        marginTop: -5,
    },

    iconBlueCircle: {
        color: '#00A6FF',
    },

    wrapper: {
        flexDirection: 'row' 
    },

    row: {
        height: 100,
    },

    title: {
        flex: 1,
        backgroundColor: '#2ecc71'
    },

    head: {
        minHeight: 40,
        backgroundColor: '#3383CD',
    },

    foot: {
        minHeight: 40,
        backgroundColor: '#3383CD',
    },

    alert: {
        minHeight: 40,
        borderWidth: 1,
        borderTopColor: '#000000',
    },

    tableAlertText: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000000',
    },

    tableHeaderText: {
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
    },

    tableBodyText: {
        color: '#000000',
        textAlign: 'center',
    },
});

export default Workshift;