import sytled from 'styled-components'

import { Props } from './index'

export const Titulo = sytled.h3<Props>`
  color: #282A35;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
`
