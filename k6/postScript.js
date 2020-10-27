import http from 'k6/http';
import { sleep } from 'k6';
import { check } from 'k6';
import { Rate } from 'k6/metrics';

export const errorRate = new Rate('errors');

export const options = {
  stages: [
    { duration: '2s', target: 600 },
    { duration: '2s', target: 1200 },
    { duration: '2s', target: 1400 },
    { duration: '30s', target: 1400 },
  ],
  thresholds: {
    errorRate: ['rate<0.1'], // <10% errors
    http_req_duration: ['p(90) < 50'],
  },
};

const patchSaveProperty = (update) => {
  const res = http.patch(`http://127.0.0.1:3004/api/users/${update.user_id}/collections`, update, { 'Content-Type': 'application/x-www-form-urlencoded' });
  const result = check(res, {
    'status is 202': (r) => r.status == 202,
  });
  errorRate.add(!result);
};

export default () => {
  const update = {
    user_id: Math.round(Math.random() * 1000000),
    houseId: Math.round(Math.random() * 10000000),
    collection_name: 'k6 test',
    photo_url: 'https://more-places-photos.s3.us-east-2.amazonaws.com/property795.jpg',
    isSaved: true,
  };
  patchSaveProperty(update);
  sleep(1);
  update.isSaved = false;
  patchSaveProperty(update);
  sleep(1);
};
