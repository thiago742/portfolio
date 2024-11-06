// styles.ts
import styled from 'styled-components'

export const P = styled.p<{
  $tipo?: 'principal' | 'secundario'
  fontSize?: number
}>`
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '14px')};
  color: ${(props) => (props.$tipo === 'principal' ? '#282a35' : '#949494')};
  line-height: 22px;
`
