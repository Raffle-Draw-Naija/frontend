import React from 'react'
import { VocationCoursesStyles } from 'noautharea/styles/components/VocationCoursesStyles'
const VocationalCourses = () => {
    return (
        <VocationCoursesStyles>
            <div className="vocational-education">
                <h3>Vocational Courses</h3>
                <div className="row">
                    <div className="col-md-6 left">
                        <ul>
                            <li>
                                Fashion Design and Tailoring
                            </li>
                            <li>
                                Catering and Culinary Arts
                            </li>
                            <li>
                                Electrical Installation and Maintenance
                            </li>
                            <li>
                                Beauty and Makeup Artistry
                            </li>
                            <li>
                                Carpentry and Furniture Making
                            </li>
                            <li>
                                Event Planning and Management
                            </li>
                        </ul>

                    </div>
                    <div className="col-md-6">
                        <div className="right">
                            <ul>
                                <li>
                                    Interior Design and Decoration
                                </li>
                                <li>
                                    Hairdressing, Barbering and Salon Management
                                </li>
                                <li>
                                    Leatherwork and Shoemaking
                                </li>
                                <li>
                                    Photography and Videography
                                </li>
                                <li>
                                    Painting and Decorating
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </VocationCoursesStyles>
    )
}

export default VocationalCourses