import Header from "../components/Header";
import ConfessionsList from "../components/ConfessionsList";
import { useState } from "react";

const ConfessionsPage = () => {

    const [confessions, setConfessions] = useState([]);
    fetch('https://ofek-s-confessions-default-rtdb.firebaseio.com/confessions.json').then(response => {
        return response.json();
    }).then(data => {

        const loadedConfessions = [];
        
        for(const key in data)
        {
            loadedConfessions.push({
                name: data[key].name,
                content: data[key].content,
                time: data[key].time
            })
        }
        const last5Confessions = loadedConfessions.slice(-5);
        setConfessions(last5Confessions.reverse());

    });

    return (
        <div>
            <Header></Header>
            <ConfessionsList confessions={confessions}></ConfessionsList>
        </div>
    )
}
export default ConfessionsPage;