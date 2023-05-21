import React, { useEffect, useLayoutEffect, useState } from "react"
import axios from "axios"
const FetchData = ({ cat }) => {
    const [Data, setData] = useState("");
    const FetchData = async () => {
        await axios.get(cat ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=798280610edd424caa210e65b25cc7ac`
            : "https://newsapi.org/v2/top-headlines?country=in&apiKey=798280610edd424caa210e65b25cc7ac"
        ).then((res) => setData(res.data.articles));
    };
    useEffect(() => {
        FetchData();
    }, [cat]);
    return (
        <div className="container my-4">
            <h3><u>TOP HEADLINES</u></h3>
            <div className="container d-flex justify-content-center aling-items-center flex-column my-3">
                {Data
                    ? Data.map((items, index) => (
                        <>
                            <div className="container my-3">
                                <h5>{items.title}</h5>
                                <img src={items.urlToImage} alt="Image not found" className="img-fluid"
                                    style={{ width: "auto", height: "300px", objectFit: "cover" }}
                                />
                                <p>{items.content}</p>
                                <a class="blue"> view more</a>
                            </div>
                        </>
                    ))

                    : "LOADING....."}
            </div>
        </div>
    );
};

export default FetchData;