import React, { useState, useEffect, useContext } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import newscontext from '../contexts/newscontext';
import Loading from './Loading';
import Alert from './Alert';

function Newsitem({ category }) {
    const a = useContext(newscontext);
    const [state, setstate] = useState({
        article: [
            {
                "source": {
                    "name": "Livemint"
                },
                "title": "Garena Free Fire Max redeem codes for January 11, 2024: Claim free in-game goodies | Mint - Mint",
                "description": "Garena Free Fire Max redeem codes are released daily by the game's developers in a bid to create some excitement among the loyal fans of this battle royale game.",
                "url": "https://www.livemint.com/technology/garena-free-fire-max-redeem-codes-for-january-11-2024-claim-free-in-game-goodies-11704947054674.html",
                "urlToImage": "https://www.livemint.com/lm-img/img/2024/01/11/1600x900/garena_free_fire_max_1689483071000_1704947338760.jpg",
                "publishedAt": "2024-01-11T04:32:50.000Z",
                "_id": "65a0e97a4c26058197e5986b"
            },
            {
                "source": {
                    "name": "NDTV News"
                },
                "title": "\"Our Adversaries Have Active Role In Aiding Terror In J&K\": Army Chief - NDTV",
                "description": "India's adversaries are playing an \"active role\" in aiding terrorists and terror-related activities in Jammu and Kashmir's Rajouri and Poonch, Army Chief General Manoj Pande said Thursday, in comments seen as referring to Pakistan's continuing suppor",
                "url": "https://www.ndtv.com/india-news/army-chief-general-manoj-panda-presser-our-adversaries-have-active-role-in-aiding-terror-in-j-k-army-chief-4841216",
                "urlToImage": "https://c.ndtvimg.com/2024-01/p96bl5rs_army-chief-general-manoj-pande_625x300_11_January_24.jpeg?im=FaceCrop,algorithm=dnn,width=1200,height=738?ver-20231203.06",
                "publishedAt": "2024-01-11T07:43:21.000Z",
                "_id": "65a0f43a07754ab18352e85c"
            },
            {
                "source": {
                    "name": "Moneycontrol"
                },
                "title": "EaseMyTrip zooms 14% amid Maldives row, discount offers on India travel - Moneycontrol",
                "description": "EaseMyTrip has rallied 23 percent in the past five sessions, outperforming the benchmark Nifty 50, which has fallen marginally during the period",
                "url": "https://www.moneycontrol.com/news/business/markets/easemytrip-zooms-14-amid-maldives-row-discount-offers-12033751.html",
                "urlToImage": "https://images.moneycontrol.com/static-mcnews/2021/12/EaseMyTrip-770x433.jpg",
                "publishedAt": "2024-01-11T07:36:14.000Z",
                "_id": "65a0f43b07754ab18352e865"
            },
            {
                "source": {
                    "name": "The Indian Express"
                },
                "title": "UAE to build airlock for NASA’s Gateway station orbiting the Moon - The Indian Express",
                "description": "The UAE is deepening its collaboration with the United States in the space sector and will provide an airlock and other services for the future Gateway space station orbiting the Moon.",
                "url": "https://indianexpress.com/article/technology/science/uae-nasa-gateway-space-station-airlock-9104734/",
                "urlToImage": "https://images.indianexpress.com/2024/01/Gateway-space-station-20240111.jpg",
                "publishedAt": "2024-01-11T07:29:17.000Z",
                "_id": "65a0f43e07754ab18352e870"
            },
            {
                "source": {
                    "name": "Hindustan Times"
                },
                "title": "On Cong declining Ram Mandir event invite, BJP invokes Nehru - Hindustan Times",
                "description": "Dubbing the Ram temple consecration ceremony as a ‘BJP/RSS event’, the Congress said Mallikarjun Kharge, Sonia Gandhi and Adhir Ranjan Chowdhury won't attend | Latest News India",
                "url": "https://www.hindustantimes.com/india-news/on-cong-declining-ram-mandir-event-invite-bjp-invokes-nehru-101704954163660.html",
                "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/01/11/1600x900/Sudhanshu_Trivedi_1704956346477_1704956346649.png",
                "publishedAt": "2024-01-11T07:04:14.000Z",
                "_id": "65a0f43e07754ab18352e87d"
            },
            {
                "source": {
                    "name": "Hindustan Times"
                },
                "title": "Ira Khan, Nupur Shikhare kiss in official wedding pics from Christian ceremony - Hindustan Times",
                "description": "Aamir Khan and Reena Dutta walked daughter Ira Khan down the aisle as she married Nupur Shikhare in a beautiful Christian wedding. See their wedding album. | Bollywood",
                "url": "https://www.hindustantimes.com/entertainment/bollywood/ira-khan-nupur-shikhare-wedding-kiss-first-pics-aamir-khan-reena-dutta-101704955256923.html",
                "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/01/11/1600x900/Ira_Khan_Nupur_Shikhare_wedding_kiss_1704955608034_1704955639326.jpg",
                "publishedAt": "2024-01-11T07:02:00.000Z",
                "_id": "65a0f44107754ab18352e898"
            },
            {
                "source": {
                    "name": "Livemint"
                },
                "title": "Sensex Today | Share Market Live Updates: Sensex up 125 points; Nifty around 21,650; auto stocks surge | Mint - Mint",
                "description": "Sensex Today | Share Market Live Updates: Sensex and Nifty opened higher on Thursday as Asian markets rallied to new highs tracking Wall Street. IT stocks are in focus ahead of earnings announcement by TCS and Infosys later today",
                "url": "https://www.livemint.com/market/stock-market-news/sensex-today-share-market-live-updates-nifty-50-suzlon-bajaj-auto-trident-polycab-tcs-infosys-q3-results-11-jan-2024-11704938056234.html",
                "urlToImage": "https://www.livemint.com/lm-img/img/2024/01/11/1600x900/2-0-92302946-India-Markets1-4C-0_1681818756364_1704938190912.jpg",
                "publishedAt": "2024-01-11T06:41:44.000Z",
                "_id": "65a0f44507754ab18352e8a9"
            },
            {
                "source": {
                    "name": "Hindustan Times"
                },
                "title": "‘Who’s Virat Kohli? A player?': Ronaldo says he doesn't know India legend but… - Hindustan Times",
                "description": "Brazil football legend Ronaldo didn't recognise Virat Kohli at first but things changed when the India cricketer's photo was shown. | Cricket",
                "url": "https://www.hindustantimes.com/cricket/ronaldo-says-he-doesnt-know-not-very-popular-virat-kohli-but-things-change-when-india-stars-photo-is-shown-101704954032590.html",
                "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/01/11/1600x900/PTI01-01-2024-000148A-0_1704954762680_1704954801517.jpg",
                "publishedAt": "2024-01-11T06:37:51.000Z",
                "_id": "65a0f44607754ab18352e8bc"
            },
            {
                "source": {
                    "name": "Samsung.com"
                },
                "title": "Samsung Opens Galaxy Experience Spaces, Inviting Fans Into the New Era of Galaxy AI - Samsung",
                "description": "Experiential spaces in eight cities will allow users to immerse themselves in new Galaxy AI features on upcoming Samsung Galaxy devices",
                "url": "https://news.samsung.com/in/samsung-opens-galaxy-experience-spaces-inviting-fans-into-the-new-era-of-galaxy-ai",
                "urlToImage": "https://img.global.news.samsung.com/in/wp-content/uploads/2024/01/galaxy-AI-feature.jpg",
                "publishedAt": "2024-01-11T06:15:06.000Z",
                "_id": "65a0f44707754ab18352e8d1"
            },
            {
                "source": {
                    "name": "India TV News"
                },
                "title": "Superfood Dates: Know THESE 5 benefits of Khajur - India TV News",
                "description": "Indulge in the nutritional marvel of khajur (dates). Explore 5 health benefits, from energy boost to heart health. Elevate your well-being with this versatile superfood.",
                "url": "https://www.indiatvnews.com/health/superfood-dates-know-these-5-benefits-of-khajur-2024-01-11-911305",
                "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2024/01/dates-3-1704950880.jpg",
                "publishedAt": "2024-01-11T05:37:42.000Z",
                "_id": "65a0f44907754ab18352e8e8"
            },
            {
                "source": {
                    "name": "Livemint"
                },
                "title": "Mint BFSI Summit & Awards 2024 begins: Watch the event LIVE stream here - Mint",
                "description": "The 16th edition of Mint Annual BFSI Summit & Awards 2024 is taking place today, featuring RBI Governor Shaktikanta Das as the keynote speaker.",
                "url": "https://www.livemint.com/news/mint-bfsi-summit-and-awards-2024-begins-check-link-to-watch-online-here-11704950022783.html",
                "urlToImage": "https://www.livemint.com/lm-img/img/2024/01/11/1600x900/Screenshot_2024-01-11_104916_1704950433264_1704950445455.png",
                "publishedAt": "2024-01-11T05:25:40.000Z",
                "_id": "65a0f45007754ab18352e901"
            },
            {
                "source": {
                    "name": "NDTV News"
                },
                "title": "\"Why Didn't Virat Kohli, Rohit Sharma Play After T20 World Cup...\" Ex-BCCI Selector's Big Take On St.. - NDTV Sports",
                "description": "Both Rohit Sharma and Virat Kohli were named in the T20I squad for the three match series against Afghanistan, which is the last T20I contest that Indian cricket team will be playing ahead of the 2024 T20 World Cup",
                "url": "https://sports.ndtv.com/india-vs-afghanistan-t20i-2024/why-didnt-virat-kohli-rohit-sharma-play-after-t20-world-cup-ex-bcci-selectors-big-take-on-stars-t20i-comeback-4838124",
                "urlToImage": "https://c.ndtvimg.com/2019-06/qt6n3dlg_virat-rohit_625x300_16_June_19.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675",
                "publishedAt": "2024-01-11T05:16:22.000Z",
                "_id": "65a0f45107754ab18352e91c"
            },
            {
                "source": {
                    "name": "The Times of India"
                },
                "title": "TCS, Infosys to announce Q3 results today: What to track, how to trade - The Economic Times",
                "description": "TCS and Infosys will release their Q3 earnings today amid expectations of weak numbers. However, bulls believe that this could be the last dull quarter before revenue growth picks up in Q4. Analysts anticipate TCS to deliver 1.5% QoQ cc revenue growth driven …",
                "url": "https://economictimes.indiatimes.com/markets/stocks/news/tcs-infosys-to-announce-q3-results-today-what-to-track-how-to-trade/articleshow/106717228.cms",
                "urlToImage": "https://img.etimg.com/thumb/msid-106717206,width-1200,height-630,imgsize-55364,overlay-etmarkets/photo.jpg",
                "publishedAt": "2024-01-11T04:58:37.000Z",
                "_id": "65a0f45407754ab18352e939"
            },
            {
                "source": {
                    "name": "Hindustan Times"
                },
                "title": "Robust security and traffic measures implemented ahead of Ayodhya's 'Pran Pratishta' ceremony - Hindustan Times",
                "description": "In anticipation of the sacred 'Pran Pratishta' ceremony in Ayodhya, authorities have implemented a comprehensive plan encompassing advanced security and traffic management measures. | Latest News India",
                "url": "https://www.hindustantimes.com/india-news/robust-security-and-traffic-measures-implemented-ahead-of-ayodhya-s-pran-pratishta-ceremony-101704948991177.html",
                "urlToImage": "https://images.hindustantimes.com/default/1600x900.jpg",
                "publishedAt": "2024-01-11T04:56:30.000Z",
                "_id": "65a0f45607754ab18352e958"
            },
            {
                "source": {
                    "name": "Moneycontrol"
                },
                "title": "Polycab India tanks 22% as I-T dept finds 'unaccounted sales' of Rs 1,000 crore - Moneycontrol",
                "description": "The income tax department searched Polycab's premises on January 10. The officials raided 50 premises of the company in Mumbai, Pune, Aurangabad and Nashik in Maharashtra, Daman, Halol in Gujarat and Delhi",
                "url": "https://www.moneycontrol.com/news/business/polycab-india-tanks-20-as-i-t-dept-finds-unaccounted-sales-of-rs-1000-crore-12032401.html",
                "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/02/396136796-770x433.jpg",
                "publishedAt": "2024-01-11T04:26:52.000Z",
                "_id": "65a0f45a07754ab18352e997"
            },
            {
                "source": {
                    "name": "Hindustan Times"
                },
                "title": "NASA says Asteroid 2023 WZ3 will pass Earth today; Know details of this close encounter - HT Tech",
                "description": "An Apollo group asteroid designated as Asteroid 2023 WZ3 is expected to pass Earth today, January 11, NASA has revealed. Know its speed, size, distance of approach, and other details.",
                "url": "https://tech.hindustantimes.com/tech/news/nasa-says-asteroid-2023-wz3-will-pass-earth-today-know-details-of-this-close-encounter-71704944874120.html",
                "urlToImage": "https://images.hindustantimes.com/tech/img/2024/01/11/1600x900/asteroid-6149674_640_1686902438536_1704944946316.jpg",
                "publishedAt": "2024-01-11T04:16:07.000Z",
                "_id": "65a0f45e07754ab18352e9ba"
            },
            {
                "source": {
                    "name": "The Times of India"
                },
                "title": "Ananya Panday, Aditya Roy Kapur exit together post 'Merry Christmas' screening, fans shower love and say - IndiaTimes",
                "description": "Aditya Roy Kapur and Ananya Panday were seen exiting the screening of 'Merry Christmas' together and fans thought he was being quite protective about",
                "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/ananya-panday-aditya-roy-kapur-exit-together-post-merry-christmas-screening-fans-shower-love-and-say-real-aashiqui-watch-video/articleshow/106715656.cms",
                "urlToImage": "https://static.toiimg.com/thumb/msid-106715654,width-1070,height-580,imgsize-53924,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                "publishedAt": "2024-01-11T04:09:05.000Z",
                "_id": "65a0f46007754ab18352e9df"
            },
            {
                "source": {
                    "name": "NDTV News"
                },
                "title": "Koffee With Karan 8: Rishi Kapoor \"Was Never A Friend\" To Kids Ranbir-Riddhima, Recalls Neetu Kapoor - NDTV Movies",
                "description": "\"He had a lot of love in him. But there was something. He never really showed his love,\" said Neetu Kapoor",
                "url": "https://www.ndtv.com/entertainment/koffee-with-karan-8-rishi-kapoor-was-never-a-friend-to-kids-ranbir-riddhima-recalls-neetu-kapoor-4840332",
                "urlToImage": "https://c.ndtvimg.com/2024-01/9hgtvsu_netu_625x300_11_January_24.jpg",
                "publishedAt": "2024-01-11T04:34:33.000Z",
                "_id": "65a0f47507754ab18352ea06"
            },
            {
                "source": {
                    "name": "The Times of India"
                },
                "title": "Salaar box office collection Day 20: Prabhas starrer to FINALLY cross Rs 400 crore mark; film set to beat - IndiaTimes",
                "description": "Salaar: Cease Fire - Part 1 has crossed the Rs 400 crore mark at the box office, earning around Rs 2 crore on its 20th day. Despite facing competition",
                "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/box-office/salaar-box-office-collection-day-20-prabhas-starrer-to-finally-cross-rs-400-crore-mark-film-set-to-beat-rajinikanths-jailer/articleshow/106715467.cms",
                "urlToImage": "https://static.toiimg.com/thumb/msid-106715491,width-1070,height-580,imgsize-38992,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                "publishedAt": "2024-01-11T05:06:40.000Z",
                "_id": "65a0f47607754ab18352ea2f"
            },
            {
                "source": {
                    "name": "The Times of India"
                },
                "title": "Ananya Panday, Aditya Roy Kapur exit together post 'Merry Christmas' screening, fans shower love and say 'real aashiqui' - WATCH video | Hindi Movie News - Times of India - IndiaTimes",
                "description": "Aditya Roy Kapur and Ananya Panday were seen exiting the screening of 'Merry Christmas' together and fans thought he was being quite protective about",
                "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/ananya-panday-aditya-roy-kapur-exit-together-post-merry-christmas-screening-fans-shower-love-and-say-real-aashiqui-watch-video/articleshow/106715656.cms",
                "urlToImage": "https://static.toiimg.com/thumb/msid-106715654,width-1070,height-580,imgsize-53924,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                "publishedAt": "2024-01-11T04:09:05.000Z",
                "_id": "65a0f47a07754ab18352ea5a"
            },
            {
                "source": {
                    "name": "Hindustan Times"
                },
                "title": "Matthew Perry physically assaulted many women including Molly Hurwitz: Report - Hindustan Times",
                "description": "It has also been claimed that Matthew Perry shoved his live-in companion Morgan Moses into a wall and “threw her onto a bed” during a “meltdown” in March 2022 | Hollywood",
                "url": "https://www.hindustantimes.com/entertainment/hollywood/matthew-perry-physically-assaulted-several-women-threw-a-coffee-table-at-fiance-molly-hurwitz-report-101704945230157.html",
                "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/01/11/1600x900/PEOPLE_1699858838511_1704945423181.JPG",
                "publishedAt": "2024-01-11T03:59:55.000Z",
                "_id": "65a0f47b07754ab18352ea87"
            },
            {
                "source": {
                    "name": "DNA India"
                },
                "title": "India's highest grossing 'adults only' film made more money than Gadar 2, Pathaan; it's not Salaar, OMG 2, - DNA India",
                "description": "The highest-grossing A-rated film ever made in India almost got within touching distance of the 1000-crore club.",
                "url": "https://www.dnaindia.com/bollywood/report-india-s-highest-grossing-a-rated-film-animal-box-office-pathaan-baahubali-gadar-2-salaar-omg-2-kashmir-files-3074134",
                "urlToImage": "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2024/01/11/2622547-untitled-design-2024-01-11t074445.972.png",
                "publishedAt": "2024-01-11T03:37:00.000Z",
                "_id": "65a0f48007754ab18352eab6"
            },
            {
                "source": {
                    "name": "The Times of India"
                },
                "title": "Bigg Boss 17: Munawar Faruqui cries inconsolably and apologises to Ayesha Khan for ‘cheating on her’; say - Times of India",
                "description": "In the latest episode, Ayesha exposed Munawar and made some shocking accusations and revelations about him. This made Munawar very upset and he mentio",
                "url": "https://timesofindia.indiatimes.com/tv/news/hindi/bigg-boss-17-munawar-faruqui-cries-inconsolably-and-apologises-to-ayesha-khan-for-cheating-on-her-says-i-did-wrong-with-you-please-forgive-me/articleshow/106708521.cms",
                "urlToImage": "https://static.toiimg.com/thumb/msid-106708519,width-1070,height-580,imgsize-20860,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                "publishedAt": "2024-01-11T02:30:00.000Z",
                "_id": "65a0f48707754ab18352eae7"
            },
            {
                "source": {
                    "name": "Hindustan Times"
                },
                "title": "AR Rahman recalls overcoming suicidal thoughts at young age: 'Dark times’ - Hindustan Times",
                "description": "AR Rahman recently spoke with students of the Oxford Union debating society and opened up about his mental health struggles. | Bollywood",
                "url": "https://www.hindustantimes.com/entertainment/bollywood/ar-rahman-suicidal-thoughts-young-age-101704938573886.html",
                "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/01/11/1600x900/AR-Rahman--AFP-_1696411008411_1704940305285.jpg",
                "publishedAt": "2024-01-11T02:41:47.000Z",
                "_id": "65a0f48907754ab18352eb1a"
            },
            {
                "source": {
                    "name": "Koimoi"
                },
                "title": "Dunki Box Office Collection Day 21 (Early Trends): Shah Rukh Khan Starrer Stays On The Lower Side! - Koimoi",
                "description": "Shah Rukh Khan starrer Dunki brings a huge sigh of relief as the film remained steady on day 21. Read early estimates now!",
                "url": "https://www.koimoi.com/box-office/dunki-box-office-collection-day-21-early-trends-shah-rukh-khan-starrer-stays-on-the-lower-side/",
                "urlToImage": "https://static-koimoi.akamaized.net/wp-content/new-galleries/2024/01/dunki-box-office-collection-day-21-early-trends-updates-001.jpg",
                "publishedAt": "2024-01-11T03:21:13.000Z",
                "_id": "65a0f48b07754ab18352eb4f"
            },
            {
                "source": {
                    "name": "VOGUE India"
                },
                "title": "Aquarius Horoscope Today: January 11, 2024 - VOGUE India",
                "description": "Read VOGUE India's free daily Aquarius horoscope for 11th January, 2024 to learn more about what the stars have in store for you! Click here for our cosmic tips",
                "url": "https://www.vogue.in/horoscope/product/aquarius-horoscope-today-january-11-2024/",
                "urlToImage": "https://media.vogue.in/wp-content/uploads/2021/12/Aquarius-866x487.jpg",
                "publishedAt": "2024-01-11T00:20:22.000Z",
                "_id": "65a0f49307754ab18352eb86"
            },
            {
                "source": {
                    "name": "VOGUE India"
                },
                "title": "Pisces Horoscope Today: January 11, 2024 - VOGUE India",
                "description": "Read VOGUE India's free daily Pisces horoscope for 11th January, 2024 to learn more about what the stars have in store for you! Click here for our cosmic tips",
                "url": "https://www.vogue.in/horoscope/product/pisces-horoscope-today-january-11-2024/",
                "urlToImage": "https://media.vogue.in/wp-content/uploads/2022/06/Pisces-866x487.jpg",
                "publishedAt": "2024-01-11T00:20:24.000Z",
                "_id": "65a0f49407754ab18352eba5"
            },
            {
                "source": {
                    "name": "Hindustan Times"
                },
                "title": "Shah Rukh thanks fans for successful 2023: You came to support me and my family - Hindustan Times",
                "description": "Shah Rukh Khan received the Indian of the Year award and delivered a heartfelt speech to thank his supporters. | Bollywood",
                "url": "https://www.hindustantimes.com/entertainment/bollywood/shah-rukh-khan-thanks-fans-for-a-successful-2023-101704934576372.html",
                "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/01/11/1600x900/shah_rukh_1704936018808_1704936019046.png",
                "publishedAt": "2024-01-11T01:22:24.000Z",
                "_id": "65a0f49607754ab18352ebfa"
            },
            {
                "source": {
                    "name": "VOGUE India"
                },
                "title": "Gemini Horoscope Today: January 11, 2024 - VOGUE India",
                "description": "Read VOGUE India's free daily Gemini horoscope for 11th January, 2024 to learn more about what the stars have in store for you! Click here for our cosmic tips",
                "url": "https://www.vogue.in/horoscope/product/gemini-horoscope-today-january-11-2024/",
                "urlToImage": "https://media.vogue.in/wp-content/uploads/2019/12/Gemini-.jpg",
                "publishedAt": "2024-01-11T00:20:10.000Z",
                "_id": "65a0f49a07754ab18352ec37"
            },
            {
                "source": {
                    "name": "VOGUE India"
                },
                "title": "Libra Horoscope Today: January 11, 2024 - VOGUE India",
                "description": "Read VOGUE India's free daily Libra horoscope for 11th January, 2024 to learn more about what the stars have in store for you! Click here for our cosmic tips",
                "url": "https://www.vogue.in/horoscope/product/libra-horoscope-today-january-11-2024/",
                "urlToImage": "https://media.vogue.in/wp-content/uploads/2019/12/Libra.jpg",
                "publishedAt": "2024-01-11T00:20:16.000Z",
                "_id": "65a0f49c07754ab18352ec76"
            },
            {
                "source": {
                    "name": "PINKVILLA"
                },
                "title": "Hrithik Roshan birthday: Deepika Padukone drops PIC with Fighter co-star; wishes him to 'nurture inner child' - PINKVILLA",
                "description": "Deepika Padukone Delights Fans With A Heartwarming Picture Alongside Her Fighter Co-star Hrithik Roshan On His 50th Birthday, Accompanied By A Sweet Birthday Wish. Take A Glimpse!",
                "url": "https://www.pinkvilla.com/entertainment/news/hrithik-roshan-birthday-deepika-padukone-drops-pic-with-fighter-co-star-wishes-him-to-nurture-inner-child-1270699",
                "urlToImage": "https://www.pinkvilla.com/images/2024-01/1527214783_deepika-padukone-hrithik-roshan-1.jpg",
                "publishedAt": "2024-01-10T17:24:22.000Z",
                "_id": "65a0f4ab07754ab18352ecb7"
            },
            {
                "source": {
                    "name": "The Indian Express"
                },
                "title": "Suriya wraps up Kanguva shoot, shares new still from sets. See here - The Indian Express",
                "description": "Suriya looks fierce as a tribal man in the new Kanguva still. The film is directed by Siruthai Siva.",
                "url": "https://indianexpress.com/article/entertainment/tamil/suriya-wraps-up-kanguva-shoot-shares-new-still-from-sets-see-here-9103882/",
                "urlToImage": "https://images.indianexpress.com/2024/01/Suriya-in-Kanguva.jpg",
                "publishedAt": "2024-01-10T17:07:07.000Z",
                "_id": "65a0f4ad07754ab18352ecfa"
            },
            {
                "source": {
                    "name": "Hindustan Times"
                },
                "title": "SAG Awards full list of nominations: Barbie and Oppenheimer lead in films - Hindustan Times",
                "description": "Check out the complete list of nominations for 30th Screen Actors Guild awards in both motion picture and television categories.  | Hollywood",
                "url": "https://www.hindustantimes.com/entertainment/hollywood/sag-awards-full-list-of-nominations-barbie-and-oppenheimer-lead-101704901381488.html",
                "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/01/10/1600x900/Barbie_1690198768738_1704903006602.jpg",
                "publishedAt": "2024-01-10T16:20:26.000Z",
                "_id": "65a0f4af07754ab18352ed3f"
            },
            {
                "source": {
                    "name": "The Times of India"
                },
                "title": "Bigg Boss 17: Abhishek Kumar’s father hits out at Isha Malviya and Samarth Jurel; says no one deserves to - Times of India",
                "description": "Abhishek Chaudhary’s father, Arjun Kumar Chaudhary, says he feels bad to see his son being treated poorly by Isha Malviya and Samarth Jurel.",
                "url": "https://timesofindia.indiatimes.com/tv/news/hindi/bigg-boss-17-abhishek-kumars-father-hits-out-at-isha-malviya-and-samarth-jurel-says-no-one-deserves-to-be-treated-like-my-son/articleshow/106706547.cms",
                "urlToImage": "https://static.toiimg.com/thumb/msid-106706599,width-1070,height-580,imgsize-83050,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                "publishedAt": "2024-01-10T16:41:15.000Z",
                "_id": "65a0f4b107754ab18352ed87"
            },
            {
                "source": {
                    "name": "Hindustan Times"
                },
                "title": "Prabhas unveils Salaar co-star Prithviraj’s first-look from The Goat Life - Hindustan Times",
                "description": "Directed by National Award-winner Blessy, the Malayalam survival drama has been touted as ‘the greatest survival adventure ever.’",
                "url": "https://www.hindustantimes.com/entertainment/others/prabhas-unveils-salaar-co-star-prithviraj-sukumaran-s-first-look-from-the-goat-life-101704895312503.html",
                "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/01/10/1600x900/Prabhas_Prithviraj_Sukumaran_1704895326653_1704895342678.jpg",
                "publishedAt": "2024-01-10T14:55:15.000Z",
                "_id": "65a0f4b207754ab18352edab"
            },
            {
                "source": {
                    "name": "The Times of India"
                },
                "title": "'12th Fail' actor Medha Shankr's Instagram followers increase by 238 percent post film's release | Hindi Movie News - Times of India - IndiaTimes",
                "description": "Vidhu Vinod Chopra's film '12th Fail' is receiving rave reviews for the exceptional performances of lead stars Vikrant Massey and Medha Shankar. Medha",
                "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/12th-fail-actor-medha-shankrs-instagram-followers-increase-by-238-percent-post-films-release/articleshow/106705282.cms",
                "urlToImage": "https://static.toiimg.com/thumb/msid-106705282,width-1070,height-580,imgsize-14804,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                "publishedAt": "2024-01-10T14:53:50.000Z",
                "_id": "65a0f4b407754ab18352ee1a"
            },
            {
                "source": {
                    "name": "The Times of India"
                },
                "title": "Shah Rukh Khan's 'Dunki' to be sent for the Oscars this year: Reports - Times of India",
                "description": "If reports are to be believed, Shah Rukh Khan's 'Dunki', also starring Taapsee Pannu and Vicky Kaushal, will be sent for the Oscars' nominations this year. Yes. However, it is still unclear if it will be sent as India's official entry or in some other categor…",
                "url": "https://timesofindia.indiatimes.com/videos/etimes/bollywood/shah-rukh-khans-dunki-to-be-sent-for-the-oscars-this-year-reports/videoshow/106705247.cms",
                "urlToImage": "https://timesofindia.indiatimes.com/photo/msid-106705247,imgsize-1060532.cms",
                "publishedAt": "2024-01-10T14:48:30.000Z",
                "_id": "65a0f4b507754ab18352ee67"
            },
            {
                "source": {
                    "name": "Hindustan Times"
                },
                "title": "5 shocking new statements Ankita Lokhande's mother-in-law made against her - Hindustan Times",
                "description": "Bigg Boss 17: Ankita Lokhande's mother-in-law spoke out against the actor in a series of interviews she gave soon after visiting the Bigg Boss house.",
                "url": "https://www.hindustantimes.com/entertainment/tv/ankita-lokhande-mother-in-law-5-shocking-statements-bigg-boss-house-101704886939207.html",
                "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/01/10/1600x900/ankita_1704887509729_1704887518190.jpg",
                "publishedAt": "2024-01-10T14:03:40.000Z",
                "_id": "65a0f4ba07754ab18352eeb6"
            },
            {
                "source": {
                    "name": "Business Standard"
                },
                "title": "POCO X6 series launch today at 5:30 pm: Livestream, expected specs and more - Business Standard",
                "description": null,
                "url": "https://www.business-standard.com/technology/tech-news/poco-x6-series-launch-today-at-5-30-pm-livestream-expected-specs-and-more-124011100293_1.html",
                "urlToImage": null,
                "publishedAt": "2024-01-11T07:36:03.000Z",
                "_id": "65a0f4c507754ab18352ef07"
            },
            {
                "source": {
                    "name": "The Hindu"
                },
                "title": "Alpha, beta, theta: what are brain states and brain waves? And can we control them? - The Hindu",
                "description": null,
                "url": "https://www.thehindu.com/sci-tech/science/alpha-beta-theta-what-are-brain-states-and-brain-waves-and-can-we-control-them/article67709792.ece",
                "urlToImage": null,
                "publishedAt": "2024-01-11T06:22:00.000Z",
                "_id": "65a0f4c807754ab18352ef5a"
            },
            {
                "source": {
                    "name": "The Indian Express"
                },
                "title": "Google fires Fitbit co-founders, lays off hundreds of employees from AR division - The Indian Express",
                "description": null,
                "url": "https://indianexpress.com/article/technology/tech-news-technology/google-fires-fitbit-co-founders-lays-off-hundreds-of-employees-from-ar-division-9104500/",
                "urlToImage": null,
                "publishedAt": "2024-01-11T05:10:22.000Z",
                "_id": "65a0f4cb07754ab18352f001"
            },
            {
                "source": {
                    "name": "The Times of India"
                },
                "title": "Apple iPhone 14 available at Rs 36,499 on Amazon with exchange offer: All details - Times of India",
                "description": "If you have been waiting to purchase the Apple iPhone 14, then Amazon India has a pretty good offer for you.",
                "url": "https://timesofindia.indiatimes.com/gadgets-news/apple-iphone-14-available-at-rs-36499-on-amazon-with-exchange-offer-all-details/articleshow/106715534.cms",
                "urlToImage": "https://static.toiimg.com/thumb/msid-106715498,width-1070,height-580,imgsize-987647,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                "publishedAt": "2024-01-11T03:58:55.000Z",
                "_id": "65a0f4d007754ab18352f0ac"
            },
            {
                "source": {
                    "name": "YouTube"
                },
                "title": "Best Laptops of CES 2024 - CNET",
                "description": "These are the models to look forward to in 2024 and beyond. This year's themes include 14-inch laptops with AMD's Ryzen 9 8945HS and Intel's 14th Gen HX seri...",
                "url": "https://www.youtube.com/watch?v=OHPpCpOGbt8",
                "urlToImage": "https://i.ytimg.com/vi/OHPpCpOGbt8/maxresdefault.jpg",
                "publishedAt": "2024-01-11T03:37:47.000Z",
                "_id": "65a0f4d107754ab18352f105"
            },
            {
                "source": {
                    "name": "NDTV News"
                },
                "title": "US-Indian Satellite To Monitor Earth's Changing Frozen Regions - NDTV",
                "description": "US-Indian satellite will measure some key Earth vital signs, including the health of wetlands, ground deformation by volcanoes, and the dynamics of land and sea ice.",
                "url": "https://www.ndtv.com/india-news/us-indian-satellite-to-monitor-earths-changing-frozen-regions-4840409",
                "urlToImage": "https://c.ndtvimg.com/2022-10/naoo5i6_earth-generic_625x300_08_October_22.jpg",
                "publishedAt": "2024-01-11T08:19:25.000Z",
                "_id": "65a0f4d807754ab18352f160"
            },
            {
                "source": {
                    "name": "Hindustan Times"
                },
                "title": "5 posts about Mars by NASA, ESA that left people stunned - Hindustan Times",
                "description": "From NASA’s Curiosity Rover capturing ‘sun rays’ on Mars to ESA spotting unusual hourglass-shaped structure, these pictures are absolutely incredible. | Trending",
                "url": "https://www.hindustantimes.com/trending/5-posts-about-mars-by-nasa-esa-that-left-people-stunned-101704956379825.html",
                "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/01/11/1600x900/X_Insta_Viral_ESA_NASA_Mars_1704957267642_1704957281099.png",
                "publishedAt": "2024-01-11T07:51:39.000Z",
                "_id": "65a0f4d907754ab18352f191"
            },
            {
                "source": {
                    "name": "Financial Express"
                },
                "title": "Transitioning from a dying star: Black hole birth unveiled in spectacular phenomena - The Financial Express",
                "description": null,
                "url": "https://www.financialexpress.com/life/science-transitioning-from-a-dying-star-black-hole-birth-unveiled-in-spectacular-phenomena-bkg-3361701/",
                "urlToImage": null,
                "publishedAt": "2024-01-11T07:13:32.000Z",
                "_id": "65a0f4de07754ab18352f278"
            },
            {
                "source": {
                    "name": "Isro.gov.in"
                },
                "title": "XSPECT payload performance verified with Cas A observation - ISRO",
                "description": "",
                "url": "https://www.isro.gov.in/XSPECT_payload_performance.html",
                "urlToImage": null,
                "publishedAt": "2024-01-11T06:41:59.000Z",
                "_id": "65a0f4df07754ab18352f2ab"
            },
            {
                "source": {
                    "name": "The Hindu"
                },
                "title": "How we discovered that Uranus and Neptune are actually nearly identical in colour - The Hindu",
                "description": null,
                "url": "https://www.thehindu.com/sci-tech/science/how-we-discovered-that-uranus-and-neptune-are-actually-nearly-identical-in-colour/article67723292.ece",
                "urlToImage": null,
                "publishedAt": "2024-01-11T06:20:00.000Z",
                "_id": "65a0f4e007754ab18352f33c"
            },
            {
                "source": {
                    "name": "LatestLY"
                },
                "title": "NASA’s James Web Space Telescope Discovers Dusty ‘Cat’s Tail’ in Space, Researchers Theorize It To - LatestLY",
                "description": "NASA&#039;s James Web Space Telescope finds a new dusty looking &#039;Cat&#039;s Tail&#039; in Space. The researchers theorize it to be a result from a dust production event.",
                "url": "https://www.latestly.com/socially/technology/science/nasas-james-web-space-telescope-discovers-dusty-cats-tail-in-space-researchers-theorize-it-to-be-result-of-dust-production-event-5685327.html",
                "urlToImage": "https://st1.latestly.com/wp-content/uploads/2024/01/60-784x441.jpg",
                "publishedAt": "2024-01-11T04:53:47.000Z",
                "_id": "65a0f4e507754ab18352f3a1"
            },
            {
                "source": {
                    "name": "India Education Diary"
                },
                "title": "Earth's Hidden Marvels: Deep Within, Iron Oxide Proves Resilient Against Extreme Temperatures and Pressures - India Education Diary",
                "description": "The core–mantle boundary (CMB) is the interface between the earth's iron metal core and the thick rocky layer of mantle just above the core. It is a world of extremes—temperatures thousands of degrees Fahrenheit and pressures over a million times the",
                "url": "https://indiaeducationdiary.in/earths-hidden-marvels-deep-within-iron-oxide-proves-resilient-against-extreme-temperatures-and-pressures/",
                "urlToImage": "https://indiaeducationdiary.in/wp-content/uploads/2024/01/JJackson-VDobrosavljevic-ULV.2e16d0ba.fill-1600x810-c100-1024x518.png",
                "publishedAt": "2024-01-11T03:53:16.000Z",
                "_id": "65a0f4e707754ab18352f46c"
            }
        ],
        page: 1,
        loading: false,
    })

    const fetchData = async () => {
        setstate({ loading: true, article: state.article });
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_URL}&pageSize=9&page=${state.page}&category=${category}`;
        const data = await fetch(url);
        const parsedData = await data.json();
        // setstate({ article: state.article.concat(parsedData.articles), page: state.page + 1, loading: false });
    }
    const [alert, setalert] = useState(false)
    const onclick = (e, event) => {
        event.preventDefault()
        a.addNews(e);
        setalert(true);
        setTimeout(() => {
            setalert(false)
        }, 1000);
    }
    useEffect(() => {
        fetchData();
    }, [category])

    return (
        <>

            {alert ? <Alert msg={"Successfully Added!"} color={"success"} /> : ""}
            <InfiniteScroll
                dataLength={state.article.length}
                next={fetchData}
                hasMore={state.article.length !== state.totalarticles}
                loader={<Loading state={state.loading} />}
            >
                <div className='container'>
                    <div className="row my-4">
                        {state.article.map(e => {
                            if (e.title === "" && e.description === "" && e.urlToImage === "") {
                                return (<></>)
                            }
                            else {
                                return (
                                    <>
                                        <div className="col-md-4" >
                                            <span className="badge text-bg-success">
                                                {e.source.name}
                                            </span>
                                            <div className="card mb-3">
                                                <img src={e.urlToImage
                                                    ? e.urlToImage
                                                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeDLUgPm6eqlc3xZzykaaMRKvUUlMVaaiUlA&usqp=CAU"} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">{(e.title ? e.title.substr(0, 100) + "..." : "Latest News")}</h5>
                                                    <p className="card-text">{(e.description ? e.description.substr(0, 100) + "..." : "Click on Read more to get to know more about this news and keep yourself updated with the current events")}</p>
                                                    <p className="card-text">
                                                        <small className="text-body-secondary">{e.publishedAt}</small>
                                                    </p>
                                                    <a href={e.url} type="button" className="btn btn-dark btn-sm mx-1">
                                                        visit website
                                                    </a>
                                                    <a className='mx-2' href="#"><i className="fa-solid fa-bookmark" onClick={(event) => { onclick(e, event) }}></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            }

                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>

    )
}

export default Newsitem