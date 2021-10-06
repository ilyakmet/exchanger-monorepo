import React from 'react';

// Copy To Clipboard
import CopyToClipboardComponent from 'react-copy-to-clipboard';

export const CopyToClipboard: React.FC<{ children: any; text: string; onCopy: () => void }> = ({
  children,
  text,
  onCopy,
}): React.ReactElement => (
  <CopyToClipboardComponent text={text} onCopy={onCopy}>
    <div style={{ cursor: 'pointer' }}>{children}</div>
  </CopyToClipboardComponent>
);
