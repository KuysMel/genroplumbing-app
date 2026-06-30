import { useTheme } from '../../hooks/useTheme';
import { useEffect } from 'react';

interface BackgroundImageProps {
  lightImage?: string;
  darkImage?: string;
  solidColor?: boolean;
  blur?: number;
  opacity?: number;
}

export function BackgroundImage({
  lightImage,
  darkImage,
  solidColor = false,
  blur = 0,
  opacity = 0.8,
}: BackgroundImageProps) {
  const { theme } = useTheme();

  useEffect(() => {
    const imageUrl = theme === 'dark' ? darkImage : lightImage;
    if (imageUrl) {
      const image = new Image();
      image.src = imageUrl;
    }
  }, [theme, lightImage, darkImage]);

  const imageUrl = theme === 'dark' ? darkImage : lightImage;
  const bgColor = theme === 'dark' ? 'rgb(23, 23, 23)' : 'rgb(255, 255, 255)';

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundColor: solidColor || !imageUrl ? bgColor : 'transparent',
        backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        filter: blur > 0 ? `blur(${blur}px)` : 'none',
        opacity: imageUrl ? opacity : 1,
        transition: 'opacity 0.3s ease-in-out',
      }}
    />
  );
}
