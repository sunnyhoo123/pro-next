Object.defineProperty(window, 'dataLayer', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
  push: jest.fn().mockImplementation((config) => {
    config.eventCallback();
  }),
  track: jest.fn().mockImplementation((config) => {
    config.eventCallback();
  }),
});
