import React from 'react'
import { useRouter } from "next/router";
import Link from 'next/link';
import { AiOutlineClose } from "react-icons/ai";

export default function portfoliodetails2_img() {

    const router = useRouter();
    const query = router.query;
    const name = query.nameIMG;
    console.log(name);

    return (
        <div>
            <Link href='/portfolio-details2'>
                <AiOutlineClose style={{ position: "fixed", top: "30px", fontSize: "45px", right: "30px" }} />
            </Link>
            <img width={"1525px"} height={"auto"} src={name} alt="Genz" />
        </div>
    )
}
