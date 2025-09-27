import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;

}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fefefe] via-[#faf8f5] to-[#fffef9]">
      <Header  />
      <main className="pt-20">
        {children}
      </main>
      <Footer  />
    </div>
  );
}