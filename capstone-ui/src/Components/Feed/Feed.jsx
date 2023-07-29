import React, { useState, useEffect, useContext } from "react";
import "./Feed.css"
import { UserContext } from "../../UserContext";

export default function Feed ( { loggedin }) {

    const [articles, setArticles] = useState([
        {
          "title": "Is an Apple Music Subscription Worth It?",
          "author": "Shujaa Imran",
          "published_date": "2022-02-03 16:53:12",
          "published_date_precision": "full",
          "link": "https://www.makeuseof.com/apple-music-subscription-worth-it",
          "clean_url": "makeuseof.com",
          "excerpt": "Thinking of subscribing to Apple Music? Here's how to know if it's worth it for you.",
          "summary": "Since its launch in June 2015, Apple Music has been growing steadily. Because of its easy integration across Apple devices, many Apple users are fond of the streaming service. However, how does Apple Music stack up compared to the other streaming services out there? Does it justify a $9.99 subscription per month? We'll break down all the details for you, so you can decide whether an Apple Music subscription is truly worth it. What Is Apple Music?\nApple Music is the Apple's music streaming service, which allows subscribers to access millions of content for a subscription fee. With over 90 million songs, Apple Music content can either be streamed online or downloaded to your device for offline listening. \n\nConsidering Apple was late to the streaming market, its music streaming service has performed well. While Apple hasn't released any official figures, reports say that Apple Music had over 523 million subscribers by the end of 2021.\nAccording to Midia Research, Apple Music achieved a market share of 15% in 2021. In comparison, Spotify came at first place and captured 31% of the global streaming market in the same year. An Apple Music subscription combines subscription-based music streaming with global radio-like programming. With this, purchasing a subscription doesn't just unlock Apple Music's extensive 90-million song library for you to use. Apple Music also lets you watch music videos without ads, access a few podcasts, listen to its curated playlists, and tune into Apple Music's radio stations.\nApple's main radio offering, Apple Music 1, features an around-the-clock worldwide live broadcast from DJs based in Los Angeles, New York, and London. Other radio stations include Apple Music Hits, which play everyone's favorite songs from the '80s, '90s, and 2000s, and Apple Music Country, which features country music. Which Devices Does Apple Music Work on?\nApple Music is primarily available in the Music app on all iPhones, iPads, and iPod Touch models running iOS 8.4 or later. Aside from this, Apple Music is also available on PC (iTunes app), Mac (Music app), Apple TV, and Apple Watch. Apple Music is also available on non-Apple devices, such as Android phones, smart TVs, streaming boxes, and even game consoles. Alternatively, you can also access Apple Music online at music.apple.com.\nWhen using Apple Music, you can choose to either stream everything directly from the internet or download it onto your device for offline listening. If you're concerned about data usage, or you'll mostly be in an area without a good wireless connection, offline listening is a great feature. However, it could be an issue if you're already running low on storage space on your device.\nSimilar to other streaming services, you don't own the music files downloaded from Apple Music. With this, you won't be able to offload them anywhere else, burn them onto a disk, or use them in separate video projects. So, if you decide to cancel your Apple Music subscription, you'll lose access to your library. The Benefits of Apple Music\nApple Music works across different platforms including Android. However, its primary advantage is that it's integrated into Apple's ecosystem—meaning you can easily listen to your collection on your iPhone, iPad, Mac, and even Apple Watch.\nIn addition, Apple Music also features high-quality audio playback for audiophiles. For those who enjoy quality streaming, Apple Music offers Lossless, Hi-Res Lossless, Dolby Atmos, and Spatial Audio content, which arrived in June 2021.\nApart from your personal music library, Apple Music can help you enhance your collection with a mix of old and new tracks, along with Apple Music's three live radio stations. You can also stream TV shows, podcasts, music videos, and over 30,000 expertly curated playlists. The Drawbacks of Apple Music\nApple Music's main competitor, Spotify, also offers a robust streaming experience. A key drawback of Apple Music is that it doesn't offer a free version, whereas Spotify does, albeit with ads. Comparatively, Spotify also has a more extensive library than Apple Music, and offers better social media integration. Although, Apple Music still has better integration with the Apple ecosystem, and its content library is increasing every day.\nWhile Apple Music also includes podcasts, they're few and far in between. So, if you're looking for a way to listen to podcasts, Apple Podcasts has a much bigger and organized library. How Much Does Apple Music Cost?\nDepending on your needs, Apple Music operates as a subscription-based service and has different plans available. The basic monthly subscription is $10, which is the same as Spotify Premium and Tidal HiFi.\nAlternatively, you can pay an annual fee of $99. Other plans include a student subscription for $5 per month and a family plan that can be shared between six people for $15 per month. Apple also offers the Apple Music Voice Plan, which is available for $5 per month. The catch—you can only use Siri to verbally request songs, and the service is streaming only. With Apple Music Voice Plan, you can't use the app, download songs, use the Lyrics view, or access Apple's full Lossless audio and Dolby Atmos catalog. Does Apple Music Offer a Free Trial?\nUsually, Apple Music offers a 3-month trial for users looking to try out the subscription, after which it reverts to $9.99 per month. However, while there is no way to use Apple Music for free forever, there are a ton of ways to get it free for longer.\nWith free trials, you can choose to try out the service before you commit to a subscription. If you're not sold on Apple Music, you can simply cancel the trial before it expires. Gone are the times of playing music using CDs—digital music streaming is the new thing. While there are multiple streaming services to pick from, there's no doubt that Apple Music is worth considering.\nIf you own an Apple device, and you're actively looking to get a subscription for your music needs, we'd recommend giving Apple Music a try. In true Apple fashion, Apple Music makes things much easier for a variety of reasons. However, once you get tied into the ecosystem, it can become difficult to escape from. \n How to Get Started Using Apple Music Playlists In this article, we explore how to create, populate, share, discover, and become a master of Apple Music playlists. Related Topics Entertainment IPhone Media Streaming Apple Apple Music \n About The Author Shujaa Imran (54 Articles Published) More From Shujaa Imran Join our newsletter for tech tips, reviews, free ebooks, and exclusive deals!",
          "rights": "makeuseof.com",
          "rank": 1729,
          "topic": "news",
          "country": "CA",
          "language": "en",
          "authors": ["Shujaa Imran"],
          "media": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/02/thomas-kolnowski-uY-9Dyz8PPM-unsplash-2-1.jpg",
          "is_opinion": false,
          "twitter_account": "@MUO_official",
          "_score": 11.035287,
          "_id": "1017cfad154df78ba22b6b358d672e1f"
        },
        {
          "title": "The Power of Books: How Reading Can Change Your Life",
          "author": "Jane Doe",
          "published_date": "2023-07-15 10:20:00",
          "published_date_precision": "full",
          "link": "https://www.example.com/power-of-books",
          "clean_url": "example.com",
          "excerpt": "Discover the incredible impact of reading books on personal growth and development.",
          "summary": "Books have been a source of knowledge, wisdom, and entertainment for centuries. They have the power to transport readers to different worlds, unlock new perspectives, and inspire personal growth. Reading books is not just a hobby; it's a life-changing habit that can have a profound impact on individuals.\n\nExpanding Knowledge and Imagination\nBooks are storehouses of information and knowledge. They cover a vast array of topics, from history and science to philosophy and fiction. Reading exposes you to new ideas, cultures, and ways of thinking, broadening your horizons and fostering a deeper understanding of the world.\nMoreover, books have the power to spark the imagination. Through vivid descriptions and storytelling, they can transport readers to fantastical realms and imaginative landscapes, igniting creativity and curiosity.\n\nEnhancing Empathy and Understanding\nFiction, in particular, allows readers to experience life from different perspectives. By immersing yourself in the lives of diverse characters, you develop empathy and understanding for people from various backgrounds and experiences. This enhanced empathy translates to real-life situations, fostering better communication and relationships with others.\n\nStress Reduction and Mental Health Benefits\nReading has been proven to reduce stress and promote relaxation. The act of getting lost in a good book can temporarily transport you away from daily worries and problems, providing a much-needed mental escape. This, in turn, can lower stress levels and improve overall mental well-being.\nAdditionally, reading can be an excellent tool for personal development and self-help. Many books offer insights and strategies for coping with challenges, overcoming obstacles, and achieving personal goals.\n\nCultivating the Reading Habit\nIn a world filled with digital distractions, cultivating the reading habit is more important than ever. Setting aside time to read regularly allows you to unplug from screens and engage in focused, immersive reading. Whether it's a few pages a day or a chapter before bedtime, making reading a part of your daily routine can have a transformative effect on your life.\n\nBuilding a Personal Library\nCreating a personal library filled with books that resonate with you is a rewarding experience. Your library becomes a reflection of your interests, passions, and journey of personal growth. Revisiting books from your collection over the years can also provide valuable insights as you observe how your perspectives evolve.\n\nJoining a Reading Community\nReading can be a solitary activity, but it can also be a social one. Joining a book club or a reading community allows you to discuss books, share recommendations, and engage in meaningful conversations. Such interactions enrich the reading experience and expose you to books you might not have discovered otherwise.\n\nConclusion\nThe power of books lies in their ability to educate, entertain, and transform. Reading is not just a pastime; it's a lifelong journey of learning and self-discovery. So, pick up a book, immerse yourself in its pages, and let the power of reading change your life.",
          "rights": "example.com",
          "rank": 987,
          "topic": "education",
          "country": "US",
          "language": "en",
          "authors": ["Jane Doe"],
          "media": "https://example.com/images/power-of-books.jpg",
          "is_opinion": false,
          "twitter_account": "@example",
          "_score": 9.782,
          "_id": "23f9j49dsk392rjf93jf02k"
        }
      ]);
    /*const [searchQuery, setSearchQuery] = useState([]);

    const user = useContext(UserContext);

    const currentUser = user.user;

    useEffect(() => {
        if (loggedin) {
          const tagsArray = Object.values(currentUser.stances).map(([tag, option]) => tag);
          setSearchQuery(tagsArray.concat(currentUser.following));
        }
      }, [loggedin, user.stances, user.following]);
    
    useEffect(() => {
        const fetchNewsArticles = async () => {
          try {
            const url = `http://localhost:3001/news?query=${JSON.stringify(searchQuery)}&loggedIn=${loggedin}`;
    
            const response = await fetch(url, {
                method: "GET",
                credentials: "include",
            });

            const data = await response.json();
    
            setArticles(data.articles);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchNewsArticles();
      }, [searchQuery, loggedin]);*/

    return (
        <div className="feed-container">
            <h3>Feed</h3>
            <ul>
                {articles ? (articles.map((article, index) => (
                    <div key={index} className="article-container">
                        <div className="article-content">
                            <a href={article.link} target="_blank" className="article-title">{article.title}</a>
                            <p className="article-info">{article.published_date} | By: {article.author}</p>
                            <p className="article-description">{article.excerpt}</p>
                        </div>
                    </div>
                ))) : (
                    <p>No articles right now, check later or refresh the page.</p>
                )}
            </ul>
        </div>
    )
}