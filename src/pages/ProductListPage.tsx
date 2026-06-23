import type { Product } from '../App';

type ProductListPageProps = {
  products: Product[];
  onAddNew: () => void;
  onLogout: () => void;
};

const defaultCategoryImages: Record<string, string> = {
  Eletrônicos:
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=200',
  Roupas:
    'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=200',
  Alimentos:
    'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=200',
  Casa:
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=300',
  Outros:
    'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=200',
};

function getProductImage(product: Product) {
  if (product.image) {
    return product.image;
  }

  return defaultCategoryImages[product.category] ?? defaultCategoryImages.Outros;
}

export default function ProductListPage({ products, onAddNew, onLogout }: ProductListPageProps) {
  return (
    <main className="page page-list">
      <div className="header">
        <div>
          <p className="subtitle">Produtos cadastrados</p>
          <h1>Produtos</h1>
        </div>
        <button type="button" className="secondary-btn" onClick={onLogout}>
          Sair
        </button>
      </div>

      <div className="toolbar">
        <button type="button" className="primary-btn" onClick={onAddNew}>
          + Cadastrar novo produto
        </button>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <article key={product.id} className="product-card">
            <div className="product-image">
              <img src={getProductImage(product)} alt={product.name} />
            </div>
            <div className="product-content">
              <strong>{product.name}</strong>
              <p>{product.description}</p>
              <div className="product-meta">
                <span>{product.category}</span>
                <span>R$ {product.price.toFixed(2)}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
