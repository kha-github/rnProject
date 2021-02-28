import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput } from 'react-native';

const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
        <SafeAreaView>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </SafeAreaView>
    </View>
);

const TitleRectangle = (props) => (
    <View style={[styles.titleRectangle, {marginTop: 10, marginBottom: 10}]}>
        <Text style={{color: 'white'}}>{props.title}</Text>
    </View>
);

const CategoryCard = (props) => (
    <View style={[styles.categoryRectangle, {marginLeft:10, marginRight: 10}]}>
        <Text>{props.title}</Text>
    </View>
);

const LocationInputText = (props) => (
    <View>
        <TextInput
            placeholder={props.hint}
            underlineColorAndroid='transparent'
            style={[styles.locinputtext, {marginLeft: 20, marginRight:20 }]}/>
    </View>
);

export default function HomeScreen() {
    return (
        <View style={styles.container}>

            <MyStatusBar backgroundColor="#0D3664" barStyle="light-content"/>

            <View style={styles.UpperSection}>
                <View style={styles.section}>
                    <Image
                        style={{width: 132.31, height: 24}}
                        source={require('../../assets/home/CTLogo.png')}
                    />
                    <View style={styles.oval}>

                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{justifyContent: 'center'}}>
                            <Image
                                style={{width: 35, height: 35}}
                                source={require('../../assets/home/SchoolHome.png')}
                            />
                            <Text style={{color : 'white'}}>학교 홈</Text>
                        </View>
                        <View style={{justifyContent: 'center'}}>
                            <Image
                                style={{width: 35, height: 35}}
                                source={require('../../assets/home/EClass.png')}
                            />
                            <Text style={{color : 'white'}}>E-Class</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.MainSection}>

                <TitleRectangle title={"카테고리"} />

                <View style={{flexDirection: 'row'}}>
                    <CategoryCard title={"등교"}/>
                    <CategoryCard title={"하교"}/>
                    <CategoryCard title={"기타"}/>
                </View>

                <TitleRectangle title={"검색항목"} />

                <View style={{flexDirection: 'row'}}>
                    <View style={{alignItems: 'center'}}>
                        <Image
                            style={{width: 29, height: 29}}
                            source={require('../../assets/home/DepartureIcon.png')}
                        />
                        <Image
                            style={{height: 30}}
                            source={require('../../assets/home/DottedLine.png')}
                        />
                        <Image
                            style={{width: 29, height: 29}}
                            source={require('../../assets/home/ArriveIcon.png')}
                        />
                    </View>

                    <View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <LocationInputText hint={"출발지점을 입력해주세요"}/>
                            <Image
                                style={{width: 17.72, height: 17.72}}
                                source={require('../../assets/home/SearchIcon.png')}
                            />
                        </View>

                        <View style={{height: 30}}/>

                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <LocationInputText hint={"도착지점을 입력해주세요"}/>
                            <Image
                                style={{width: 17.72, height: 17.72}}
                                source={require('../../assets/home/SearchIcon.png')}
                            />
                        </View>
                    </View>
                </View>

                <TitleRectangle title={"인원"} />

            </View>
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    },

    section: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    oval: {
        width: 105,
        height: 24,
        backgroundColor: 'rgba(255, 255, 255, 0.13)',
        borderWidth:0.7,
        borderColor: 'rgba(255, 255, 255, 0.83)',
        borderTopLeftRadius: 108,
        borderTopRightRadius: 108,
        borderBottomLeftRadius: 108,
        borderBottomRightRadius: 108,
    },

    titleRectangle: {
        width: 88,
        height: 21,
        backgroundColor: '#F8BD3C',
        borderRadius: 2,
        alignItems: 'center',
    },

    locinputtext: {
        width: 243,
        height: 33,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#B7B7BB',
        borderRadius: 21 ,
        backgroundColor : "#FFFFFF"
    },

    categoryRectangle: {
        width: 102,
        height: 101,
        backgroundColor: '#FFFFFF',
        shadowColor: "#000000",
        shadowOpacity: 0.16,
        shadowOffset: { width: 2, height: 2 },
        borderRadius: 8,
        elevation: 6,
        alignItems: 'center',
    },

    UpperSection: {
        flex: 1,
        backgroundColor: "#0D3664"
    },

    MainSection: {
        flex: 4,
        backgroundColor: "#ffffff",
        flexDirection: 'column',
        alignItems: 'center'
    },
})
