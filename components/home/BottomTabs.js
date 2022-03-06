import React, { useState, activeTab, setActiveTab } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'


export const bottomTabIcons = [
    {
        name: "Home",
        active: "../../assets/home-active.png",
        inactive: "../../assets/home.png"
    },
    {
        name: "Search",
        active: "../../assets/search.png",
        inactive: "../../assets/search.png"
    },
    {
        name: "Reels",
        active: "../../assets/reels.png",
        inactive: "../../assets/reels.png"
    },
    {
        name: "Shop",
        active: "../../assets/shop.png",
        inactive: "../../assets/shop.png"
    },
    {
        name: "Profile",
        active: "../../assets/shop.png",
        inactive: "../../assets/shop.png"
    },
]

const BottomTabs = ({ icons }) => {
    const [activeTab, setActiveTab] = useState('Home')
    
    const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
          // The `merge: true` option makes sure that the params inside the tab screen are preserved
          navigation.navigate({ name: route.name, merge: true });
        }
      };


    // const Icon = ({ icon }) => {
    //     let img = icon.active.toString()
        
    //     return (
    //     <TouchableOpacity style="" onPress={() => setActiveTab(icon.name)}>
    //         <Image
    //             source={require("../../assets/shop.png")}
    //             style={styles.icon}
    //         />
    //         <Text style={{color: "white"}}>{icon.name}</Text>
    //     </TouchableOpacity>)
    // }


    return (
        <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", height: 50, borderColor: "gray", borderTopWidth: 0.5 }}>
            <TouchableOpacity onPress={() => setActiveTab("Home")}>
                <Image
                    source={activeTab === "Home" ? require('../../assets/home-active.png') : require('../../assets/home.png')}
                    style={styles.icon}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab("Reels")}>
                <Image
                    source={activeTab === "Reels" ? require('../../assets/reels.png') : require('../../assets/reels.png')}
                    style={styles.icon}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab("Search")}>
                <Image
                    source={require('../../assets/search.png')}
                    source={activeTab === "Search" ? require('../../assets/search.png') : require('../../assets/search.png')}
                    style={styles.icon}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setActiveTab("Shop")}}>
                <Image
                    source={require('../../assets/shop.png')}
                    source={activeTab === "Shop" ? require('../../assets/shopping-bag-active.png') : require('../../assets/shopping-bag-inactive.png')}
                    style={styles.icon}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab("Reels")}>
                <Image
                    source={require('../../assets/reels.png')}
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 25,
        height: 25,
        marginLeft: 5,
        resizeMode: 'contain'
    },
})

export default BottomTabs
