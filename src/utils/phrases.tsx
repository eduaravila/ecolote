import {random_limit} from './random';

const facts = [
  'Corea del norte y Cuba son los unicos lugares del mundo en donde no puedes comprar Coca-Cola',
  'El chile mas pícante del mundo, podria causar tu muerte',
  'Las islas canarias, son nombradas asi despues de los perros, no de las aves',
  'Indonesia, alberga a las personas mas bajas (estura) del mundo ',
  'El acuerdo de Paris (cambio climatico), fue firmado por el mayor numero de paises en un solo dia',
  'Solo hay 3 paises en el mundo que no utilizan el sistema metrico',
  'Taumatawhakatangihanga-koauauotamateaturipukakapikimaung-ahoronukupokaiwhenuakitanatahu, es el nombre de un lugar con mas letras en el mundo (85)',
  '4 bebes humanos nacen cada segundo',
  'La capa de ozono tardara 50 años aprox, en recuperarse ',
  'Las personas que viven actualmente, representan el 7% de la poblacion que a vivido en todos los tiempos',
  'Solo dos paises utilizan purpura en sus banderas',
  'Existen 43 paises que AUN, tienen una familia real',
  'La persona tipica, gana menos de 12K DLS al año, tiene un celular, escribe con la mano derecha y no tiene una cuenta bancaria',
  'Aprox 106 billones de humanos an habitado la tierra ',
  'Todas la hormigas en el mundo, pesan lo mismo que todos los humanos',
  'Aprox 2 personas mueren cada segundo',
];

export const getFact = () => {
  let index = random_limit(facts.length, 0);
  return facts[index];
};
