import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { men_kurta } from '../../../data/Men/men_kurta'
import { dressPage1 } from "../../../data/dress/page1"
import { men_shirt } from '../../../data/Men/men_shirt'
import { men_jeans } from '../../../data/Men/men_jeans'
import { mensShoes } from '../../../data/Men/shoes'


function HomePage() {
    return (
        <div>
            <MainCarousel />
            <div className="space-y-10 py-20">
                <HomeSectionCarousel data={men_kurta} sectionName={"Mens Kurta"}/>
                <HomeSectionCarousel data={men_shirt} sectionName={"Mens Shirt"}/>
                <HomeSectionCarousel data={men_jeans} sectionName={"Mens Jeans"}/>
                <HomeSectionCarousel data={mensShoes} sectionName={"Mens Shoes"}/>
                <HomeSectionCarousel data={dressPage1} sectionName={"Women Dress"}/>
            </div>
        </div>
    )
}

export default HomePage