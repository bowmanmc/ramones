import Colors from './Colors';


export default {
    $schema: 'https://vega.github.io/schema/vega-lite/v3.json',
    description: 'Bar chart showing the number of chords in each song off of the first Ramones album.',
    width: 768,
    height: 480,
    config: {
        axis: {
            labelColor: Colors.GRAY_40,
            labelFontSize: 12,
        },
        view: {
            stroke: 'transparent',
        },
    },
    autosize: {
        type: 'fit',
        contains: 'padding',
    },
    mark: {
        type: 'bar',
        color: Colors.GRAY_20,
        tooltip: null,
    },
    encoding: {
        x: {
            field: 'numChords',
            type: 'quantitative',
            axis: {
                title: 'Number of Chords',
                grid: true,
                domainColor: Colors.GRAY_40,
                gridColor: Colors.GRAY_TRANSPARENT_09,
                tickStep: 1,
            },
        },
        y: {
            field: 'Title',
            sort: null,
            type: 'nominal',
            axis: {
                title: '',
                grid: false,
                domainColor: Colors.GRAY_40,
                labelLimit: 225,
            },
            scale: {
                paddingInner: 0.33,
            },
        },
    },
    layer: [{
        mark: {
            type: 'bar',
            color: Colors.GRAY_20,
            tooltip: '',
        },
    }, {
        mark: {
            type: 'text',
            align: 'left',
            baseline: 'middle',
            color: Colors.GRAY_95,
            dx: -17,
            tooltip: null,
        },
        encoding: {
            text: { field: 'numChords', type: 'nominal' },
        },
    }],
};
