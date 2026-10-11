export default function ProductImage({
  src,
  alt,
  width = 520,
  height = 520,
  priority = false,
  className = "",
}) {
  const resolvedSrc =
    !src || src.startsWith("[") ? "/images/product-bottle.jpg" : src;

  return (
    <div className={`ph ${className}`.trim()}>
      <img
        src={resolvedSrc}
        width={width}
        height={height}
        alt={alt}
        fetchPriority={priority ? "high" : "auto"}
        loading={priority ? "eager" : "lazy"}
      />
    </div>
  );
}
