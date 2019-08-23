import React from 'react';
import { connect } from 'react-redux';

import withHOCdata from './withHOCdata';

class ExHOCComponent extends React.Component {
    render() {
        const {name, id, nickName } = this.props;
        console.log(this.props, 'all data of props in EXHOCCOMponetn')
        return (
            <div>
                <p>Name: {name}</p>
                <button >
                    Button {id}
                </button>
                <p>nickName: {nickName}</p>
            </div>
        )
    }
}

// export default connect(null,
//     withHOCdata,
// )(ExHOCComponent);
export default withHOCdata(ExHOCComponent);