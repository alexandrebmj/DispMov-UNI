import type { Product } from '../App';

type ProductListPageProps = {
  products: Product[];
  onAddNew: () => void;
  onLogout: () => void;
};

export default function ProductListPage({ products, onAddNew, onLogout }: ProductListPageProps) {
  return (
    <main className="page page-list">
      <div className="header">
        <div>
          <p className="subtitle">Produtos cadastrados</p>
          <h1>Catálogo</h1>
        </div>
        <button type="button" className="secondary-btn" onClick={onLogout}>
          Sair
        </button>
      </div>

      <div className="toolbar">
        <button type="button" className="primary-btn" onClick={onAddNew}>
          Cadastrar novo produto
        </button>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <article key={product.id} className="product-card">
            <div className="product-image">
              {product.image ? <img src={product.image} alt={product.name} /> : <div className="image-placeholder">Sem imagem</div>}
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
