import React from 'react'
import { View, Text , Image, ScrollView, StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeSlider from '../components/HomeSlider'
const ProImg = require('../../assets/Img/pro.jpg')


// discount slides images

const d_slide1 = require('../../assets/Img/d_slide1.jpg')
const d_slide2 = require('../../assets/Img/d_slide2.jpg')

const Home = () => {

    // render
    const YellowBanner =()=>(
        <View style={{position:'absolute', top:110,zIndex:1,width:'90%',height:40, flex:1, alignItems:'center', justifyContent:'center', marginLeft:27, backgroundColor:'#c71c06', }}>
            <Text style={{fontWeight:'bold',color:'#fff', textTransform:'uppercase'}}>Tap top recharge</Text>
        </View>
    )
    return (
        <>
        <View style={{backgroundColor:'#fff'}}>
            <View style={{paddingVertical:7, paddingHorizontal:10, marginBottom:20}}>
            {/* Yellow Banner */}
            <YellowBanner />
                {/* top banner */}
                <View style={{backgroundColor:'#000',flexDirection:'row', alignItems:'center', justifyContent:'space-between', width:'100%', height:110 , paddingHorizontal:20}}>
                        {/* left */}
                        <View>
                            <Text style={{color:'#fff', fontSize:13, marginBottom:4}}>Your Balance is</Text>
                            <Text style={{color:'#fff', fontWeight:'bold'}}>Rs <Text style={{fontWeight:'bold', fontSize:24}}>3 Cror</Text></Text>
                        </View>
                        {/* right */}
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', width:145}}>
                            <View>
                                <Image source={ProImg} style={{width:50, height:50, borderRadius:100}}/>
                            </View>
                            <View>
                                <Text style={{color:'#fff', fontWeight:'bold', fontSize:17, marginBottom:4}}>Miraj Ali</Text>
                                <Text style={{color:'#fff'}}>03062734099</Text>
                            </View>
                        </View>
                </View>
            </View>
            {/* view more */}
            
            <ScrollView showsVerticalScrollIndicator={false} style={{position:'relative'}}>
             <View>
                    <TouchableOpacity onPress={() => console.log('View More')}>
                        <Text style={{marginLeft:'auto', paddingTop:15, paddingHorizontal:10, color:'#c71c06'}}>View more</Text>
                    </TouchableOpacity>
                    {/* data to sms */}
                    <View style={{flexDirection:'row', paddingVertical:10,alignItems:'center', justifyContent:'space-between', paddingHorizontal:20}}>
                        {/* data */}
                        <View >
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <View style={{flexDirection:'row', opacity:.7}}>
                                <Ionicons size={15} name="arrow-up-outline" />
                                <Ionicons size={15} name="arrow-down-outline" style={{position:'absolute', left:6, top:6}}/>
                                </View>
                                <Text style={{textAlign:'center', marginBottom:4,paddingLeft:7, fontSize:13 }}>DATA</Text>
                            </View>
                            <View style={{borderWidth:2,borderColor:'gray', width:80, height:80, borderRadius:100, alignItems:'center', justifyContent:'center'}}>
                                <Text style={{fontWeight:'bold',fontSize:16, color:'#c71c06'}}>5</Text>
                                <Text>MB</Text>
                            </View>
                            <Text style={{textAlign:'center', marginTop:4,fontSize:11 }}>Out of 2</Text>
                        </View>

                        {/* call */}
                        <View>
                            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
                                <Ionicons name="call-outline" size={15}/>
                                <Text style={{textAlign:'center', marginBottom:4, }}>CALLS</Text>
                            </View>
                            <View style={{borderWidth:2,borderColor:'gray', width:80, height:80, borderRadius:100, alignItems:'center', justifyContent:'center'}}>
                                <Text>5</Text>
                            </View>
                            <Text style={{textAlign:'center', marginTop:4,fontSize:11 }}>Per</Text>
                        
                        </View>
                        {/* sms */}
                        <View>
                            <View>
                                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
                                    <Ionicons name="chatbubble-ellipses-outline" size={20} style={{opacity:.7}}/>
                                    <Text style={{textAlign:'center', marginBottom:4, }}>SMS</Text>
                                </View>
                            </View>
                            <View style={{borderWidth:2,borderColor:'gray', width:80, height:80, borderRadius:100, alignItems:'center', justifyContent:'center'}}>
                                <Text>5</Text>
                            </View>
                            <Text style={{textAlign:'center', marginTop:4,fontSize:11 }}>Per</Text>
                        
                        </View>
                        {/* data to sms complelte */}

                    </View>
                        <View style={{borderTopWidth:1, borderColor:'#e6edea', marginVertical:18, paddingHorizontal:19}}>
                            {/* packages Daily awards more */}
                            <PackageReward />
                        </View>
                    </View>
                <HomeSlider />
                <View>
                    <Discount />
                </View>
            </ScrollView >
            </View>
            {/* home Slider components start */}
        </>
    )
}


const PackageReward =()=>(
    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginVertical:1}}>
        <TouchableOpacity style={styles.PackageReward}>
            <Ionicons size={26} name="grid"/>
            <Text style={styles.packageFonts}>Packages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.PackageReward}>
            <Ionicons size={26} name="gift"/>
            <Text style={styles.packageFonts}>Daily Reward's</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.PackageReward}>
            <Ionicons size={26} name="apps"/>
            <Text style={styles.packageFonts}>Make Your Bundles</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.PackageReward} >
            <Ionicons size={30} name="chevron-forward"/>
            <Text style={styles.packageFonts} >More</Text>
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    PackageReward:{
        flexDirection:'column', 
        alignItems:'center', 
        justifyContent:'center',
        borderRightWidth:1,
        borderColor:'#e6edea',
        paddingHorizontal:17,
        marginTop:10

    },
    packageFonts:{
        fontSize:10,
        opacity: .6,
    }
})


// discount components


const discountList =[
    {
        id:1,
        img:{d_slide1}
    },
    {
        id:2,
        img:{d_slide2}
    },
    {
        id:3,
        img:{d_slide1}
    },
]

const Discount =()=>(
    <View style={{height:300}}>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between',paddingHorizontal:15 }}>
            <Text style={{fontWeight:'bold', fontSize:24}}>Discount</Text>
            <Text style={{color:'red', fontSize:16, opacity:.6}}>View more</Text>
            {/* Dicount slide */}
        </View>
            <ScrollView horizontal>
                <View style={{paddingHorizontal:15}}>
                    <Image source={d_slide1} style={{width:270,borderRadius:6, height:150}} resizeMode="cover"/>
                </View>
                <View style={{paddingHorizontal:15}}>
                    <Image source={d_slide2} style={{width:270,borderRadius:6, height:150}} resizeMode="cover"/>
                </View>
                <View style={{paddingHorizontal:15}}>
                    <Image source={d_slide1} style={{width:270,borderRadius:6, height:150}} resizeMode="cover"/>
                </View>
                <View style={{paddingHorizontal:15}}>
                    <Image source={d_slide1} style={{width:270,borderRadius:6, height:150}} resizeMode="cover"/>
                </View>
                <View style={{paddingHorizontal:15}}>
                    <Image source={d_slide1} style={{width:270,borderRadius:6, height:150}} resizeMode="cover"/>
                </View>
                <View style={{paddingHorizontal:15}}>
                    <Image source={d_slide1} style={{width:270,borderRadius:6, height:150}} resizeMode="cover"/>
                </View>
            </ScrollView>
    </View>
)



export default Home
