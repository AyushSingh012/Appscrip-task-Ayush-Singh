import HeroSection from '@/components/HeroSection';
import FilterBar from '@/components/FilterBar';
import FilterSidebar from '@/components/FilterSidebar';
import ProductGrid from '@/components/ProductGrid';
import './globals.css';

export default function Home() {
  return (
    <main>
      {/* Section 2: Hero Section */}
      <HeroSection />

      {/* Section 3: Filter & Sorting Bar */}
      <FilterBar />

      {/* Section 4: Filter Sidebar + Product Grid */}
      <div className="content-section">
        <FilterSidebar />
        <ProductGrid />
      </div>
    </main>
  );
}
