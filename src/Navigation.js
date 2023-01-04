export default function Navigation() {
  return (
    <div className="bg-purple-500 text-white py-5">
      <div className="px-4 container mx-auto">
        <div className="grid gap-10">
          <Input />
          <div className="flex justify-between">
            <NavigationItem title="Todas as categorias" />
            <NavigationItem title="Imoveis" />
            <NavigationItem title="Autos e peças" />
            <NavigationItem title="Eletronicos e celulares" />
            <NavigationItem title="Para sua casa" />
            <NavigationItem title="Vagas de emprego" />
            <NavigationItem title="Serviços" />
            <NavigationItem title="Musucas e hobbies" />
            <NavigationItem title="Esporte e lazer" />
            <NavigationItem title="Moda e beleza" />
            <NavigationItem title="Agro e industria" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <input
      className="text-xl text-gray-800 w-full p-4 rounded shadow-md"
      placeholder="Estou procurando por..."
    />
  );
}

function NavigationItem(props) {
  return (
    <div className="flex flex-col gap-2 items-center w-14">
      <div className="bg-white rounded-full w-14 h-14 shadow-md"></div>
      <div className="text-white text-xs text-center">{props.title}</div>
    </div>
  );
}
