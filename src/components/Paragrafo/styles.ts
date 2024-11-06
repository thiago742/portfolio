// styles.ts
import styled from 'styled-components'

// Definindo explicitamente a prop `$tipo` para styled.p
export const P = styled.p<{ $tipo?: 'principal' | 'secundario' }>`
  font-size: 14px;
  color: ${(props) => (props.$tipo === 'principal' ? '#282a35' : '#949494')};
  line-height: 22px;
`
