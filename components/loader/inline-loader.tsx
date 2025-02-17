import classNames from 'classnames'
import './loader.css'

type Props = {
  size?: 'small' | 'medium' | 'large'
  color?: string
}

export function InlineLoader({ color = 'white', size = 'small' }: Props) {
  return (
    <span className={classNames('inline-loader', size === 'small' && 'h-4 w-4')} style={{ borderColor: color }}></span>
  )
}
