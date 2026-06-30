import { ExpandableGallery } from '@/components/ui/gallery-animation';
import { assetPath } from '../lib/assets';

export default function GalleryDemo() {
  const images = [
    assetPath('images/genro01.jpeg'),
    assetPath('images/genro02.jpeg'),
    assetPath('images/genro03.jpeg'),
    assetPath('images/genro04.jpeg'),
    assetPath('images/genro05.jpeg'),
  ];

  return (
    <div className="min-h-screen dark:bg-black bg-white flex items-center justify-center p-8">
      <div className="w-full max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            GENRO Plumbing Services Gallery
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Hover over images to expand. Click to view in fullscreen.
          </p>
        </div>
        <ExpandableGallery images={images} className="w-full" />
      </div>
    </div>
  );
}
