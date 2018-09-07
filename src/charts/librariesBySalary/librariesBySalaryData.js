export const salaryKeys = [
    'I work for free :(',
    '$0-$10k',
    '$10-$30k',
    '$30-50k',
    '$50-$100k',
    '$100k-$200k',
    '$200k+',
]

export const salaryShortKeys = {
    'I work for free :(': 'free',
    '$0-$10k': '0~10k',
    '$10-$30k': '10~30k',
    '$30-50k': '30~50k',
    '$50-$100k': '50~100k',
    '$100k-$200k': '100~200k',
    '$200k+': '>200k',
}

export default [
    {
        id: 'TypeScript',
        total: 7968,
        average: 69,
        bins: [
            {
                id: '$50-$100k',
                count: 2521,
                percentage: 35,
            },
            {
                id: '$100k-$200k',
                count: 1641,
                percentage: 21,
            },
            {
                id: '$30-50k',
                count: 1390,
                percentage: 17,
            },
            {
                id: '$10-$30k',
                count: 1124,
                percentage: 14,
            },
            {
                id: '$0-$10k',
                count: 481,
                percentage: 6,
            },
            {
                id: "I work for free :(",
                count: 428,
                percentage: 5,
            },
            {
                id: '$200k+',
                count: 144,
                percentage: 2,
            }
        ]
    },
    {
        id: 'ClojureScript',
        total: 533,
        average: 86,
        bins: [
            {
                id: '$50-$100k',
                count: 175,
                percentage: 36,
            },
            {
                id: '$100k-$200k',
                count: 162,
                percentage: 30,
            },
            {
                id: '$30-50k',
                count: 81,
                percentage: 15,
            },
            {
                id: '$10-$30k',
                count: 42,
                percentage: 8,
            },
            {
                id: 'I work for free :(',
                count: 26,
                percentage: 5,
            },
            {
                id: '$0-$10k',
                count: 17,
                percentage: 3,
            },
            {
                id: '$200k+',
                count: 17,
                percentage: 3,
            }
        ]
    },
    {
        id: 'Elm',
        total: 1225,
        average: 83,
        bins: [
            {
                id: '$50-$100k',
                count: 456,
                percentage: 39,
            },
            {
                id: '$100k-$200k',
                count: 340,
                percentage: 28,
            },
            {
                id: '$30-50k',
                count: 163,
                percentage: 13,
            },
            {
                id: '$10-$30k',
                count: 107,
                percentage: 9,
            },
            {
                id: 'I work for free :(',
                count: 60,
                percentage: 5,
            },
            {
                id: '$0-$10k',
                count: 38,
                percentage: 3,
            },
            {
                id: '$200k+',
                count: 32,
                percentage: 3,
            },
        ]
    },
    {
        id: '"Plain" JavaScript (ES5)',
        total: 12637,
        average: 67,
        bins: [
            {
                id: '$50-$100k',
                count: 3958,
                percentage: 33,
            },
            {
                id: '$100k-$200k',
                count: 2483,
                percentage: 20,
            },
            {
                id: '$30-50k',
                count: 2097,
                percentage: 17,
            },
            {
                id: '$10-$30k',
                count: 1728,
                percentage: 14,
            },
            {
                id: 'I work for free :(',
                count: 942,
                percentage: 7,
            },
            {
                id: '$0-$10k',
                count: 827,
                percentage: 7,
            },
            {
                id: '$200k+',
                count: 230,
                percentage: 2,
            }
        ],
    },
    {
        id: 'ES6',
        total: 20596,
        average: 68,
        bins: [
            {
                id: '$50-$100k',
                count: 6409,
                percentage: 34,
            },
            {
                id: '$100k-$200k',
                count: 4184,
                percentage: 20,
            },
            {
                id: '$30-50k',
                count: 3533,
                percentage: 17,
            },
            {
                id: '$10-$30k',
                count: 2849,
                percentage: 14,
            },
            {
                id: 'I work for free :(',
                count: 1414,
                percentage: 7,
            },
            {
                id: '$0-$10k',
                count: 1305,
                percentage: 6,
            },
            {
                id: '$200k+',
                count: 366,
                percentage: 2,
            }
        ]
    },
    {
        id: 'Reason',
        total: 131,
        average: 103,
        bins: [
            {
                id: '$100k-$200k',
                count: 54,
                percentage: 42
            },
            {
                id: '$50-$100k',
                count: 32,
                percentage: 24
            },
            {
                id: '$10-$30k',
                count: 13,
                percentage: 10
            },
            {
                id: "$30-50k",
                count: 10,
                percentage: 8
            },
            {
                id: "$200k+",
                count: 9,
                percentage: 7
            },
            {
                id: "I work for free :(",
                count: 6,
                percentage: 5
            },
            {
                id: "$0-$10k",
                count: 5,
                percentage: 4
            }
        ]
    },
    {
        id: 'Flow',
        total: 2389,
        average: 82,
        bins: [
            {
                id: "$50-$100k",
                count: 754,
                "percentage": 33
            },
            {
                id: "$100k-$200k",
                count: 671,
                "percentage": 28
            },
            {
                id: "$30-50k",
                count: 376,
                "percentage": 16
            },
            {
                id: "$10-$30k",
                count: 256,
                "percentage": 11
            },
            {
                id: "$0-$10k",
                count: 112,
                "percentage": 5
            },
            {
                id: "I work for free :(",
                count: 95,
                "percentage": 4
            },
            {
                id: "$200k+",
                count: 68,
                "percentage": 3
            }
        ]
    }
]

