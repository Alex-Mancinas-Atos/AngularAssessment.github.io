import { StringlifyPipe } from './stringlify.pipe';

describe('StringlifyPipe', () => {
  it('create an instance', () => {
    const pipe = new StringlifyPipe();
    expect(pipe).toBeTruthy();
  });
});
