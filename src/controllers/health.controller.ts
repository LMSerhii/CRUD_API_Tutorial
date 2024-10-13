import { getCurrentTime } from '@/services/health.service';
import { catchAsync } from '@/utils/catchAsync';
import { Request, Response } from 'express';

const healthController = catchAsync(async (req: Request, res: Response) => {
  const timeData = await getCurrentTime();

  res.status(200).send({ message: 'Server is up and running', timeData });
});

export default healthController;
