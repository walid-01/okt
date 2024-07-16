"use client";
import DynamicText from "@/components/DynamicText";
import Carousel from "@/components/Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logos from "@/data/clients.json";
import Link from "next/link";
import { useRef } from "react";

import "./snap.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Home() {
  const containerRef = useRef(null);
  return (
    <div className="snap-container" ref={containerRef}>
      <ScrollToTopButton containerRef={containerRef} />
      {/* HERO */}
      <div className="min-h-screen flex flex-col snap-section">
        <Navbar />
        <div className="bg-white hero flex-1 w-full">
          <div
            className="w-full h-full bg-cover"
            style={{ backgroundImage: "url(./okt-hero.jpg)" }}
          >
            <div className="hero-content h-full mx-auto flex items-center justify-center flex-col">
              <h1 className="mb-5 text-5xl font-bold text-white">
                Bienvenue chez OKT Solutions
              </h1>
              <DynamicText />
              <Link href="/#services">
                <button className="mt-5 btn bg-yellow-500 border-0 hover:bg-yellow-400 text-lg rounded-none hover:shadow-2xl">
                  Commencer
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* About Us */}
      <div className="bg-yellow-500/80 h-screen snap-section p-10 flex items-center justify-center gap-28">
        <div className="w-1/3 flex flex-col">
          <h1 className="text-center text-4xl text-white font-medium mb-2">
            WHO WE ARE
          </h1>
          <h2 className="text-center text-xl text-yellow-700 mb-8">
            We are many things!
          </h2>
          <p className="text-black text-lg mb-8">
            Chez OKT-Solutions, nous offrons des solutions en carton
            personnalisées pour tous vos projets. Passionnés par l&apos;image et
            la publicité, nous nous engageons à vous fournir des outils de
            communication d&apos;une qualité exceptionnelle.
          </p>
          <p className="text-black text-lg">
            Notre structure flexible et réactive est prête à vous accompagner à
            chaque étape de votre projet, mettant en valeur votre identité
            visuelle. Que vous ayez besoin de services d&apos;impression, de
            création publicitaire, de solutions d&apos;exposition, ou de
            développement de sites web, nous sommes là pour transformer vos
            idées en réalité.
          </p>
        </div>
        <div>
          <img src="okt_logo_lg.jpg" alt="OKT Solutions" />
        </div>
      </div>
      {/* Services */}
      <div
        id="services"
        className="bg-gray-50 h-screen snap-section flex flex-col justify-center"
      >
        <h1 className="text-center text-4xl font-medium mb-2">NOS SERVICES</h1>
        <h2 className="text-center text-xl text-yellow-700 mb-20">
          Choisissez la solution qui vous convient le plus
        </h2>
        <div className="w-full flex justify-around px-20 gap-10">
          <div className="card bg-white shadow-xl w-1/4 transform transition-transform duration-300 hover:translate-y-2 group cursor-pointer">
            <figure className="px-20 pt-10">
              <img src="box.png" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title font-semibold text-xl text-yellow-600">
                Solution en Carton
              </h2>
              <p className="mb-4">
                Donnez du volume et du sens à votre communication visuelle
              </p>
              <div className="card-actions">
                <button className="btn bg-black group-hover:bg-yellow-500 transition-colors text-white duration-200 border-0">
                  Voir Plus
                </button>
              </div>
            </div>
          </div>
          <div className="card bg-white shadow-xl w-1/4 transform transition-transform duration-300 hover:translate-y-2 group cursor-pointer">
            <figure className="px-20 pt-10">
              <img
                src="printing-machine.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title font-semibold text-xl text-yellow-600">
                Solution Impression
              </h2>
              <p className="mb-4">
                Communiquez efficacement et faites passer votre message avec des
                visuels attractifs.
              </p>
              <div className="card-actions">
                <button className="btn bg-black group-hover:bg-yellow-500 transition-colors text-white duration-200 border-0">
                  Voir Plus
                </button>
              </div>
            </div>
          </div>
          <div className="card bg-white shadow-xl w-1/4 transform transition-transform duration-300 hover:translate-y-2 group cursor-pointer">
            <figure className="px-20 pt-10">
              <img src="exhibition.png" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title font-semibold text-xl text-yellow-600">
                Solution Exposition
              </h2>
              <p className="mb-4">De la conception à l&apos;installation</p>
              <div className="card-actions">
                <button className="btn bg-black group-hover:bg-yellow-500 transition-colors text-white duration-200 border-0">
                  Voir Plus
                </button>
              </div>
            </div>
          </div>
          <div className="card bg-white shadow-xl w-1/4 transform transition-transform duration-300 hover:translate-y-2 group cursor-pointer">
            <figure className="px-20 pt-10">
              <img
                src="responsive-design.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title font-semibold text-xl text-yellow-600">
                Solution Web
              </h2>
              <p className="mb-4">Stratégie Web globale</p>
              <div className="card-actions">
                <button className="btn bg-black group-hover:bg-yellow-500 transition-colors text-white duration-200 border-0">
                  Voir Plus
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Points */}
      <div className="bg-yellow-500/80 h-screen snap-section flex flex-col justify-center">
        <h1 className="text-center text-4xl font-medium mb-2 text-white">
          NOS POINTS FORTS
        </h1>
        <h2 className="text-center text-xl text-yellow-700 mb-20">
          Pourquoi nous choisir ?
        </h2>
        <div className="flex px-40 gap-10 text-center">
          <div className="shadow-xl w-1/3 bg-white p-14">
            <figure className="w-40 h-40 mx-auto">
              <img src="brain.png" alt="Reactivité" />
            </figure>
            <h3 className="text-2xl font-medium my-3 text-yellow-600 italic">
              Réactivité
            </h3>
            <p>
              Chez <span className="font-medium">OKT-Solutions, </span>
              nous sommes réactifs et prêts à répondre rapidement à vos besoins
              spécifiques, assurant des solutions efficaces et adaptées.
            </p>
          </div>
          <div className="shadow-xl w-1/3 bg-white p-14">
            <figure className="w-40 h-40 mx-auto">
              <img src="brain 1.png" alt="Créativité" />
            </figure>
            <h3 className="text-2xl font-medium my-3 text-yellow-600 italic">
              Créativité
            </h3>
            <p>
              La créativité est notre moteur chez{" "}
              <span className="font-medium">OKT-Solutions</span>. Nous innovons
              pour vous offrir des solutions uniques et percutantes
            </p>
          </div>
          <div className="shadow-xl w-1/3 bg-white p-14">
            <figure className="w-40 h-40 mx-auto">
              <img src="handshake.png" alt="Convivialité" />
            </figure>
            <h3 className="text-2xl font-medium my-3 text-yellow-600 italic">
              Convivialité
            </h3>
            <p>
              Chez <span className="font-medium">OKT-solutions</span>, en créant
              un environnement où chaque interaction est agréable et
              enrichissante, .
            </p>
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <div className="h-screen snap-section flex flex-col relative">
        <div className="flex-1 bg-yellow-500 shadow-xl z-10 flex items-center justify-center">
          <div className="w-full flex flex-col items-center absolute top-0 left-0 right-0 mt-28">
            <h1 className="text-4xl font-medium mb-2 text-white">TEMOIGNAGE</h1>
            <h2 className="text-xl mb-10 text-yellow-800">
              Ce que nos clients disent de nous
            </h2>
            <div className="flex px-40 gap-10 mt-2">
              <div className="shadow-xl pt-24 pb-10 mt-16 px-10 w-1/3 bg-white rounded-xl flex flex-col items-center ">
                <div className="avatar absolute top-28 border-8 rounded-full border-yellow-500">
                  <div className="w-36 rounded-full">
                    <img src="ghiles_sahnoune.jpeg" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-medium">Ghiles Sahnoune</h3>
                  <h4 className="text-lg text-slate-500">
                    Fondateur Adolescence
                  </h4>
                </div>
                <p className="mt-4 leading-8 text-lg text-gray-600">
                  Nous avons le plaisir de collaborer avec Okt depuis 2013,
                  j&apos;ai assisté à la croissance de l&apos;entreprise, et
                  c&apos;est avec fierté et confiance que nous entamons notre
                  10ème année de collaboration. Je recommande leur agilité et
                  flexibilité.
                </p>
              </div>
              <div className="shadow-xl pt-24 pb-10 mt-16 px-10 w-1/3 bg-white rounded-xl flex flex-col items-center ">
                <div className="avatar absolute top-28 border-8 rounded-full border-yellow-500">
                  <div className="w-36 rounded-full">
                    <img src="ghiles_sahnoune.jpeg" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-medium">Ghiles Sahnoune</h3>
                  <h4 className="text-lg text-slate-500">
                    Fondateur Adolescence
                  </h4>
                </div>
                <p className="mt-4 leading-8 text-lg text-gray-600">
                  Nous avons le plaisir de collaborer avec Okt depuis 2013,
                  j&apos;ai assisté à la croissance de l&apos;entreprise, et
                  c&apos;est avec fierté et confiance que nous entamons notre
                  10ème année de collaboration. Je recommande leur agilité et
                  flexibilité.
                </p>
              </div>
              <div className="shadow-xl pt-24 pb-10 mt-16 px-10 w-1/3 bg-white rounded-xl flex flex-col items-center ">
                <div className="avatar absolute top-28 border-8 rounded-full border-yellow-500">
                  <div className="w-36 rounded-full">
                    <img src="ghiles_sahnoune.jpeg" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-medium">Ghiles Sahnoune</h3>
                  <h4 className="text-lg text-slate-500">
                    Fondateur Adolescence
                  </h4>
                </div>
                <p className="mt-4 leading-8 text-lg text-gray-600">
                  Nous avons le plaisir de collaborer avec Okt depuis 2013,
                  j&apos;ai assisté à la croissance de l&apos;entreprise, et
                  c&apos;est avec fierté et confiance que nous entamons notre
                  10ème année de collaboration. Je recommande leur agilité et
                  flexibilité.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-50"></div>
      </div>
      {/* Our Clients */}
      <div className="bg-neutral-950 h-screen snap-section flex flex-col justify-center ">
        <div>
          <h1 className="text-white text-center text-4xl font-medium mb-2">
            NOS CLIENTS
          </h1>
          <h2 className="text-center text-xl text-yellow-600">
            Ceux qui nous ont fait confiance
          </h2>
        </div>
        <div className="h-1/2 flex items-center">
          <Carousel logos={logos} />
        </div>
      </div>
      {/* Where to find us */}
      <div
        id="contact"
        className="bg-gray-50 h-screen snap-section flex flex-col justify-center gap-14"
      >
        <h1 className="text-center text-4xl font-medium">Où nous trouver</h1>
        <div className="bg-white w-2/3 flex justify-center mx-auto shadow-xl">
          <div className="w-3/5 p-8">
            <h2 className="text-xl text-yellow-600">Contactez-nous</h2>
            <form className="form-control gap-2">
              <div className="w-full flex gap-6">
                <div className="w-1/2">
                  <div className="label">
                    <span className="label-text">Nom et Prénom</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Nom et Prénom"
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="w-1/2">
                  <div className="label">
                    <span className="label-text">Addresse Mail</span>
                  </div>
                  <input
                    type="email"
                    placeholder="Votre e-mail"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
              <div>
                <div className="label">
                  <span className="label-text">Sujet</span>
                </div>
                <input
                  type="text"
                  placeholder="Sujet"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="w-full">
                <div className="label">
                  <span className="label-text">Message</span>
                </div>
                <textarea
                  className="textarea textarea-bordered h-40 w-full resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                className="btn text-white bg-black hover:bg-yellow-600"
                type="button"
              >
                Envoyer
              </button>
            </form>
          </div>
          <div className="w-2/4 p-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d102334.86414568468!2d3.1248389804421053!3d36.72341370606544!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e53bfea5b02e3%3A0xf6506cb3ae97d981!2sOktsolutions!5e0!3m2!1sen!2sus!4v1720888681766!5m2!1sen!2sus"
              width="600"
              height="450"
              className="w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="w-2/3 flex justify-center mx-auto gap-20">
          <div className="bg-white shadow-xl px-10 py-4 flex items-center gap-10 w-96">
            <div className="w-10">
              <img src="phone.png" alt="phone" />
            </div>
            <div>
              <h3 className="font-bold text-yellow-500">TÉLÉPHONE</h3>
              <div>
                <p>
                  0557 430 477{" "}
                  <span className="font-bold text-yellow-500">/</span> 023 794
                  540
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-xl px-10 py-4 flex items-center gap-10 w-96">
            <div className="w-10">
              <img src="mail.png" alt="mail" />
            </div>
            <div>
              <h3 className="font-bold text-yellow-500">EMAIL</h3>
              <p>Contact@okt-s.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="snap-section">
        <Footer />
      </div>
    </div>
  );
}
