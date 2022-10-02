import Image from 'next/image'
import a from '../../public/images/a.jpg'

export default function CategoryCard({ nome, photo }) {
  function GraphCMSImageLoader({ src }) {
    return `http://localhost:128/download/${src}`
  }

  return (
    <div
      className="mx-2 mb-3
    flex
    h-64 w-48 cursor-pointer flex-col rounded-xl p-2 shadow-lg shadow-green-200 "
    >
      <div
        className="first-letter: flex-[80%]   rounded-xl
       transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 
      "
      >
        <Image
          loader={GraphCMSImageLoader}
          src={photo}
          width={800}
          height={700}
          className="rounded-md"
        />
      </div>
      <div className="border-[1px]  border-gray-200 bg-gray-200" />
      <div className="pt-3 ">
        <h5
          className="
        px-4 py-3 text-center text-xl font-semibold uppercase 
        tracking-tight text-gray-900 opacity-75 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 "
        >
          {nome}
        </h5>
      </div>
    </div>
  )
}
