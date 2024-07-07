import DynamicText from "@/components/DynamicText";

export default function Home() {
  return (
    <div>
      <div className="hero min-h-screen bg-yellow-500">
        <div className="hero-overlay bg-opacity-60 bg-transparent"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-5xl">
            <h1 className="mb-5 text-5xl font-bold text-white">
              Bienvenue chez OKT Solutions
            </h1>
            <DynamicText />
            <button className="mt-5 btn bg-yellow-600 border-0 hover:bg-yellow-500">
              Commencer
            </button>
          </div>
        </div>
      </div>
      <div className="bg-yellow-500 bg-opacity-80 min-h-[calc(100vh-7rem)] p-10 flex items-center justify-center gap-28">
        <div className="w-1/3 flex flex-col">
          <h1 className="text-center text-4xl text-white font-medium mb-2">
            WHO WE ARE
          </h1>
          <h2 className="text-center text-xl text-yellow-700 mb-8">
            We are many things!
          </h2>
          <p className="text-black text-lg mb-8">
            Chez OKT-Solutions, nous offrons des solutions en carton
            personnalisées pour tous vos projets. Passionnés par l'image et la
            publicité, nous nous engageons à vous fournir des outils de
            communication d'une qualité exceptionnelle.
          </p>
          <p className="text-black text-lg">
            Notre structure flexible et réactive est prête à vous accompagner à
            chaque étape de votre projet, mettant en valeur votre identité
            visuelle. Que vous ayez besoin de services d'impression, de création
            publicitaire, de solutions d'exposition, ou de développement de
            sites web, nous sommes là pour transformer vos idées en réalité.
          </p>
        </div>
        <div>
          <img src="okt_logo_lg.jpg" alt="OKT Solutions" />
        </div>
      </div>
      <div className="bg-yellow-500 min-h-[calc(100vh-7rem)] py-16 gap-28">
        <div className="w-full flex flex-col">
          <h1 className="text-center text-4xl text-white font-medium mb-2">
            NOS SERVICES
          </h1>
          <h2 className="text-center text-xl text-yellow-700 mb-20">
            Choisissez la solution qui vous convient le plus
          </h2>
          <div className="w-full flex justify-around px-20 gap-10">
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
