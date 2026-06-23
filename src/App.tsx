import { useMemo, useState } from 'react';
import LoginPage from './pages/LoginPage';
import ProductListPage from './pages/ProductListPage';
import ProductFormPage from './pages/ProductFormPage';

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
};

function App() {
  const [page, setPage] = useState<'login' | 'list' | 'form'>('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'Câmera fotográfica',
      description: 'Câmera compacta com zoom óptico 10x.',
      price: 1299.9,
      category: 'Eletrônicos',
      image: 'https://images.unsplash.com/photo-1519183071298-a2962be54afa?auto=format&fit=crop&w=400&q=80',
    },
  ]);

  const validCredentials = {
    admin: '1234',
    candidato: 'abcde',
  } as const;

  const pageComponent = useMemo(() => {
    if (!isAuthenticated) {
      return (
        <LoginPage
          onLogin={(username, password) => {
            const typedUsername = username as keyof typeof validCredentials;
            const isValid = validCredentials[typedUsername] === password;
            if (isValid) {
              setIsAuthenticated(true);
              setPage('list');
            }
            return isValid;
          }}
        />
      );
    }

    if (page === 'list') {
      return (
        <ProductListPage
          products={products}
          onAddNew={() => setPage('form')}
          onLogout={() => {
            setIsAuthenticated(false);
            setPage('login');
          }}
        />
      );
    }

    return (
      <ProductFormPage
        onSave={(product) => {
          setProducts((current) => [...current, { ...product, id: String(Date.now()) }]);
          setPage('list');
        }}
        onCancel={() => setPage('list')}
      />
    );
  }, [isAuthenticated, page, products]);

  return <div className="app-shell">{pageComponent}</div>;
}

export default App;
