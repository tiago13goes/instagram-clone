import { USERS } from "./users"

export const POSTS = [
    {
        imageurl: 'https://i.ibb.co/182bP1y/4k.png',
        user: USERS[0].user,
        likes: 7870,
        caption: 'Train Ride to Hogwarts',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'theqazman',
                comment: 'Wow! This build looks fire. Super excited about'
            },
        ]
    },
    {

        imageurl: 'https://i.ibb.co/182bP1y/4k.png',
        user: USERS[1].user,
        likes: 7870,
        caption: 'Train Ride to Hogwarts',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'theqazman',
                comment: 'Wow! This build looks fire. Super excited about'
            },
            {
                user: 'amaanath.dev',
                comment: "Once I wake up, I'll finally be ready to code this up!"
            },
        ]
    },
    {

        imageurl: 'https://i.ibb.co/182bP1y/4k.png',
        user: USERS[1].user,
        likes: 7870,
        caption: 'Train Ride to Hogwarts',
        profile_picture: USERS[0].image,
        comments: [
        ]
    }
]