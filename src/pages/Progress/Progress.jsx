import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';




const Progress = () => {
    return (
        <div>
            <h2>Skills</h2>
            <CircularProgressbar progress={10} />
        </div>
    );
};

export default Progress;