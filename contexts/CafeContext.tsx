import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

type Product = {
  id: string;
  name: string;
  description?: string;
  price: string;
  calories?: string;
  status: "In Stock" | "Almost Out" | "Out of Stock";
  image_url?: string;
  category: string;
  rating: number;
};

type Cafe = {
  name: string;
  description?: string;
  location: string | { pavillon: string; local: string };
  priceRange: "$" | "$$" | "$$$";
  rating: number;
  status: "open" | "closing soon" | "closed";
  slug: string;
  image_url?: string;
  products?: Product[];
};

type CafeContextType = {
  cafes: Cafe[];
  loading: boolean;
  error: string | null;
  getCafe: (slug: string) => Cafe | undefined;
  refreshCafes: () => Promise<void>;
  getProducts: (cafeSlug: string) => Promise<Product[]>;
};

const CafeContext = createContext<CafeContextType | undefined>(undefined);

export function CafeProvider({ children }: { children: React.ReactNode }) {
  const [cafes, setCafes] = useState<Cafe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCafes = async () => {
    try {
      const response = await axios.get('https://cafesansfil-api-r0kj.onrender.com/api/cafes');
      setCafes(response.data);
      setError(null);
    } catch (err) {
      setError('Error fetching cafes');
      console.error('Error fetching cafes:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCafes();
  }, []);

  const getCafe = (slug: string) => {
    return cafes.find(cafe => cafe.slug === slug);
  };

  const getProducts = async (cafeSlug: string): Promise<Product[]> => {
    try {
      const response = await axios.get(`https://cafesansfil-api-r0kj.onrender.com/api/cafes/${cafeSlug}/menu`);
      return response.data;
    } catch (err) {
      console.error('Error fetching products:', err);
      return [];
    }
  };

  const refreshCafes = async () => {
    setLoading(true);
    await fetchCafes();
  };

  return (
    <CafeContext.Provider value={{ cafes, loading, error, getCafe, refreshCafes, getProducts }}>
      {children}
    </CafeContext.Provider>
  );
}

export function useCafe() {
  const context = useContext(CafeContext);
  if (context === undefined) {
    throw new Error('useCafe must be used within a CafeProvider');
  }
  return context;
}