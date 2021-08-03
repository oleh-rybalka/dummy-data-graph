import { Grid } from '@material-ui/core';
import GraphStats from './graphStats'
import s from './graphHat.module.css'

function GraphHat({ daily, weekly, monthly }) {
    return (
        <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
        >
            <p className={s.title}>Active Community Members</p>
            <GraphStats text='Monthly' amount={monthly} color='monthly'/>
            <GraphStats text='Weekly' amount={weekly} color='weekly' />
            <GraphStats text='Daily' amount={daily} color='daily' />
        </Grid>
    )
}

export default GraphHat;