"use client";

import React, { useState } from "react";

type Props = {
  src: string | undefined;
  alt: string | undefined;
  fallback?: string;
  className?: string;
};

const ImageWrapper = ({ src, alt, fallback, className }: Props) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(fallback)}
      className={className}
    />
  );
};

export default ImageWrapper;
