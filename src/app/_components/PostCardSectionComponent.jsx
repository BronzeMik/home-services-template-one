import React from 'react';
import PostCard from './PostCardComponent'; 

const PostCardSection = () => {
  // Example data for the posts
  const posts = [
    {
      imageUrl: 'https://kitpro.site/hocare/wp-content/uploads/sites/92/2022/06/happy-young-client-of-maintenance-service-shaking-2021-09-24-03-09-41-utc-copy-1024x683.jpg',
      altText: 'The service you deserve',
      date: '07 Jun',
      title: 'The Service You Deserve',
      description: 'Donec mattis, nisi sit amet pharetra mollis, mi lorem consectetur augue, vel aliquet leo ipsum sit amet neque. Donec interdum nunc quis leo euismod, a vestibulum ligula elementum.',
      link: 'https://kitpro.site/hocare/2022/06/07/the-service-you-deserve/',
    },
    {
      imageUrl: 'https://kitpro.site/hocare/wp-content/uploads/sites/92/2022/06/thoughtful-adult-repairman-taking-off-kitchen-fauc-2022-03-31-23-12-45-utc-copy-1024x684.jpg',
      altText: 'Repair is our passion',
      date: '07 Jun',
      title: 'Repair is Our Passion',
      description: 'Donec mattis, nisi sit amet pharetra mollis, mi lorem consectetur augue, vel aliquet leo ipsum sit amet neque. Donec interdum nunc quis leo euismod, a vestibulum ligula elementum.',
      link: 'https://kitpro.site/hocare/2022/06/07/repair-is-our-passion/',
    },
    {
      imageUrl: 'https://kitpro.site/hocare/wp-content/uploads/sites/92/2022/06/young-successful-master-of-solar-panel-installatio-2021-09-24-03-09-39-utc2-1024x683.jpg',
      altText: 'The home repair experts',
      date: '07 Jun',
      title: 'The Home Repair Experts',
      description: 'Donec mattis, nisi sit amet pharetra mollis, mi lorem consectetur augue, vel aliquet leo ipsum sit amet neque. Donec interdum nunc quis leo euismod, a vestibulum ligula elementum.',
      link: 'https://kitpro.site/hocare/2022/06/07/the-home-repair-experts/',
    },
  ];

return (
    <div className="post-items container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center flex-wrap -mx-4">
            {posts.map((post, index) => (
                <PostCard 
                    key={index}
                    imageUrl={post.imageUrl}
                    altText={post.altText}
                    date={post.date}
                    title={post.title}
                    description={post.description}
                    link={post.link}
                />
            ))}
        </div>
    </div>
);
};

export default PostCardSection;
