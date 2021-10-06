import React from 'react';

// QRCode.React
import QRCodeComponent from 'qrcode.react';

export const QRCode: React.FC<{ data: string }> = ({ data }): React.ReactElement => (
  <QRCodeComponent value={data} renderAs="svg" size={100} />
);
