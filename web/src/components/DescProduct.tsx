import { DescProps } from '@/@types/desc'

export default function DescProduct({ id, desc }: DescProps) {
  return (
    <div
      key={id}
      className="mb-28 flex flex-col items-center justify-center gap-2"
    >
      {desc}
    </div>
  )
}
