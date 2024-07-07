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
      <div className="bg-white min-h-[calc(100vh-7rem)] py-16 gap-28">
        <div className="w-full flex flex-col">
          <h1 className="text-center text-4xl font-medium mb-2">
            NOS SERVICES
          </h1>
          <h2 className="text-center text-xl text-yellow-700 mb-20">
            Choisissez la solution qui vous convient le plus
          </h2>
          <div className="w-full flex justify-around px-20 gap-10">
            <div className="card bg-white shadow-xl w-1/4">
              <figure className="px-20 pt-10">
                <img src="box.png" alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Solution en Carton</h2>
                <p className="mb-4">
                  Donnez du volume et du sens à votre communication visuelle
                </p>
                <div className="card-actions">
                  <button className="btn bg-black hover:bg-yellow-500 transition-colors text-white duration-200 border-0">
                    Voir Plus
                  </button>
                </div>
              </div>
            </div>
            <div className="card bg-white shadow-xl w-1/4">
              <figure className="px-20 pt-10">
                <img
                  src="printing-machine.png"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Solution Impression</h2>
                <p className="mb-4">
                  Communiquez efficacement et faites passer votre message avec
                  des visuels attractifs.
                </p>
                <div className="card-actions">
                  <button className="btn bg-black hover:bg-yellow-500 transition-colors text-white duration-200 border-0">
                    Voir Plus
                  </button>
                </div>
              </div>
            </div>
            <div className="card bg-white shadow-xl w-1/4">
              <figure className="px-20 pt-10">
                <img src="exhibition.png" alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Solution Exposition</h2>
                <p className="mb-4">De la conception à l'installation</p>
                <div className="card-actions">
                  <button className="btn bg-black hover:bg-yellow-500 transition-colors text-white duration-200 border-0">
                    Voir Plus
                  </button>
                </div>
              </div>
            </div>
            <div className="card bg-white shadow-xl w-1/4">
              <figure className="px-20 pt-10">
                <img
                  src="responsive-design.png"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Solution Web</h2>
                <p className="mb-4">Stratégie Web globale</p>
                <div className="card-actions">
                  <button className="btn bg-black hover:bg-yellow-500 transition-colors text-white duration-200 border-0">
                    Voir Plus
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-yellow-500 min-h-[calc(100vh-7rem)] py-16 gap-28">
        <div className="w-full flex flex-col">
          <h1 className="text-center text-4xl font-medium mb-2">
            NOS POINTS FORTS
          </h1>
          <h2 className="text-center text-xl text-yellow-700 mb-20">
            Pourquoi nous choisir ?
          </h2>
          <div className="flex px-40 gap-10">
            <div className="shadow-xl p-8 w-1/3 bg-white ">
              <figure className="w-80 h-80 mx-auto">
                <img src="brain.png" alt="Reactivité" />
              </figure>
              <h3 className="text-2xl font-medium my-1">Réactivité</h3>
              <p>
                Chez{" "}
                <span className="text-yellow-600 font-medium">
                  OKT-Solutions
                </span>
                , nous sommes réactifs et prêts à répondre rapidement à vos
                besoins spécifiques, assurant des solutions efficaces et
                adaptées.
              </p>
            </div>
            <div className="shadow-xl p-8 w-1/3 bg-white ">
              <figure className="w-80 h-80 mx-auto">
                <img src="brain 1.png" alt="Créativité" />
              </figure>
              <h3 className="text-2xl font-medium my-1">Créativité</h3>
              <p>
                La créativité est notre moteur chez{" "}
                <span className="text-yellow-600 font-medium">
                  OKT-Solutions
                </span>
                . Nous innovons pour vous offrir des solutions uniques et
                percutantes, que ce soit dans la conception, la publicité ou le
                développement web. service de votre succès.
              </p>
            </div>
            <div className="shadow-xl p-8 w-1/3 bg-white ">
              <figure className="w-80 h-80 mx-auto">
                <img src="handshake.png" alt="Convivialité" />
              </figure>
              <h3 className="text-2xl font-medium my-1">Convivialité</h3>
              <p>
                Nous valorisons les relations humaines chez{" "}
                <span className="text-yellow-600 font-medium">
                  OKT-solutions
                </span>
                , en créant un environnement où chaque interaction est agréable
                et enrichissante, pour une collaboration harmonieuse et durable.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[calc(100vh-7rem)] flex flex-col relative">
        <div className="flex-1 bg-yellow-500 shadow-xl z-10 flex items-center justify-center">
          <div className="w-full flex flex-col items-center absolute top-0 left-0 right-0 mt-20">
            <h1 className="text-4xl font-medium mb-2 text-white">TEMOIGNAGE</h1>
            <h2 className="text-xl mb-10 text-yellow-800">
              Ce que nos clients disent de nous
            </h2>
            <div className="flex px-40 gap-10">
              <div className="shadow-xl p-8 w-1/3 bg-white rounded-xl">
                <p className="leading-9 text-lg text-gray-600">
                  Nous avons le plaisir de collaborer avec Okt depuis 2013, j'ai
                  assisté à la croissance de l'entreprise, et c'est avec fierté
                  et confiance que nous entamons notre 10ème année de
                  collaboration. Je recommande leur agilité et flexibilité.
                </p>
                <div className="w-full flex items-center justify-center gap-6 mt-8">
                  <div className="avatar">
                    <div className="w-36 rounded-full">
                      <img src="ghiles_sahnoune.jpeg" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium my-1">
                      Ghiles Sahnoune
                    </h3>
                    <h3 className="text-xl my-1">Fondateur Adolescence</h3>
                  </div>
                </div>
              </div>
              <div className="shadow-xl p-8 w-1/3 bg-white rounded-xl">
                <p className="leading-9 text-lg text-gray-600">
                  Nous avons le plaisir de collaborer avec Okt depuis 2013, j'ai
                  assisté à la croissance de l'entreprise, et c'est avec fierté
                  et confiance que nous entamons notre 10ème année de
                  collaboration. Je recommande leur agilité et flexibilité.
                </p>
                <div className="w-full flex items-center justify-center gap-6 mt-8">
                  <div className="avatar">
                    <div className="w-36 rounded-full">
                      <img src="ghiles_sahnoune.jpeg" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium my-1">
                      Ghiles Sahnoune
                    </h3>
                    <h3 className="text-xl my-1">Fondateur Adolescence</h3>
                  </div>
                </div>
              </div>
              <div className="shadow-xl p-8 w-1/3 bg-white rounded-xl">
                <p className="leading-9 text-lg text-gray-600">
                  Nous avons le plaisir de collaborer avec Okt depuis 2013, j'ai
                  assisté à la croissance de l'entreprise, et c'est avec fierté
                  et confiance que nous entamons notre 10ème année de
                  collaboration. Je recommande leur agilité et flexibilité.
                </p>
                <div className="w-full flex items-center justify-center gap-6 mt-8">
                  <div className="avatar">
                    <div className="w-36 rounded-full">
                      <img src="ghiles_sahnoune.jpeg" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium my-1">
                      Ghiles Sahnoune
                    </h3>
                    <h3 className="text-xl my-1">Fondateur Adolescence</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-50"></div>
      </div>
    </div>
  );
}
