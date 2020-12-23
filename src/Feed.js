import React, { useState, useEffect } from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import db from './firebase';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy("timestamp", "desc").onSnapshot((snapshot) => 
            setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
        );
    }, []);

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            {posts.map((post) => (
                <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    picture={post.data.image}
                />
            ))}
                <Post 
                    profilePic='https://instagram.fhyd14-1.fna.fbcdn.net/v/t51.2885-19/s320x320/131852829_231675785139229_5942851992151067426_n.jpg?_nc_ht=instagram.fhyd14-1.fna.fbcdn.net&amp;_nc_ohc=LpFw6ZHfaYkAX83KVBl&amp;tp=1&amp;oh=b4227e37114c318fa4f4e9ad71cd6dac&amp;oe=600CCB02'
                    message="Thinking about the Future of this Facebook Clone ?? "
                    username="Sooraj Pancholi"
                    picture="https://instagram.fhyd14-2.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/123593557_215298109941372_2082610969919611671_n.jpg?_nc_ht=instagram.fhyd14-2.fna.fbcdn.net&amp;_nc_cat=100&amp;_nc_ohc=a1TmwMiNeFMAX-OUKBR&amp;tp=1&amp;oh=61ad1cd7a48fa71938b7186c9671d243&amp;oe=600B5476"
                />
                <Post 
                    profilePic='https://instagram.fhyd14-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/119108808_163381145376482_4280605777756806231_n.jpg?_nc_ht=instagram.fhyd14-1.fna.fbcdn.net&amp;_nc_cat=102&amp;_nc_ohc=9kOrYq7m2OIAX9WTox7&amp;tp=1&amp;oh=ae8f95a44c2952a3af1802fa35528832&amp;oe=600B092E'
                    message="Exicted!!! Can't wait to use this Clone"
                    username="Ranveer Singh"
                    picture="https://instagram.fhyd14-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/129448439_707295436869830_6276743000488291234_n.jpg?_nc_ht=instagram.fhyd14-1.fna.fbcdn.net&amp;_nc_cat=1&amp;_nc_ohc=NNCdg_t1ZXoAX_acEl7&amp;tp=1&amp;oh=fd0c7ae3e76880211fe3b93dbf74f96c&amp;oe=600A81A7"
                />
        </div>
    );
}

export default Feed;


