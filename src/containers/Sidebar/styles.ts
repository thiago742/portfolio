import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
  color: ${(props) => props.theme.corPrincipal};
`

export const BotaoTema = styled.button`
  font-size: 10px;
  font-weight: bold;
  color: ${(props) => props.theme.corDeFundo};
  padding: 8px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
