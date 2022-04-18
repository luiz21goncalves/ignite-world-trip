const paragraph =
  'Nam auctor iaculis nulla sed ornare. Nunc magna nibh, tincidunt id venenatis vel, euismod sed ante. Donec dapibus sapien vel mollis pellentesque. Ut accumsan, nisl sed sagittis dictum, nunc nisl consequat lacus, non volutpat tellus nibh quis sapien. Cras gravida, sem vel consectetur posuere, risus tellus fermentum purus, eget dictum purus arcu et mi. Praesent vel interdum elit, quis fringilla arcu.';

const city = {
  name: 'Konahagakure',
  country: 'País do Fogo',
  image_url:
    'https://www.einerd.com.br/wp-content/uploads/2020/08/Konohagakure-Naruto-capa-890x466.jpg',
  flag:
    'https://cdn.ecvol.com/s/www.artcutlab.com.br/produtos/naruto-konoha-vila-da-folha/z/0.jpeg?v=',
};

const info = [
  { count: 50, label: 'países' },
  { count: 60, label: 'línguas' },
  { count: 27, label: 'cidades + 100' },
];

export default {
  europa: {
    name: 'Europa',
    paragraph,
    cover:
      'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80',
    info,
    city,
  },
  'america-do-norte': {
    name: 'América do Norte',
    cover:
      'https://images.unsplash.com/photo-1603015245012-68988952fc73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    paragraph,
    info,
    city,
  },
  'america-do-sul': {
    name: 'América do Sul',
    cover:
      'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    paragraph,
    info,
    city,
  },
  asia: {
    name: 'Ásia',
    cover:
      'https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    paragraph,
    info,
    city,
  },
  africa: {
    name: 'África',
    cover:
      'https://images.unsplash.com/photo-1484318571209-661cf29a69c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    paragraph,
    info,
    city,
  },
  oceania: {
    name: 'Oceania',
    cover:
      'https://images.unsplash.com/photo-1595263187083-1334b774dfb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1507&q=80',
    paragraph,
    info,
    city,
  },
};
