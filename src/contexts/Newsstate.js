import newscontext from "./newscontext";
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Newsstate(props) {
    const navigate = useNavigate();
    const [news, setnews] = useState([]);//this will store the Saved news that we get from the getnews api
    let status = localStorage.getItem("status");//this will store 
    const [profile, setprofile] = useState(status === "true" ? true : false);//used for showing the circle or sign in sign up
    const [cPassword, setcPassword] = useState({ msg: "", status: false, color: "success" });//stores the data received from changePassword api and used to show it in the alterts
    const [signin, setsignin] = useState({ msg: "", status: false, color: "success" });//to store data from signin api and show alerts from it like wrong password etc
    const [login, setlogin] = useState({ msg: "", status: false, color: "success" });
    const [video, setvideo] = useState([]);//to get the message and status from video api and show them in alerts
    const [discussion, setDiscussion] = useState([]);//this is still work in progress


    //GET NEWS
    const getNews = async () => {
        if (status === "true") {
            //used to fetch response from the given api whenever the function is called
            const response = await fetch("https://newsapp-backend-309t.onrender.com/api/news/getnews", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token")//getting news from local storage
                }
            })
            const json = await response.json();//storing the response of api in variable json
            setnews(json)//storing the saved news in news variable 
        }
        else {
            navigate("/signup") //using this we can navigate to an url from a react function
        }
    }

    //ADD NEWS
    const addNews = async (e) => {
        if (status === "true") {
            let data = e;
            const response = await fetch("https://newsapp-backend-309t.onrender.com/api/news/addnews", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token")
                },
                body: JSON.stringify(data)
            })
            const json = await response.json();
            //adds news into the data base 
            getNews();//calling this function makes sure that the getnews function is updated and shows the recently added news
        }
        else {
            navigate("/signup")
        }
    }

    //DELETE NEWS
    const deleteNews = async (id) => {
        let data = { id: id };
        const response = await fetch("https://newsapp-backend-309t.onrender.com/api/news/deletenews", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify(data)
        })
        const json = await response.json();
        getNews();
    }

    //SIGN UP
    const signUp = async (user) => {
        let data = user;
        const response = await fetch("https://newsapp-backend-309t.onrender.com/api/auth/createuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const json = await response.json(); // in response we get the message status and token
        localStorage.setItem("token", json.token); //storing the token in localstorage to prevent session timeout
        localStorage.setItem("status", json.status)// this is to know if user is signed in or not
        setprofile(json.status ? true : false);
        setlogin({ msg: json.msg, color: (json.status ? "success" : "danger"), status: true });
        setTimeout(() => {
            setlogin({ ...login, [status]: false })//using set timeout to show the alert for 2 seconds
        }, 2000);
        (json.status ? navigate("/") : navigate("/signup"))
    }


    //SIGN IN
    const signIn = async (user) => {
        let data = user;
        const response = await fetch("https://newsapp-backend-309t.onrender.com/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const json = await response.json();
        localStorage.setItem("token", json.token);
        localStorage.setItem("status", json.status);
        setprofile(json.status ? true : false);
        setsignin({ msg: json.msg, color: (json.status ? "success" : "danger"), status: true });
        setTimeout(() => {
            setsignin({ ...signin, [status]: false })
        }, 2000);
        (json.status ? navigate("/") : navigate("/signin"))
    }

    //CHANGE PASSWORD
    const change_password = async (password, new_password) => {
        let data = {
            password: password,
            newPassword: new_password
        };
        const response = await fetch("https://newsapp-backend-309t.onrender.com/api/auth/changepassword", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify(data)
        })
        const json = await response.json();
        console.log(json)
        setcPassword({ msg: json.msg, status: true, color: (json.status ? "success" : "danger") });
        setTimeout(() => {
            setcPassword({ ...cPassword, [status]: false })
        }, 2000);
        (json.status ? navigate("/") : navigate("/changepassword"))
    }

    //GET VIDEOS
    const getVideos = async () => {
        if (status === "true") {
            const response = await fetch("https://newsapp-backend-309t.onrender.com/api/videos/getvideos", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token")
                }
            })
            const json = await response.json();
            console.log(json);
            setvideo(json)
        }
        else {
            navigate("/signup")
        }
    }


    //ADD VIDEOS
    const addVideos = async (e) => {
        if (status === "true") {
            let data = e;
            const response = await fetch("https://newsapp-backend-309t.onrender.com/api/videos/addvideo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token")
                },
                body: JSON.stringify(data)
            })
            const json = await response.json();
            getVideos();
        }
        else {
            navigate("/signup")
        }
    }

    //DELETE VIDEO
    const deleteVideos = async (id) => {
        let data = { id: id };
        const response = await fetch("https://newsapp-backend-309t.onrender.com/api/videos/deletevideo", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify(data)
        })
        const json = await response.json();
        getVideos();
    }

    //GET DISCUSSION
    const getDiscussion = async () => {
        if (status === "true") {
            const response = await fetch("https://newsapp-backend-309t.onrender.com/api/discussion/getdiscussion", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token")
                }
            })
            const json = await response.json();
            setDiscussion(json.discussion)
        }
        else {
            navigate("/signup")
        }
    }

    return (
        <newscontext.Provider value={{ news, getNews, addNews, deleteNews, signUp, signIn, profile, setprofile, cPassword, change_password, setcPassword, signin, login, video, getVideos, addVideos,deleteVideos,getDiscussion,discussion}}>
            {props.children}
        </newscontext.Provider>
    )
}

export default Newsstate