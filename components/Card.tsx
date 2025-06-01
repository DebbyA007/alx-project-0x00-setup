import Image from 'next/image';

const Card = () => {
return (
<div className="card">
{/* Example image and content */}
<Image src="/example.png" width={300} height={200} alt="Example" />
<h2>Card Title</h2>
<p>This is an example card component.</p>
</div>
);
};

export default Card;