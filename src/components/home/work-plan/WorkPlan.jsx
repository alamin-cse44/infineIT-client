
import workPlanImg from '../../../assets/images/workPlan.svg'
import Headings from '../../../common/Headings'

const WorkPlan = () => {
  return (
    <div className="mx-5 pt-20 flex flex-col justify-center" id='work'>
      <Headings heading="how we work" blurHeading="how we work"/>
      <img className='mt-12' src={workPlanImg} alt="" />
    </div>
  )
}

export default WorkPlan
