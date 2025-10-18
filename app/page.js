import HeroSection from '@/components/HeroSection';
import FilterBar from '@/components/FilterBar';
import FilterSidebar from '@/components/FilterSidebar';
import ProductGrid from '@/components/ProductGrid';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

import './globals.css';

export default function Home() {
  return (
    <main>
      <HeroSection />
  <FilterBar />
  <div className="content-section">
    <FilterSidebar />
    <ProductGrid />
  </div>
  <Newsletter />
  <Footer />
    </main>
  );
}
