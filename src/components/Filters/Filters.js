import Flair from "../flair/Flair";

// This component renders a list of 'flairs', passed down as props from the initial fetchPost hook, which are selected by the user to filter the lists of posts. 

const Filters = (props) => {

    const { uniqueFlairs, resetFlair } = props;

    return (
        <div className="flairContainer">
            <div className="filterHeader">
                Filter By Flair
            </div>
            {uniqueFlairs.map((flair, index) => (
                <Flair flair={flair} key={index} />
            ))}
            <button className="clearFlair" onClick={resetFlair}>Clear Flairs</button>
        </div>
    )
};

export default Filters;