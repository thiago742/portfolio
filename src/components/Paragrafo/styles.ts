// styles.ts
import styled from 'styled-components'

export const P = styled.p<{
  $tipo?: 'principal' | 'secundario'
  fontSize?: number
}>`
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '14px')};
  color: ${(props) =>
    props.$tipo === 'principal'
      ? props.theme.corPrincipal
      : props.theme.corSecundaria};
  line-height: 22px;
`
