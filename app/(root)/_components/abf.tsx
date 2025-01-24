import { LucideIcon } from "lucide-react";

interface AboutInfoProps{
    title: string
    description: string
    icon: LucideIcon
}
const AboutInfo = ({ title, description, icon: Icon }: AboutInfoProps) => {

    return ( 
        <div className="mb-10 text-white">
            <div className="flex gap-8">
                <Icon className="text-orange-800"/>
                <span className="font-bold">{title}</span>
            </div>
            <p className="ml-14 md:w-[520px] whitespace-pre-line">{description}</p>
        </div>
     );
}
 
export default AboutInfo;