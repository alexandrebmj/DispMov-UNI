import { useRef, useState } from 'react';

type LoginPageProps = {
  onLogin: (username: string, password: string) => boolean;
};

export default function LoginPage({ onLogin }: LoginPageProps) {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleFocus = (input: HTMLInputElement | null) => {
    input?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
  };

  const handleSubmit = () => {
    const isValid = onLogin(username.trim(), password);
    if (!isValid) {
      setError('Usuário ou senha incorretos. Tente novamente.');
      return;
    }
    setError('');
  };

  return (
    <main className="page page-login">
      <div className="card">
        <div className="brand">DispMov UNI</div>
        <h1>Entrar</h1>

        <label htmlFor="username">Usuário</label>
        <input
          id="username"
          ref={usernameRef}
          autoComplete="username"
          type="text"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
            setError('');
          }}
          onFocus={() => handleFocus(usernameRef.current)}
          placeholder="Informe seu usuário"
        />

        <label htmlFor="password">Senha</label>
        <input
          id="password"
          ref={passwordRef}
          autoComplete="current-password"
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
            setError('');
          }}
          onFocus={() => handleFocus(passwordRef.current)}
          placeholder="Informe sua senha"
        />

        {error ? <div className="error-text">{error}</div> : null}

        <button
          type="button"
          className="primary-btn"
          onClick={handleSubmit}
          disabled={!username.trim() || !password}
        >
          Entrar
        </button>
      </div>
    </main>
  );
}
