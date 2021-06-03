import React from 'react';
import {dataCarts} from "./data";
import {LineChart, Line, Tooltip, ResponsiveContainer} from "recharts";


const ChartFourth = () => {

    return (
        <ResponsiveContainer height={75} width={'100%'}>
            <LineChart data={dataCarts}>
                <Tooltip/>
                <Line dataKey="price" stroke="#038FDE" strokeWidth={'1'} dot={{ stroke: '#FEA931', strokeWidth: 2 }}/>
            </LineChart>
        </ResponsiveContainer>
    );
};

export default ChartFourth;