import http from 'k6/http';
import { check, group, sleep, fail } from 'k6';

export const options = {
  thresholds: {
    http_req_duration: ['p(99)<1500'], // 99% of requests must complete below 1.5s
  },

  stages: [
    {duration: '5m', target:100},
    {duration: '10m', target:100},
    {duration: '5m', target:0},
  ]
};

const BASE_URL = 'http://localhost:3000';

export default () => {
  const getQuestion = http.get(`${BASE_URL}/questions?product_id=20`);

  check(getQuestion, {
    'Question Queried!': (res) => res.json('access') !== '',
  });

  sleep(1);
};