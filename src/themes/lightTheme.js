export default {
    name: 'light',
    satisfactionColors: [
        'rgb(150, 136, 228)',
        'rgb(180, 173, 220)',
        'rgb(251, 243, 76)',
        'rgb(255, 254, 199)',
        'rgb(216, 216, 216)',
    ],
    salaryColors: [
        '#8b8de8',
        '#b3b5e6',
        '#dedfec',
        '#e4d6d9',
        '#dc9eaa',
        '#e28194',
        '#ea2149',
    ],
    axis: {
        domain: {
            line: {
                strokeWidth: 0,
                stroke: '#889eae',
            },
        },
        ticks: {
            line: {
                stroke: '#889eae',
            },
            text: {
                fill: '#344c4c',
            },
        },
        legend: {
            fill: '#344c4c',
        },
    },
    legends: {
        text: {
            fontSize: 12,
        },
    },
    tooltip: {
        container: {
            fontSize: '13px',
        },
    },
    labels: {
        text: {
            fill: '#344c4c',
        },
    },
}
