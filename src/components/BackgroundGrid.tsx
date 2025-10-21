import React from 'react';

const BackgroundGrid: React.FC = () => {
  const moviePosters = [
    'https://images.unsplash.com/photo-1489599735734-79b4f9ab7b34?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1489599735734-79b4f9ab7b34?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1489599735734-79b4f9ab7b34?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=450&fit=crop',
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-netflix-gradient z-10"></div>
      <div 
        className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-1 h-full w-full transform rotate-12 scale-150 -translate-y-20 opacity-30"
        style={{
          animation: 'float 20s ease-in-out infinite',
        }}
      >
        {moviePosters.map((poster, index) => (
          <div
            key={index}
            className="aspect-[2/3] bg-cover bg-center rounded-sm"
            style={{
              backgroundImage: `url(${poster})`,
              animationDelay: `${index * 0.1}s`,
            }}
          />
        ))}
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: rotate(12deg) scale(1.5) translateY(-20px);
          }
          50% {
            transform: rotate(12deg) scale(1.5) translateY(-40px);
          }
        }
      `}</style>
    </div>
  );
};

export default BackgroundGrid;
