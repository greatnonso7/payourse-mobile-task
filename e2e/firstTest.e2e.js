describe('cryptoMobile', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have crypto tokens screen', async () => {
    await expect(element(by.id('CryptoTokens'))).toBeVisible();
  });

  it('should be able to search token', async () => {
    await element(by.id('SearchToken')).tap();
    await expect(element(by.text('BUSD'))).toBeVisible();
  });
});
