const size = 20;

export const FernsNPetals = (state = [], action) => {
    switch (action.type) {
        case 'STORE_DATA':
            const totalState = [...state, ...action.data];
            return totalState;
        default:
            return state;
    }
}

export const indexValues = (state = [], action) => {
    switch (action.type) {
        case 'STORE_INDEX':
            // if (action.isFirstHit) {
            //     const state = { startIndex: action.startIndex, endIndex: action.endIndex + 30 }
            //     return state;
            // } else {
            const state = { startIndex: action.startIndex, endIndex: action.endIndex + 20 }
            return state;
        // }
        default:
            return { startIndex: 0, endIndex: 30 };
    }
}
