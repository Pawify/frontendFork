import theme from '@/constants/themes';
import catdog404 from '/catdog404.png'
import building from '/building.png';

export  default function  WorkingOnIt () {

  const { accent } = theme.colors;

    return ( 
      <section className="max-w-md mx-auto my-44 px-6 text-lg" 
      style={{ animation: 'fadeIn 1s' }}>

        <div className="flex justify-center">
          <img src={catdog404} alt="cat-dog-404" className="max-w-[80%] relative top-14 sm:top-10" />
        </div>
        <div className="flex flex-col items-center text-center justify-evenly p-20 bg-gray-100 rounded-2xl shadow-[5px_20px_20px_10px_rgba(0,0,0,0.25)]">
        <img src={building} alt="cat-dog-404" className="max-w-[80%] relative top-14 sm:top-0" />
          <h2 className="text-2xl font-bold mt-3 mb-3">Estamos trabajando en esta seccion</h2>
          <p className="text-gray-600">
            Esta seccion esta en construccion, estara disponible muy pronto.
            Mientras te invitamos a regresar a Home y buscar otra seccion.
          </p>
          <div className="flex items-center gap-8 mt-5">
            <a
              style={{ backgroundColor: accent}}
              href="/"
              className="text-black py-2 px-5 mt-5 rounded-2xl font-semibold transition-opacity hover:opacity-90"
            >
              Back home
            </a>
          </div>
        </div>
      </section>
    );
};