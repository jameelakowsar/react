import React from 'react';

const withHOCdata = (WrappedComponent) => {
    // class AddDataComponent extends React.Component { // Props proxy

    //     render() {
    //         console.log('in HOC');
    //         const friendsList = [
    //             'Captain America',
    //             'Captain Marvel',
    //             'Thor',
    //             'Spider Man',
    //             'Ant Man',
    //             'Natasha,
    //         ]
    //         return (
    //             <WrappedComponent friendsList {...this.props} />
    //         );
    //     }
    // }
    // return AddDataComponent;
    class IIComponentEx extends WrappedComponent { // Inheritance inversion
        constructor(props){
            super(props);
        }
        render() {
            return(
                this.props.id === "1010"
                ? super.render()
                : "Yay...Render Highjacked..."
            );
        }
    }
    return IIComponentEx;
}
export default withHOCdata;


