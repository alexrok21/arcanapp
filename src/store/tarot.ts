// src/store/tarot.ts
import { defineStore } from "pinia";

import Fool from "@/assets/images/characters/Fool.png";
import Magician from "@/assets/images/characters/Magician.png";
import Priestess from "@/assets/images/characters/Priestess.png";
import Empress from "@/assets/images/characters/Empress.png";
import Emperor from "@/assets/images/characters/Emperor.png";
import Hierophant from "@/assets/images/characters/Hierophant.png";
import Lovers from "@/assets/images/characters/Lovers.png";
import Charriot from "@/assets/images/characters/Charriot.png";
import Strength from "@/assets/images/characters/Strength.png";
import Hermit from "@/assets/images/characters/Hermit.png";
import Wheel from "@/assets/images/characters/Wheel.png";
import Justice from "@/assets/images/characters/Justice.png";
import Hanged from "@/assets/images/characters/Hanged.png";
import Death from "@/assets/images/characters/Death.png";
import Temperance from "@/assets/images/characters/Temperance.png";
import Tower from "@/assets/images/characters/Tower.png";
import Star from "@/assets/images/characters/Star.png";
import Moon from "@/assets/images/characters/Moon.png";
import Sun from "@/assets/images/characters/Sun.png";
import Judgment from "@/assets/images/characters/Judgment.png";
import World from "@/assets/images/characters/World.png";

