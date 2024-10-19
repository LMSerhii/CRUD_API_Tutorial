import { catchAsync } from '@/utils';
import { Request, Response } from 'express';

const healthController = catchAsync(async (req: Request, res: Response) => {
  const timeData = await new Date().toLocaleDateString('uk-UA', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  res.status(200).send({ message: 'Server is up and running', timeData });
});

export default healthController;
