export default {
    state: {
        isShow: true,
        icon: 'plus',
        hiddenAside: 0,
        expandHomeview:24,
        page1:true,
        page2:false
    },
    mutations: {
        changeShow(state) {
            if (state.icon === 'close' && state.hiddenAside === 6 && state.expandHomeview === 18) {
                state.icon = 'plus'
                state.hiddenAside = 0
                state.expandHomeview = 24
            } else if (state.icon === 'plus' && state.hiddenAside === 0 && state.expandHomeview === 24) {
                state.icon = 'close'
                state.hiddenAside = 6
                state.expandHomeview = 18
            }
        },
    }
}