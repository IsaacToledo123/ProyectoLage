import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../imgs/LogoNutrifit.png'
function App() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-green-50 min-h-screen font-sans">
      <header className="bg-white shadow-md fixed w-full z-10">
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
            
               <img src={Logo} alt="" /> 
              
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-black">NUTRIFIT</h1>
              <p className="text-xs text-gray-600">NUTRICIÓN & BIENESTAR</p>
            </div>
          </motion.div>
          <nav>
            <ul className="flex space-x-6">
              {['Inicio', 'Nosotros', 'Servicios', 'Objetivos', 'Valores', 'Contacto'].map((item) => (
                <motion.li key={item} whileHover={{ scale: 1.1 }}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-green-500 transition duration-300">{item}</a>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        <section id="inicio" className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-5xl font-bold mb-4 text-black">Transforma tu vida con NutriFit</h2>
              <p className="text-xl mb-8 text-gray-700">Nutrición personalizada y bienestar a tu alcance</p>
              <motion.a
                href="#contacto"
                className="bg-green-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300 inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="/registro">  Comienza tu viaje</a>
              
              </motion.a>
            </motion.div>
          </div>
        </section>

        <section id="nosotros" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12 text-black"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Quiénes Somos
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-green-600">Misión</h3>
                <p className="text-gray-600">Empoderar a las personas para que alcancen su máximo potencial de salud y bienestar a través de soluciones innovadoras en nutrición y estilo de vida.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-green-600">Visión</h3>
                <p className="text-gray-600">Convertirnos en el referente global en el ámbito de la nutrición y el bienestar, reconocidos por nuestra innovación, calidad y enfoque en la sostenibilidad.</p>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="servicios" className="py-20 bg-blue-50">
          <div className="container mx-auto px-6">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12 text-black"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Nuestros Servicios
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                icon="🥗" 
                title="Dietas personalizadas" 
                description="Planes de alimentación adaptados a tus objetivos y preferencias."
              />
              <FeatureCard 
                icon="💪" 
                title="Rutinas de ejercicio" 
                description="Programas de entrenamiento para todos los niveles."
              />
              <FeatureCard 
                icon="📊" 
                title="Seguimiento de progreso" 
                description="Monitorea tus avances y mantente motivado."
              />
            </div>
          </div>
        </section>

        <section id="objetivos" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12 text-black"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Nuestros Objetivos
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <p className="text-gray-600"><strong>Objetivo General:</strong> Desarrollar una aplicación móvil de nutrición y bienestar que proporcione planes personalizados y facilite el seguimiento de la actividad física.</p>
              <h3 className="text-xl font-semibold text-green-600">Objetivos Específicos:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Satisfacer las necesidades de los usuarios.</li>
                <li>Implementar herramientas de seguimiento integradas.</li>
                <li>Cumplir con los objetivos de los usuarios.</li>
                <li>Desarrollar algoritmos para recomendaciones personalizadas.</li>
              </ul>
            </motion.div>
          </div>
        </section>

        <section id="valores" className="py-20 bg-blue-50">
          <div className="container mx-auto px-6">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12 text-black"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Nuestros Valores
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {['Integridad', 'Innovación', 'Responsabilidad', 'Calidad', 'Colaboración', 'Disciplina'].map((valor, index) => (
                <motion.div 
                  key={valor} 
                  className="text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-green-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl text-green-600">{valor[0]}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700">{valor}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <motion.h2 
              className="text-3xl font-bold mb-8 text-black"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              ¿Listo para transformar tu vida?
            </motion.h2>
            <motion.a
              href="#"
              className="bg-green-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contáctanos
            </motion.a>
          </div>
        </section>
      </main>

      <footer className="bg-blue-100 text-gray-800 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 NutriFit. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

export default App;