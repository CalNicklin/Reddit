import { useFlair } from "../../context/flairs";

const Flair = (props) => {

    const { chooseFlair } = useFlair();
    const { flair } = props;

    const handleClick = (event) => {
        chooseFlair(event.target.value)
    };

    return (
        <button className='flair' onClick={handleClick} value={flair}>{flair}</button>
    )
}

export default Flair;