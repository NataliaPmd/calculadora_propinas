import MenuItem from "./components/MenuItem"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {
  const {addItem} = useOrder()

  return (
    <>
      <header className="bg-teal-100 py-5">
        <h1 className="text-center text-2xl font-bold text-gray-500">Calculadora de propinas y consumo</h1>
      </header>

    <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
    <div className="p-5">
        <h2 className="text-3xl font-black">Menu</h2>
        <div className="space-y-3 mt-10">
          {menuItems.map(item => (
            <MenuItem
              key={item.id}
              item={item}
              addItem={addItem}
            />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-black">Consumo</h2>
      </div>
      
    </main>

    </>
  )
}

export default App
