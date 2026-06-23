import { useState } from 'react';
import type { Product } from '../App';

type ProductFormPageProps = {
  onSave: (product: Omit<Product, 'id'>) => void;
  onCancel: () => void;
};

const categories = ['Eletrônicos', 'Roupas', 'Alimentos', 'Casa', 'Outros'];

export default function ProductFormPage({ onSave, onCancel }: ProductFormPageProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [image, setImage] = useState('');

  const canSave = name.trim() && description.trim() && price.trim();

  return (
    <main className="page page-form">
      <div className="card">
        <div className="form-header">
          <h1>Cadastro de produto</h1>
          <p>Preencha os dados para cadastrar um novo produto.</p>
        </div>

        <label htmlFor="name">Nome</label>
        <input id="name" type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Nome do produto" />

        <label htmlFor="description">Descrição</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Descrição do produto"
          rows={4}
        />

        <label htmlFor="price">Valor</label>
        <input
          id="price"
          type="number"
          min="0"
          step="0.01"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          placeholder="0.00"
        />

        <label htmlFor="category">Categoria</label>
        <select id="category" value={category} onChange={(event) => setCategory(event.target.value)}>
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <label htmlFor="image">Imagem (URL opcional)</label>
        <input id="image" type="url" value={image} onChange={(event) => setImage(event.target.value)} placeholder="https://..." />

        <div className="form-actions">
          <button type="button" className="secondary-btn" onClick={onCancel}>
            Cancelar
          </button>
          <button
            type="button"
            className="primary-btn"
            disabled={!canSave}
            onClick={() => {
              onSave({
                name: name.trim(),
                description: description.trim(),
                price: Number(price),
                category,
                image: image.trim() || undefined,
              });
            }}
          >
            Salvar
          </button>
        </div>
      </div>
    </main>
  );
}
