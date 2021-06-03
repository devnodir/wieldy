import React from 'react';
import {dataCarts} from "./data";
import {AreaChart, Area, Tooltip,ResponsiveContainer} from "recharts";


const ChartSecond = () => {

    return (
        <ResponsiveContainer height={75} width={'100%'}>
            <AreaChart data={dataCarts}>
                <defs>
                    <linearGradient id="color2" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="5%" stopColor="#4ECDE4" stopOpacity="0.9"> </stop>
                        <stop offset="95%" stopColor="#06BB8A" stopOpacity="0.9"> </stop>
                    </linearGradient>
                </defs>
                <Tooltip />
                <Area dataKey="price" type="monotone" stroke="#4D95F3" strokeWidth={0} fill="url(#color2)" fillOpacity={'1'}/>
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default ChartSecond;