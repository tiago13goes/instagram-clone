import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import { USERS } from '../../data/users'



const Stories = () => {
    return (
        <View style={{
            marginBottom: 13
        }}>
            <ScrollView
                horizontal
                showsVerticalScrollIndicator={false}
            >
                {USERS.map((story, index) => (
                    <View key={index} style={{ alignItems: "center" }}>
                        <Image source={{ uri: story.image }}
                            style={styles.story} />
                        <Text style={{ color: "white", fontSize: 10 }}>
                            {story.user.length > 11 ? story.user.slice(0, 10).toLowerCase() + "..." : story.user}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 13
    },
    story: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 3,
        borderColor: "#ff8501"
    }

})

export default Stories
