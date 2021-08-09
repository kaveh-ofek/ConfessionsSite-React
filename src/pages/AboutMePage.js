import Header from "../components/Header";
import GitLinkedButtons from "../components/GitLinkedButton";
import "../CssFiles/AboutMePageTitles.css"

const AboutMePage = () => {

    return (
        <div>
            <Header></Header>
            <div className='background-box'>
            <div className='first-about-me'>It's Ofek</div>
            <div className='introduction'>I Am a 3rd Year Cs Student With Minor In Biology At The Hebrew University Of Jerusalem</div>
            <div className='introduction'>This Is My 2nd Ever React.js Project So I Hope You Enjoy!</div>
            <div className='introduction'>If You Wanna See More:</div>
            <div className='background-box-buttons' ></div>
            <GitLinkedButtons></GitLinkedButtons>
            </div>
        </div>
    )
}
export default AboutMePage;