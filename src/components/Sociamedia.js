import React, {useEffect} from "react";
import { dataStarted, dataSuccess, dataFailure } from "../redux/Actions/socialMediaAction";

import { useSelector, useDispatch} from "react-redux";
import axios from "axios";




const SocialMedia = () =>{

    const {loading, data, error} = useSelector(state => state)
    console.log(loading, data, error)

    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(dataStarted())

        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(responce => dispatch(dataSuccess(responce.data)))
        .catch(err => dispatch(dataFailure(err.message)))

    }, [])


    return (
        <div className="container">
            <h1 id="socialMedia">Social Media For Travellers</h1>
            <input id="searchBar" type="text" placeholder="Search Here ...."/>
            <div className="mainContainer">
            {
                data.length>0 && (data.map(value => (
                    <div className="boxContainer">
                                    {/* <h2>{value.id}</h2> */}
                                    
                                    <img id="imgStyle" src="https://picsum.photos/200?random=${value.id} " />
                                    <div className="contentStyle">
                                    
                                    <h2 className="heading">{value.title}</h2>
                                    <p className="paragraph">{value.body}</p>
                                    </div>

                     </div>
                ))
                )
            }
            </div>
        </div>
    )

}

export default SocialMedia