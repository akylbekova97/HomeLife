import icon from 'shared/assets/icons/deleteIcon.png'

import s from './DataList.module.scss'

interface Props {
  data: string[] | []
}
export function DataList({ data }: Props) {
  return (
    <ul className={s.container}>
      {data.length === 0 ? (
        'Тут пусто :)'
      ) : (
        <>
          {data.map((el, ind) => (
            <li key={ind}>
              {el}

              <img
                src={icon}
                alt="delete icon"
              />
            </li>
          ))}
        </>
      )}
    </ul>
  )
}
