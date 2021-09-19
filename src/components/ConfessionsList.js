import Confession from "./Confession";

const ConfessionsList = (props) => {
    return (
        <div>
            {props.confessions.map((confession) => (
                <Confession 
                name={confession.name} 
                content={confession.content}
                ></Confession>
            ))}
        </div>
    )
}

export default ConfessionsList;