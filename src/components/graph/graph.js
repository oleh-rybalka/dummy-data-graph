import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend} from 'recharts';
import GraphHat from '../graphHat/graphHat';
import s from './graph.module.css'

const data = [
  {
    "name": "28-Feb",
    "daily": 500,
    "weekly": 750,
    "monthly": 1100,
    "amt": 1000
  },
  {
    "name": "7-Mar",
    "daily": 530,
    "weekly": 800,
    "monthly": 1150,
    "amt": 1000
  },
  {
    "name": "14-Mar",
    "daily": 600,
    "weekly": 850,
    "monthly": 1250,
    "amt": 1000
  },
  {
    "name": "21-Mar",
    "daily": 500,
    "weekly": 700,
    "monthly": 1100,
    "amt": 1000
  },
  {
    "name": "28-Mar",
    "daily": 550,
    "weekly": 800,
    "monthly": 1400,
    "amt": 2181
  }
]

function getMaxOfArray(field) {
  return Math.max.apply(null, Object.values(data.map(obj => obj[field])));
}


function Graph() {
  const daily = getMaxOfArray('daily')
  const weekly = getMaxOfArray('weekly')
  const monthly = getMaxOfArray('monthly')

    return (

    <div className={s.layout}>

        <GraphHat daily={daily} weekly={weekly} monthly={monthly}/>

    <LineChart width={730} height={350} data={data}
    margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis tickCount={7} domain={[0, 'dataMax + 100']}  />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="daily" stroke="#b62066" strokeWidth={3} dot={{ strokeWidth: 1}} activeDot={{strokeWidth:2, r:8}} />
        <Line type="monotone" dataKey="weekly" stroke="#3a50c9" strokeWidth={3} dot={{ strokeWidth: 1}} activeDot={{strokeWidth:2, r:8}} />
        <Line type="monotone" dataKey="monthly" stroke="#713ac9" strokeWidth={3} dot={{ strokeWidth: 1}} activeDot={{strokeWidth:2, r:8}} />
    </LineChart>
    
    </div>

    )
}

export default Graph;