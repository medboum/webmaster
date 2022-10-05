import { useState } from 'react'
import { Tab } from '@headlessui/react'
import ProductCard from './product/ProductCard'
import logo from '../public/images/a.jpg'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs() {
  let [categories] = useState({
    'Nos Meilleures produits': [
      {
        id: 1,
        title: 'Product 1',
        prix: '100 Mad',
        description: 'Description here',
      },
      {
        id: 2,
        title: 'Product 2',
        prix: '150 Mad',
        description: 'Description here',
      },
    ],
    'Nos Meilleures offres': [
      {
        id: 3,
        title: 'Ofrre 1',
        prix: '100 Mad',
        description: 'Description here',
      },
    ],
  })

  return (
    <div className="flex w-full flex-col items-center justify-center px-2 py-16 sm:px-0 md:max-w-[70%]">
      <Tab.Group>
        <Tab.List className="flex w-[80%] justify-center space-x-1 rounded-xl bg-green-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-green-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-green-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-green-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2  w-full">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-green-400 focus:outline-none focus:ring-2'
              )}
            >
              <ul className="flex flex-wrap">
                {posts.map((post) => (
                  <ProductCard
                    key={post.id}
                    image={logo}
                    titre={post.title}
                    prix={post.prix}
                    descpription={post.description}
                  />
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
