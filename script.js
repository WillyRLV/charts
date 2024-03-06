// setup 

const datos = [
  {
    "dni": "74189636",
    "pregunta": "Los jefes/managers me mantienen informado acerca de cosas y cambios importantes.",
    "dimension": "Credibilidad",
    "subDimension": "Comunicación",
    "valor": 92,
    "top": 1,
    "lower": 0
  },
  {
    "dni": "74189636",
    "pregunta": "Los jefes/managers comunican claramente qué se espera de nuestro trabajo.",
    "dimension": "Credibilidad",
    "subDimension": "Comunicación",
    "valor": 79,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "74189636",
    "pregunta": "Puedo hacer cualquier pregunta razonable a los jefes/managers y recibir una respuesta directa.",
    "dimension": "Credibilidad",
    "subDimension": "Comunicación",
    "valor": 79,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "74189636",
    "pregunta": "Los jefes/managers son accesibles, es fácil hablar con ellos.",
    "dimension": "Credibilidad",
    "subDimension": "Comunicación",
    "valor": 88,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "74189636",
    "pregunta": "Los jefes/managers son competentes en el manejo del negocio.",
    "dimension": "Credibilidad",
    "subDimension": "Habilidad Gerencial",
    "valor": 75,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "74189636",
    "pregunta": "Los colaboradores que ingresan a la organización encajan bien con nuestra cultura.",
    "dimension": "Credibilidad",
    "subDimension": "Habilidad Gerencial",
    "valor": 79,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "74189636",
    "pregunta": "Los jefes/managers asignan adecuadamente las labores y coordinación de las personas.",
    "dimension": "Credibilidad",
    "subDimension": "Habilidad Gerencial",
    "valor": 79,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "74189636",
    "pregunta": "Los jefes/managers confían en que las personas harán un buen trabajo sin tener que estar supervisándolos.",
    "dimension": "Credibilidad",
    "subDimension": "Habilidad Gerencial",
    "valor": 92,
    "top": 1,
    "lower": 0
  },
  {
    "dni": "74189636",
    "pregunta": "Los jefes/managers tienen una visión clara de hacia dónde va la organización y qué hacer para lograrlo.",
    "dimension": "Credibilidad",
    "subDimension": "Habilidad Gerencial",
    "valor": 79,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "74189636",
    "pregunta": "Los jefes/managers cumplen sus promesas.",
    "dimension": "Credibilidad",
    "subDimension": "Integridad",
    "valor": 79,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "74189636",
    "pregunta": "Las palabras de los jefes/managers coinciden con sus actos.",
    "dimension": "Credibilidad",
    "subDimension": "Integridad",
    "valor": 75,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "74189636",
    "pregunta": "Nuestros jefes/managers representan plenamente los valores de nuestra organización.",
    "dimension": "Credibilidad",
    "subDimension": "Integridad",
    "valor": 75,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "74189636",
    "pregunta": "Los jefes/managers conducen el negocio de manera ética y honesta.",
    "dimension": "Credibilidad",
    "subDimension": "Integridad",
    "valor": 75,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "74189636",
    "pregunta": "Los jefes/managers muestran aprecio y reconocimiento por el buen trabajo y por el esfuerzo extra.",
    "dimension": "Respeto",
    "subDimension": "Apoyo Profesional",
    "valor": 71,
    "top": 0,
    "lower": 1
  },
  {
    "dni": "74189636",
    "pregunta": "Los jefes/managers reconocen que pueden cometerse errores involuntarios en el trabajo.",
    "dimension": "Respeto",
    "subDimension": "Apoyo Profesional",
    "valor": 63,
    "top": 0,
    "lower": 1
  },
  {
    "dni": "74189636",
    "pregunta": "Los jefes/managers incentivan, consideran y responden genuinamente a nuestras ideas y sugerencias.",
    "dimension": "Respeto",
    "subDimension": "Colaboración",
    "valor": 75,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "74189636",
    "pregunta": "Los jefes/managers consideran a los colaboradores en decisiones relacionadas a su trabajo o a su ambiente de trabajo.",
    "dimension": "Respeto",
    "subDimension": "Colaboración",
    "valor": 79,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "74189636",
    "pregunta": "Puedo tomar tiempo libre, de forma coordinada, para atender asuntos personales de importancia.",
    "dimension": "Respeto",
    "subDimension": "Interés como persona",
    "valor": 79,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "74189636",
    "pregunta": "Los jefes/managers demuestran un interés genuino en mí como persona, no sólo como empleado.",
    "dimension": "Respeto",
    "subDimension": "Interés como persona",
    "valor": 67,
    "top": 0,
    "lower": 1
  },
  {
    "dni": "74189636",
    "pregunta": "Los jefes/managers tratan a todos por igual; no hay favoritismos.",
    "dimension": "Imparcialidad",
    "subDimension": "Ausencia de Favoritismo",
    "valor": 71,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "81034567",
    "pregunta": "Los jefes/managers me mantienen informado acerca de cosas y cambios importantes.",
    "dimension": "Credibilidad",
    "subDimension": "Comunicación",
    "valor": 77,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "81034567",
    "pregunta": "Los jefes/managers comunican claramente qué se espera de nuestro trabajo.",
    "dimension": "Credibilidad",
    "subDimension": "Comunicación",
    "valor": 74,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "81034567",
    "pregunta": "Puedo hacer cualquier pregunta razonable a los jefes/managers y recibir una respuesta directa.",
    "dimension": "Credibilidad",
    "subDimension": "Comunicación",
    "valor": 66,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "81034567",
    "pregunta": "Los jefes/managers son accesibles, es fácil hablar con ellos.",
    "dimension": "Credibilidad",
    "subDimension": "Comunicación",
    "valor": 77,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "81034567",
    "pregunta": "Los jefes/managers son competentes en el manejo del negocio.",
    "dimension": "Credibilidad",
    "subDimension": "Habilidad Gerencial",
    "valor": 74,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "81034567",
    "pregunta": "Los colaboradores que ingresan a la organización encajan bien con nuestra cultura.",
    "dimension": "Credibilidad",
    "subDimension": "Habilidad Gerencial",
    "valor": 57,
    "top": 0,
    "lower": 1
  },
  {
    "dni": "81034567",
    "pregunta": "Los jefes/managers asignan adecuadamente las labores y coordinación de las personas.",
    "dimension": "Credibilidad",
    "subDimension": "Habilidad Gerencial",
    "valor": 69,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "81034567",
    "pregunta": "Los jefes/managers confían en que las personas harán un buen trabajo sin tener que estar supervisándolos.",
    "dimension": "Credibilidad",
    "subDimension": "Habilidad Gerencial",
    "valor": 77,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "81034567",
    "pregunta": "Los jefes/managers tienen una visión clara de hacia dónde va la organización y qué hacer para lograrlo.",
    "dimension": "Credibilidad",
    "subDimension": "Habilidad Gerencial",
    "valor": 77,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "81034567",
    "pregunta": "Los jefes/managers cumplen sus promesas.",
    "dimension": "Credibilidad",
    "subDimension": "Integridad",
    "valor": 66,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "81034567",
    "pregunta": "Las palabras de los jefes/managers coinciden con sus actos.",
    "dimension": "Credibilidad",
    "subDimension": "Integridad",
    "valor": 63,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "81034567",
    "pregunta": "Nuestros jefes/managers representan plenamente los valores de nuestra organización.",
    "dimension": "Credibilidad",
    "subDimension": "Integridad",
    "valor": 69,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "81034567",
    "pregunta": "Los jefes/managers conducen el negocio de manera ética y honesta.",
    "dimension": "Credibilidad",
    "subDimension": "Integridad",
    "valor": 77,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "81034567",
    "pregunta": "Los jefes/managers muestran aprecio y reconocimiento por el buen trabajo y por el esfuerzo extra.",
    "dimension": "Respeto",
    "subDimension": "Apoyo Profesional",
    "valor": 63,
    "top": 0,
    "lower": 1
  },
  {
    "dni": "81034567",
    "pregunta": "Los jefes/managers reconocen que pueden cometerse errores involuntarios en el trabajo.",
    "dimension": "Respeto",
    "subDimension": "Apoyo Profesional",
    "valor": 66,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "81034567",
    "pregunta": "Los jefes/managers incentivan, consideran y responden genuinamente a nuestras ideas y sugerencias.",
    "dimension": "Respeto",
    "subDimension": "Colaboración",
    "valor": 80,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "81034567",
    "pregunta": "Los jefes/managers consideran a los colaboradores en decisiones relacionadas a su trabajo o a su ambiente de trabajo.",
    "dimension": "Respeto",
    "subDimension": "Colaboración",
    "valor": 66,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "81034567",
    "pregunta": "Puedo tomar tiempo libre, de forma coordinada, para atender asuntos personales de importancia.",
    "dimension": "Respeto",
    "subDimension": "Interés como persona",
    "valor": 74,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "81034567",
    "pregunta": "Los jefes/managers demuestran un interés genuino en mí como persona, no sólo como empleado.",
    "dimension": "Respeto",
    "subDimension": "Interés como persona",
    "valor": 66,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "81034567",
    "pregunta": "Los jefes/managers tratan a todos por igual; no hay favoritismos.",
    "dimension": "Imparcialidad",
    "subDimension": "Ausencia de Favoritismo",
    "valor": 43,
    "top": 0,
    "lower": 1
  },
  {
    "dni": "01236878",
    "pregunta": "Los jefes/managers me mantienen informado acerca de cosas y cambios importantes.",
    "dimension": "Credibilidad",
    "subDimension": "Comunicación",
    "valor": 68,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "01236878",
    "pregunta": "Los jefes/managers comunican claramente qué se espera de nuestro trabajo.",
    "dimension": "Credibilidad",
    "subDimension": "Comunicación",
    "valor": 78,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "01236878",
    "pregunta": "Puedo hacer cualquier pregunta razonable a los jefes/managers y recibir una respuesta directa.",
    "dimension": "Credibilidad",
    "subDimension": "Comunicación",
    "valor": 66,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "01236878",
    "pregunta": "Los jefes/managers son accesibles, es fácil hablar con ellos.",
    "dimension": "Credibilidad",
    "subDimension": "Comunicación",
    "valor": 63,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "01236878",
    "pregunta": "Los jefes/managers son competentes en el manejo del negocio.",
    "dimension": "Credibilidad",
    "subDimension": "Habilidad Gerencial",
    "valor": 73,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "01236878",
    "pregunta": "Los colaboradores que ingresan a la organización encajan bien con nuestra cultura.",
    "dimension": "Credibilidad",
    "subDimension": "Habilidad Gerencial",
    "valor": 59,
    "top": 0,
    "lower": 1
  },
  {
    "dni": "01236878",
    "pregunta": "Los jefes/managers asignan adecuadamente las labores y coordinación de las personas.",
    "dimension": "Credibilidad",
    "subDimension": "Habilidad Gerencial",
    "valor": 61,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "01236878",
    "pregunta": "Los jefes/managers confían en que las personas harán un buen trabajo sin tener que estar supervisándolos.",
    "dimension": "Credibilidad",
    "subDimension": "Habilidad Gerencial",
    "valor": 68,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "01236878",
    "pregunta": "Los jefes/managers tienen una visión clara de hacia dónde va la organización y qué hacer para lograrlo.",
    "dimension": "Credibilidad",
    "subDimension": "Habilidad Gerencial",
    "valor": 71,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "01236878",
    "pregunta": "Los jefes/managers cumplen sus promesas.",
    "dimension": "Credibilidad",
    "subDimension": "Integridad",
    "valor": 59,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "01236878",
    "pregunta": "Las palabras de los jefes/managers coinciden con sus actos.",
    "dimension": "Credibilidad",
    "subDimension": "Integridad",
    "valor": 66,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "01236878",
    "pregunta": "Nuestros jefes/managers representan plenamente los valores de nuestra organización.",
    "dimension": "Credibilidad",
    "subDimension": "Integridad",
    "valor": 71,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "01236878",
    "pregunta": "Los jefes/managers conducen el negocio de manera ética y honesta.",
    "dimension": "Credibilidad",
    "subDimension": "Integridad",
    "valor": 78,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "01236878",
    "pregunta": "Los jefes/managers muestran aprecio y reconocimiento por el buen trabajo y por el esfuerzo extra.",
    "dimension": "Respeto",
    "subDimension": "Apoyo Profesional",
    "valor": 66,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "01236878",
    "pregunta": "Los jefes/managers reconocen que pueden cometerse errores involuntarios en el trabajo.",
    "dimension": "Respeto",
    "subDimension": "Apoyo Profesional",
    "valor": 59,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "01236878",
    "pregunta": "Los jefes/managers incentivan, consideran y responden genuinamente a nuestras ideas y sugerencias.",
    "dimension": "Respeto",
    "subDimension": "Colaboración",
    "valor": 68,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "01236878",
    "pregunta": "Los jefes/managers consideran a los colaboradores en decisiones relacionadas a su trabajo o a su ambiente de trabajo.",
    "dimension": "Respeto",
    "subDimension": "Colaboración",
    "valor": 68,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "01236878",
    "pregunta": "Puedo tomar tiempo libre, de forma coordinada, para atender asuntos personales de importancia.",
    "dimension": "Respeto",
    "subDimension": "Interés como persona",
    "valor": 59,
    "top": 0,
    "lower": 1
  },
  {
    "dni": "01236878",
    "pregunta": "Los jefes/managers demuestran un interés genuino en mí como persona, no sólo como empleado.",
    "dimension": "Respeto",
    "subDimension": "Interés como persona",
    "valor": 66,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "01236878",
    "pregunta": "Los jefes/managers tratan a todos por igual; no hay favoritismos.",
    "dimension": "Imparcialidad",
    "subDimension": "Ausencia de Favoritismo",
    "valor": 56,
    "top": 0,
    "lower": 1
  },
  {
    "dni": "96478932",
    "pregunta": "Los jefes/managers me mantienen informado acerca de cosas y cambios importantes.",
    "dimension": "Credibilidad",
    "subDimension": "Comunicación",
    "valor": 85,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "96478932",
    "pregunta": "Los jefes/managers comunican claramente qué se espera de nuestro trabajo.",
    "dimension": "Credibilidad",
    "subDimension": "Comunicación",
    "valor": 83,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "96478932",
    "pregunta": "Puedo hacer cualquier pregunta razonable a los jefes/managers y recibir una respuesta directa.",
    "dimension": "Credibilidad",
    "subDimension": "Comunicación",
    "valor": 76,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "96478932",
    "pregunta": "Los jefes/managers son accesibles, es fácil hablar con ellos.",
    "dimension": "Credibilidad",
    "subDimension": "Comunicación",
    "valor": 73,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "96478932",
    "pregunta": "Los jefes/managers son competentes en el manejo del negocio.",
    "dimension": "Credibilidad",
    "subDimension": "Habilidad Gerencial",
    "valor": 80,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "96478932",
    "pregunta": "Los colaboradores que ingresan a la organización encajan bien con nuestra cultura.",
    "dimension": "Credibilidad",
    "subDimension": "Habilidad Gerencial",
    "valor": 66,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "96478932",
    "pregunta": "Los jefes/managers asignan adecuadamente las labores y coordinación de las personas.",
    "dimension": "Credibilidad",
    "subDimension": "Habilidad Gerencial",
    "valor": 71,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "96478932",
    "pregunta": "Los jefes/managers confían en que las personas harán un buen trabajo sin tener que estar supervisándolos.",
    "dimension": "Credibilidad",
    "subDimension": "Habilidad Gerencial",
    "valor": 73,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "96478932",
    "pregunta": "Los jefes/managers tienen una visión clara de hacia dónde va la organización y qué hacer para lograrlo.",
    "dimension": "Credibilidad",
    "subDimension": "Habilidad Gerencial",
    "valor": 80,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "96478932",
    "pregunta": "Los jefes/managers cumplen sus promesas.",
    "dimension": "Credibilidad",
    "subDimension": "Integridad",
    "valor": 63,
    "top": 0,
    "lower": 1
  },
  {
    "dni": "96478932",
    "pregunta": "Las palabras de los jefes/managers coinciden con sus actos.",
    "dimension": "Credibilidad",
    "subDimension": "Integridad",
    "valor": 68,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "96478932",
    "pregunta": "Nuestros jefes/managers representan plenamente los valores de nuestra organización.",
    "dimension": "Credibilidad",
    "subDimension": "Integridad",
    "valor": 83,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "96478932",
    "pregunta": "Los jefes/managers conducen el negocio de manera ética y honesta.",
    "dimension": "Credibilidad",
    "subDimension": "Integridad",
    "valor": 73,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "96478932",
    "pregunta": "Los jefes/managers muestran aprecio y reconocimiento por el buen trabajo y por el esfuerzo extra.",
    "dimension": "Respeto",
    "subDimension": "Apoyo Profesional",
    "valor": 63,
    "top": 0,
    "lower": 1
  },
  {
    "dni": "96478932",
    "pregunta": "Los jefes/managers reconocen que pueden cometerse errores involuntarios en el trabajo.",
    "dimension": "Respeto",
    "subDimension": "Apoyo Profesional",
    "valor": 71,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "96478932",
    "pregunta": "Los jefes/managers incentivan, consideran y responden genuinamente a nuestras ideas y sugerencias.",
    "dimension": "Respeto",
    "subDimension": "Colaboración",
    "valor": 66,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "96478932",
    "pregunta": "Los jefes/managers consideran a los colaboradores en decisiones relacionadas a su trabajo o a su ambiente de trabajo.",
    "dimension": "Respeto",
    "subDimension": "Colaboración",
    "valor": 73,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "96478932",
    "pregunta": "Puedo tomar tiempo libre, de forma coordinada, para atender asuntos personales de importancia.",
    "dimension": "Respeto",
    "subDimension": "Interés como persona",
    "valor": 83,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "96478932",
    "pregunta": "Los jefes/managers demuestran un interés genuino en mí como persona, no sólo como empleado.",
    "dimension": "Respeto",
    "subDimension": "Interés como persona",
    "valor": 71,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "96478932",
    "pregunta": "Los jefes/managers tratan a todos por igual; no hay favoritismos.",
    "dimension": "Imparcialidad",
    "subDimension": "Ausencia de Favoritismo",
    "valor": 56,
    "top": 0,
    "lower": 1
  },
  {
    "dni": "65387965",
    "pregunta": "Los jefes/managers me mantienen informado acerca de cosas y cambios importantes.",
    "dimension": "Credibilidad",
    "subDimension": "Comunicación",
    "valor": 91,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "65387965",
    "pregunta": "Los jefes/managers comunican claramente qué se espera de nuestro trabajo.",
    "dimension": "Credibilidad",
    "subDimension": "Comunicación",
    "valor": 58,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "65387965",
    "pregunta": "Puedo hacer cualquier pregunta razonable a los jefes/managers y recibir una respuesta directa.",
    "dimension": "Credibilidad",
    "subDimension": "Comunicación",
    "valor": 96,
    "top": 1,
    "lower": 0
  },
  {
    "dni": "65387965",
    "pregunta": "Los jefes/managers son accesibles, es fácil hablar con ellos.",
    "dimension": "Credibilidad",
    "subDimension": "Comunicación",
    "valor": 58,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "65387965",
    "pregunta": "Los jefes/managers son competentes en el manejo del negocio.",
    "dimension": "Credibilidad",
    "subDimension": "Habilidad Gerencial",
    "valor": 98,
    "top": 1,
    "lower": 0
  },
  {
    "dni": "65387965",
    "pregunta": "Los colaboradores que ingresan a la organización encajan bien con nuestra cultura.",
    "dimension": "Credibilidad",
    "subDimension": "Habilidad Gerencial",
    "valor": 15,
    "top": 0,
    "lower": 1
  },
  {
    "dni": "65387965",
    "pregunta": "Los jefes/managers asignan adecuadamente las labores y coordinación de las personas.",
    "dimension": "Credibilidad",
    "subDimension": "Habilidad Gerencial",
    "valor": 60,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "65387965",
    "pregunta": "Los jefes/managers confían en que las personas harán un buen trabajo sin tener que estar supervisándolos.",
    "dimension": "Credibilidad",
    "subDimension": "Habilidad Gerencial",
    "valor": 40,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "65387965",
    "pregunta": "Los jefes/managers tienen una visión clara de hacia dónde va la organización y qué hacer para lograrlo.",
    "dimension": "Credibilidad",
    "subDimension": "Habilidad Gerencial",
    "valor": 58,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "65387965",
    "pregunta": "Los jefes/managers cumplen sus promesas.",
    "dimension": "Credibilidad",
    "subDimension": "Integridad",
    "valor": 60,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "65387965",
    "pregunta": "Las palabras de los jefes/managers coinciden con sus actos.",
    "dimension": "Credibilidad",
    "subDimension": "Integridad",
    "valor": 92,
    "top": 1,
    "lower": 0
  },
  {
    "dni": "65387965",
    "pregunta": "Nuestros jefes/managers representan plenamente los valores de nuestra organización.",
    "dimension": "Credibilidad",
    "subDimension": "Integridad",
    "valor": 32,
    "top": 0,
    "lower": 1
  },
  {
    "dni": "65387965",
    "pregunta": "Los jefes/managers conducen el negocio de manera ética y honesta.",
    "dimension": "Credibilidad",
    "subDimension": "Integridad",
    "valor": 59,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "65387965",
    "pregunta": "Los jefes/managers muestran aprecio y reconocimiento por el buen trabajo y por el esfuerzo extra.",
    "dimension": "Respeto",
    "subDimension": "Apoyo Profesional",
    "valor": 73,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "65387965",
    "pregunta": "Los jefes/managers reconocen que pueden cometerse errores involuntarios en el trabajo.",
    "dimension": "Respeto",
    "subDimension": "Apoyo Profesional",
    "valor": 50,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "65387965",
    "pregunta": "Los jefes/managers incentivan, consideran y responden genuinamente a nuestras ideas y sugerencias.",
    "dimension": "Respeto",
    "subDimension": "Colaboración",
    "valor": 41,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "65387965",
    "pregunta": "Los jefes/managers consideran a los colaboradores en decisiones relacionadas a su trabajo o a su ambiente de trabajo.",
    "dimension": "Respeto",
    "subDimension": "Colaboración",
    "valor": 30,
    "top": 0,
    "lower": 1
  },
  {
    "dni": "65387965",
    "pregunta": "Puedo tomar tiempo libre, de forma coordinada, para atender asuntos personales de importancia.",
    "dimension": "Respeto",
    "subDimension": "Interés como persona",
    "valor": 71,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "65387965",
    "pregunta": "Los jefes/managers demuestran un interés genuino en mí como persona, no sólo como empleado.",
    "dimension": "Respeto",
    "subDimension": "Interés como persona",
    "valor": 57,
    "top": 0,
    "lower": 0
  },
  {
    "dni": "65387965",
    "pregunta": "Los jefes/managers tratan a todos por igual; no hay favoritismos.",
    "dimension": "Imparcialidad",
    "subDimension": "Ausencia de Favoritismo",
    "valor": 89,
    "top": 0,
    "lower": 0
  }
]

