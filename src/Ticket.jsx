import { useState } from "react"
import "./Ticket.css";
import { genTicket, sum } from "./helper";

export default function Ticket() {

    let [ticket, setTicket] = useState(genTicket(3));
    let isWinning = sum(ticket) === 15;
    console.log(isWinning)
    console.log(sum(ticket));

    let buyTicket = ()=>{
        setTicket(genTicket(3));
    }
    return (
        <>
            <h1>Lottery Game</h1>
            <div className="ticket" style={isWinning?{border:"1px solid green",backgroundColor:"lightblue"}:{}}>
                <span>{ticket[0]}</span>&nbsp;
                <span>{ticket[1]}</span>&nbsp;
                <span>{ticket[2]}</span>
            </div><br />
            <button onClick={buyTicket}>Buy Ticket</button>
            <h3>{isWinning ? "Congratulations you won!" : "try again"}</h3>
        </>
    )
}