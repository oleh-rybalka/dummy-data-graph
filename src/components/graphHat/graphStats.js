
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import s from './graphStats.module.css'

const colors = {
    'monthly': {
      color: "#b62066",
    },
    'weekly': {
      color: "#3a50c9",
    },
    'daily': {
      color: "#713ac9",
    },
};

function GraphStats({text, amount, color}) {
const lineColor = colors[color]

    return <div className='s.container' >
        
        <FiberManualRecordIcon style={lineColor}/>
        {text}
        <div className={s.amount}>
        {amount}
        </div>


    </div>
}

export default GraphStats;