const labels = [
  "What's the most difficult thing about being you?",
  "What's something that you know that few other people know?",
  "Are you currently where you want to be in life?",
  "Is there a part of your culture that you don't like?",
  "What's the best trick someone has ever played on you?",
  "What food combination do you eat that makes others cringe?",
  "What's the strangest thing you've ever found?",
  "What the best thing that can happen in the first 5 minutes after waking up?",
  "What's something that you know you should start, but haven't?",
  "What is something you thought would be a great idea but was terrible when you actually did it?",
  'Has someone ever done a random act of kindness to you?',
  "Is there anything that most people find cute that creeps you out?",
  "What's your knowing just enough to be dangerous story?",
  "What is the most selfish thing you do that you're okay with?",
  "If you had to describe your current life as a movie, which movie would you choose?",
  "Do you name inanimate objects?",
  "How well do you trust your gut feelings?",
  "Do you have any apps on your phone that you've never used?",
  "What's something about you today that the old you would find surprising?",
  "What bad decision did you make that actually turned out to be a good decision?"
];

// exceñ

var myOldChart

// document.getElementById('excelInput').addEventListener('change', handleFile);
document.getElementById('search').addEventListener('click', searchData);


function handleFile(event) {

  const fileInput = event.target;
  const file = event.target.files[0];


  // const dniEspecifico = prompt('Ingrese DNI');

  // if (!dniEspecifico) {
  //   console.log('No se proporcionó un DNI. Cancelando el proceso.');
  //   return;
  // }

  // document.getElementById("aea").innerHTML = dniEspecifico
  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });

      // Supongamos que tienes solo una hoja y una columna
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const columnData = XLSX.utils.sheet_to_json(sheet, { header: 1, range: 1 });

      // Guardar en el almacenamiento local
      //   localStorage.setItem('excelData', JSON.stringify(columnData));

      // Obtener el DNI específico que deseas buscar (supongamos que está en la primera columna)


      // Filtrar los datos por el DNI específico
      //  const filteredData = columnData.filter(row => row[0] === dniEspecifico);

      const questions = columnData.map(row => {
        return {
          dni: row[0],
          pregunta: row[2],
          dimension: row[3],
          subDimension: row[4],
          valor: row[5],
          top: row[6],
          lower: row[7],
        }
      })
      console.log(questions);
      localStorage.setItem('exceData', JSON.stringify(questions))



    };

    fileInput.value = '';  // Esto limpia el campo de entrada

    reader.readAsArrayBuffer(file);
  }
}






