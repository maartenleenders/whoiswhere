export const wrapReduxResponse = ( reduxResponse ) => {
    return {
        event: "serverReduxAction",
        data: reduxResponse,
    };
};
