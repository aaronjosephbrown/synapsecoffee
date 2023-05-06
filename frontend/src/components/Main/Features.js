
const featuredImages = [
  {
    path: require('../../assets/features/feature-1.jpeg'),
    text: "Organic Beans",
    subText: "from $18.00"
  },
  {
    path: require('../../assets/features/feature-2.jpeg'),
    text: "Roasted Beans",
    subText: "from $19.00"
  },
  {
    path: require('../../assets/features/feature-3.jpeg'),
    text: "Wholesale Roasted Beans"
  },
  {
    path: require('../../assets/features/feature-4.jpg'),
    text: "Filter Papers",
    subText: "from $10.00"
  },
  {
    path: require('../../assets/features/feature-5.jpg'),
    text: "Roaster's Choice Subscription",
    subText: "from $22.00"
  },
]

const Features = () => {
  
  return (
    <div>
      <div className='flex justify-center font-semibold pt-10 pb-5'>
        <p>{'Shop Featured Items'.toUpperCase()}</p>
      </div>
      <div className='grid gap-4 grid-cols-5'>
      {featuredImages.map((image, i) => {
          return (
            <div key={i}>
              <img src={image.path} alt='featured-images' className='h-[320px] w-[240px] bg-cover object-cover brightness-90 rounded' />
              <p className='pt-1 text-sm'>{image.text.toUpperCase()}</p>
              <p className='text-xs font-thin'>{image.subText && image.subText}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}
export default Features
