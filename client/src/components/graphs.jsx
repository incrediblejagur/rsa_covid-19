import React from 'react';
import { Line, Bar } from 'react-chartjs-2';


export class CovidTimelineGraph extends React.Component {

    render() {
        let { data } = this.props
        return (
            <article className="canvas-container">
                <Line data={data.dataset}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                    max: Math.round(((data.cases[data.cases.length - 1] * 2.5) / 1000)) * 1000

                                }
                            }]
                        }
                    }}
                />
            </article>
        )
    }
}

export class ProvinceGraph extends React.Component {


    render() {
        let { data } = this.props;
        return (
            <Bar
                data={data}
                width={100}
                height={50}
                options={{
                    // maintainAspectRatio: false
                }}
            />
        )
    }

}