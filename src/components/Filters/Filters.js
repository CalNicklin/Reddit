import Flair from "../flair/Flair";

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