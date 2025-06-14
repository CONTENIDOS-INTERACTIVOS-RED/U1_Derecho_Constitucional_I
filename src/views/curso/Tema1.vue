<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Formación del Estado colombiano'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") El análisis del proceso de formación del Estado colombiano, permite comprender los orígenes de su organización política y jurídica. Desde el inicio de la independencia en 1810, las regiones que hoy conforman Colombia, enfrentaron el reto de establecer nuevas formas de gobierno que sustituyeran la estructura colonial impuesta por la monarquía española. La ruptura con la autoridad imperial, abrió un escenario de transformación, en el que se experimentaron diferentes modelos de organización, influenciados por el liberalismo político, los postulados de la Ilustración y las experiencias revolucionarias de otras partes del mundo.
    
        .bg-color-3.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En este contexto, las provincias se vieron en la necesidad de crear marcos normativos propios que, regularan el ejercicio del poder, definieran los derechos de los ciudadanos y delimitaran las competencias de las autoridades. Este impulso organizativo dio lugar a la expedición de constituciones locales y a la consolidación de gobiernos autónomos. Sin embargo, también generó tensiones derivadas de la falta de unidad entre los distintos territorios.
    
    p.mb-4 Uno de los ejes centrales del debate político, fue la confrontación entre las tendencias centralistas y federalistas, que reflejaban visiones opuestas sobre cómo debía organizarse el nuevo Estado (Martínez Garnica, 2018):

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Modelo federalista" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Modelo federalista
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-4
                p.mb-0 Defendía la autonomía de las provincias.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-4
                p.mb-0 Cada territorio debía tener su propio gobierno y sus propias leyes.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-4
                p.mb-0 Inspirado en modelos como el de EE. UU.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-4
                p.mb-0 Fomentaba la diversidad regional.

          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/3.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Modelo centralista" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Modelo centralista
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-4
                p.mb-0 Promovía un poder nacional fuerte y unificado
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-4
                p.mb-0 Las decisiones debían emanar de una autoridad central.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-4
                p.mb-0 Influenciado por la tradición hispánica centralizada.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-4
                p.mb-0 Buscaba la cohesión y la uniformidad política.
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/4.png', alt='')
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0.order-lg-2
                p.mb-0.text-white Gradualmente, el concepto de Estado moderno comenzó a configurarse como resultado de los esfuerzos por construir instituciones legítimas y funcionales. Se reconoció la necesidad de una autoridad nacional que garantizara la cohesión territorial, el respeto por el orden constitucional y la vigencia de los derechos fundamentales. No obstante, los obstáculos fueron numerosos: conflictos armados, disputas entre líderes regionales, falta de consenso sobre la forma de gobierno y dificultades para consolidar un proyecto nacional común. A pesar de estos desafíos, esta etapa fundacional sentó las bases para el desarrollo del constitucionalismo colombiano y permitió avanzar hacia estructuras estatales más estables y duraderas.
              .col-lg-4(data-aos="zoom-in").order-lg-1
                img.img-fluid(src='@/assets/curso/tema1/5.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Primeras expresiones de organización política (1810-1830)
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-5.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") Entre 1810 y 1830 se vivió una etapa fundacional en la historia política de Colombia, marcada por la caída del orden colonial y el surgimiento de nuevas formas de organización política. Las provincias actuaron con alta autonomía, creando juntas de gobierno, redactando constituciones locales y ensayando distintas formas de poder basadas en la soberanía popular (Martínez Garnica, 2018).
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/6.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-6.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") Este periodo se caracterizó por una intensa actividad constituyente. Provincias como Cundinamarca, Tunja, Cartagena y Antioquia, elaboraron sus propias cartas entre 1811 y 1812, influenciadas por los modelos de Estados Unidos y Francia, pero adaptadas a las realidades locales. Las constituciones reflejaban no solo decisiones políticas, sino también proyectos sociales y culturales.

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/8.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 División de poderes
                p.text-center Separación entre funciones del Estado.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Soberanía popular
                p.text-center Gobierno legitimado por la voluntad del pueblo.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/10.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Libertades individuales
                p.text-center Derechos como libertad de expresión, religión y propiedad.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Control del poder militar
                p.text-center Control del poder militar
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/12.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Identidad territorial
                p.text-center Las constituciones expresaban aspiraciones locales y diferenciadas.
          .col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema1/7.png', alt='')

        p Sin embargo, la falta de cohesión nacional generó graves dificultades: cada provincia tenía sus propias leyes, lo que fragmentó el poder, dificultó la cooperación y provocó disputas entre proyectos federalistas y centralistas (Aprile-Gniset, 2016). A esto se sumaron conflictos armados y la continuación de la guerra de independencia.
    
    .row.mb-5
      .col-lg-5.order-2
        figure
          img(src="@/assets/curso/tema1/13.png", data-aos="zoom-in")
      .col-lg-7.order-1.mb-3.mb-lg-0
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/14.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 A pesar de los obstáculos, esta etapa dejó un legado clave: el ejercicio temprano de la política democrática, la creación de instituciones desde la base y la introducción de un nuevo lenguaje político: <b>república, constitución, derechos, ciudadanía.</b>
        p(data-aos="fade-left") En conclusión, aunque no se logró un sistema político unificado ni duradero, este periodo marcó el inicio de la cultura constitucional colombiana, valorando el derecho como instrumento para organizar el poder y promover la convivencia en libertad.
    
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] La Gran Colombia y la búsqueda de unidad nacional
    
    .bg-full-width.bg-h85.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0.order-lg-2.mt-lg-5
                p La Gran Colombia fue un proyecto político impulsado por Simón Bolívar para contrarrestar la fragmentación institucional de los primeros años republicanos. Su objetivo era unificar bajo una sola república, a los territorios del antiguo Virreinato de la Nueva Granada y la Capitanía General de Venezuela: lo que hoy son Colombia, Venezuela, Ecuador y Panamá.
                p El proyecto fue proclamado en el Congreso de Angostura (1819) y formalizado en el Congreso de Cúcuta (1821), con la Constitución que estructuró una federación centralizada, con autonomía administrativa limitada y un poder central fuerte (Aprile-Gniset, 2016).
              .col-lg-4(data-aos="zoom-in").order-lg-1
                img.img-fluid(src='@/assets/curso/tema1/15.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-7.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/16.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Gobierno
              p.mb-0 República con división de poderes.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-7.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/17.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Elecciones
              p.mb-0 Sistema indirecto.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-7.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/18.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Congreso
              p.mb-0 Bicameral.
    
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-7.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/19.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Poder ejecutivo
              p.mb-0 Presidencia con amplias facultades.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-7.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/20.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Administración pública
              p.mb-0 Profesionalización y organización estatal.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-7.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/21.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Ciudadanía y justicia
              p.mb-0 Definición de derechos, tributos y sistema judicial unificado.
    
    .bg-color-8.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/22.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") El proyecto intentó armonizar la diversidad regional con una identidad nacional común, apostando por los valores de legalidad, orden y libertad. Bolívar representó ese ideal, aunque sus propuestas de un ejecutivo fuerte, generaron tensiones con sectores más descentralistas.

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/23.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Pese a su ambición, la Gran Colombia enfrentó obstáculos estructurales: dificultades geográficas, conflictos ideológicos, problemas económicos, rivalidades entre caudillos y falta de integración efectiva. En 1830, con la renuncia de Bolívar y la separación de Venezuela y Ecuador, el proyecto colapsó.
    
        .bg-color-1.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/24.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 No obstante, el legado constitucional fue duradero. La Constitución de Cúcuta sirvió como modelo regional y dejó aprendizajes sobre la necesidad de institucionalidad, equilibrio regional y respeto por la diversidad territorial. Este episodio representó un intento audaz de construir una identidad republicana compartida, que sigue siendo un referente clave en la historia constitucional de Colombia.





    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/journal/5350/535055632001/535055632001.pdf " target="_blank" rel="noopener noreferrer") Kalmanovitz, S. (2018). EL ORDEN SOCIAL Y LA CONSTRUCCIÓN DE ESTADO COLOMBIANO. Tareas, (159), 5-27. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/journal/1271/127157707001/127157707001.pdf  " target="_blank" rel="noopener noreferrer") Echeverri, M., Ortega, F. A. & Straka, T. (2018). Editorial. La invención de la república: la Gran Colombia. Anuario Colombiano de Historia Social y de la Cultura, 45(2), 17-31. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/69371?page=58 " target="_blank" rel="noopener noreferrer") Arias Trujillo, R. (2011). Historia de Colombia contemporánea (1920-2010). Universidad de los Andes. 
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0120-24562018000200035  " target="_blank" rel="noopener noreferrer") AFANADOR-LLACH, MARÍA JOSÉ. (2018). Una república colosal: la unión de Colombia, el acceso al Pacífico y la utopía del comercio global, 1819-1830. Anuario Colombiano de Historia Social y de la Cultura, 45(2), 35-63. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/pdf/851/85124997010.pdf  " target="_blank" rel="noopener noreferrer") Zuluaga Gil, R. (2012). Las vicisitudes de la Primera República en Colombia (1810-1816). La interpretación centralista de nuestro proceso de Independencia. Revista de Derecho, (38), 225-239. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=q1SNcRB70Fg " target="_blank" rel="noopener noreferrer") Banrepcultural. (2019). El proceso de independencia, explicado en 5 minutos [video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=HV5L3Ng7QZI " target="_blank" rel="noopener noreferrer") Historias de Adelina. (2024). ¿Cómo sería hoy la GRAN COLOMBIA? [video]. YouTube. 

 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
