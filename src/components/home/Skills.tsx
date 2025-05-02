import Image from 'next/image'
import SkillCard from './SkillCard'

export default function Skills() {
    return (
        <div className='bg-[#0d1224] p-10 flex gap-10'>
            <SkillCard />
            <SkillCard />
            <SkillCard />
            <SkillCard />
        </div>
    )
}
