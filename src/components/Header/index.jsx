import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./styles";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/images/avatar_placeholder.svg";

import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function Header() {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  return (
    <Container>
      <Profile to="/profile">
        <img src={avatarUrl} alt={user.name} />

        <div>
          <span>Bem-vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={handleSignOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
