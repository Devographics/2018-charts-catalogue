import PropTypes from 'prop-types'

export const supportedYears = ['2017', '2018']

export const yearDataPropType = PropTypes.shape({
    wouldUse: PropTypes.number.isRequired,
    wouldNotUse: PropTypes.number.isRequired,
    interested: PropTypes.number.isRequired,
    notInterested: PropTypes.number.isRequired,
    neverHeard: PropTypes.number.isRequired,
})