import React, { useState, useEffect } from 'react'
import Card from '../other/Card'

export default function Home() {

    const [cards, setCards] = useState([])

    useEffect(() => {



        if (JSON.stringify(localStorage.getItem("cards")) !== "null") {

            setCards(JSON.parse(localStorage.getItem("cards")))


        }


    }, [])

  




    const makeNote = () => (
        setCards([...cards, { "id": Math.random() }])


    )





    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col text-center mt-4 mb-4">
                        <h1 className="display-4" >Take Note React </h1>
                        <button className="btn btn-dark " onClick={makeNote}>Take</button>
                    </div>




                </div>

            </div>

            
                <div className="container">
                    
                   

                {
                    cards.map((x) => (
                        <div  key={Math.random()}>
                            <Card  cards={cards} setCards={setCards} id={x.id} />
                            </div>
                    ))
                }




                </div>
                   




              




            </div>






     
    )
}
