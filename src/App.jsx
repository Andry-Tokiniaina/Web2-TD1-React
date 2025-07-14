import { AdmissionEtapes } from "./components/AdmissionEtapes"
import DomaineWidget from "./components/DomaineWidget"
import LogoListe from "./components/LogoListe"
import NavListe from "./components/NavListe"
import Pargraphe from "./components/Paragraphe"
import PargrapheTitre from "./components/ParagrapheTitre"
import { ProgrammePart } from "./components/ProgrammePart"
import {Infos,liens,Debouches,Domaines,ProgrammeText,Techno,TechnoListeLigne1,
  TechnoListeLigne2,Partenaires,PartenairesListe1,PartenairesListe2,Admission,
  ProgrammePartText,
  carouselElements,
  EquipePedagogiqueListe} from "./texts"
import MyCarousel from "./components/carousel"
import { Carousel } from "react-responsive-carousel"
import CarouselEquipe from "./components/CarouselEquipe"

function App() {

  return (
    <>
    <div className="h-screen w-full">

      {/* ******************************************************************************************************************************* */}
      <div className="h-1/7 bg-blue-950 flex flex-row justify-around items-center">
        <div>
          <img src="src\assets\cropped-Logo-e1662790239183.png" alt="" className="h-18"/>
        </div> 
        <div className="flex flex-row items-center">
          <NavListe elements={liens}/>
          <div className="bg-amber-400 text-lg text-blue-50 p-2 rounded-md font-bold w-30 flex  flex-col items-center">INTRANET</div>
        </div>
      </div>

      {/* ******************************************************************************************************************************* */}
      <div>
         <MyCarousel elements={carouselElements}/>
      </div>

      {/* ******************************************************************************************************************************* */}
      <div className="h-screen w-full flex flex-row justify-center p-20">
        <div className="w-3/7 flex items-center justify-center">
          <img src="src\assets\A-propos-left-1.webp" alt="" className="p-6"/>
        </div>
        <div className="w-3/7 flex flex-col justify-between">
          <h1 className="font-bold text-blue-950 text-5xl font-serif"> à propos de nous</h1>
          <Pargraphe elements={Infos}/>
        </div>
      </div>

      {/* ******************************************************************************************************************************* */}
      <div className="bg-indigo-400 h-9/10 flex flex-col items-center py-10 px-50 text-center">
        <h1 className="text-5xl font-medium font-serif text-blue-50">L'équipe pédagogique</h1>
        <p className="text-lg text-blue-50">
          Notre équipe pédagogique se compose d’experts nationaux et internationaux de l’informatique,
           de la cybersécurité, de l’intelligence artificielle, dont un ingénieur chez Google.
            Ils sont passionnés par l’informatique et sont engagés vers l’excellence.
           Nous sommes conscients que cette équipe est la pierre angulaire de l’employabilité de nos étudiants,
            elle a été soigneusement sélectionnée.
        </p>
        <CarouselEquipe items={EquipePedagogiqueListe}/>
      </div>

      {/* ******************************************************************************************************************************* */}
      <div className="h-6/7 flex">
        <div className="w-3/5 p-30">
          <PargrapheTitre elements={Debouches}/>
          <p className="text-blue-950">
            Développeur back end, développeur front end, développeurs mobile, chefs de projet, exploitants cloud,
            analystes cybersécurité, pentesters, auditeur technique SSI, auditeur organisationnel SSI, administrateur
            système et réseau, développeur de sécurité…"
        </p>
        </div>
        <div>
          <img src="src\assets\IMG-02-e1720543344824-987x1024-1.webp" alt="" className="h-3/4"/>
        </div>
      </div>

      {/* ******************************************************************************************************************************* */}
      <div className="h-8/7 bg-gray-100 flex flex-col items-center p-10 text-center">
        <h1 className="font-medium text-5xl text-blue-950 p-5">Domaines</h1>
        <p className="text-blue-950 text-lg">
          Au cours de vos trois ans de formation,
           naviguez entre les domaines les plus porteurs
            du numérique du présent et de l’avenir :
        </p>
        <DomaineWidget elements={Domaines}/>
      </div>

      {/* ******************************************************************************************************************************* */}
      <div className="h-15/16 bg-indigo-400 flex flex-col text-center py-15 px-30">
        <h2 className="text-white text-5xl font-serif font-medium p-5">Admission</h2>
        <p className="text-white font-medium p-5 text-lg">
          Ouverte aux bacheliers de toutes les séries, l’admission chez HEI se fait par test de niveau :
        </p>
        <p className="text-white font-medium text-lg">
          une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D.
        </p>
        <AdmissionEtapes elements={Admission}/>
        <div className="flex justify-evenly py-5">
          <div className="p-5 border-2 border-white text-white rounded font-bold">Inscrivez-vous ici</div>
          <div className="p-5 bg-blue-950 text-white font-bold">Résultats concours</div>
        </div>
      </div>

      {/* ******************************************************************************************************************************* */}
      <div className="h-4/5 flex px-35 py-10">
        <div className="w-1/2"><img src="src\assets\IMG-03-e1720537524581-1024x950-1.webp" alt="" className="h-1/1"/></div>
        <div className="w-1/2">
          <PargrapheTitre elements={ProgrammeText}/>
          <div className="p-2 font-bold text-blue-950 text-lg border-2 border-blue-950 w-45">Notre Programme</div>
        </div>
      </div>

      {/* ******************************************************************************************************************************* */}
      <div className="h-9/8 p-10">
        <div className="flex justify-center h-1/3 p-5"><ProgrammePart elements={ProgrammePartText}/></div>
        <div className="flex justify-center h-2/3">
          <img src="src\assets\Mask-group-1.webp" alt="" className="w-1/4 px-5 h-1/1"/>
          <img src="src\assets\Mask-group-2.webp" alt="" className="w-1/4 px-5 h-1/1"/>
          <img src="src\assets\Mask-group-3.webp" alt="" className="w-1/4 px-5 h-1/1"/>
        </div>

      </div>

      {/* ******************************************************************************************************************************* */}
      <div className="h-5/6 text-center px-40 bg-gray-100 py-10">
        <PargrapheTitre elements={Techno}/>
        <LogoListe elements={TechnoListeLigne1}/>
        <LogoListe elements={TechnoListeLigne2}/>
      </div>

      {/* ******************************************************************************************************************************* */}
      <div className="h-5/6 text-center px-40 py-10">
        <PargrapheTitre elements={Partenaires}/>
        <LogoListe elements={PartenairesListe1}/>
        <LogoListe elements={PartenairesListe2}/>
      </div>

      {/* ******************************************************************************************************************************* */}
      <div className="h-1/2 bg-blue-950 flex justify-around items-center px-15">
        <div className="w-1/6 text-white">
          <p className="py-5 font-medium">Formation habilitée par l’Etat suivant le système LMD</p>
          <p className="py-5 font-medium">Habilitation MESupRes n°31309/2023</p>
        </div>

        <div className="w-1/6">
          <p className="text-white  font-medium">
            <h1 className="font-bold text-2xl">Adresse</h1>
            <p className="py-5">II J 161 R Ambodivoanjo</p>
            <p className="">Ivandry Antananarivo</p>
            <p className="py-5">101, Madagascar</p>
          </p>
          
        </div>
        <div className="w-1/6">
          <h1 className="font-bold text-2xl text-white">Navigation</h1>
          <ul className="text-white  font-medium">
            <li className="py-5">Accueil</li>
            <li className="">Actualités</li>
            <li className="py-5">Bourses d'études</li>
            <li className="">Inscription</li>
          </ul>
        </div>
        <div className="w-1/6">
          <h1 className="font-bold text-2xl text-white">Medias sociaux</h1>
          <div className="flex">
            <div className="bg-yellow-400 h-1/20 w-3/10 m-5 text-white font-bold text-2xl p-5"style={{borderRadius:"50%"}}>F</div>
            <div className="bg-yellow-400 h-1/20 w-3/10 m-5 text-white font-bold text-2xl p-5"style={{borderRadius:"50%"}}>in</div>
            <div className="bg-yellow-400 h-1/20 w-3/10 m-5 text-white font-bold text-2xl p-5"style={{borderRadius:"50%"}}>.</div>
          </div>
        </div>
      </div>

      {/* ******************************************************************************************************************************* */}
      <div className="flex items-center justify-center font-bold text-gray-500 py-2">
        © HEI MADAGASCAR
      </div>
      
    </div>
    </>
  )
}




export default App;



