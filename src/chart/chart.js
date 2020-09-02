import React from 'react';
import { ResponsiveBarCanvas, ResponsiveBar } from '@nivo/bar'
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
            {/* <ResponsiveBar
                data={props.data}
                keys={Object.keys(props.data[0])}
                indexBy="Row"
                margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
                pixelRatio={1}
                padding={0.45}
                innerPadding={2}
                minValue={-10}
                maxValue='auto'
                groupMode="grouped"
                layout="vertical"
                reverse={false}
                colors={{ scheme: 'nivo' }}
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
            /> */}
            <ResponsiveBar
                data={props.data}
                keys={Object.keys(props.data[0])}
                indexBy="Row"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                minValue={-100}
                padding={0}
                innerPadding={0}
                groupMode="grouped"
                colors={{ scheme: 'nivo' }}
                borderWidth={1}

                // defs={[
                //     {
                //         id: 'dots',
                //         type: 'patternDots',
                //         background: 'inherit',
                //         color: '#38bcb2',
                //         size: 4,
                //         padding: 1,
                //         stagger: true
                //     },
                //     {
                //         id: 'lines',
                //         type: 'patternLines',
                //         background: 'inherit',
                //         color: '#eed312',
                //         rotation: -45,
                //         lineWidth: 6,
                //         spacing: 10
                //     }
                // ]}
                // fill={[
                //     {
                //         match: {
                //             id: 'fries'
                //         },
                //         id: 'dots'
                //     },
                //     {
                //         match: {
                //             id: 'sandwich'
                //         },
                //         id: 'lines'
                //     }
                // ]}
                borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Row',
                    legendPosition: 'middle',
                    legendOffset: 32
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,

                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
            />
        </div>
    )
}
export default MyResponsiveBar;