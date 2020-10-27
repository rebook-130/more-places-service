import http from 'k6/http';
import { sleep } from 'k6';
import { check } from 'k6';
import { Rate } from 'k6/metrics';

export const errorRate = new Rate('errors');

export const options = {
  vus: 600,
  duration: '60s',
  thresholds: {
    errors: ['rate<0.1'], // <10% errors
  },
};

const morePlacesUserVisit = (userId) => {
  const res1 = http.get(`http://127.0.0.1:3004/api/users/${userId}/more_places`);
  const result1 = check(res1, {
    'status is 200': (r) => r.status == 200,
  });
  const res2 = http.get(`http://127.0.0.1:3004/api/users/${userId}/collections`);
  const result2 = check(res2, {
    'status is 200': (r) => r.status == 200,
  });
  errorRate.add(!result1);
  errorRate.add(!result2);
};

export default () => {
  const userId = Math.round(Math.random() * 1000000);

  morePlacesUserVisit(userId);

  sleep(1);
};