const o = {
    "experienceByUsers": {
        "Aggregated": {
            "by_salary": {
                "doc_count_error_upper_bound": 0,
                "sum_other_doc_count": 0,
                "buckets": [
                    {
                        "key": "$50-$100k",
                        "doc_count": 7099,
                        "percentage": 33
                    },
                    {
                        "key": "$100k-$200k",
                        "doc_count": 4569,
                        "percentage": 20
                    },
                    {
                        "key": "$30-50k",
                        "doc_count": 3893,
                        "percentage": 17
                    },
                    {
                        "key": "$10-$30k",
                        "doc_count": 3193,
                        "percentage": 14
                    },
                    {
                        "key": "I work for free :(",
                        "doc_count": 1602,
                        "percentage": 7
                    },
                    {
                        "key": "$0-$10k",
                        "doc_count": 1509,
                        "percentage": 7
                    },
                    {
                        "key": "$200k+",
                        "doc_count": 392,
                        "percentage": 2
                    }
                ],
                "average": 67
            },
            "by_experience": {
                "doc_count_error_upper_bound": 0,
                "sum_other_doc_count": 0,
                "buckets": [
                    {
                        "key": "2-5 years",
                        "doc_count": 6876,
                        "percentage": 30
                    },
                    {
                        "key": "5-10 years",
                        "doc_count": 6566,
                        "percentage": 29
                    },
                    {
                        "key": "10-20 years",
                        "doc_count": 4795,
                        "percentage": 21
                    },
                    {
                        "key": "1-2 years",
                        "doc_count": 2722,
                        "percentage": 12
                    },
                    {
                        "key": "20+ years",
                        "doc_count": 1136,
                        "percentage": 5
                    },
                    {
                        "key": "Less than one year",
                        "doc_count": 712,
                        "percentage": 3
                    }
                ],
                "average": 8
            },
            "doc_count": 22885
        }
    },
    "countries": [
        {
            "key": "undefined",
            "doc_count": 5839,
            "TypeScript": {
                "doc_count": 1943,
                "percentage": 17,
                "divergence": -1
            },
            "ClojureScript": {
                "doc_count": 162,
                "percentage": 1,
                "divergence": 0
            },
            "Elm": {
                "doc_count": 346,
                "percentage": 3,
                "divergence": 0
            },
            "\"Plain\" JavaScript (ES5)": {
                "doc_count": 2949,
                "percentage": 26,
                "divergence": -2
            },
            "ES6": {
                "doc_count": 5148,
                "percentage": 48,
                "divergence": 3
            },
            "Reason": {
                "doc_count": 25,
                "percentage": 0,
                "divergence": 0
            },
            "Flow": {
                "doc_count": 613,
                "percentage": 5,
                "divergence": 0
            }
        },
        {
            "key": "United States",
            "doc_count": 5719,
            "TypeScript": {
                "doc_count": 1827,
                "percentage": 16,
                "divergence": -2
            },
            "ClojureScript": {
                "doc_count": 141,
                "percentage": 1,
                "divergence": 0
            },
            "Elm": {
                "doc_count": 351,
                "percentage": 3,
                "divergence": 0
            },
            "\"Plain\" JavaScript (ES5)": {
                "doc_count": 3375,
                "percentage": 30,
                "divergence": 2
            },
            "ES6": {
                "doc_count": 5069,
                "percentage": 45,
                "divergence": 0
            },
            "Reason": {
                "doc_count": 47,
                "percentage": 0,
                "divergence": 0
            },
            "Flow": {
                "doc_count": 594,
                "percentage": 5,
                "divergence": 0
            }
        },
        {
            "key": "United Kingdom",
            "doc_count": 1409,
            "TypeScript": {
                "doc_count": 423,
                "percentage": 15,
                "divergence": -3
            },
            "ClojureScript": {
                "doc_count": 29,
                "percentage": 1,
                "divergence": 0
            },
            "Elm": {
                "doc_count": 75,
                "percentage": 3,
                "divergence": 0
            },
            "\"Plain\" JavaScript (ES5)": {
                "doc_count": 847,
                "percentage": 31,
                "divergence": 3
            },
            "ES6": {
                "doc_count": 1218,
                "percentage": 44,
                "divergence": -1
            },
            "Reason": {
                "doc_count": 8,
                "percentage": 0,
                "divergence": 0
            },
            "Flow": {
                "doc_count": 153,
                "percentage": 6,
                "divergence": 1
            }
        },
        {
            "key": "Germany",
            "doc_count": 879,
            "TypeScript": {
                "doc_count": 324,
                "percentage": 20,
                "divergence": 2
            },
            "ClojureScript": {
                "doc_count": 27,
                "percentage": 2,
                "divergence": 1
            },
            "Elm": {
                "doc_count": 45,
                "percentage": 3,
                "divergence": 0
            },
            "\"Plain\" JavaScript (ES5)": {
                "doc_count": 422,
                "percentage": 26,
                "divergence": -2
            },
            "ES6": {
                "doc_count": 744,
                "percentage": 44,
                "divergence": -1
            },
            "Reason": {
                "doc_count": 4,
                "percentage": 0,
                "divergence": 0
            },
            "Flow": {
                "doc_count": 83,
                "percentage": 5,
                "divergence": 0
            }
        },
        {
            "key": "Canada",
            "doc_count": 771,
            "TypeScript": {
                "doc_count": 242,
                "percentage": 17,
                "divergence": -1
            },
            "ClojureScript": {
                "doc_count": 8,
                "percentage": 1,
                "divergence": 0
            },
            "Elm": {
                "doc_count": 19,
                "percentage": 1,
                "divergence": -2
            },
            "\"Plain\" JavaScript (ES5)": {
                "doc_count": 466,
                "percentage": 32,
                "divergence": 4
            },
            "ES6": {
                "doc_count": 658,
                "percentage": 44,
                "divergence": -1
            },
            "Reason": {
                "doc_count": 1,
                "percentage": 0,
                "divergence": 0
            },
            "Flow": {
                "doc_count": 71,
                "percentage": 5,
                "divergence": 0
            }
        },
        {
            "key": "France",
            "doc_count": 695,
            "TypeScript": {
                "doc_count": 226,
                "percentage": 18,
                "divergence": 0
            },
            "ClojureScript": {
                "doc_count": 7,
                "percentage": 1,
                "divergence": 0
            },
            "Elm": {
                "doc_count": 28,
                "percentage": 2,
                "divergence": -1
            },
            "\"Plain\" JavaScript (ES5)": {
                "doc_count": 311,
                "percentage": 25,
                "divergence": -3
            },
            "ES6": {
                "doc_count": 618,
                "percentage": 47,
                "divergence": 2
            },
            "Reason": {
                "doc_count": 7,
                "percentage": 1,
                "divergence": 1
            },
            "Flow": {
                "doc_count": 70,
                "percentage": 6,
                "divergence": 1
            }
        },
        {
            "key": "India",
            "doc_count": 500,
            "TypeScript": {
                "doc_count": 162,
                "percentage": 18,
                "divergence": 0
            },
            "ClojureScript": {
                "doc_count": 7,
                "percentage": 1,
                "divergence": 0
            },
            "Elm": {
                "doc_count": 9,
                "percentage": 1,
                "divergence": -2
            },
            "\"Plain\" JavaScript (ES5)": {
                "doc_count": 295,
                "percentage": 33,
                "divergence": 5
            },
            "ES6": {
                "doc_count": 389,
                "percentage": 43,
                "divergence": -2
            },
            "Reason": {
                "doc_count": 2,
                "percentage": 0,
                "divergence": 0
            },
            "Flow": {
                "doc_count": 35,
                "percentage": 4,
                "divergence": -1
            }
        },
        {
            "key": "Australia",
            "doc_count": 492,
            "TypeScript": {
                "doc_count": 165,
                "percentage": 17,
                "divergence": -1
            },
            "ClojureScript": {
                "doc_count": 9,
                "percentage": 1,
                "divergence": 0
            },
            "Elm": {
                "doc_count": 28,
                "percentage": 3,
                "divergence": 0
            },
            "\"Plain\" JavaScript (ES5)": {
                "doc_count": 268,
                "percentage": 27,
                "divergence": -1
            },
            "ES6": {
                "doc_count": 437,
                "percentage": 43,
                "divergence": -2
            },
            "Reason": {
                "doc_count": 7,
                "percentage": 1,
                "divergence": 1
            },
            "Flow": {
                "doc_count": 79,
                "percentage": 8,
                "divergence": 3
            }
        },
        {
            "key": "Netherlands",
            "doc_count": 449,
            "TypeScript": {
                "doc_count": 171,
                "percentage": 19,
                "divergence": 1
            },
            "ClojureScript": {
                "doc_count": 11,
                "percentage": 1,
                "divergence": 0
            },
            "Elm": {
                "doc_count": 24,
                "percentage": 3,
                "divergence": 0
            },
            "\"Plain\" JavaScript (ES5)": {
                "doc_count": 237,
                "percentage": 26,
                "divergence": -2
            },
            "ES6": {
                "doc_count": 400,
                "percentage": 45,
                "divergence": 0
            },
            "Reason": {
                "doc_count": 4,
                "percentage": 0,
                "divergence": 0
            },
            "Flow": {
                "doc_count": 50,
                "percentage": 6,
                "divergence": 1
            }
        },
        {
            "key": "Brazil",
            "doc_count": 437,
            "TypeScript": {
                "doc_count": 147,
                "percentage": 18,
                "divergence": 0
            },
            "ClojureScript": {
                "doc_count": 13,
                "percentage": 2,
                "divergence": 1
            },
            "Elm": {
                "doc_count": 25,
                "percentage": 3,
                "divergence": 0
            },
            "\"Plain\" JavaScript (ES5)": {
                "doc_count": 209,
                "percentage": 26,
                "divergence": -2
            },
            "ES6": {
                "doc_count": 369,
                "percentage": 44,
                "divergence": -1
            },
            "Reason": {
                "doc_count": 1,
                "percentage": 0,
                "divergence": 0
            },
            "Flow": {
                "doc_count": 54,
                "percentage": 7,
                "divergence": 2
            }
        },
        {
            "key": "Poland",
            "doc_count": 420,
            "TypeScript": {
                "doc_count": 177,
                "percentage": 23,
                "divergence": 5
            },
            "ClojureScript": {
                "doc_count": 4,
                "percentage": 1,
                "divergence": 0
            },
            "Elm": {
                "doc_count": 17,
                "percentage": 2,
                "divergence": -1
            },
            "\"Plain\" JavaScript (ES5)": {
                "doc_count": 172,
                "percentage": 22,
                "divergence": -6
            },
            "ES6": {
                "doc_count": 368,
                "percentage": 48,
                "divergence": 3
            },
            "Reason": {
                "doc_count": 1,
                "percentage": 0,
                "divergence": 0
            },
            "Flow": {
                "doc_count": 31,
                "percentage": 4,
                "divergence": -1
            }
        },
        {
            "key": "Spain",
            "doc_count": 413,
            "TypeScript": {
                "doc_count": 143,
                "percentage": 18,
                "divergence": 0
            },
            "ClojureScript": {
                "doc_count": 6,
                "percentage": 1,
                "divergence": 0
            },
            "Elm": {
                "doc_count": 12,
                "percentage": 2,
                "divergence": -1
            },
            "\"Plain\" JavaScript (ES5)": {
                "doc_count": 225,
                "percentage": 29,
                "divergence": 1
            },
            "ES6": {
                "doc_count": 354,
                "percentage": 46,
                "divergence": 1
            },
            "Reason": {
                "doc_count": 0,
                "percentage": 0,
                "divergence": 0
            },
            "Flow": {
                "doc_count": 33,
                "percentage": 4,
                "divergence": -1
            }
        },
        {
            "key": "Russia",
            "doc_count": 379,
            "TypeScript": {
                "doc_count": 117,
                "percentage": 17,
                "divergence": -1
            },
            "ClojureScript": {
                "doc_count": 12,
                "percentage": 2,
                "divergence": 1
            },
            "Elm": {
                "doc_count": 21,
                "percentage": 3,
                "divergence": 0
            },
            "\"Plain\" JavaScript (ES5)": {
                "doc_count": 149,
                "percentage": 22,
                "divergence": -6
            },
            "ES6": {
                "doc_count": 327,
                "percentage": 49,
                "divergence": 4
            },
            "Reason": {
                "doc_count": 2,
                "percentage": 0,
                "divergence": 0
            },
            "Flow": {
                "doc_count": 50,
                "percentage": 7,
                "divergence": 2
            }
        },
        {
            "key": "Sweden",
            "doc_count": 330,
            "TypeScript": {
                "doc_count": 109,
                "percentage": 16,
                "divergence": -2
            },
            "ClojureScript": {
                "doc_count": 15,
                "percentage": 2,
                "divergence": 1
            },
            "Elm": {
                "doc_count": 33,
                "percentage": 5,
                "divergence": 2
            },
            "\"Plain\" JavaScript (ES5)": {
                "doc_count": 157,
                "percentage": 24,
                "divergence": -4
            },
            "ES6": {
                "doc_count": 308,
                "percentage": 47,
                "divergence": 2
            },
            "Reason": {
                "doc_count": 2,
                "percentage": 0,
                "divergence": 0
            },
            "Flow": {
                "doc_count": 41,
                "percentage": 6,
                "divergence": 1
            }
        },
        {
            "key": "Italy",
            "doc_count": 251,
            "TypeScript": {
                "doc_count": 88,
                "percentage": 20,
                "divergence": 2
            },
            "ClojureScript": {
                "doc_count": 4,
                "percentage": 1,
                "divergence": 0
            },
            "Elm": {
                "doc_count": 5,
                "percentage": 1,
                "divergence": -2
            },
            "\"Plain\" JavaScript (ES5)": {
                "doc_count": 135,
                "percentage": 30,
                "divergence": 2
            },
            "ES6": {
                "doc_count": 197,
                "percentage": 44,
                "divergence": -1
            },
            "Reason": {
                "doc_count": 0,
                "percentage": 0,
                "divergence": 0
            },
            "Flow": {
                "doc_count": 17,
                "percentage": 4,
                "divergence": -1
            }
        },
        {
            "key": "Ukraine",
            "doc_count": 242,
            "TypeScript": {
                "doc_count": 74,
                "percentage": 17,
                "divergence": -1
            },
            "ClojureScript": {
                "doc_count": 5,
                "percentage": 1,
                "divergence": 0
            },
            "Elm": {
                "doc_count": 8,
                "percentage": 2,
                "divergence": -1
            },
            "\"Plain\" JavaScript (ES5)": {
                "doc_count": 104,
                "percentage": 24,
                "divergence": -4
            },
            "ES6": {
                "doc_count": 208,
                "percentage": 50,
                "divergence": 5
            },
            "Reason": {
                "doc_count": 2,
                "percentage": 0,
                "divergence": 0
            },
            "Flow": {
                "doc_count": 26,
                "percentage": 6,
                "divergence": 1
            }
        },
        {
            "key": "Denmark",
            "doc_count": 197,
            "TypeScript": {
                "doc_count": 73,
                "percentage": 19,
                "divergence": 1
            },
            "ClojureScript": {
                "doc_count": 6,
                "percentage": 2,
                "divergence": 1
            },
            "Elm": {
                "doc_count": 16,
                "percentage": 4,
                "divergence": 1
            },
            "\"Plain\" JavaScript (ES5)": {
                "doc_count": 113,
                "percentage": 30,
                "divergence": 2
            },
            "ES6": {
                "doc_count": 155,
                "percentage": 40,
                "divergence": -5
            },
            "Reason": {
                "doc_count": 0,
                "percentage": 0,
                "divergence": 0
            },
            "Flow": {
                "doc_count": 19,
                "percentage": 5,
                "divergence": 0
            }
        },
        {
            "key": "Mexico",
            "doc_count": 167,
            "TypeScript": {
                "doc_count": 57,
                "percentage": 18,
                "divergence": 0
            },
            "ClojureScript": {
                "doc_count": 1,
                "percentage": 0,
                "divergence": -1
            },
            "Elm": {
                "doc_count": 9,
                "percentage": 3,
                "divergence": 0
            },
            "\"Plain\" JavaScript (ES5)": {
                "doc_count": 91,
                "percentage": 29,
                "divergence": 1
            },
            "ES6": {
                "doc_count": 138,
                "percentage": 43,
                "divergence": -2
            },
            "Reason": {
                "doc_count": 4,
                "percentage": 1,
                "divergence": 1
            },
            "Flow": {
                "doc_count": 18,
                "percentage": 6,
                "divergence": 1
            }
        },
        {
            "key": "Belgium",
            "doc_count": 163,
            "TypeScript": {
                "doc_count": 72,
                "percentage": 23,
                "divergence": 5
            },
            "ClojureScript": {
                "doc_count": 0,
                "percentage": 0,
                "divergence": -1
            },
            "Elm": {
                "doc_count": 8,
                "percentage": 3,
                "divergence": 0
            },
            "\"Plain\" JavaScript (ES5)": {
                "doc_count": 84,
                "percentage": 27,
                "divergence": -1
            },
            "ES6": {
                "doc_count": 138,
                "percentage": 44,
                "divergence": -1
            },
            "Reason": {
                "doc_count": 0,
                "percentage": 0,
                "divergence": 0
            },
            "Flow": {
                "doc_count": 9,
                "percentage": 3,
                "divergence": -2
            }
        },
        {
            "key": "Norway",
            "doc_count": 150,
            "TypeScript": {
                "doc_count": 56,
                "percentage": 19,
                "divergence": 1
            },
            "ClojureScript": {
                "doc_count": 7,
                "percentage": 2,
                "divergence": 1
            },
            "Elm": {
                "doc_count": 20,
                "percentage": 7,
                "divergence": 4
            },
            "\"Plain\" JavaScript (ES5)": {
                "doc_count": 72,
                "percentage": 24,
                "divergence": -4
            },
            "ES6": {
                "doc_count": 132,
                "percentage": 45,
                "divergence": 0
            },
            "Reason": {
                "doc_count": 0,
                "percentage": 0,
                "divergence": 0
            },
            "Flow": {
                "doc_count": 10,
                "percentage": 3,
                "divergence": -2
            }
        },
        {
            "key": "Argentina",
            "doc_count": 145,
            "TypeScript": {
                "doc_count": 43,
                "percentage": 16,
                "divergence": -2
            },
            "ClojureScript": {
                "doc_count": 1,
                "percentage": 0,
                "divergence": -1
            },
            "Elm": {
                "doc_count": 3,
                "percentage": 1,
                "divergence": -2
            },
            "\"Plain\" JavaScript (ES5)": {
                "doc_count": 88,
                "percentage": 33,
                "divergence": 5
            },
            "ES6": {
                "doc_count": 128,
                "percentage": 47,
                "divergence": 2
            },
            "Reason": {
                "doc_count": 0,
                "percentage": 0,
                "divergence": 0
            },
            "Flow": {
                "doc_count": 7,
                "percentage": 3,
                "divergence": -2
            }
        },
        {
            "key": "New Zealand",
            "doc_count": 143,
            "TypeScript": {
                "doc_count": 59,
                "percentage": 21,
                "divergence": 3
            },
            "ClojureScript": {
                "doc_count": 2,
                "percentage": 1,
                "divergence": 0
            },
            "Elm": {
                "doc_count": 10,
                "percentage": 4,
                "divergence": 1
            },
            "\"Plain\" JavaScript (ES5)": {
                "doc_count": 75,
                "percentage": 26,
                "divergence": -2
            },
            "ES6": {
                "doc_count": 126,
                "percentage": 43,
                "divergence": -2
            },
            "Reason": {
                "doc_count": 0,
                "percentage": 0,
                "divergence": 0
            },
            "Flow": {
                "doc_count": 13,
                "percentage": 5,
                "divergence": 0
            }
        },
        {
            "key": "Switzerland",
            "doc_count": 136,
            "TypeScript": {
                "doc_count": 58,
                "percentage": 22,
                "divergence": 4
            },
            "ClojureScript": {
                "doc_count": 0,
                "percentage": 0,
                "divergence": -1
            },
            "Elm": {
                "doc_count": 5,
                "percentage": 2,
                "divergence": -1
            },
            "\"Plain\" JavaScript (ES5)": {
                "doc_count": 62,
                "percentage": 24,
                "divergence": -4
            },
            "ES6": {
                "doc_count": 115,
                "percentage": 43,
                "divergence": -2
            },
            "Reason": {
                "doc_count": 2,
                "percentage": 1,
                "divergence": 1
            },
            "Flow": {
                "doc_count": 20,
                "percentage": 8,
                "divergence": 3
            }
        },
        {
            "key": "Finland",
            "doc_count": 133,
            "TypeScript": {
                "doc_count": 37,
                "percentage": 16,
                "divergence": -2
            },
            "ClojureScript": {
                "doc_count": 6,
                "percentage": 3,
                "divergence": 2
            },
            "Elm": {
                "doc_count": 8,
                "percentage": 3,
                "divergence": 0
            },
            "\"Plain\" JavaScript (ES5)": {
                "doc_count": 58,
                "percentage": 24,
                "divergence": -4
            },
            "ES6": {
                "doc_count": 118,
                "percentage": 50,
                "divergence": 5
            },
            "Reason": {
                "doc_count": 0,
                "percentage": 0,
                "divergence": 0
            },
            "Flow": {
                "doc_count": 10,
                "percentage": 4,
                "divergence": -1
            }
        },
        {
            "key": "Romania",
            "doc_count": 132,
            "TypeScript": {
                "doc_count": 56,
                "percentage": 22,
                "divergence": 4
            },
            "ClojureScript": {
                "doc_count": 2,
                "percentage": 1,
                "divergence": 0
            },
            "Elm": {
                "doc_count": 3,
                "percentage": 1,
                "divergence": -2
            },
            "\"Plain\" JavaScript (ES5)": {
                "doc_count": 71,
                "percentage": 28,
                "divergence": 0
            },
            "ES6": {
                "doc_count": 114,
                "percentage": 45,
                "divergence": 0
            },
            "Reason": {
                "doc_count": 0,
                "percentage": 0,
                "divergence": 0
            },
            "Flow": {
                "doc_count": 7,
                "percentage": 3,
                "divergence": -2
            }
        },
        {
            "key": "Israel",
            "doc_count": 126,
            "TypeScript": {
                "doc_count": 57,
                "percentage": 23,
                "divergence": 5
            },
            "ClojureScript": {
                "doc_count": 1,
                "percentage": 0,
                "divergence": -1
            },
            "Elm": {
                "doc_count": 3,
                "percentage": 1,
                "divergence": -2
            },
            "\"Plain\" JavaScript (ES5)": {
                "doc_count": 67,
                "percentage": 27,
                "divergence": -1
            },
            "ES6": {
                "doc_count": 116,
                "percentage": 46,
                "divergence": 1
            },
            "Reason": {
                "doc_count": 0,
                "percentage": 0,
                "divergence": 0
            },
            "Flow": {
                "doc_count": 8,
                "percentage": 3,
                "divergence": -2
            }
        },
        {
            "key": "Austria",
            "doc_count": 116,
            "TypeScript": {
                "doc_count": 57,
                "percentage": 25,
                "divergence": 7
            },
            "ClojureScript": {
                "doc_count": 1,
                "percentage": 0,
                "divergence": -1
            },
            "Elm": {
                "doc_count": 1,
                "percentage": 0,
                "divergence": -3
            },
            "\"Plain\" JavaScript (ES5)": {
                "doc_count": 56,
                "percentage": 24,
                "divergence": -4
            },
            "ES6": {
                "doc_count": 105,
                "percentage": 46,
                "divergence": 1
            },
            "Reason": {
                "doc_count": 1,
                "percentage": 0,
                "divergence": 0
            },
            "Flow": {
                "doc_count": 11,
                "percentage": 5,
                "divergence": 0
            }
        },
        {
            "key": "Ireland",
            "doc_count": 106,
            "TypeScript": {
                "doc_count": 35,
                "percentage": 18,
                "divergence": 0
            },
            "ClojureScript": {
                "doc_count": 1,
                "percentage": 1,
                "divergence": 0
            },
            "Elm": {
                "doc_count": 2,
                "percentage": 1,
                "divergence": -2
            },
            "\"Plain\" JavaScript (ES5)": {
                "doc_count": 58,
                "percentage": 30,
                "divergence": 2
            },
            "ES6": {
                "doc_count": 86,
                "percentage": 45,
                "divergence": 0
            },
            "Reason": {
                "doc_count": 0,
                "percentage": 0,
                "divergence": 0
            },
            "Flow": {
                "doc_count": 10,
                "percentage": 5,
                "divergence": 0
            }
        },
        {
            "key": "Portugal",
            "doc_count": 105,
            "TypeScript": {
                "doc_count": 36,
                "percentage": 19,
                "divergence": 1
            },
            "ClojureScript": {
                "doc_count": 2,
                "percentage": 1,
                "divergence": 0
            },
            "Elm": {
                "doc_count": 0,
                "percentage": 0,
                "divergence": -3
            },
            "\"Plain\" JavaScript (ES5)": {
                "doc_count": 55,
                "percentage": 28,
                "divergence": 0
            },
            "ES6": {
                "doc_count": 89,
                "percentage": 46,
                "divergence": 1
            },
            "Reason": {
                "doc_count": 1,
                "percentage": 1,
                "divergence": 1
            },
            "Flow": {
                "doc_count": 10,
                "percentage": 5,
                "divergence": 0
            }
        },
        {
            "key": "Belarus",
            "doc_count": 104,
            "TypeScript": {
                "doc_count": 43,
                "percentage": 22,
                "divergence": 4
            },
            "ClojureScript": {
                "doc_count": 3,
                "percentage": 2,
                "divergence": 1
            },
            "Elm": {
                "doc_count": 3,
                "percentage": 2,
                "divergence": -1
            },
            "\"Plain\" JavaScript (ES5)": {
                "doc_count": 42,
                "percentage": 21,
                "divergence": -7
            },
            "ES6": {
                "doc_count": 99,
                "percentage": 48,
                "divergence": 3
            },
            "Reason": {
                "doc_count": 0,
                "percentage": 0,
                "divergence": 0
            },
            "Flow": {
                "doc_count": 10,
                "percentage": 5,
                "divergence": 0
            }
        },
        {
            "key": "Colombia",
            "doc_count": 97,
            "TypeScript": {
                "doc_count": 34,
                "percentage": 18,
                "divergence": 0
            },
            "ClojureScript": {
                "doc_count": 1,
                "percentage": 1,
                "divergence": 0
            },
            "Elm": {
                "doc_count": 4,
                "percentage": 2,
                "divergence": -1
            },
            "\"Plain\" JavaScript (ES5)": {
                "doc_count": 58,
                "percentage": 31,
                "divergence": 3
            },
            "ES6": {
                "doc_count": 82,
                "percentage": 45,
                "divergence": 0
            },
            "Reason": {
                "doc_count": 0,
                "percentage": 0,
                "divergence": 0
            },
            "Flow": {
                "doc_count": 6,
                "percentage": 3,
                "divergence": -2
            }
        },
        {
            "key": "China",
            "doc_count": 96,
            "TypeScript": {
                "doc_count": 28,
                "percentage": 16,
                "divergence": -2
            },
            "ClojureScript": {
                "doc_count": 1,
                "percentage": 1,
                "divergence": 0
            },
            "Elm": {
                "doc_count": 2,
                "percentage": 1,
                "divergence": -2
            },
            "\"Plain\" JavaScript (ES5)": {
                "doc_count": 45,
                "percentage": 26,
                "divergence": -2
            },
            "ES6": {
                "doc_count": 87,
                "percentage": 49,
                "divergence": 4
            },
            "Reason": {
                "doc_count": 0,
                "percentage": 0,
                "divergence": 0
            },
            "Flow": {
                "doc_count": 13,
                "percentage": 7,
                "divergence": 2
            }
        }
    ],
    "numberOfToolsUsed": [
        {
            "key": 0,
            "doc_count": 819
        },
        {
            "key": 1,
            "doc_count": 6646
        },
        {
            "key": 2,
            "doc_count": 10859
        },
        {
            "key": 3,
            "doc_count": 4581
        },
        {
            "key": 4,
            "doc_count": 660
        },
        {
            "key": 5,
            "doc_count": 107
        },
        {
            "key": 6,
            "doc_count": 27
        },
        {
            "key": 7,
            "doc_count": 5
        }
    ],
    "happiness": 4
}