export const mapData = (data, year) => ({
    data: [
        {
            id: 'wouldUse',
            label: 'Used it > Would use again',
            value: data[year].wouldUse,
        },
        {
            id: 'wouldNotUse',
            label: 'Used it > Would avoid',
            value: data[year].wouldNotUse,
        },
        {
            id: 'interested',
            label: 'Heard of it > Would like to learn',
            value: data[year].interested,
        },
        {
            id: 'notInterested',
            label: 'Heard of it > Not interested',
            value: data[year].notInterested,
        },
        {
            id: 'neverHeard',
            label: 'Never heard of it/Not sure what it is',
            value: data[year].neverHeard,
        },
    ],
    total:
        data[year].wouldUse +
        data[year].wouldNotUse +
        data[year].interested +
        data[year].notInterested +
        data[year].neverHeard,
})
