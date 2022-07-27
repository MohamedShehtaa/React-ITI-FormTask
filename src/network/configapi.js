
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ApiCard from '../componant/utlites/apiCard'
export default function ApiResponse() {
    const [apiRes, setApi] = useState([])
    useEffect(() => {
        axios.get('http://newsapi.org/v2/everything', {
            params: {
                q: "frontend",
                apiKey: "5bb3f7c3d7c049dea9425d57e5561caa",
                pageSize: 10

            },
        }).then(res => {
            setApi(res.data.articles)

        }).catch(err => {
            console.log(err)
        })
    }, [])
    console.log(apiRes)
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
            {
                apiRes.map((api, index) => {
                    return (
                        <div className="col" key={index}><ApiCard hamada={api} /></div>
                    )
                })
            }
        </div>
    )
}