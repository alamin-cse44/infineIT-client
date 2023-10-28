import './Headings.scss'

const Headings = ({heading, blurHeading}) => {
  return (
    <div className='headings text-center'>
      <p className='headings-blur lg:text-7xl text-3xl'>{blurHeading}</p>
      <p className='headings-bold lg:text-6xl text-2xl lg:-mt-10 -mt-16'>{heading}</p>
    </div>
  )
}

export default Headings
