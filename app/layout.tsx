import { LeftBar } from '@/component/LeftBar';
import './global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LeftBar />
        {children}
      </body>
    </html>
  );
}
