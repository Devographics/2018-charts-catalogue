import { random } from 'lodash'

const positiveReasons = [
    'Elegant programming style & patterns',
    'Robust, less error-prone code',
    'Rich package ecosystem',
    'Fast performance',
    'Well-established option',
    'Easy learning curve',
    'Powerful developer tooling',
    'Good documentation',
    'Backed by a great team/company',
    'Simple & lightweight',
    'Growing momentum/popularity',
    'Full-featured & powerful',
    'Stable & backwards-compatible',
    'Other',
]

const negativeReasons = [
    'Clumsy programming style',
    'Buggy, error-prone code',
    'Poor performance',
    'Small package ecosystem',
    'New untested option',
    'Hard learning curve',
    'Lacking developer tooling',
    'Bad documentation',
    'Concerns about the team/company',
    'Bloated & complex',
    'Diminishing momentum/popularity',
    'Limited & lacking in features',
    'Fast-changing & breaks often',
    'Other',
]

export default {
    positive: positiveReasons.map(reason => ({
        reason,
        count: random(50, 10000),
    })),
    negative: negativeReasons.map(reason => ({
        reason,
        count: random(50, 10000),
    })),
}