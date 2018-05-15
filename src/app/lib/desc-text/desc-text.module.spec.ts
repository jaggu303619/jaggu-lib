import { DescTextModule } from './desc-text.module';

describe('DescTextModule', () => {
  let descTextModule: DescTextModule;

  beforeEach(() => {
    descTextModule = new DescTextModule();
  });

  it('should create an instance', () => {
    expect(descTextModule).toBeTruthy();
  });
});
