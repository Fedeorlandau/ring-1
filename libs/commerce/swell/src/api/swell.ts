import assert from 'assert';

assert(process.env.SWELL_STORE_ID);
assert(process.env.SWELL_SECRET_KEY);

export const SWELL_URL = `https://${process.env.SWELL_STORE_ID}:${process.env.SWELL_SECRET_KEY}@api.swell.store`;
