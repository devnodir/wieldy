import ChartFirst from "./Charts/ChartFirst";
import ChartSecond from "./Charts/ChartSecond";
import ChartThird from "./Charts/ChartThird";
import ChartFourth from "./Charts/ChartFourth";
import {SiBitcoin,SiLitecoin,SiRipple,SiEthereum} from 'react-icons/all'

export const box = [
    {
        chart:ChartFirst,
        price:'$9,626',
        percent:'23%',
        increase:true,
        icon:SiBitcoin,
        coinName:'Bitcoin Price'
    },
    {
        chart:ChartSecond,
        price:'$7,831',
        percent:'07%',
        increase:true,
        icon:SiEthereum,
        coinName:'Etherium Price'
    },
    {
        chart:ChartThird,
        price:'$1,239',
        percent:'08%',
        increase:false,
        icon:SiRipple,
        coinName:'Ripple Price'
    },
    {
        chart:ChartFourth,
        price:'$849',
        percent:'47%',
        increase:false,
        icon:SiLitecoin,
        coinName:'Litecoin Price'
    },
]