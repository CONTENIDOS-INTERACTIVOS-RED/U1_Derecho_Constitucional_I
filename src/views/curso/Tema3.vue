<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. La Constitución de 1991 y el nuevo constitucionalismo'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-6.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La expedición de la Constitución de 1991, marca uno de los hitos más trascendentales en la historia del constitucionalismo colombiano. No se trató simplemente de sustituir la Constitución de 1886, sino de transformar profundamente las formas de entender y ejercer el poder, la ciudadanía, los derechos fundamentales y la relación entre Estado y sociedad. Esta nueva carta política surgió en respuesta a una crisis estructural acumulada durante décadas, caracterizada por violencia política, exclusión social, debilidad institucional y una creciente desconfianza hacia las estructuras tradicionales del poder.
    
    h2(data-aos="fade-left") Contexto histórico de su surgimiento
    p.mb-5 A finales del siglo XX, Colombia vivía una situación crítica de fractura institucional. Aunque la Constitución de 1886 seguía vigente, ya no respondía a las demandas de una sociedad en transformación. El país estaba atravesado por:

    .bg-full-width.bg-h85.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0.mt-lg-5
                ul.lista-ul--color
                  li.mb-2.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-4
                    p.mb-0 Expansión del narcotráfico.
                  li.mb-2.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-4
                    p.mb-0 Fortalecimiento de grupos armados ilegales.
                  li.mb-2.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-4
                    p.mb-0 Deterioro del sistema político tradicional.
                  li.mb-2.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-4
                    p.mb-0 Presión de movimientos sociales históricamente excluidos.
              .col-lg-4(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema3/2.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    p.mb-4 Esta coyuntura agudizó una crisis de legitimidad, reflejada en eventos como:

    .bg-full-width.bg-h85-3
      .p-4.p-md-5
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/3.svg" alt="" style="width: 90px")
              h5.text-center Toma del Palacio de Justicia
              p.mb-0.text-center Mostró la fragilidad del Estado frente a la violencia.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/4.svg" alt="" style="width: 90px")
              h5.text-center Asesinatos de líderes políticos
              p.mb-0.text-center Evidenció la inseguridad democrática.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/5.svg" alt="" style="width: 90px")
              h5.text-center Inestabilidad electoral
              p.mb-0.text-center Aumentó la desconfianza en las instituciones representativas.


        .row.mb-5
          .col-lg-4.order-2
            figure
              img(src="@/assets/curso/tema3/6.png", data-aos="zoom-in")
          .col-lg-8.order-1.mb-3.mb-lg-0
            h2(data-aos="fade-left") La movilización ciudadana y la Séptima Papeleta
            p.mb-5 En este escenario de urgencia institucional, surgió una movilización social inédita, liderada principalmente por jóvenes universitarios, movimientos ciudadanos y sectores alternativos. Esta presión derivó en la propuesta de convocar una Asamblea Nacional Constituyente, expresada simbólicamente en la séptima papeleta durante las elecciones de 1990. El respaldo ciudadano fue tan significativo que el presidente César Gaviria, impulsó formalmente el proceso, caracterizado por su pluralismo y participación.
            h2(data-aos="fade-left") Principales aportes del nuevo constitucionalismo de 1991
        
            .bg-color-6.p-4(data-aos="fade-left")
              p.mb-0 La Constitución de 1991 se inscribe dentro del nuevo constitucionalismo latinoamericano, una corriente que trasciende la simple organización del poder para enfocar el orden constitucional en la dignidad humana, los derechos fundamentales y la democracia participativa.

    .bg-full-width.bg-h85-4
      .p-4.p-md-5
        .row.justify-content-center.align-items-stretch
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/7.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5.mb-2 Centralidad de los derechos humanos
                p.mb-0 Acción de tutela para su protección inmediata.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/8.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5.mb-2 Inclusión social y étnica
                p.mb-0 Reconocimiento de comunidades indígenas y afrodescendientes.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/9.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5.mb-2 Democracia participativa
                p.mb-0 Referendo, consulta popular, plebiscito, iniciativa legislativa ciudadana.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/10.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5.mb-2 Estado activo y garante
                p.mb-0 Modelo de Estado Social de Derecho.
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/11.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white Este modelo rompe con el constitucionalismo elitista y formalista anterior, y busca un Estado más cercano al ciudadano, sensible a la justicia social y representativo de la pluralidad nacional.

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema3/12.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        h2(data-aos="fade-left") El Estado Social de Derecho: un cambio de paradigma
        p.mb-5 Uno de los pilares más innovadores fue la adopción del Estado Social de Derecho, el cual no solo exige legalidad y separación de poderes, sino que impone al Estado la responsabilidad de garantizar condiciones de vida dignas para todos. Este principio implica:
    
        .bg-color-5.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-4
              p.mb-0 Justicia material, no solo formal.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-4
              p.mb-0 Promoción de la equidad y la solidaridad.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-4
              p.mb-0 Eliminación de barreras estructurales, mediante políticas públicas efectivas.
    
    h2(data-aos="fade-left") Mecanismos y garantías institucionales
    p.mb-5 La Constitución de 1991, dotó al sistema jurídico de instrumentos novedosos para proteger derechos y fortalecer la participación:

    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-8.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/13.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Acción de tutela
              p.mb-0 Protección inmediata de los derechos fundamentales.
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-8.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/14.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Corte Constitucional
              p.mb-0 Interpretación y defensa de la Constitución.
    
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-8.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/15.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Defensoría del Pueblo
              p.mb-0 Protección de los derechos humanos.
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-8.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/16.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Mecanismos de participación
              p.mb-0 Fortalecimiento del control ciudadano y la deliberación directa.

    h2(data-aos="fade-left") Inclusión y diversidad: un enfoque garantista
    p.mb-5 Por primera vez, el texto constitucional reconoció los derechos colectivos y diferenciales de comunidades tradicionalmente marginadas:

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/17.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-11.p-4(data-aos="fade-left")
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-4
              p.mb-0 Pueblos indígenas y afrodescendientes: autonomía territorial, identidad cultural, lenguas propias.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-4
              p.mb-0 Niños, mujeres, personas mayores y con discapacidad: protección especial basada en el principio de igualdad y no discriminación.
        .bg-color-3.p-5(data-aos="fade-left")
          p.mb-0 La Constitución de 1991, inauguró una etapa inédita del constitucionalismo colombiano, definida por su vocación inclusiva, su enfoque en los derechos humanos y su apuesta por una democracia participativa. Más allá de reconfigurar la arquitectura institucional, transformó la cultura política y jurídica, promoviendo una ciudadanía más activa y consciente de sus derechos. Sin embargo, la implementación efectiva de este modelo, aún enfrenta retos persistentes, sobre todo en territorios afectados por la violencia, la pobreza y la ausencia del Estado.

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Factores que impulsaron la Asamblea Nacional Constituyente
    
    p.mb-4 La convocatoria de la Asamblea Nacional Constituyente que dio origen a la Constitución de 1991, no fue un hecho aislado ni improvisado, sino la consecuencia de una acumulación histórica de factores sociales, políticos, económicos y culturales, que convergieron en una crisis profunda del orden institucional colombiano a finales de la década de 1980. Esta coyuntura llevó a amplios sectores de la sociedad, a reclamar una transformación radical del Estado y de su base jurídica.

    .bg-full-width.bg-fondo-2.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-5
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema3/18.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="68%" y="5.3%" numero="+")
                h5 Violencia generalizada
                p La expansión del narcotráfico, el fortalecimiento de las guerrillas y los paramilitares, y el deterioro de la seguridad pública, desbordaron las capacidades estatales. El crimen organizado infiltró las instituciones, desestabilizó el sistema judicial y alimentó la impunidad. Casos emblemáticos como el asesinato de Luis Carlos Galán, reflejaron el colapso del orden democrático.
    
              .bg-color-white.box-shadow.p-3(x="95%" y="70%" numero="+")
                h5 Crisis del sistema político
                p El modelo bipartidista (liberal-conservador) evidenciaba signos de agotamiento: alternancia limitada, clientelismo, escasa representatividad y ausencia de participación real. La desconexión entre ciudadanía e instituciones, generó una creciente deslegitimación del régimen político.
    
              .bg-color-white.box-shadow.p-3(x="29.3%" y="95%" numero="+")
                h5 Exclusión social e histórica
                p Comunidades indígenas, afrodescendientes, campesinas, mujeres y jóvenes, exigían inclusión, reconocimiento y derechos. El orden jurídico heredado del siglo XIX no reflejaba la diversidad étnica y cultural del país, ni garantizaba mecanismos eficaces de protección para los sectores marginados.
    
              .bg-color-white.box-shadow.p-3(x="7%" y="27%" numero="+")
                h5 Movilización ciudadana y la Séptima Papeleta
                p Surgió como un gesto simbólico pero masivo, de rechazo al viejo orden. Jóvenes universitarios y movimientos sociales impulsaron una papeleta adicional en las elecciones legislativas de marzo de 1990, solicitando una Constituyente. Aunque no tenía validez legal, logró un respaldo ciudadano abrumador.
    
    h2(data-aos="fade-left") Eventos desencadenantes y decisiones políticas
    p.mb-5 Diversos acontecimientos aceleraron el proceso constituyente. Además del respaldo social al cambio, la coyuntura política fue decisiva:

    .bg-full-width.bg-color-5.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0.order-lg-2
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-4
                    p.mb-0 <b>Asesinato de líderes políticos</b>, incluidos candidatos presidenciales.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-4
                    p.mb-0 <b>Desmovilización del M-19</b> y disposición al diálogo, con otros grupos armados.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-4
                    p.mb-0 <b>Apertura institucional</b> por parte del presidente Virgilio Barco.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-4
                    p.mb-0 <b>Decisión ejecutiva de César Gaviria</b>, de convocar la Asamblea mediante decreto, respaldado por el referendo del 27 de mayo de 1990.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-4
                    p.mb-0 <b>Aval de la Corte Suprema de Justicia</b>, que reconoció la medida como una respuesta excepcional a la gravedad del momento.
              .col-lg-4(data-aos="zoom-in").order-lg-1
                img.img-fluid(src='@/assets/curso/tema3/19.png', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema3/20.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        h2(data-aos="fade-left") Un proceso constituyente plural y representativo
        p.mb-5 A diferencia de experiencias previas, esta Asamblea se distinguió por su diversidad y carácter participativo. Integrantes de partidos tradicionales, compartieron escenario con:
        .bg-color-12.p-4(data-aos="fade-left")
          p.mb-0 Representantes de <b>movimientos sociales</b>
        .bg-color-13.p-4(data-aos="fade-left")
          p.mb-0 <b>Exguerrilleros</b>
        .bg-color-14.p-4(data-aos="fade-left")
          p.mb-0 <b>Líderes indígenas</b>
        .bg-color-15.p-4.text-white(data-aos="fade-left")
          p.mb-0 <b>Mujeres</b>
        .bg-color-16.p-4.text-white(data-aos="fade-left")
          p.mb-0 <b>Jóvenes</b>
        .bg-color-17.p-4.text-white(data-aos="fade-left")
          p.mb-0 <b>Defensores de los derechos humanos</b>
    
    p Por primera vez, voces históricamente excluidas, pudieron incidir directamente en el diseño del nuevo orden constitucional.

    p.mb-4 La Asamblea Nacional Constituyente de 1991, fue la expresión de un cambio estructural y urgente. No se trató de una simple reforma, sino de una refundación del Estado colombiano, impulsada por la conjunción de:
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/21.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-18.p-4(data-aos="fade-left")
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-4
              p.mb-0 La deslegitimación del sistema político tradicional.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-4
              p.mb-0 La violencia sistemática.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-4
              p.mb-0 La exclusión histórica.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-4
              p.mb-0 Una ciudadanía activa, movilizada y consciente de su rol protagónico.
        .bg-color-8.p-5(data-aos="fade-left")
          p.mb-0 Este proceso constituyente no solo respondió al agotamiento del viejo régimen, sino que encarnó un nuevo pacto social orientado hacia la inclusión, la justicia y la dignidad, como principios rectores del país.

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Características de la Constitución de 1991
    
    p.mb-4 La Constitución Política de 1991, se consolida como un texto moderno, integral y profundamente transformador, producto de un deseo colectivo de refundar el Estado colombiano sobre nuevas bases jurídicas, sociales y políticas. Este documento rompe con el constitucionalismo autoritario y excluyente anterior, al colocar en el centro, la dignidad humana como principio fundante del orden jurídico.

    .row.align-items-center.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/22.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        LineaTiempoD.color-primario.large-2(data-aos="fade-left")
          p(numero="1" titulo="Estado Social de Derecho") El Estado asume un rol activo al garantizar condiciones materiales de igualdad y dignidad. Ya no basta con asegurar legalidad formal: se deben crear condiciones reales para el ejercicio efectivo de los derechos.
          p(numero="2" titulo="Ampliación de derechos fundamentales") Se incluyen derechos civiles, políticos, económicos, sociales, culturales y colectivos. Derechos como la salud, la educación, el trabajo digno o el medio ambiente sano, se reconocen como exigibles.
          p(numero="3" titulo="Acción de tutela") Mecanismo judicial expedito para proteger derechos fundamentales ante su amenaza o vulneración. Permite el acceso rápido y directo a la justicia, sin trámites complejos.
          p(numero="4" titulo="Democracia participativa") Se introducen mecanismos como el referendo, plebiscito, consulta popular, cabildo abierto e iniciativa legislativa ciudadana. El pueblo recupera su rol como agente activo en los asuntos públicos.
    
    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/23.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8
        LineaTiempoD.color-primario.large-2(data-aos="fade-left")
          p(numero="5" titulo="Reconocimiento de la diversidad") Colombia se define como un Estado pluricultural y pluriétnico. Se reconocen formalmente las identidades culturales, las lenguas, las jurisdicciones indígenas y los derechos de minorías.
          p(numero="6" titulo="Redefinición territorial") Se promueve la descentralización y se reconoce la autonomía de departamentos, municipios, distritos y territorios indígenas. El poder se distribuye más equitativamente.
          p(numero="7" titulo="Fortalecimiento institucional") Se crean la Corte Constitucional, la Fiscalía General de la Nación, el Consejo Superior de la Judicatura y la Defensoría del Pueblo, fortaleciendo el sistema de pesos y contrapesos.
    
    h2(data-aos="fade-left") Derechos: de la proclamación a la exigibilidad
    p.mb-5 La Constitución de 1991 amplía de forma sustancial el catálogo de derechos. Ya no se limita a garantizar libertades clásicas, sino que incluye dimensiones integrales de la vida digna:

    .bg-full-width.bg-h85-4
      .p-4.p-md-5
        .row.justify-content-center.align-items-stretch
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/24.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5.mb-2 Civiles y políticos
                p.mb-0 Vida, libertad personal, libertad de expresión, debido proceso.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/25.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5.mb-2 Económicos y sociales
                p.mb-0 Salud, educación, vivienda, trabajo digno, seguridad social.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/26.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5.mb-2 Culturales y colectivos
                p.mb-0 Acceso a la cultura, protección del patrimonio, medio ambiente sano.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/27.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5.mb-2 Diferenciales
                p.mb-0 Derechos de niños, mujeres, personas con discapacidad, pueblos indígenas y comunidades afrodescendientes.

    p.mb-4 Este enfoque refleja una visión integral del ser humano, donde los derechos no son privilegios, sino obligaciones exigibles ante el Estado.

    h2(data-aos="fade-left") Innovaciones en participación y representación
    p.mb-5 Uno de los pilares de la nueva Constitución es el fortalecimiento de la democracia participativa, más allá de los mecanismos tradicionales de representación. Se introducen herramientas que devuelven la soberanía directamente al pueblo:

    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-7.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/28.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Referendo
              p.mb-0 Decisión popular sobre leyes o reformas constitucionales
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-7.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/29.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Consulta popular
              p.mb-0 Opinión ciudadana previa sobre temas de trascendencia nacional o local.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-7.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/30.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Cabildo abierto
              p.mb-0 Participación directa en consejos municipales y distritales.
    
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-7.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/31.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Plebiscito
              p.mb-0 Aprobación o rechazo de decisiones del Ejecutivo
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-7.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/32.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Iniciativa legislativa ciudadana
              p.mb-0 Propuesta directa de leyes por parte de la ciudadanía.

    h2(data-aos="fade-left") Pluralismo jurídico y cultural
    p.mb-5 La Constitución de 1991, reconoce por primera vez la diversidad como fundamento constitucional. Colombia se define como un Estado pluriétnico y multicultural, lo que implica:

    .bg-full-width.bg-color-1
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0
                ul.lista-ul--color
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-4
                    p.mb-0 Reconocimiento de jurisdicciones indígenas con autoridad en sus territorios.
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-4
                    p.mb-0 Derecho de las comunidades a conservar lenguas, cosmovisiones y sistemas propios de justicia.
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-4
                    p.mb-0 Inclusión de minorías religiosas, sexuales y culturales, promoviendo el respeto a la diferencia.
              .col-lg-5(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema3/33.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    .bg-full-width.bg-color-19.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 Este reconocimiento no es solo simbólico: implica un pluralismo jurídico efectivo, donde múltiples formas de entender y ejercer la justicia coexisten dentro del orden constitucional (Cholvis, 2016).
    
    h2(data-aos="fade-left") Reforma institucional y equilibrio de poderes
    p.mb-5 El nuevo diseño institucional introduce figuras autónomas y órganos de control con funciones claras, orientadas a garantizar el cumplimiento de la Constitución y proteger los derechos:

    div.row.justify-content-center.align-items-stretch.mb-5
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/34.svg" alt="" style="width: 90px")
          h5.text-center Corte Constitucional
          p.mb-0.text-center Máxima intérprete de la Constitución, con funciones de control de constitucionalidad y revisión de tutelas.
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/35.svg" alt="" style="width: 90px")
          h5.text-center Fiscalía General de la Nación
          p.mb-0.text-center Investigación penal autónoma del poder ejecutivo.
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/36.svg" alt="" style="width: 90px")
          h5.text-center Consejo Superior de la Judicatura
          p.mb-0.text-center Administración de la rama judicial y vigilancia disciplinaria de jueces.
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/37.svg" alt="" style="width: 90px")
          h5.text-center Defensoría del Pueblo
          p.mb-0.text-center Protección y promoción de derechos humanos en todo el país.
    
    p.mb-4 Estos órganos refuerzan el sistema de pesos y contrapesos, previniendo abusos de poder y fortaleciendo el Estado de Derecho.

    .bg-color-8.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/38.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La Constitución de 1991, representa un punto de inflexión en la historia constitucional colombiana. Su enfoque humanista, garantista e incluyente, redefine las relaciones entre el Estado y la sociedad, ampliando derechos, fomentando la participación, reconociendo la diversidad y fortaleciendo las instituciones. Esta carta política refleja una visión de futuro, que entiende que la democracia no se agota en lo electoral, sino que debe vivirse cotidianamente, en el respeto a las diferencias, en el acceso efectivo a los derechos y en la posibilidad real de incidir en las decisiones públicas.
    
    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Impacto actual del nuevo constitucionalismo
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema3/39.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") La Constitución de 1991, marcó un cambio profundo en el ordenamiento jurídico colombiano, promoviendo un nuevo constitucionalismo que transformó la forma en que se conciben los derechos, el Estado y la democracia. Este modelo ha servido para corregir desigualdades históricas, impulsar una justicia más material que formal, y redefinir la relación entre la ciudadanía y la institucionalidad.
    
        .bg-color-5.p-4(data-aos="fade-left")
          p.mb-0 Desde su vigencia, ha ampliado el discurso de los derechos humanos, incorporando conceptos como dignidad, igualdad sustancial, acción afirmativa y enfoque diferencial, que han permeado el lenguaje jurídico, académico y ciudadano. La Corte Constitucional ha sido clave, al interpretar progresivamente la Carta y reconocer derechos como el de una muerte digna, la identidad de género y el mínimo vital, además de ejercer control sobre el poder público.
    
    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/40.png", data-aos="zoom-in")
      .col-lg-9
        p(data-aos="fade-left") La acción de tutela ha democratizado el acceso a la justicia, permitiendo que millones de personas hagan valer sus derechos sin barreras económicas o legales. Este mecanismo ha fortalecido una ciudadanía activa y vigilante.
    
        .bg-color-3.p-5(data-aos="fade-left")
          p En términos territoriales y culturales, el reconocimiento de Colombia como nación pluriétnica y multicultural otorgó derechos colectivos a pueblos indígenas, afrodescendientes y raizales, incidiendo en políticas públicas y representación política.
          p.mb-0 También han habido avances en cuanto a la igualdad de género, con jurisprudencia sobre aborto, violencia, acoso y discriminación, gracias al principio de no discriminación y el mandato de igualdad real.
    
    .bg-full-width-2.bg-fondo-3
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/42.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Derechos humanos
                p.text-center Inclusión de principios como dignidad y justicia material.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/43.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Ciudadanía
                p.text-center Tutela como mecanismo de participación y exigencia.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/44.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Institucionalidad
                p.text-center Corte Constitucional como garante de derechos y límite al poder.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/45.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Diversidad étnica
                p.text-center Reconocimiento de pueblos indígenas y afro como sujetos de derechos colectivos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/46.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Género
                p.text-center Jurisprudencia para avanzar en igualdad y derechos de las mujeres.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/41.png', alt='')
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/47.png", data-aos="zoom-in")
      .col-lg-8
        h2(data-aos="fade-left") Retos actuales
        p.mb-5 Persisten desafíos como la desigualdad, la violencia estructural, la corrupción y las brechas territoriales, que limitan la plena implementación de los principios constitucionales. Sin embargo, su capacidad de renovación, a través de la jurisprudencia, la legislación y la participación ciudadana, mantiene viva su promesa de transformación.
    
        .bg-color-1.p-4(data-aos="fade-left")
          p.mb-0 El nuevo constitucionalismo ha sido la mayor conquista jurídica y política reciente en Colombia, promoviendo un país más plural, justo y democrático. Aunque los retos son grandes, la Constitución de 1991 sigue siendo un pacto vivo que permite construir una sociedad más humana y equitativa.

    


    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://revistas.uexternado.edu.co/index.php/derest/article/view/7426/11412" target="_blank" rel="noopener noreferrer") Rubio, R. (2021). La participación en la Constitución colombiana: una Constitución participativa pionera. Revista derecha del Estado, (50), 43-76.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/116525 " target="_blank" rel="noopener noreferrer") Barragán Romero, G. (2008). El constitucionalismo y la nueva Constitución. Corporación de Estudios y Publicaciones. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://ve.scielo.org/scielo.php?script=sci_arttext&pid=S1315-62682006000100004 " target="_blank" rel="noopener noreferrer") Pérez Van Leenden, F. J. (2006). La traducción de la Constitución Política de Colombia 1991. Frónesis, 13(1), 32-39. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0122-44092011000200002#:~:text=El%20movimiento%20estudiantil%20de%20la,sentencia%20y%20la%20propia%20muerte." target="_blank" rel="noopener noreferrer") Gómez Roldán, A. (2011). El movimiento de la séptima papeleta frente al referendo* Posición jurídica ante la Corte Constitucional de una generación de colombianos y colombianas que ayudaron a construir la Constitución Política de 1991. Papel Político, 16(2), 365-380.  

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=cwMYc4cVUng" target="_blank" rel="noopener noreferrer") Unidad de Innovación Virtual. (2019). Constitución Politica de Colombia – Presentación (video). YouTube.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=y-vePCkQ2xI" target="_blank" rel="noopener noreferrer") Pompeu Fabra University - Barcelona. (2025). Seminario: "El nuevo constitucionalismo latinoamericano:… [video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=bVSBn3fHjag " target="_blank" rel="noopener noreferrer") Razón Pública. (2021). La Asamblea Nacional Constituyente y la Constitución cumplen 30 años [video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=OSgR8ldEL28 " target="_blank" rel="noopener noreferrer") PRE-ICFES pa’l Barrio. (2021). 2.2. Ciencias Sociales y Ciudadanas - Constitución Política de Colombia de 1991 [video]. YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto: '¿Qué propósito tenía la Constitución de Rionegro de 1863?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Centralizar el poder en el ejecutivo.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Establecer un sistema federal en Colombia.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Eliminar los derechos ciudadanos.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Aumentar la participación extranjera.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Esta constitución promovía el federalismo, otorgando gran autonomía a los estados.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué característica tuvo el periodo conocido como la República de Colombia (Gran Colombia)?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Unidad nacional bajo un sistema parlamentario.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Confederación de repúblicas indígenas.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Asociación de territorios independientes bajo un solo gobierno.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'División definitiva entre Colombia y Venezuela.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La Gran Colombia fue una unión de países con un proyecto común de integración.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto: '¿Cuál fue una consecuencia de la Constitución de 1886?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Fortalecimiento del federalismo.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Mayor autonomía a las regiones.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Consolidación del centralismo político.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Eliminación de la religión católica del Estado.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Esta constitución reafirmó el centralismo, disminuyendo la autonomía de los departamentos.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué actor político promovió la independencia frente a España?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La monarquía local.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'El Congreso español.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Los criollos ilustrados y comerciantes locales.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'El ejército realista.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Fueron los criollos, influidos por las ideas ilustradas, quienes lideraron el proceso independentista.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuál de las siguientes afirmaciones corresponde a un logro del periodo de independencia (1810-1830)?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Supresión total de los cabildos.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Adopción de una monarquía parlamentaria.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Reconocimiento internacional como república soberana.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Incorporación de España como estado asociado.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Tras consolidar la independencia, Colombia fue reconocida como un Estado soberano por otras naciones.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
