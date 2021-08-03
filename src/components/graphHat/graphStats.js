
import { Grid } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { useMemo } from 'react';
import s from './graphStats.module.css'

const colors = {
    'daily': {
      color: "#b62066",
    },
    'weekly': {
      color: "#3a50c9",
    },
    'monthly': {
      color: "#713ac9",
    },
};

function GraphStats({text, amount, color}) {
const lineColor = useMemo(()=>colors[color], [color] )

    return <div className='s.container' >
        <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
        >
        <FiberManualRecordIcon style={lineColor}/>
        <div className={s.text}>{text}</div>
        <div className={s.amount}>{amount<1000 ? `${amount}k` : `${(amount/1000).toFixed(1)}m`}</div>
      </Grid>

    </div>
}

export default GraphStats;