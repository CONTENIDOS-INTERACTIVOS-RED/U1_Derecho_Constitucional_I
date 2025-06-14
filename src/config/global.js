export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Unidad 1. Historia del constitucionalismo colombiano',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Formación del Estado colombiano',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Primeras expresiones de organización política (1810-1830)',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'La Gran Colombia y la búsqueda de unidad nacional',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Evolución constitucional en el siglo XIX',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'La Constitución de 1991 y el nuevo constitucionalismo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Factores que impulsaron la Asamblea Nacional Constituyente',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Características de la Constitución de 1991',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Impacto actual del nuevo constitucionalismo',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Martínez Garnica, A. (2018). Historia de la primera República de Colombia, 1819-1831: "Decid Colombia sea, y Colombia será". Editorial Universidad del Rosario.  ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/117633?page=420',
    },
    {
      referencia:
        'Aprile-Gniset, J. (2016). La ciudad colombiana: la formación espacial americana prehispánica. Programa Editorial Universidad del Valle.  ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/70403?page=48',
    },
    {
      referencia:
        'Carbonell, M. (2009). Dilemas de la democracia constitucional. Editorial Miguel Ángel Porrúa.  ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/38163?page=12',
    },
    {
      referencia:
        'Correa Restrepo, J. S. (2017). Moneda y Nación: del Federalismo al Centralismo Económico en Colombia (1850-1922) (2a ed.). Colegio de Estudios Superiores de Administración - CESA.  ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/222469?page=53',
    },
    {
      referencia:
        'Arosemena, J. (2019). El Estado Federal de Panamá. Editorial Linkgua USA. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/112831 ',
    },
    {
      referencia:
        'Sampay, A. E. (2011). Constitución y pueblo. Editorial Docencia. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/77531?page=1 ',
    },
    {
      referencia:
        'Cholvis, J. F. (2016). Revisionismo histórico constitucional: y el debate por la constitución). El Cid Editor. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/27614 ',
    },
  ],
  glosario: [
    {
      termino: 'Asamblea Nacional Constituyente',
      significado:
        'Órgano representativo encargado de redactar o reformar la Constitución, mediante deliberación democrática y participación ciudadana.',
    },
    {
      termino: 'Centralismo',
      significado:
        'Sistema político-administrativo donde el poder se concentra en el gobierno nacional, limitando la autonomía de las regiones.',
    },
    {
      termino: 'Confesionalismo',
      significado:
        'Sistema político en el que el Estado adopta oficialmente una religión y la incorpora en sus normas y principios.',
    },
    {
      termino: 'Control constitucional',
      significado:
        'Mecanismo para garantizar que las leyes y actos se ajusten a la Constitución y respeten los derechos fundamentales.',
    },
    {
      termino: 'Estado de derecho',
      significado:
        'Sistema en el cual todos los poderes públicos y ciudadanos están sometidos a la Ley y a la Constitución.',
    },
    {
      termino: 'Federalismo',
      significado:
        'Modelo de organización territorial basado en la autonomía política, administrativa y fiscal de entidades subnacionales.',
    },
    {
      termino: 'Gran Colombia',
      significado:
        'Unión política de Colombia, Venezuela, Ecuador y Panamá bajo un proyecto republicano liderado por Simón Bolívar.',
    },
    {
      termino: 'Liberalismo',
      significado:
        'Doctrina política que defiende la libertad individual, el Estado limitado y la protección de derechos fundamentales.',
    },
    {
      termino: 'Monarquía constitucional',
      significado:
        'Régimen donde el poder del rey está limitado por una Constitución y órganos representativos.',
    },
    {
      termino: 'Nuevo constitucionalismo',
      significado:
        'Corriente jurídica contemporánea que prioriza los derechos humanos, la participación ciudadana y el control del poder estatal.',
    },
    {
      termino: 'Participación ciudadana',
      significado:
        'Mecanismos que permiten a la población intervenir directamente en decisiones públicas y de control político.',
    },
    {
      termino: 'Poder constituyente',
      significado:
        'Capacidad del pueblo para crear, modificar o sustituir una Constitución como expresión de soberanía.',
    },
    {
      termino: 'República',
      significado:
        'Forma de gobierno en la cual el poder reside en el pueblo y es ejercido por representantes elegidos democráticamente.',
    },
    {
      termino: 'Soberanía popular',
      significado:
        'Principio democrático, según el cual el poder político emana del pueblo y debe ejercerse en su beneficio.',
    },
  ],
}
