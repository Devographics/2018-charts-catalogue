export default {
    name: 'dark',
    background: '#222',
    satisfactionColors: [
        'rgb(150, 136, 228)',
        'rgb(180, 173, 220)',
        'rgb(251, 243, 76)',
        'rgb(255, 254, 199)',
        'rgb(216, 216, 216)',
    ],
    axis: {
        domain: {
            line: {
                strokeWidth: 0,
                stroke: '#bbb',
            },
        },
        ticks: {
            line: {
                stroke: '#bbb',
            },
            text: {
                fill: '#bbb',
            },
        },
        legend: {
            text: {
                fill: '#eee',
                fontSize: 12,
                fontWeight: 500,
            },
        },
    },
    grid: {
        stroke: '#444',
        line: {
            stroke: '#444',
        },
    },
    legends: {
        text: {
            fontSize: 12,
            fill: '#eee',
        },
    },
    tooltip: {
        container: {
            fontSize: '13px',
            background: '#000',
            color: '#ddd',
        },
    },
    labels: {
        text: {
            fill: '#ddd',
            fontSize: 12,
            fontWeight: 500,
        },
    },
    dots: {
        text: {
            fill: '#bbb',
            fontSize: 12,
        },
    },
}
