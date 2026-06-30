import { useState } from 'react';

interface AccordionItemData {
  id: number;
  title: string;
  imageUrl: string;
}

interface AccordionItemProps {
  item: AccordionItemData;
  isActive: boolean;
  onMouseEnter: () => void;
}

const accordionItems: AccordionItemData[] = [
  {
    id: 1,
    title: 'Voice Assistant',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=450&fit=crop',
  },
  {
    id: 2,
    title: 'AI Image Generation',
    imageUrl: 'https://images.unsplash.com/photo-1677442d019cecf8f80f1a9db1af28d68f5bbb2f8?w=400&h=450&fit=crop',
  },
  {
    id: 3,
    title: 'AI Chatbot + Local RAG',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f70a504f8?w=400&h=450&fit=crop',
  },
  {
    id: 4,
    title: 'AI Agent',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=450&fit=crop',
  },
  {
    id: 5,
    title: 'Advanced Analytics',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=450&fit=crop',
  },
];

const AccordionItem = ({ item, isActive, onMouseEnter }: AccordionItemProps) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src = 'https://placehold.co/400x450/2d3748/ffffff?text=Image+Error';
  };

  return (
    <div
      className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? 'w-[400px]' : 'w-[60px]'}
      `}
      onMouseEnter={onMouseEnter}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
        onError={handleImageError}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <span
        className={`
          absolute text-white text-lg font-semibold whitespace-nowrap
          transition-all duration-300 ease-in-out
          ${
            isActive
              ? 'bottom-6 left-1/2 -translate-x-1/2 rotate-0'
              : 'w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90'
          }
        `}
      >
        {item.title}
      </span>
    </div>
  );
};

export function LandingAccordionItem() {
  const [activeIndex, setActiveIndex] = useState(4);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-white font-sans dark:bg-slate-950">
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight tracking-tighter">
              Accelerate Gen-AI Tasks on Any Device
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto md:mx-0">
              Build high-performance AI apps on-device without the hassle of model compression or edge deployment.
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="flex flex-row items-center justify-center gap-4 overflow-x-auto p-4">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
