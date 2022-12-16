import { render } from '@testing-library/react';

import EmailUi from './email-ui';

describe('EmailUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EmailUi />);
    expect(baseElement).toBeTruthy();
  });
});
