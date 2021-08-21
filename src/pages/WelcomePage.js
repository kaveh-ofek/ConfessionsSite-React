import Header from "../components/Header";
import "../CssFiles/WelcomePageTitles.css";
import { useHistory } from "react-router-dom";
import { FaUserSecret } from "react-icons/fa";

const WelcomePage = () => {

    const history = useHistory();

    const handleStartNow = () => {
        history.push("/new_confession");
    }

    return (
        <div>
            <Header></Header>
            <div style={{
        position: "absolute",
          left: "80%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}>
            <FaUserSecret color="#137992" size="23rem"></FaUserSecret>
            </div>
            <label className ='welcome' style={{
        position: "absolute",
          left: "21%",
          top: "40%",
          transform: "translate(-50%, -50%)",
        }}>
            Welcome.
            </label>

            <label className ='welcome-sub-text' style={{
        position: "absolute",
          left: "21%",
          top: "47%",
          transform: "translate(-50%, -50%)",
        }}>
            Post Your Own
            </label>

            <label className ='anonymous-confessions-sub-text' style={{
        position: "absolute",
          left: "30%",
          top: "47%",
          transform: "translate(-50%, -50%)",
        }}>
            Anonymous Confession
            </label>

            <label className ='welcome-sub-text' style={{
        position: "absolute",
          left: "23.3%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}>
            And Watch Other's From
            </label>

            <label className ='everywhere' style={{
        position: "absolute",
          left: "31%",
          top: "54%",
          transform: "translate(-50%, -50%)",
        }}>
            Everywhere
            </label>


            <button onClick = {handleStartNow} className="button-start"style={{
        position: "absolute",
          left: "56%",
          top: "48%",
          transform: "translate(-50%, -50%)",
        }}>
          <span>Start Now </span> 
        </button>
        </div>
    )
}
export default WelcomePage;