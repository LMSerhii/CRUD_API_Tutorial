import { catchAsync } from '../utils/catchAsync.js';

const healthController = catchAsync((req, res) => {
  res.status(200).send({ message: 'Server is up and running' });
});

export default healthController;
