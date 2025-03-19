import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Profile.module.scss';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  subscription: string;
  history: string[];
}

const Profile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token'); // Token JWT armazenado após login
        if (!token) {
          setError('Você precisa estar logado para acessar esta página.');
          navigate('/');
          return;
        }

        const response = await fetch('https://auth-api-8.onrender.com/api/auth/google', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Erro ao buscar dados do usuário');
        }

        const data = await response.json();
        setUser(data.user);
      } catch (err) {
        setError('Erro ao carregar os dados do usuário.');
        console.error(err);
        navigate('/');
      }
    };

    fetchUserData();
  }, [navigate]);

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  if (!user) {
    return <div className={styles.loading}>Carregando...</div>;
  }

  return (
    <div className={styles.profileContainer}>
      <h1>Perfil do Usuário</h1>
      <div className={styles.userInfo}>
        <p><strong>Nome:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Telefone:</strong> {user.phone || 'Não informado'}</p>
        <p><strong>Assinatura:</strong> {user.subscription}</p>
        <div className={styles.history}>
          <h3>Histórico</h3>
          {user.history && user.history.length > 0 ? (
            <ul>
              {user.history.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>Nenhum item no histórico.</p>
          )}
        </div>
      </div>
      <button className={styles.logoutButton} onClick={() => {
        localStorage.removeItem('token');
        navigate('/');
      }}>
        Sair
      </button>
    </div>
  );
};

export default Profile;