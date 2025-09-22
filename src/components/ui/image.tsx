import * as React from "react"

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  fallbackSrc?: string
}

function Image({ 
  src, 
  alt, 
  fallbackSrc = "/portfolio/fallback.png", 
  className = "",
  ...props 
}: Props) {
  const [imgSrc, setImgSrc] = React.useState(src)
  const [hasError, setHasError] = React.useState(false)

  React.useEffect(() => {
    setImgSrc(src)
    setHasError(false)
  }, [src])

  const handleError = () => {
    if (!hasError) {
      setHasError(true)
      setImgSrc(fallbackSrc)
    }
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      {...props}
    />
  )
}

export { Image };