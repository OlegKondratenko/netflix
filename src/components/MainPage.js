import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getShowsThunk } from '../redux/videosReducer'

function MainPage({ shows, ...props }) {
    const 

    return (
        <div>
            main page123123123
        </div>
    )
}

const mapStateToProps = (state) => ({
    shows: state.videos.shows
})
const mapDipatchToProps = (dispatch) => ({
    getShows: () => dispatch(getShowsThunk())
})

function MainPageContainer({ shows, getShows, ...props }) {
    useEffect(() => {
        getShows()
    }, [])
    return (
        <MainPage props={shows}></MainPage>
    )
}

export default connect(mapStateToProps, mapDipatchToProps)(MainPageContainer)