
import './App.css';

function App() {

  return (
    <div className="min-h-screen p-4 sm:p-8">
      <h1 className="mb-4 sm:mb-8 text-2xl sm:text-4xl font-semibold text-purple-600 text-center">
        Tailwind CSS - Grid System
      </h1>
      <div className="grid sm:grid-cols-2 gap-6 mb-4 sm:mb-6">
        <div className="rounded-lg sm:rounded-xl shadow-lg p-6 sm:p-8 bg-purple-200">
          <h3 className="capitalize text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-purple-600">
            Title 1
          </h3>
          <p className="text-sm/6 sm:text-[1rem]/7 first-letter:uppercase text-slate-800 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            adipisci vitae assumenda odit asperiores sapiente nemo id, vero
            accusantium accusamus obcaecati consequatur necessitatibus beatae
            aperiam libero facere quo nobis debitis quidem odio similique
            mollitia animi vel maiores. Magni perspiciatis soluta eaque iusto
            recusandae sed libero, consequuntur ab culpa necessitatibus cumque.
          </p>
        </div>
        <div className="rounded-lg sm:rounded-xl shadow-lg p-6 sm:p-8 bg-purple-200">
          <h3 className="capitalize text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-purple-600">
            Title 2
          </h3>
          <p className="text-sm/6 sm:text-[1rem]/7 first-letter:uppercase text-slate-800 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, iste
            voluptatibus laborum praesentium cum error iure nobis. Inventore,
            asperiores. Sequi non ad nihil obcaecati similique, id perspiciatis
            voluptate repellendus ipsa iste quo laboriosam reiciendis voluptatum
            vel. Deserunt tempore facere et, in minus aliquid dolorem doloribus
            recusandae, exercitationem assumenda voluptates consectetur!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 mb-4 sm:mb-6">
        <div className="rounded-lg sm:rounded-xl shadow-lg p-6 sm:p-8 bg-purple-200 sm:col-span-3 hidden md:block">
          <h3 className="capitalize text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-purple-600">
            Services
          </h3>
          <p className="text-sm/6 sm:text-[1rem]/7 first-letter:uppercase text-slate-800 text-justify">
            <ul className="list-none p-0 m-0 overflow-hidden">
              <li className="">
                <a href="" className="text-blue-600 visited:text-purple-600">
                  Web Development
                </a>
              </li>
              <li className="">
                <a href="" className="text-blue-600 visited:text-purple-600">
                  Mobile App Development
                </a>
              </li>
              <li className="">
                <a href="" className="text-blue-600 visited:text-purple-600">
                  Cloud Services
                </a>
              </li>
              <li className="">
                <a href="" className="text-blue-600 visited:text-purple-600">
                  Software Licensing
                </a>
              </li>
            </ul>
          </p>
        </div>
        <div className="rounded-lg sm:rounded-xl shadow-lg p-6 sm:p-8 bg-purple-200 col-span-12 md:col-span-9">
          <h3 className="capitalize text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-purple-600">
            Title 3
          </h3>
          <p className="text-sm/6 sm:text-[1rem]/7 first-letter:uppercase text-slate-800 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, iste
            voluptatibus laborum praesentium cum error iure nobis. Inventore,
            asperiores. Sequi non ad nihil obcaecati similique, id perspiciatis
            voluptate repellendus ipsa iste quo laboriosam reiciendis voluptatum
            vel. Deserunt tempore facere et, in minus aliquid dolorem doloribus
            recusandae, exercitationem assumenda voluptates consectetur!
          </p>
          <p className="text-sm/6 sm:text-[1rem]/7 first-letter:uppercase text-slate-800 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vero
            eveniet aliquam autem placeat labore officia minus fugiat similique
            eos quae a excepturi cumque quibusdam hic quisquam esse numquam
            neque, tenetur harum quis illo tempore nam! Laboriosam quia ratione
            incidunt?
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="rounded-lg sm:rounded-xl shadow-lg p-6 sm:p-8 bg-purple-200 col-span-12 md:col-span-8">
          <h3 className="capitalize text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-purple-600">
            Title 4
          </h3>
          <p className="text-sm/6 sm:text-[1rem]/7 first-letter:uppercase text-slate-800 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quo
            in eum veniam quaerat deleniti nam voluptas eveniet quidem enim
            rerum cupiditate sapiente, omnis error dolor magni, veritatis ab
            corrupti tempore maiores porro architecto consequatur distinctio
            aspernatur. Deleniti excepturi repudiandae cumque autem. A
            aspernatur deserunt, ea, libero odit placeat ratione voluptate
            laudantium repudiandae repellendus esse illum cum doloremque fugiat
            enim.
          </p>
          <p className="text-sm/6 sm:text-[1rem]/7 first-letter:uppercase text-slate-800 text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
            totam esse explicabo ab, ipsam eum labore aspernatur tempore
            mollitia, adipisci, perferendis quaerat aperiam odio error magnam.
            Quaerat atque enim sed.
          </p>
          <p className="text-sm/6 sm:text-[1rem]/7 first-letter:uppercase text-slate-800 text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
            repellendus officia ipsam doloremque nemo! Vitae, dicta rem.
            Voluptatibus animi et eius, ab veritatis sint consectetur deserunt
            nihil delectus, corporis deleniti quisquam officia minus praesentium
            sapiente veniam.
          </p>
          <p className="text-sm/6 sm:text-[1rem]/7 first-letter:uppercase text-slate-800 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quo
            in eum veniam quaerat deleniti nam voluptas eveniet quidem enim
            rerum cupiditate sapiente, omnis error dolor magni, veritatis ab
            corrupti tempore maiores porro architecto consequatur distinctio
            aspernatur. Deleniti excepturi repudiandae cumque autem. A
            aspernatur deserunt, ea, libero odit placeat ratione voluptate
            laudantium repudiandae repellendus esse illum cum doloremque fugiat
            enim.
          </p>
        </div>
        <div className="rounded-lg sm:rounded-xl shadow-lg p-6 sm:p-8 bg-purple-200 col-span-12 md:col-span-4">
          <h3 className="capitalize text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-purple-600">
            Advertisement
          </h3>
          <p className="text-sm/6 sm:text-[1rem]/7 first-letter:uppercase text-slate-800 text-justify">
            <ul className="list-disc p-0 m-0 overflow-hidden">
              <li className="text-purple-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
                aperiam nesciunt sit tempore facere qui quam aliquid voluptatum
                unde itaque.
              </li>
              <li className="text-purple-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                laudantium voluptatibus neque minima dignissimos, quas unde
                porro mollitia dolore quidem assumenda, et cum nihil?
              </li>
              <li className="text-purple-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae,
                eos repudiandae maiores similique nobis inventore quod enim!
                Quisquam, adipisci cumque.
              </li>
              <li className="text-purple-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut,
                nisi laudantium dolorem labore, voluptate sit porro
                necessitatibus dolores, asperiores consectetur eaque quaerat
                saepe molestias placeat.
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div className="@container card">
        <div className="flex flex-row @flex-col">
          <div className="rounded-lg sm:rounded-xl shadow-lg p-6 sm:p-8 bg-purple-200">
            <h3 className="capitalize text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-purple-600">
              Menu
            </h3>
            <p className="text-sm/6 sm:text-[1rem]/7 first-letter:uppercase text-slate-800 text-justify">
              <ul className="list-disc p-0 m-0 overflow-hidden">
                <li className="text-slate-800">List item 1</li>
                <li className="text-slate-800">List item 2</li>
                <li className="text-slate-800">List item 3</li>
                <li className="text-slate-800">List item 4</li>
              </ul>
            </p>
          </div>
          <div className="rounded-lg sm:rounded-xl shadow-lg p-6 sm:p-8 bg-purple-200">
            <h3 className="capitalize text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-purple-600">
              Title 5
            </h3>
            <p className="text-sm/6 sm:text-[1rem]/7 first-letter:uppercase text-slate-800 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
              sit veritatis nemo aliquid accusantium ipsum officia cupiditate,
              rem, maxime iste ipsam tempora nesciunt et, quod voluptate nobis.
              Id, natus quibusdam!
            </p>
            <p className="text-sm/6 sm:text-[1rem]/7 first-letter:uppercase text-slate-800 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              voluptate cum exercitationem asperiores voluptatum? Dolore
              voluptate atque provident blanditiis minus veritatis beatae
              molestias sit ducimus facilis, ipsa aliquam nisi? Sunt laborum eos
              laboriosam eum. Tempora, modi nihil. Nisi dignissimos inventore
              minima, pariatur magnam deserunt porro libero quo rem temporibus
              non tempora et corrupti quae nemo officiis eveniet reprehenderit
              animi. Nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