const cards = [
  {
    name: "El Mago",
    image: Magician,
    meaning: {
      upright: `El Mago simboliza el dominio sobre tus habilidades, recursos y energía.
       Representa iniciativa, creatividad y el poder personal para manifestar lo que deseas.
       Esta carta indica que tienes todas las herramientas necesarias para lograr tus metas.
       Es un recordatorio de que tú eres el artífice de tu destino.`,

      shortUpright:
        "Iniciativa y creatividad en acción. Tienes todas las herramientas para manifestar tus deseos.",

      reversed: `En posición invertida, El Mago puede señalar manipulación, engaño o pérdida de enfoque.
       Podrías estar usando tu poder personal de forma negativa o sintiéndote desorientado.
       Esta posición sugiere revisar tus intenciones, evitar juegos de poder y reconectar con tu propósito verdadero.`,

      shortReversed:
        "Cuidado con el poder mal utilizado. Revisa tus intenciones y reconecta con tu propósito auténtico.",
    },
  },
  {
    name: "La Sacerdotisa",
    image: Priestess,
    meaning: {
      upright: `La Sacerdotisa es la carta de la intuición, la sabiduría interna y el conocimiento oculto.
       Esta arcano te invita a escuchar tu voz interior, confiar en tus corazonadas y conectar con lo femenino sagrado.
       Representa misterio, introspección y la necesidad de mirar hacia adentro para encontrar respuestas.
       Es un recordatorio de que no todo se revela a simple vista; hay capas de significado que solo se descubren con paciencia y observación.`,

      shortUpright:
        "Confía en tu intuición. La sabiduría interior revela lo que los ojos no ven.",

      reversed: `En posición invertida, La Sacerdotisa puede indicar bloqueo intuitivo, falta de conexión contigo mismo/a o rechazo al inconsciente.
       Podrías estar ignorando señales importantes o reprimiendo tu intuición por miedo o duda.
       Esta posición también sugiere que debes prestar atención a los sentimientos reprimidos o a situaciones ambiguas que están pidiendo claridad.`,

      shortReversed:
        "Tu intuición está silenciada. Enfrenta lo desconocido y reconcíliate con tu voz interior.",
    },
  },
  {
    name: "La Emperatriz",
    image: Empress,
    meaning: {
      upright: `La Emperatriz es la encarnación de la feminidad creativa, la abundancia y la naturaleza en plena floración. 
       Representa fertilidad, cuidado, sensualidad y la capacidad de nutrir tanto proyectos como relaciones. 
       Esta carta te recuerda que estás en un momento de crecimiento, donde lo que siembras florecerá con amor y paciencia. 
       Es un llamado a conectar con tu cuerpo, la naturaleza y tus instintos más profundos. 
       También simboliza la belleza, el arte y la maternidad en sus formas más amplias.`,

      shortUpright:
        "Abundancia creativa en floración. Nutre lo que siembras con amor y conexión con la naturaleza.",

      reversed: `En posición invertida, La Emperatriz puede indicar dependencia emocional, falta de autocuidado o desequilibrio entre dar y recibir. 
       Podrías estar agotándote al cuidar de otros sin nutrirte a ti mismo/a, o reprimiendo tu creatividad. 
       Esta posición invita a reconectar con tu cuerpo, establecer límites saludables y recordar que para dar, primero debes llenar tu propio vaso.`,

      shortReversed:
        "Te estás agotando. Establece límites y recuerda: para dar, primero debes nutrirte a ti mismo/a.",
    },
  },
  {
    name: "El Emperador",
    image: Emperor,
    meaning: {
      upright: `El Emperador simboliza la autoridad, la estructura y el liderazgo firme. 
       Representa orden, disciplina y la capacidad de establecer límites claros para proteger lo que es valioso. 
       Esta carta indica que es momento de tomar el control, actuar con responsabilidad y construir cimientos sólidos para tus proyectos. 
       Es la energía del gobernante, del padre protector y del estratega que piensa a largo plazo. 
       Invita a liderar con integridad, firmeza y visión, sin caer en la rigidez o el autoritarismo.`,

      shortUpright:
        "Liderazgo con estructura y visión. Establece límites claros y construye cimientos sólidos con integridad.",

      reversed: `En posición invertida, El Emperador puede señalar abuso de poder, rigidez excesiva o una figura autoritaria tóxica. 
       Podrías estar enfrentando control excesivo, miedo a la autoridad o una falta de estructura que genera inseguridad. 
       Esta posición también puede reflejar una dependencia de figuras externas de poder, o bien, la necesidad de desarrollar tu propia autoridad interna. 
       Es un llamado a ejercer el liderazgo con equilibrio, sin dominar ni someterte.`,

      shortReversed:
        "Rigidez o falta de control. Desarrolla tu autoridad interna y lidera con equilibrio, sin dominar ni someterte.",
    },
  },
  {
    name: "El Loco",
    image: Fool,
    meaning: {
      upright: `El Loco representa el espíritu del viajero, la inocencia creativa y el salto de fe hacia lo desconocido. 
       Simboliza un nuevo comienzo lleno de posibilidades, libre de ataduras y convenciones. 
       Esta carta te invita a confiar en tu intuición, abrazar la incertidumbre y aventurarte más allá de lo seguro. 
       Es la energía del eterno principiante, del artista, del rebelde que sigue su propio camino. 
       No es locura real, sino una sabiduría que desafía la lógica y se mueve por el corazón. 
       Es un recordatorio de que a veces, perder el equilibrio es el primer paso hacia algo extraordinario.`,

      shortUpright:
        "Salto de fe hacia lo desconocido. Confía en tu intuición y abraza nuevas posibilidades con coraje.",

      reversed: `En posición invertida, El Loco puede indicar imprudencia extrema, falta de dirección o temor a comprometerse. 
       Podrías estar evadiendo responsabilidades bajo el disfraz de "libertad", o bien, sentirte paralizado por el miedo al cambio. 
       Esta posición también puede señalar decisiones impulsivas sin reflexión, o una actitud caótica que desestabiliza tu vida. 
       Es un llamado a equilibrar la libertad con la responsabilidad, y a recordar que el verdadero viaje comienza cuando decides adónde ir, no solo en huir.`,

      shortReversed:
        "Estás huyendo o paralizado. Equilibra la libertad con responsabilidad y decide tu rumbo con claridad.",
    },
  },
  {
    name: "El Hierofante",
    image: Hierophant,
    meaning: {
      upright: `El Hierofante es la carta de la tradición, la enseñanza y la guía espiritual. 
       Representa sabiduría transmitida a través de instituciones, rituales y sistemas de creencias. 
       Esta carta indica que es momento de buscar orientación, ya sea en un maestro, una comunidad o una práctica espiritual. 
       Simboliza la conexión con lo sagrado a través de lo convencional, y la importancia de respetar los caminos que otros han recorrido antes que tú. 
       También puede representar la necesidad de estructura moral o ética en tu vida, y el valor de pertenecer a una tradición que nutre el alma.`,

      shortUpright:
        "Tradición y guía espiritual. Busca sabiduría en maestros, rituales y comunidades que nutran tu alma.",

      reversed: `En posición invertida, El Hierofante puede señalar dogmatismo, rigidez espiritual o rechazo a la autoridad. 
       Podrías estar cuestionando creencias impuestas, resistiéndote a enseñanzas que no resuenan contigo, o enfrentando una institución tóxica. 
       Esta posición también puede indicar falta de guía o aislamiento espiritual, recordándote que aunque el camino sea personal, no tienes que transitarlo solo. 
       Es un llamado a buscar sabiduría auténtica, más allá de las formas, y a honrar tu propia conexión con lo divino, incluso si no sigue las reglas establecidas.`,

      shortReversed:
        "Dogmatismo o aislamiento. Cuestiona creencias impuestas y busca tu propia conexión auténtica con lo sagrado.",
    },
  },
  {
    name: "Los Amantes",
    image: Lovers,
    meaning: {
      upright: `Los Amantes simboliza la conexión profunda, la atracción sincera y la elección del corazón. 
       Representa no solo el amor romántico, sino también la armonía entre deseos, valores y partes internas de ti mismo/a. 
       Esta carta aparece cuando enfrentas una decisión importante, especialmente una que involucra el corazón y la identidad. 
       Te invita a actuar con autenticidad, a elegir no por obligación, sino por resonancia interna. 
       También puede indicar una unión significativa, ya sea en el amor, la amistad o una alianza que nutre tu crecimiento. 
       Es un recordatorio de que el verdadero amor nace cuando dos almas se encuentran en verdad y libertad.`,

      shortUpright:
        "Elección del corazón con autenticidad. Armoniza tus deseos y valores para crear uniones verdaderas.",

      reversed: `En posición invertida, Los Amantes puede señalar desalineación, conflicto interno o una relación desequilibrada. 
       Podrías estar evitando una elección difícil, permaneciendo en una conexión que ya no sirve, o actuando por miedo en lugar de amor. 
       Esta posición también puede revelar atracción tóxica, falta de comunicación o la necesidad de reconciliarte primero contigo mismo/a antes de unirte a otro. 
       Es un llamado a clarificar tus valores, sanar heridas emocionales y recordar que sin honestidad interior, ninguna unión puede ser verdadera.`,

      shortReversed:
        "Desalineación interna. Clarifica tus valores, sana heridas y elige con amor, no con miedo.",
    },
  },
  {
    name: "El Carro",
    image: Charriot,
    meaning: {
      upright: `El Carro simboliza el avance, la voluntad y el dominio sobre los opuestos. 
       Representa determinación, dirección clara y la capacidad de moverte hacia tus metas con fuerza y propósito. 
       Esta carta aparece cuando estás listo para tomar el control de tu destino, guiando tu energía con disciplina y enfoque. 
       Los caballos que tiran del carro son distintos —uno claro, otro oscuro—, lo que simboliza la necesidad de armonizar fuerzas opuestas: razón y emoción, luz y sombra, acción y paciencia. 
       Es un llamado a avanzar con confianza, sin permitir que las distracciones o el desánimo detengan tu impulso. 
       El triunfo no viene de la fuerza bruta, sino del equilibrio interno y la claridad de propósito.`,

      shortUpright:
        "Avanza con determinación y equilibrio. Armoniza tus fuerzas internas para tomar el control de tu destino.",

      reversed: `En posición invertida, El Carro puede indicar pérdida de control, falta de dirección o colapso por exceso de esfuerzo. 
       Podrías estar avanzando sin rumbo, chocando contra obstáculos por impaciencia, o sintiendo que las fuerzas internas te desgarran en direcciones opuestas. 
       Esta posición también puede señalar arrogancia, agotamiento o una victoria vacía que no alinea con tu esencia. 
       Es un llamado a detenerte, reajustar tu rumbo y reconectar con tu centro. 
       A veces, retroceder un paso es necesario para avanzar con verdadera fuerza.`,

      shortReversed:
        "Pierdes el control o el rumbo. Detente, reajusta tu dirección y reconecta con tu centro antes de avanzar.",
    },
  },
  {
    name: "La Fuerza",
    image: Strength,
    meaning: {
      upright: `La Fuerza simboliza el coraje interior, la paciencia y el dominio sobre los impulsos más salvajes. 
       Representa la capacidad de contener lo poderoso con suavidad, como la mujer que abre la mandíbula del león con sus manos. 
       No es la fuerza del puño, sino la del corazón: valentía, compasión y firmeza en medio del caos. 
       Esta carta aparece cuando necesitas actuar con integridad, sin violencia ni dominación, sino con convicción tranquila. 
       También habla de sanar tus propias sombras, enfrentar tus miedos internos y transformarlos en poder creativo. 
       Es un recordatorio de que la verdadera fuerza no se impone: se irradia desde la calma.`,

      shortUpright:
        "Coraje del corazón con compasión. Domina tus impulsos con suavidad y transforma tus miedos en poder creativo.",

      reversed: `En posición invertida, La Fuerza puede indicar debilidad interna, falta de confianza o uso abusivo del poder. 
       Podrías estar reprimiendo tus emociones, actuando con agresividad o permitiendo que el miedo te paralice. 
       Esta posición también puede señalar una lucha interna desequilibrada, donde el ego domina en lugar de la compasión. 
       Es un llamado a reconectar con tu centro, a ejercer el coraje sin violencia y a recordar que dominar no es controlar, sino integrar. 
       La fuerza verdadera comienza cuando dejas de pelear contra ti mismo/a.`,

      shortReversed:
        "Debilidad o agresividad. Reprimes emociones o actúas con violencia. Reconcíliate contigo mismo/a y encuentra el equilibrio.",
    },
  },
  {
    name: "El Hermitaño",
    image: Hermit,
    meaning: {
      upright: `El Ermitaño simboliza la introspección, la sabiduría interior y la búsqueda de luz en la oscuridad. 
       Representa un momento de retirada consciente: no por aislamiento, sino por necesidad de escuchar tu voz interior. 
       Esta carta aparece cuando es tiempo de encender tu lámpara, caminar solo y seguir tu propio camino con paciencia y claridad. 
       Es la energía del sabio que ha vivido, aprendido y ahora guía desde el silencio. 
       No busca respuestas afuera, sino que las encuentra en la quietud. 
       Es un llamado a la meditación, al descanso reflexivo y a confiar en que, aunque camines solo, no estás perdido: estás encontrándote.`,

      shortUpright:
        "Retirada consciente para escuchar tu sabiduría interior. Enciende tu lámpara y encuentra respuestas en la quietud.",

      reversed: `En posición invertida, El Ermitaño puede indicar aislamiento excesivo, desconexión o rechazo a la guía interna. 
       Podrías estar huyendo de la compañía por miedo, atrapado en la soledad sin propósito, o ignorando señales internas por impaciencia. 
       Esta posición también puede señalar una sabiduría reprimida, o la necesidad de salir del retiro para compartir lo que has aprendido. 
       Es un recordatorio de que la verdadera iluminación no vive solo en la caverna: también necesita luz compartida. 
       A veces, la búsqueda termina cuando dejas de huir del mundo, y comienzas a caminar con tu lámpara encendida en medio de él.`,

      shortReversed:
        "Aislamiento sin propósito. Sal de tu retiro, comparte tu sabiduría y camina con tu lámpara encendida en el mundo.",
    },
  },
  {
    name: "La Rueda de la Fortuna",
    image: Wheel,
    meaning: {
      upright: `La Rueda de la Fortuna simboliza el ciclo constante del cambio, el destino y la evolución inevitable de todas las cosas. 
       Representa un giro en tu camino: una oportunidad inesperada, un ascenso, o un momento en el que el universo alinea las circunstancias a tu favor. 
       Esta carta te recuerda que nada permanece fijo: lo que hoy está arriba, mañana puede estar abajo, y viceversa. 
       Es un llamado a confiar en el flujo de la vida, a no aferrarte demasiado al éxito ni hundirte en la adversidad, porque ambos son temporales. 
       También puede señalar un momento kármico, donde lo que siembras ahora regresará en el ciclo adecuado. 
       Abre tu corazón al misterio: estás en el centro del movimiento del universo.`,

      shortUpright:
        "Confía en el flujo del cambio. El universo alinea las circunstancias a tu favor. Todo es cíclico y temporal.",

      reversed: `En posición invertida, La Rueda de la Fortuna puede indicar resistencia al cambio, miedo al destino o la sensación de estar atrapado en un ciclo repetitivo. 
       Podrías estar luchando contra lo inevitable, culpándote por lo que no puedes controlar, o sintiendo que la suerte no está de tu lado. 
       Esta posición también puede señalar un giro negativo en tu camino, pero no como castigo, sino como parte del equilibrio natural. 
       Es un recordatorio de que no controlas el viento, pero sí puedes ajustar las velas. 
       En lugar de resistir, observa, aprende y prepárate: tu momento volverá.`,

      shortReversed:
        "Resistes lo inevitable. Acepta el cambio, ajusta tus velas y prepárate: tu momento volverá en el ciclo.",
    },
  },
  {
    name: "La Justicia",
    image: Justice,
    meaning: {
      upright: `La Justicia simboliza la verdad, el equilibrio y las decisiones tomadas con integridad. 
       Representa claridad mental, imparcialidad y la capacidad de actuar según principios éticos, más allá del deseo o el miedo. 
       Esta carta aparece cuando enfrentas una elección importante, donde cada acción tendrá consecuencias inevitables. 
       Te invita a mirar con objetividad, a asumir responsabilidad por tus actos y a restablecer el equilibrio donde haya desigualdad. 
       También puede señalar un momento de resolución: un juicio, una firma, una revelación o un ajuste kármico. 
       Recuerda: la verdadera justicia no castiga, sino que restaura el orden con sabiduría.`,

      shortUpright:
        "Decide con equilibrio e integridad. Cada acción tiene consecuencias. Restaura el orden con sabiduría y verdad.",

      reversed: `En posición invertida, La Justicia puede indicar sesgo, evasión de responsabilidad o decisiones tomadas bajo presión o engaño. 
       Podrías estar evitando una verdad incómoda, permitiendo una injusticia por miedo, o enfrentando un sistema desequilibrado. 
       Esta posición también puede revelar consecuencias atrasadas, contratos rotos o la necesidad de perdonar —ya sea a otros o a ti mismo/a— para cerrar un ciclo. 
       Es un llamado a actuar con honestidad, incluso cuando duela, y a recordar que no puedes escapar de tus decisiones: solo puedes aprender de ellas.`,

      shortReversed:
        "Sesgo o evasión de responsabilidad. Enfrenta la verdad incómoda y asume las consecuencias para cerrar el ciclo.",
    },
  },
  {
    name: "El Colgado",
    image: Hanged,
    meaning: {
      upright: `El Colgado simboliza la pausa, la entrega y el cambio de perspectiva. 
       Representa un momento de suspensión consciente: no estás inmóvil por falta de acción, sino en espera reflexiva. 
       Esta carta aparece cuando necesitas soltar el control, dejar de luchar y ver tu realidad desde otro ángulo. 
       Al igual que el hombre colgado por un pie, tu visión del mundo se invierte, revelando verdades que antes pasaban desapercibidas. 
       Es un llamado a la introspección, al sacrificio simbólico de lo que ya no sirve, y a encontrar sabiduría en la quietud. 
       A veces, para avanzar, debes detenerte. Para ver claro, debes mirar al revés.`,

      shortUpright:
        "Pausa consciente para cambiar de perspectiva. Suelta el control y encuentra sabiduría en la quietud.",

      reversed: `En posición invertida, El Colgado puede indicar resistencia al cambio, impaciencia o negación de una verdad interna. 
       Podrías estar forzando resultados, rechazando una pausa necesaria o aferrándote a una perspectiva limitada. 
       Esta posición también puede señalar victimización, sensación de estar atrapado sin causa, o miedo a soltar el control. 
       Es un recordatorio de que no todas las parálisis son negativas: algunas son gestación. 
       Lo que parece estancamiento puede ser el silencio previo a una revelación. 
       Acepta la suspensión: no es un castigo, es una invitación a ver más allá.`,

      shortReversed:
        "Resistes una pausa necesaria. Forzas resultados y te aferras al control. Acepta la suspensión: es gestación.",
    },
  },
  {
    name: "La Muerte",
    image: Death,
    meaning: {
      upright: `La Muerte simboliza el fin de un ciclo, la transformación profunda y el renacimiento que nace del adiós. 
       No se refiere a una muerte física, sino a la necesidad de dejar atrás lo que ya no sirve: una etapa, una relación, una identidad, un miedo. 
       Esta carta aparece cuando un cambio inevitable está en curso, y resistirse solo prolonga el dolor. 
       Es un llamado a soltar con dignidad, a honrar lo que fue y a abrir espacio para lo nuevo. 
       Como el caballero que avanza con su estandarte, este cambio puede ser imparable, pero también necesario. 
       Recuerda: detrás de cada final, hay un amanecer oculto. La verdadera muerte es aferrarse a lo que ya murió.`,

      shortUpright:
        "Fin de un ciclo para renacer. Suelta con dignidad lo que ya no sirve y abre espacio para lo nuevo.",

      reversed: `En posición invertida, La Muerte puede indicar resistencia al cambio, miedo al fin o estancamiento emocional. 
       Podrías estar reteniendo algo que ya no funciona, evitando una transformación necesaria o temiendo lo desconocido. 
       Esta posición también puede revelar un duelo no procesado, ciclos repetitivos o la sensación de estar atrapado en un limbo. 
       Es un recordatorio de que no puedes forzar el renacimiento sin permitir primero el adiós. 
       A veces, el mayor acto de valentía no es luchar, sino soltar. 
       Deja que lo viejo se vaya: tu próxima versión ya está esperando.`,

      shortReversed:
        "Resistes un cambio necesario. Retienes lo que ya no funciona. Soltar es el primer paso hacia tu renacimiento.",
    },
  },
  {
    name: "La Templanza",
    image: Temperance,
    meaning: {
      upright: `La Templanza simboliza la armonía, la paciencia y la integración de fuerzas opuestas. 
       Representa el flujo sereno entre el cuerpo y el alma, lo terrenal y lo espiritual, la acción y la quietud. 
       Esta carta aparece cuando necesitas actuar con calma, mezclar tus emociones con la razón, y avanzar sin prisa pero sin pausa. 
       Es la energía del alquimista que transforma lo ordinario en oro, no con fuerza, sino con tiempo y equilibrio. 
       También puede señalar un momento de sanación, claridad vocacional o la alineación con tu propósito más profundo. 
       Recuerda: la verdadera templanza no es contener el fuego, sino saber cuándo avivarlo y cuándo dejar que se calme.`,

      shortUpright:
        "Armoniza fuerzas opuestas con paciencia. Encuentra el flujo sereno entre cuerpo y alma para transformar lo ordinario.",

      reversed: `En posición invertida, La Templanza puede indicar desequilibrio, impaciencia o pérdida de conexión con tu centro. 
       Podrías estar forzando resultados, mezclando emociones sin discernimiento, o sintiendo que todo está fuera de lugar. 
       Esta posición también puede revelar adicciones sutiles, decisiones tomadas en medio del caos o la sensación de estar disperso, sin dirección clara. 
       Es un llamado a recuperar el ritmo, a dejar de correr y a escuchar nuevamente tu flujo interno. 
       No se trata de hacer más, sino de fluir mejor. 
       Vuelve al centro: ahí está tu brújula.`,

      shortReversed:
        "Desequilibrio e impaciencia. Forzas resultados y pierdes tu centro. Vuelve al flujo sereno y escucha tu brújula interior.",
    },
  },
  {
    name: "La Torre",
    image: Tower,
    meaning: {
      upright: `La Torre simboliza el colapso repentino, la revelación brutal y el despertar forzado. 
       Representa aquello que se derrumba de golpe: una ilusión, una estructura, una relación o un sistema de creencias que ya no era sólido. 
       Esta carta aparece cuando el universo decide que ya no puedes seguir viviendo en una torre de mentiras, por muy alta y hermosa que parezca. 
       El rayo cae, las murallas se quiebran, y todo lo oculto se revela. 
       Aunque el impacto es violento, su propósito es liberador: te saca del engaño y te devuelve a la realidad. 
       No es un castigo, sino una catástrofe sagrada que abre paso a una fundación más auténtica.`,

      shortUpright:
        "Colapso necesario que revela la verdad. Destruye ilusiones para construir sobre cimientos auténticos.",

      reversed: `En posición invertida, La Torre puede indicar resistencia al colapso, miedo al cambio o la sensación de que el suelo se mueve bajo tus pies. 
       Podrías estar viendo los signos del derrumbe, pero negándolos, esperando que todo siga igual. 
       Esta posición también puede revelar un colapso interno que no se ha manifestado aún, o el temor a una verdad que ya sabes pero no quieres enfrentar. 
       Es un llamado a no aferrarte a lo que ya está agrietado. 
       A veces, es mejor saltar antes de que te empujen. 
       La caída duele, pero sobrevivirla te vuelve más fuerte que nunca.`,

      shortReversed:
        "Resistes el colapso inevitable. Suelta lo agrietado antes de que el universo lo derrumbe por ti.",
    },
  },
  {
    name: "La Estrella",
    image: Star,
    meaning: {
      upright: `La Estrella simboliza la esperanza, la fe y la sanación que nace tras la tormenta. 
       Representa un momento de paz interior, inspiración divina y conexión con tu propósito más profundo. 
       Esta carta aparece cuando, después del caos, comienzas a sentir nuevamente la guía del universo. 
       Como la mujer que vierte agua de dos copas hacia la tierra y el río, ella nutre lo terrenal y lo espiritual con equilibrio y amor. 
       Es un llamado a confiar, a dejar que la intuición te guíe, y a recordar que incluso en la noche más oscura, las estrellas siguen brillando. 
       No es una promesa de que todo será fácil, sino una certeza de que nunca estás solo/a en tu camino.`,

      shortUpright:
        "Esperanza que renace tras la tormenta. Confía en la guía del universo: incluso en la oscuridad, las estrellas brillan.",

      reversed: `En posición invertida, La Estrella puede indicar pérdida de fe, desesperanza o desconexión con tu guía interior. 
       Podrías estar atravesando un vacío emocional, sintiendo que ya no hay luz al final del túnel, o dudando de tu propósito. 
       Esta posición también puede revelar ilusiones rotas o la necesidad de reencender tu propia chispa interior. 
       Es un recordatorio de que a veces, para volver a ver las estrellas, debes dejar de mirar hacia abajo. 
       La esperanza no siempre viene del cielo: a veces, comienza cuando decides volver a creer.`,

      shortReversed:
        "Pérdida de fe y desesperanza. Reencuentra tu chispa interior: la esperanza nace cuando decides volver a creer.",
    },
  },
  {
    name: "La Luna",
    image: Moon,
    meaning: {
      upright: `La Luna simboliza el mundo de lo oculto: los miedos, las ilusiones y los deseos inconscientes que guían tus pasos. 
       Representa un momento de confusión, donde la realidad y la fantasía se mezclan, y nada es exactamente lo que parece. 
       Esta carta aparece cuando caminas por un sendero borroso, guiado por emociones que no comprendes del todo. 
       Los perros aullan, el cangrejo emerge del agua: son señales de que algo profundo está subiendo a la superficie. 
       Es un llamado a confiar en tu intuición, a no huir del misterio, y a entender que a veces, es necesario atravesar la niebla para encontrar la claridad. 
       Lo que temes quizás no es el peligro, sino el descubrimiento de ti mismo/a.`,

      shortUpright:
        "Atraviesa la niebla de lo oculto. Confía en tu intuición: lo que emerge del misterio es tu verdad interior.",

      reversed: `En posición invertida, La Luna puede indicar negación de la sombra, miedo a lo desconocido o rechazo de tu intuición. 
       Podrías estar forzando la lógica donde solo hay emoción, o reprimiendo sueños y señales que tu alma intenta mostrarte. 
       Esta posición también puede revelar paranoia, engaño interno o la necesidad de enfrentar una verdad que has estado evitando. 
       Es un recordatorio de que no puedes iluminar la oscuridad con una linterna: necesitas convertirte en la luz. 
       Acepta lo que se mueve en tu interior: no es para asustarte, es para sanarte.`,

      shortReversed:
        "Niegas tu sombra y rechazas la intuición. Enfrenta lo oculto: convertirte en la luz es tu único camino.",
    },
  },
  {
    name: "El Sol",
    image: Sun,
    meaning: {
      upright: `El Sol simboliza la alegría, la claridad y el triunfo de la luz sobre la sombra. 
       Representa un momento de plenitud, éxito genuino y conexión con tu esencia más auténtica. 
       Esta carta aparece cuando, tras largas pruebas, finalmente puedes ver con claridad: la verdad está al descubierto, el miedo ha desaparecido y tu corazón late con fuerza. 
       Como el niño sobre el caballo blanco, avanzas con inocencia, confianza y una sonrisa que ilumina el camino. 
       Es un tiempo de logros, reconocimiento, salud y vitalidad. 
       También puede señalar una nueva etapa llena de energía positiva, donde lo que siembras florece con naturalidad. 
       No es solo felicidad: es realización. No es solo luz: es despertar.`,

      shortUpright:
        "Triunfo de la luz y la alegría auténtica. Tras las pruebas, llega la realización y el despertar con confianza.",

      reversed: `En posición invertida, El Sol puede indicar sombras temporales, pérdida de entusiasmo o una alegría superficial que oculta dolor. 
       Podrías estar atravesando un eclipse emocional, sintiendo que la luz se apagó de nuevo, o forzando una sonrisa mientras algo en tu interior sufre. 
       Esta posición también puede revelar éxito vacío, reconocimiento sin significado, o la necesidad de proteger tu energía frente a influencias tóxicas. 
       Es un recordatorio de que incluso el Sol tiene sus manchas, y que la verdadera alegría no niega la oscuridad, sino que la transforma. 
       Confía: tras cada eclipse, la luz regresa más fuerte.`,

      shortReversed:
        "Eclipse emocional o alegría forzada. Protege tu luz interior: tras cada sombra, el Sol renace más fuerte.",
    },
  },
  {
    name: "El Juicio",
    image: Judgment,
    meaning: {
      upright: `El Juicio simboliza el despertar espiritual, el llamado interno y la renovación del ser. 
       Representa un momento de claridad profunda en el que escuchas una voz que no viene de afuera, sino del centro de tu alma. 
       Como los cuerpos que emergen de sus tumbas al son de la trompeta, esta carta aparece cuando es tiempo de resucitar: 
       dejar atrás identidades muertas, perdonar el pasado y responder a un propósito más elevado. 
       No es un juicio de valor, sino de conciencia: ¿qué necesitas sanar? ¿Qué estás listo para dejar ir? ¿Qué versión de ti mismo/a estás llamado/a a encarnar? 
       Es un llamado a la responsabilidad, al agradecimiento y al renacimiento. 
       La vida te está dando una segunda oportunidad: levántate.`,

      shortUpright:
        "Despierta a tu llamado interior. Perdona el pasado y renace hacia tu propósito más elevado.",

      reversed: `En posición invertida, El Juicio puede indicar resistencia al llamado, miedo al despertar o negación de una transformación necesaria. 
       Podrías estar ignorando señales internas, posponiendo decisiones importantes o sintiendo que no mereces un nuevo comienzo. 
       Esta posición también puede revelar culpa no procesada, arrepentimientos que pesan o la sensación de estar atrapado en un ciclo que creías cerrado. 
       Es un recordatorio de que nadie puede tocar la trompeta por ti. 
       El perdón, la sanación y el renacimiento están disponibles, pero debes estar dispuesto/a a escuchar. 
       A veces, el mayor acto de valentía es simplemente decir: "Estoy listo/a".`,

      shortReversed:
        "Resistes tu despertar espiritual. Suelta la culpa y acepta la segunda oportunidad que mereces.",
    },
  },
  {
    name: "El Mundo",
    image: World,
    meaning: {
      upright: `El Mundo simboliza la culminación de un ciclo, el logro de una meta y la integración de todo lo vivido. 
       Representa plenitud, realización y el momento en que, tras un largo viaje, puedes decir: "Lo he recorrido todo". 
       Esta carta aparece cuando has superado pruebas, aprendido lecciones y finalmente alcanzado un estado de armonía con tu propósito. 
       Como el danzante en el centro del mundo, estás en equilibrio: entre lo terrenal y lo espiritual, entre acción y descanso, entre soledad y conexión. 
       Es un tiempo de celebración, reconocimiento y gratitud. 
       No es el fin de todo, sino el cierre de una etapa importante. 
       Puedes mirar atrás con orgullo, respirar hondo… y prepararte para lo que viene.`,

      shortUpright:
        "Culminación de un ciclo con plenitud. Celebra tu viaje completo y prepárate para lo que viene.",

      reversed: `En posición invertida, El Mundo puede indicar un logro incompleto, la sensación de que algo falta o la dificultad para cerrar un ciclo. 
       Podrías estar cerca de la meta, pero resistiéndote a reconocer tu éxito, o sintiendo que no mereces celebrar. 
       Esta posición también puede revelar un viaje que no ha terminado, una lección no integrada o la necesidad de soltar el pasado antes de avanzar. 
       Es un recordatorio de que no puedes entrar en una nueva etapa sin cerrar la anterior. 
       A veces, el último paso no es avanzar, sino detenerte, mirar atrás y decir: "Estoy listo/a para seguir".`,

      shortReversed:
        "Resistes cerrar un ciclo. Reconoce tu logro, suelta el pasado y avanza hacia lo nuevo.",
    },
  },
];

export const useTarotStore = defineStore("tarot", {
  state: () => ({
    selectedCard: "default", // Color seleccionado
    revealedCard: null, // Carta revelada
  }),

  actions: {
    setSelectedCard(color: string) {
      this.selectedCard = color;
    },

    revealCard() {
      const randomIndex = Math.floor(Math.random() * cards.length);
      const isReversed = Math.random() > 0.5;

      const card = cards[randomIndex];

      this.revealedCard = {
        name: card.name,
        orientation: isReversed ? "Invertida" : "Al derecho",
        image: card.image,
        meaning: isReversed ? card.meaning.reversed : card.meaning.upright,
        shortMeaning: isReversed
          ? card.meaning.shortReversed
          : card.meaning.shortUpright, // ✅ Nuevo campo
      };
    },

    resetState() {
      this.selectedCard = "default";
      this.revealedCard = null;
    },
  },
});

// Exportación por defecto
export default useTarotStore;
