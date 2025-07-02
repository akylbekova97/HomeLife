import s from './ImageUpload.module.scss'

interface Props {
  img: string
  onChange: (imgBase64: string) => void
}

export function ImageUpload({ img, onChange }: Props) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        onChange(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className={s.container}>
      <label>
        {img ? (
          <>
            <img
              src={img}
              alt="preview"
            />
            <i>заменить</i>
          </>
        ) : (
          <i>добавить фото товара</i>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          hidden
        />
      </label>
    </div>
  )
}
