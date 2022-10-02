import { produceWithPatches } from 'immer'
import { useEffect, useState } from 'react'
import User from '../../components/admin/users/User'
import UserOptions from '../../components/admin/users/UserOptions'
import Product from '../../components/user-products/Product'
import ProductOptions from '../../components/user-products/ProductOptions'
import USerService from '../../services/User_Service'

export default function Users() {
  const [users, setUsers] = useState([])

  // Get the authenticated user role
  useEffect(() => {
    USerService.getAllUsers().then((response) => {
      setUsers(response.data)
      console.log('users ' + JSON.stringify(users))
    })
  }, [users])

  const handleDelete = async (id) => {
    console.log(id)
    try {
      const res = await axios.delete(
        `http://localhost:128/admin/delUser/${id}`,
        {
          headers: authHeader(),
        }
      )
      setUsers(users.filter((user) => user._id !== id))
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <div className="container mx-auto ml-2 rounded-md bg-white sm:px-8">
        <div className="py-8">
          <div>
            <h2 className="font-teko text-3xl leading-tight tracking-wide">
              MES Produits
            </h2>
          </div>
          <div className="flex justify-end">
            <div class="mb-3 xl:w-96 ">
              <div class="input-group mb-4   flex w-full flex-row items-stretch rounded">
                <input
                  type="search"
                  class="form-control relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />
                <span
                  class="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-gray-700"
                  id="basic-addon2"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="search"
                    class="w-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <div className="-mx-4 overflow-x-auto px-4 py-4 sm:-mx-8 sm:px-8">
            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="border-b-2 border-gray-200 bg-gray-100  py-3 text-center text-xs font-semibold uppercase tracking-wider text-gray-600">
                      Username
                    </th>
                    <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider text-gray-600">
                      Email
                    </th>
                    <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider text-gray-600">
                      telephone
                    </th>
                    <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider text-gray-600">
                      Options
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(
                    (user, index) => (
                      // <div key={product.id_pro}>
                      <User
                        onClick={() => handleDelete(user._id)}
                        key={user._id}
                        options={UserOptions}
                        username={user.username}
                        email={user.email}
                        telephone={user.telephone}
                      />
                      // </div>
                    )
                    //   )
                    // ) : (
                    //   <></>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
