import React, { useState, useEffect } from 'react'

import "./card.css"

export default function Card({ id, cards, setCards }) {

    const [text, setText] = useState("")

    useEffect(() => {
        if (localStorage.getItem(id) != null)
            setText(localStorage.getItem(id))




    }, [])






    const changeHandler = (e) => {



        setText(e.target.value)
        localStorage.setItem(id, text)
        localStorage.setItem("cards", (JSON.stringify(cards)))
        console.log(e.target.value, text);
        console.log(text,localStorage.getItem("cards"));





    }
    const remov = () => {


        let globalCards = [...cards]
        globalCards.splice(globalCards.indexOf({ "id": id }), 1)
        localStorage.setItem("cards", JSON.stringify(globalCards))
        setCards(globalCards)
        localStorage.removeItem(id)


    }
    return (
        <div>


            <div className="col-4 card w-25 mx-auto" >
                <div className="row justify-content-end ">
                    <div class="col-2 ">
                        <i onClick={remov} class="fas fa-times"></i>
                    </div>

                </div>





                <div className="row ">
                    <div className="col-10 card-body mb-1 mx-auto ">

                        <textarea className="mx-auto" value={text} onChange={changeHandler} className="card-text " />

                    </div>

                </div>




            </div>


        </div>
    )
}
