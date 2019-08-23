
export const storeData = (data) => ({
    type: 'STORE_DATA',
    data,
});

export const storeIndex = (endIndex, isFirstHit) => ({
    type: 'STORE_INDEX',
    endIndex,
    isFirstHit,
});