//   const datos = [
//   { pregunta: 'Pregunta 1', dimension: 'Respeto', valor: 20 },
//   { pregunta: 'Pregunta 2', dimension: 'Credibilidad', valor: 70 },
//   { pregunta: 'Pregunta 3', dimension: 'Credibilidad', valor: 99 },
//   { pregunta: 'Pregunta 4', dimension: 'Respeto', valor: 91 },
//   { pregunta: 'Pregunta 5', dimension: 'Respeto', valor: 23 },
//   { pregunta: 'Pregunta 6', dimension: 'Credibilidad', valor: 96 },
//   { pregunta: 'Pregunta 7', dimension: 'Imparcialidad', valor: 74 },
//   { pregunta: 'Pregunta 8', dimension: 'Respeto', valor: 88 },
//   { pregunta: 'Pregunta 9', dimension: 'Respeto', valor: 54 },
//   { pregunta: 'Pregunta 10', dimension: 'Imparcialidad', valor: 10 },
//   { pregunta: 'Pregunta 11', dimension: 'Imparcialidad', valor: 62 },
// ];



//!! logica busqueda

function searchData() {

  const dni = document.getElementById("dni-input").value



  const filteredData = datos.filter(row => row.dni === dni);
  if (filteredData && filteredData.length > 0) {
    console.log(filteredData);
    renderChart()
    renderFirst(filteredData)
    renderTable(filteredData)
  }
  // datos.map(item => console.log(item.dni))
}



