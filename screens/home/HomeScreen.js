import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

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

const CategoryCard = (props) => {

    return(
        <TouchableOpacity style={[styles.categoryRectangle, {marginLeft: 10, marginRight: 10, justifyContent: 'center'}]}>
            <Image
                source={props.imgsrc}
            />
            <Text>{props.title}</Text>
        </TouchableOpacity>
    );
};

const LocationInputText = (props) => (
    <View>
        <TextInput
            placeholder={props.hint}
            underlineColorAndroid='transparent'
            style={[styles.locinputtext, {marginLeft: 20, marginRight:20 }]}/>
    </View>
);

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
                        style={{
                            width: 21,
                            height: 21,
                            marginLeft: 5,
                            marginRight: 5,
                            backgroundColor: this.state.activeOption === option ? '#F8B73C' : 'white',
                            borderWidth: 2,
                            borderColor: this.state.activeOption === option ? '#F8B73C' : '#B7B7BB',
                            borderRadius: 25,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        onPress={() => {
                            this.props.onChange(option);
                            this.updateActiveOption(option);
                        }}
                    >
                        <Text
                            style={{
                                color: this.state.activeOption === option ? 'white' : '#B7B7BB',
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

            <MyStatusBar backgroundColor="transparent" barStyle="light-content"/>

            <View style={styles.UpperSection}>
                <View style={[styles.section, {marginTop: 20}]}>
                    <Image
                        style={{width: 132.31, height: 24}}
                        source={require('../../assets/home/CTLogo.png')}
                    />
                    <View style={[styles.oval, {marginTop: 10}]}>

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
            </View>

            <View style={styles.MainSection}>

                <TitleRectangle title={"카테고리"} />

                <View style={{flexDirection: 'row'}}>
                    <CategoryCard imgsrc={require('../../assets/home/SchoolIcon.png')} title={"등교"}/>
                    <CategoryCard imgsrc={require('../../assets/home/BusIcon.png')} title={"하교"}/>
                    <CategoryCard imgsrc={require('../../assets/home/PenIcon.png')} title={"기타"}/>
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
                            <TouchableOpacity>
                                <Image
                                    style={{width: 17.72, height: 17.72}}
                                    source={require('../../assets/home/SearchIcon.png')}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={{height: 30}}/>

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

                <View>
                    <TitleRectangle title={"인원"} />
                    <Option
                        options={['2', '3', '4']}
                        onChange={(option) => {
                            console.log(option);
                        }}
                    />
                </View>

                <TouchableOpacity style={[styles.searchRoom, {marginTop: 10, marginBottom: 10}]}>
                    <Text style={{color: 'white', fontsize: 14}}>방 검색하기</Text>
                </TouchableOpacity>



            </View>
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

    searchRoom: {
        width: 150,
        height: 34,
        backgroundColor: '#F8BD3C',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#d9d9d9',
        elevation: 6,
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
