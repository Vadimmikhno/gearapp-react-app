'use client';

import React from 'react';
import Image from 'next/image';
import ScrollAnimation from './ScrollAnimation';

export default function PortfolioSection() {
  const projects = [
    {
      id: 1,
      title: "Health Track Pro",
      category: "Здоровье и фитнес",
      color: "bg-[#2c3651]",
      image: "/images/health-app.jpg",
      fallbackIcon: "💪",
      description: "Приложение для отслеживания физической активности и здоровья"
    },
    {
      id: 2,
      title: "FinanceWise",
      category: "Финансы",
      color: "bg-[#3c3359]",
      image: "/images/finance-app.jpg",
      fallbackIcon: "💰",
      description: "Управление личными финансами и инвестициями"
    },
    {
      id: 3,
      title: "TravelCompanion",
      category: "Путешествия",
      color: "bg-[#2d3d4c]",
      image: "/images/travel-app.jpg",
      fallbackIcon: "✈️",
      description: "Планирование и организация путешествий в одном месте"
    },
    {
      id: 4,
      title: "FoodExpress",
      category: "Доставка еды",
      color: "bg-[#45354c]",
      image: "/images/food-app.jpg",
      fallbackIcon: "🍔",
      description: "Доставка еды из лучших ресторанов вашего города"
    },
    {
      id: 5,
      title: "MusicStream",
      category: "Развлечения",
      color: "bg-[#3d4136]",
      image: "/images/music-app.jpg",
      fallbackIcon: "🎵",
      description: "Стриминг музыки с персонализированными плейлистами"
    },
    {
      id: 6,
      title: "WeatherAlert",
      category: "Прогноз погоды",
      color: "bg-[#364063]",
      image: "/images/weather-app.jpg",
      fallbackIcon: "🌦️",
      description: "Точные прогнозы погоды с оповещениями в реальном времени"
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fadeInDown" duration={1000}>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-[#131b30] text-indigo-400 text-sm font-semibold rounded-full mb-3">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Check out some of our successful App Store applications</p>
          </div>
        </ScrollAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollAnimation 
              key={project.id} 
              animation={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"} 
              duration={800} 
              delay={200 + (index * 100)}
            >
              <div className="group relative overflow-hidden rounded-2xl h-80 shadow-xl transition-transform duration-300 hover:transform hover:scale-[1.02]">
                {/* Фоновый цвет (запасной вариант) */}
                <div className={`absolute inset-0 ${project.color} opacity-90`}></div>
                
                {/* Изображение проекта */}
                <div className="absolute inset-0 overflow-hidden">
                  {/* Попытка использовать изображение, если оно загружено */}
                  <div className="relative w-full h-full">
                    {/* Система fallback: если изображение не загрузилось, будет отображаться цветной фон с иконкой */}
                    <div className="absolute inset-0 flex items-center justify-center text-6xl">
                      {project.fallbackIcon}
                    </div>
                    
                    {/* Стилизованное изображение с затемнением */}
                    <div className="relative w-full h-full z-10">
                      <div 
                        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050a14] z-20"
                      ></div>
                      
                      <div className="absolute inset-0" style={{
                        background: `linear-gradient(135deg, ${project.color.replace('bg-', '')} 0%, transparent 100%)`,
                        opacity: 0.7,
                        zIndex: 10
                      }}></div>
                      
                      <div className="absolute inset-0 opacity-60 z-0">
                        <div className="w-full h-full flex items-center justify-center">
                          <div className={`w-60 h-60 rounded-full ${project.color} flex items-center justify-center filter blur-md opacity-70`}>
                            <span className="text-9xl opacity-70">{project.fallbackIcon}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Контент проекта */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
                  <span className="text-xs font-medium text-white text-opacity-80 mb-2 block">{project.category}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-300 line-clamp-2">{project.description}</p>
                </div>
                
                {/* Оверлей при наведении */}
                <div className="absolute inset-0 bg-[#131b30] bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-40 p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 text-center mb-6">{project.description}</p>
                  <a href="#" className="btn bg-[#1C1C1C] hover:bg-[#27272A] text-white shadow-md transform">
                    Learn More
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
        
        <ScrollAnimation animation="fadeInUp" duration={1000} delay={600}>
          <div className="mt-16 text-center">
            <a href="#" className="inline-flex items-center text-gray-300 font-medium hover:text-white transition duration-300">
              <span>Want to see more projects?</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
} 