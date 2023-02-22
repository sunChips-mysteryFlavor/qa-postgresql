import http from 'k6/http';
import { check, group, sleep, fail } from 'k6';

export const options = {
  vus: 1, // 1 user looping for 1 minute
  duration: '1m',

  thresholds: {
    http_req_duration: ['p(99)<1500'], // 99% of requests must complete below 1.5s
  },
};

const BASE_URL = 'http://localhost:3000';

export default () => {
  const getQuestion = http.get(`${BASE_URL}/questions?product_id=20`);

  check(getQuestion, {
    'Question Queried!': (res) => res.json('access') !== '',
  });

  sleep(1);
};
