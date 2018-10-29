import Colors from './Colors';


export default {
    $schema: 'https://vega.github.io/schema/vega/v3.0.json',
    width: 300 ,
    height: 300,
    autosize: 'fit',
    scales: [{
        name: 'color',
        type: 'ordinal',
        range: Colors.RANGE
    }],
    marks: [{
        name: 'mark',
        type: 'arc',
        interactive: true,
        from: {data: 'credits'},
        sort: 'name',
        encode: {
            enter: {
                fill: {scale: 'color', field: 'name'},
                x: {signal: 'width / 2'},
                y: {signal: 'height / 2'},
            },
            update: {
                startAngle: {field: 'startAngle'},
                endAngle: {field: 'endAngle'},
                padAngle: [{'value': 0.01}],
                innerRadius: {signal: 'width / 4'},
                outerRadius: {signal: 'width / 2'},
                cornerRadius: {value: 0},
            },
        },
    }],
}
