import { Grid } from '@material-ui/core';
import GraphStats from './graphStats'
import s from './graphHat.module.css'

function GraphHat() {
    return (
        <div className={s.main}>
        <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="baseline"
        >
            <p>Active Community Members</p>
            <GraphStats text='Monthly' amount={1.2} color='daily'/>
            <GraphStats text='Weekly' amount={830} color='weekly' />
            <GraphStats text='Daily' amount={485} color='monthly' />
        </Grid>
        </div>
    )
}

export default GraphHat;