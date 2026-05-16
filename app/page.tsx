import Header from '@/app/components/ui/Header';
import MainContent from '@/app/components/ui/MainContent';
import Footer from '@/app/components/ui/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MainContent />
      <Footer />
    </div>
    
  );
}
