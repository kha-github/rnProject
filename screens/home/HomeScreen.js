import React, {Component} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import {ScrollView} from "react-native-gesture-handler";
import {StatusBar} from "react-native-web";

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

const LocationInputText = (props) => (
    <View>
        <TextInput
            placeholder={props.hint}
            underlineColorAndroid='transparent'
            style={[styles.locinputtext, {marginLeft: 20, marginRight:20 }]}/>
    </View>
);

class CategoryCardOption extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeOption: this.props.options[0],
        };
    }
    updateActiveOption = (activeOption) => {
        this.setState({
            activeOption,
        });
    };
    render() {
        return (
            <View
                style={{
                    justifyContent: 'center',
                    flexDirection: 'row',
                }}
            >
                {this.props.options.map((option, index) => (
                        <TouchableOpacity
                            style={[
                                styles.categoryRectangle,
                                {
                                marginLeft: 10,
                                marginRight: 10,
                                justifyContent: 'center',
                                backgroundColor: this.state.activeOption === option ? '#FEFFDB' : 'white',
                            }]}
                            onPress={() => {
                            this.props.onChange(option);
                            this.updateActiveOption(option);
                        }}>
                            <Image
                                source={this.props.imgsrc[index]}
                            />

                        <Text>{option}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        );
    }
}

class Option extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeOption: this.props.options[0],
        };
    }
    updateActiveOption = (activeOption) => {
        this.setState({
            activeOption,
        });
    };
    render() {
        return (
            <View
                style={{
                    justifyContent: 'center',
                    flexDirection: 'row',
                }}
            >
                {this.props.options.map((option, index) => (
                    <TouchableOpacity
                        style={[
                            this.props.costumestyle,
                            {
                            marginLeft: 5,
                            marginRight: 5,
                            backgroundColor: this.state.activeOption === option ? this.props.backgroundColorActive : this.props.backgroundColorNotActive,
                            borderWidth: 2,
                            borderColor: this.state.activeOption === option ? '#F8B73C' : '#B7B7BB',
                            borderRadius: 25,
                            justifyContent: "center",
                            alignItems: "center",
                        }]}
                        onPress={() => {
                            this.props.onChange(option);
                            this.updateActiveOption(option);
                        }}
                    >
                        <Text
                            style={{
                                color: this.state.activeOption === option ? this.props.TextColorActive : this.props.TextColorNotActive,
                            }}
                        >
                            {option}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        );
    }
}

export default function HomeScreen() {
    return (

        <SafeAreaView style={styles.container}>

        <View style={styles.UpperSection}>

            <TouchableOpacity
                style={{
                    width: 23.32,
                    height: 23,
                    alignItems:'center',
                    justifyContent:'center',
                    position: 'absolute',
                    top: 30,
                    right: 15,
                    elevation: 10,
                }}
            >
                <Image
                    style={{width: 23.32, height: 23}}
                    source={require('../../assets/home/AlarmActiveIcon.png')}
                />
            </TouchableOpacity>


            <Image
                style={{width: 132.31, height: 24}}
                source={require('../../assets/home/CTLogo.png')}
            />
            <View style={[styles.oval, {marginTop: 10, alignItems: 'center', justifyContent: 'center'}]}>
                <Text style={{color: 'white'}}>
                    택시 대학교[서울]
                </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
                <TouchableOpacity style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 5, marginLeft: 5}}>
                    <Image
                        style={{width: 35, height: 35}}
                        source={require('../../assets/home/SchoolHome.png')}
                    />
                    <Text style={{color : 'white'}}>학교 홈</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 5, marginLeft: 5}}>
                    <Image
                        style={{width: 35, height: 35}}
                        source={require('../../assets/home/EClass.png')}
                    />
                    <Text style={{color : 'white'}}>E-Class</Text>
                </TouchableOpacity>
            </View>
        </View>


        <ScrollView>

            <MyStatusBar backgroundColor="transparent" barStyle="light"/>

            <View style={styles.MainSection}>

                <View style={styles.section}>
                    <TitleRectangle title={"카테고리"} />

                    <CategoryCardOption
                        options={['등교', '하교', '기타']}
                        imgsrc={[require('../../assets/home/SchoolIcon.png'),
                            require('../../assets/home/BusIcon.png'),
                            require('../../assets/home/PenIcon.png')]}
                        onChange={(option) => {
                            console.log(option);
                        }}/>
                </View>

                <View style={styles.section}>
                    <TitleRectangle title={"인원"} />
                    <Option
                        options={['2', '3', '4']}
                        costumestyle = {{width: 21, height: 21}}
                        backgroundColorActive = '#F8B73C'
                        backgroundColorNotActive = 'white'
                        TextColorActive = 'white'
                        TextColorNotActive = '#B7B7BB'
                        onChange={(option) => {
                            console.log(option);
                        }}
                    />
                </View>

                <View style={styles.section}>
                    <TitleRectangle title={"탐승 성별"} />
                    <Option
                        options={['동성만', '무관']}
                        costumestyle = {{width: 58, height: 28}}
                        backgroundColorActive = '#F8B73C'
                        backgroundColorNotActive = '#B7B7BB'
                        TextColorActive = 'white'
                        TextColorNotActive = 'white'
                        onChange={(option) => {
                            console.log(option);
                        }}
                    />
                </View>

                <View style={styles.section}>

                    <TitleRectangle title={"검색항목"} />

                    <View style={{flexDirection: 'row'}}>
                        <View style={{alignItems: 'center'}}>
                            <Image
                                style={{width: 29, height: 29}}
                                source={require('../../assets/home/DepartureIcon.png')}
                            />
                            <Image
                                style={{marginTop:10, height: 30}}
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
                                <TouchableOpacity>
                                    <Image
                                        style={{width: 17.72, height: 17.72}}
                                        source={require('../../assets/home/SearchIcon.png')}
                                    />
                                </TouchableOpacity>
                            </View>

                            <View style={{height: 40}}/>

                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <LocationInputText hint={"도착지점을 입력해주세요"}/>
                                <TouchableOpacity>
                                    <Image
                                        style={{width: 17.72, height: 17.72}}
                                        source={require('../../assets/home/SearchIcon.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <TouchableOpacity style={[styles.searchRoom, {marginTop: 30, marginBottom: 50}]}>
                        <Text style={{color: 'white', fontsize: 14}}>방 검색하기</Text>
                    </TouchableOpacity>
                </View>

            </View>




        </ScrollView>
            <TouchableOpacity
                style={{
                    alignItems:'center',
                    justifyContent:'center',
                    width:69,
                    height:69,
                    position: 'absolute',
                    bottom: 30,
                    right: 15,
                    backgroundColor:'#F8B73C',
                    borderRadius:100,
                    shadowColor: '#d9d9d9',
                }}
            >
                <Image
                    style={{width: 29.14, height: 32.51}}
                    source={require('../../assets/home/WritingIcon.png')}
                />
                <Text style={{color: 'white', fontsize: 10}}>
                    방만들기
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
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
        marginTop: 20,
        alignItems: 'center',
        flex: 1
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

    searchRoom: {
        width: 145,
        height: 34,
        backgroundColor: '#F8BD3C',
        borderRadius: 20,
        justifyContent: 'center',
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
        shadowColor: '#d9d9d9',
        borderRadius: 8,
        elevation: 6,
        alignItems: 'center',
    },

    UpperSection: {
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 10,
        backgroundColor: "#0D3664"
    },

    MainSection: {
        flex: 4,
        backgroundColor: "#ffffff",
        flexDirection: 'column',
        alignItems: 'center'
    },
})
