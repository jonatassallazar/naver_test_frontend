const moment = require('moment')

const momentMock = (timestamp = 0) => {
    return moment(timestamp);
};

export default momentMock;