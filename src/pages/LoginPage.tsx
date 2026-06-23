import { useState } from 'react';

type LoginPageProps = {
  onLogin: () => void;
};

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main className="page page-login">
      <div className="card">
        <div className="brand">DispMov UNI</div>
        <h1>Entrar</h1>

        <label htmlFor="username">Usuário</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Informe seu usuário"
        />

        <label htmlFor="password">Senha</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Informe sua senha"
        />

        <button
          type="button"
          className="primary-btn"
          onClick={onLogin}
          disabled={!username || !password}
        >
          Entrar
        </button>
      </div>
    </main>
  );
}
