import React from 'react';
import { AppLayout } from '.';

export default { title: 'AppLayout' };

export const Index = () => (
  <AppLayout>
    <div style={{ border: '2px solid #333', height: '100%' }}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </div>
  </AppLayout>
);
