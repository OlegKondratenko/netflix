let initState = {
    sectionList: [
        { id: 0, sectionName: 'Main', sectionLink: '/main' },
        { id: 1, sectionName: 'Serials', sectionLink: '/serials' },
        { id: 2, sectionName: 'Movies', sectionLink: '/movies' },
        { id: 3, sectionName: 'New and popular', sectionLink: '/new' },
        { id: 4, sectionName: 'My list', sectionLink: '/mylist' }
    ],
}

const headerReducer = (state = initState, action) => {
    return state;
}


export default headerReducer;