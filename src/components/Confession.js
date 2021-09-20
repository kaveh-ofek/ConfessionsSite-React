import "../CssFiles/ConfessionStyling.css";

const Confession = (props) => {
    return (
        <div className='confession_box'>
            <div className='name_style'><label>{props.name}</label></div>
            <div className='content_style'><label>{props.content}</label></div>
            <div className='dateAndTime_style'><label>{props.time}</label></div>
        </div>
    )
}

export default Confession;