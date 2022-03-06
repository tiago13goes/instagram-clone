import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const Post = ({ post }) => {
    return (
        <View style={{ marginBottom: 30, borderColor: "gray", borderTopWidth: 0.5 }}>
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style={{ marginHorizontal: 5, marginTop: 10, width: "98%" }}>
                <PostFooter post={post} />
                <Likes post={post} />
                <Caption post={post} />
                <CommentsSection post={post} />
                <Comments post={post} />
                
            </View>
        </View>
    )
}

const PostHeader = ({ post }) => (
    <View
        style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 5
        }}
    >
        <View style={{ flexDirection: 'row', alignItems: "center" }}>
            <Image source={{ uri: post.profile_picture }} style={styles.story} />
            <Text style={{ color: "white", marginLeft: 5, fontWeight: "700", fontSize: 12 }}>
                {post.user}
            </Text>
        </View>
        <Text style={{ color: "white", fontWeight: "700", alignItems: "center", justifyContent: "center" }}>...</Text>
    </View>
)

const PostImage = ({ post }) => (
    <Image
        source={{ uri: post.imageurl }}
        style={{ width: '100%', height: 250, resizeMode: "cover" }}
    />
)

const PostFooter = ({ post }) => (
    <View style={{
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",

    }}>
        <View style={styles.iconsContainer}>
            <TouchableOpacity>
                <Image
                    source={require('../../assets/unlike.png')}
                    style={styles.icon}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={require('../../assets/comment.png')}
                    style={styles.icon}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={require('../../assets/send.png')}
                    style={[styles.icon]}
                />
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity>
                <Image
                    source={require('../../assets/save.png')}
                    style={[styles.icon]}
                />
            </TouchableOpacity>
        </View>
    </View>
)

const Likes = ({ post }) => (
    <View style={{ flexDirection: "row" }}>
        <Text style={{ color: "white" }}>{post.likes.toLocaleString('en')} likes</Text>

    </View>
)

const Caption = ({ post }) => (
    <View style={{ flexDirection: "row", marginTop: 5 }}>
        <Text style={{ color: "white", fontWeight: "700" }}>{post.user}</Text>
        <Text style={{ color: "white" }}> {post.caption}</Text>

    </View>
)

const CommentsSection = ({ post }) => (
    <View style={{ marginTop: 5 }}>
        {
            !!post.comments.length && (
                <Text style={{ color: "gray", }}>
                    View {post.comments.length > 1 ? 'all ' : ''}
                    {post.comments.length} {post.comments.length > 1 ? 'comments' : 'comment'}
                </Text>
            )}

    </View>
)

const Comments = ({ post }) => (
    <View>
        {post.comments.map((comment, index) => (
            <View key={index} style={{flexDirection: "row"}}>
                <Text style={{ color: "white", fontWeight: "700" }}>{comment.user}</Text>
                <Text style={{ color: "white"}}> {comment.comment}</Text>
            </View>
        ))}

    </View>
)


const styles = StyleSheet.create({
    story: {
        width: 25,
        height: 25,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1,
        borderColor: "#ff8501"
    },
    iconsContainer: {
        flexDirection: "row"
    },

    shareIcon: {
        transform: [{ rotate: "320deg" }],
        marginTop: 3
    },

    icon: {
        width: 25,
        height: 25,
        marginLeft: 5,
        resizeMode: 'contain'
    },
})


export default Post
