import React from 'react';

export default function TestComponent({
  title = "",
  description = "",
  buttonText = "",
  buttonLink = "",
  backgroundImage = ""
}) {
  return (
    <div className="bg-primary relative z-0">
        <div className="absolute inset-0 overflow-hidden">
            <Image 
                src={backgroundImage}
                alt="Background"
                fill
                className="object-cover"
                priority={false}
                quality={85}
            />
            <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        <div className="container mx-auto relative z-10 py-24 text-center text-white">
            <h2 className="text-xl lg:text-3xl font-serif max-w-4xl mx-auto mb-6">
                {title}
            </h2>
            <p className="mb-8 max-w-2xl mx-auto">
                {description}
            </p>
            <Button 
                variant="white" 
                href={buttonLink}
                hasChevron={true}
                size="large"
            >
                {buttonText}
            </Button>
        </div>
    </div>
);
}
