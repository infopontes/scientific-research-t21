import Image from "next/image"


export default function Backgroud(){
    return(
        <div className="bg-contain bg-center">
            <Image
            src="/images/sd_t21.jpg"
            alt="Picture of the author"
            layout="fill"
            object-fit="scale-down"
            />
      </div>
    )
}