function renderFirst(params) {


  // Función para obtener el icono correspondiente
  function obtenerIcono(item) {
    if (item.top === 1) {
      return '⭐️'; // Estrella
    } else if (item.lower === 1) {
      return '⚠️'; // Icono de advertencia
    } else {
      return ''; // Sin icono
    }
  }
  var data = {
    labels: params.map(item => item.pregunta),
    datasets: [
      {
        label: 'Credibilidad',
        data: params.map(item => (item.dimension === 'Credibilidad' ? item.valor : null)),
        backgroundColor: '#1F6E8C',
      
        borderWidth: 1,
        top: params.map(item => (item.top === 1 ? 1 : 0)), // Agrega la propiedad 'top'
        lower: params.map(item => (item.lower === 1 ? 1 : 0)), // Agrega la propiedad 'lower'
      },
      {
        label: 'Respeto',
        data: params.map(item => (item.dimension === 'Respeto' ? item.valor : null)),
        backgroundColor: '#2E8A99',
      
        borderWidth: 1,
        top: params.map(item => (item.top === 1 ?1 : 0)), // Agrega la propiedad 'top'
        lower: params.map(item => (item.lower === 1 ?1 : 0)), // Agrega la 
      },
      {
        label: 'Imparcialidad',
        data: params.map(item => (item.dimension === 'Imparcialidad' ? item.valor : null)),
        backgroundColor: '#84A7A1',
 
        borderWidth: 1,
        top: params.map(item => (item.top === 1 ?1 : 0)), // Agrega la propiedad 'top'
        lower: params.map(item => (item.lower === 1 ?1 : 0)), // Agrega la 
      },
    ],
  };


  // Agregar la estrella o el icono de advertencia al final de cada barra


  const config = {
    type: 'bar',
    data,
    options: {

      layout: {
        padding: {
          // Espacio a la izquierda
          right: 20, // Espacio a la derecha

        }
      },
      plugins: {
        datalabels: {

          formatter: function (value, context) {
            if (value !== null) {
              return value + '%'; // Agrega el símbolo de porcentaje
            } else {
              return ''; // Si el valor es null, no muestres nada
            }
          },
          color: 'white', // Color del texto
          font: {
            size: 11,
            weight: 'bold' // Fuente en negrita
          }
        },
        tooltip: {

          callbacks: {
            title: function (context) {
              return ''
            },
          },
        }
      },
      responsive: true,
      maintainAspectRatio: false,

      indexAxis: 'y',
      scales: {
        x: {
          stacked: true,
          beginAtZero: true,
          ticks: {
            callback: function (value) {
              return 'Total: ' + value + '%';
            },
          },
          max:100// Valor máximo sugerido
        },
        y: {
          stacked: true,
          ticks: {
            position: 'center',
            autoSkip: false,
            padding: 10,

          },
        },
      },
    },

    plugins: [ChartDataLabels,
      {
        afterDraw: function(chart) {
          var ctx = chart.ctx;
          chart.data.datasets.forEach(function(dataset, index) {
              var meta = chart.getDatasetMeta(index);
              if (!meta.hidden) {
                  meta.data.forEach(function(element, index) {
                      var dataValue = dataset.data[index];
                      if (dataValue !== null) {
                          var x = element.tooltipPosition().x;
                          var y = element.tooltipPosition().y;
                          ctx.font = 'bold 18px "Helvetica Neue", Helvetica, Arial, sans-serif';
                          ctx.textAlign = 'left';
  
                          // Ajusta la posición según tus necesidades
                          var xOffset = 1;
                          var yOffset = 0;
  
                          // Si está en top: 1, agrega una estrella
                          if (dataset.top[index] === 1) {
                            ctx.fillStyle = '#FAA300'; // Color de la estrella
                            ctx.fillText('\u2605', x + xOffset, y + yOffset); // Estrella Unicode
                        }
                        // Si está en lower: 1, agrega un símbolo de advertencia
                        else if (dataset.lower[index] === 1) {
                        
                            ctx.fillStyle = '#EE4266'; // Color de la advertencia
                            ctx.fillText('\u26A0', x + xOffset, y + yOffset); // Símbolo de advertencia Unicode
                        }
                        // De lo contrario, no muestra ningún icono
                      }
                  });
              }
          });
      }


      }


    ]
    //plugins: [{
    // beforeInit: function (chart) {
    //   chart.data.labels.forEach(function (value, index, array) {
    //     var a = [];
    //   a.push(value.slice(0, 20));
    // var i = 1;
    //while(value.length > (i * 20)){
    //  a.push(value.slice(i * 17, (i + 1) * 20));
    //i++;
    //}
    //array[index] = a;
    //console.log(a)
    //})
    //}
    // }]


  };

  //Chart.defaults.datasets.bar.barThickness = 15;
  //   console.log(Chart.Scale)
  //   Chart.defaults.font.size = 13;
  // render init block
  // Destruir el gráfico existente


  let myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

  myOldChart = myChart;
}


function renderChart() {
  if (myOldChart) {
    myOldChart.destroy()

  }
}


// tabla
// Función para obtener el icono correspondiente
function obtenerIcono(valor) {
  return valor === 1 ? "⚠️" : ""; // Icono de advertencia
}


// function renderTable(params) {

//   // Crear una tabla en tu HTML
//   const tablaHTML = `
// <table>
//   <thead>
//     <tr>
//       <th>Pregunta</th>
//       <th>Valor</th>
//       <th>Icono</th>
//     </tr>
//   </thead>
//   <tbody>
//     ${params.map(item => `
//       <tr>
//         <td>${item.pregunta}</td>
//         <td>${item.valor}</td>
//         <td>${item.top === 1 ? "⭐️" : obtenerIcono(item.lower)}</td>
//       </tr>
//     `).join("")}
//   </tbody>
// </table>
// `;


//   document.getElementById("tabla-container").innerHTML = tablaHTML;
// }




