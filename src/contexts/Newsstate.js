import newscontext from "./newscontext";
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Newsstate(props) {
    const navigate = useNavigate();
    const [news, setnews] = useState([]);
    let status = localStorage.getItem("status");
    const [profile, setprofile] = useState(status === "true" ? true : false);
    const [cPassword, setcPassword] = useState({ msg: "", status: false, color: "success" });
    const [signin, setsignin] = useState({ msg: "", status: false, color: "success" });
    const [login, setlogin] = useState({ msg: "", status: false, color: "success" });
    const [video, setvideo] = useState([])


    //GET NEWS
    const getNews = async () => {
        if (status === "true") {
            const response = await fetch("http://localhost:5000/api/news/getnews", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token")
                }
            })
            const json = await response.json();
            setnews(json)
        }
        else {
            navigate("/signup")
        }
    }

    //ADD NEWS
    const addNews = async (e) => {
        if (status === "true") {
            let data = e;
            const response = await fetch("http://localhost:5000/api/news/addnews", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token")
                },
                body: JSON.stringify(data)
            })
            const json = await response.json();
            getNews();
        }
        else {
            navigate("/signup")
        }
    }

    //DELETE NEWS
    const deleteNews = async (id) => {
        let data = { id: id };
        const response = await fetch("http://localhost:5000/api/news/deletenews", {
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
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const json = await response.json();
        localStorage.setItem("token", json.token);
        localStorage.setItem("status", json.status)
        setprofile(json.status ? true : false);
        setlogin({ msg: json.msg, color: (json.status ? "success" : "danger"), status: true });
        setTimeout(() => {
            setlogin({ ...login, [status]: false })
        }, 2000);
        (json.status ? navigate("/") : navigate("/signup"))
    }


    //SIGN IN
    const signIn = async (user) => {
        let data = user;
        const response = await fetch("http://localhost:5000/api/auth/login", {
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
        const response = await fetch("http://localhost:5000/api/auth/changepassword", {
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
            const response = await fetch("http://localhost:5000/api/videos/getvideos", {
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
            const response = await fetch("http://localhost:5000/api/videos/addvideo", {
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
        const response = await fetch("http://localhost:5000/api/videos/deletevideo", {
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

    return (
        <newscontext.Provider value={{ news, getNews, addNews, deleteNews, signUp, signIn, profile, setprofile, cPassword, change_password, setcPassword, signin, login, video, getVideos, addVideos,deleteVideos}}>
            {props.children}
        </newscontext.Provider>
    )
}

export default Newsstate