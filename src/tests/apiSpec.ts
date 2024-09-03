import supertest from 'supertest';
import app from '../index';
import { promises as fs } from 'fs';
import path from 'path';

const request: supertest.SuperTest<supertest.Test> = supertest(app);


describe('Test responses from API', (): void => {
  describe('endpoint: /', (): void => {
    it('gets /', async (): Promise<void> => {
      const response: supertest.Response = await request.get('/');
      expect(response.status).toBe(200);
    });
  });
});
