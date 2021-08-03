import { LineChart, Line, CartesianGrid, XAxis, YAxis} from 'recharts';
import GraphHat from '../graphHat/graphHat';
import s from './graph.module.css'

const data = [
  {
    "name": "28-Feb",
    "uv": 500,
    "pv": 750,
    "qv": 1100,
    "amt": 1000
  },
  {
    "name": "7-Mar",
    "uv": 530,
    "pv": 800,
    "qv": 1150,
    "amt": 1000
  },
  {
    "name": "14-Mar",
    "uv": 600,
    "pv": 850,
    "qv": 1250,
    "amt": 1000
  },
  {
    "name": "21-Mar",
    "uv": 500,
    "pv": 700,
    "qv": 1100,
    "amt": 1000
  },
  {
    "name": "28-Mar",
    "uv": 550,
    "pv": 800,
    "qv": 1400,
    "amt": 2181
  }
]


function Graph() {
    return (

    <div className={s.layout}>

    <GraphHat/>

    <LineChart width={730} height={350} data={data}
    margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis tickCount={7} domain={[0, 'dataMax + 100']}  />
        {/* <Tooltip />
        <Legend /> */}
        <Line type="monotone" dataKey="uv" stroke="#b62066"  />
        <Line type="monotone" dataKey="pv" stroke="#3a50c9" />
        <Line type="monotone" dataKey="qv" stroke="#713ac9" />
    </LineChart>
    
    </div>

    )
}

export default Graph;