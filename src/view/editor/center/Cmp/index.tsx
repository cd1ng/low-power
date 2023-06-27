import { ICmpWithKey } from 'src/store/editStoreTypes'
import styles from './index.module.less'
import { ASIDE_TEXT_TYPE, ASIDE_IMAGE_TYPE } from 'src/constants/left-aside'
import { Img, Text } from './CmpDetail'

interface ICmpProps {
  cmp: ICmpWithKey
  index: number
}

export default function Cmp(props: ICmpProps) {
  const { cmp, index } = props
  const { style } = cmp

  return (
    <div className={styles.main} style={{ ...style, zIndex: index }}>
      {cmp.type === ASIDE_TEXT_TYPE && <Text {...cmp} />}
      {cmp.type === ASIDE_IMAGE_TYPE && <Img {...cmp} />}
    </div>
  )
}
