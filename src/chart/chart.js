import React from 'react';
import { ResponsiveBarCanvas } from '@nivo/bar'
import './chart.css'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveBar = (props) => {
    // console.log(props.data, 'props data',Object.keys(props.data[0]))
    return (
        <div className='chart'>
            <ResponsiveBarCanvas
                data={props.data}
                keys={Object.keys(props.data[0])}
                indexBy="Row"
                margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
                pixelRatio={1}
                padding={0.45}
                innerPadding={2}
                minValue={-10}
                maxValue='auto'
                groupMode="stacked"
                layout="vertical"
                reverse={false}
                colors={{ scheme: 'set1' }}
                colorBy="id"
                borderWidth={0}
                borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                axisTop={{ tickSize: 15, tickPadding: 6, tickRotation:-37, legend: '', legendOffset: 100 }}
                axisRight={null}
                axisBottom={{
                    tickSize: 15,
                    tickPadding: 7.5,
                    tickRotation: -37,
                    legendPosition: 'middle',
                    legendOffset: 36
                    
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                enableGridX={true}
                enableGridY={false}
                enableLabel={true}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                isInteractive={true}
            />
        </div>
    )
}
export default MyResponsiveBar;