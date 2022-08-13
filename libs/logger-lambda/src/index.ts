import { testLogger } from '@ring/logger';
import Pino from 'pino';
import { lambdaRequestTracker, pinoLambdaDestination } from 'pino-lambda';

const lambdaLogger = Pino(
  {
    // typical pino options
  },
  pinoLambdaDestination(),
);

export const logger = process.env.NODE_ENV === 'test' ? testLogger : lambdaLogger;
export const withRequest = lambdaRequestTracker();
