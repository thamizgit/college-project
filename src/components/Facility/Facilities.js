import './Facilities.css';
const Facilities = () => {
    return (
        <section className='section1'>
            <section className='part1'>
                <img className="transport-img" src={require('../../images/facilities/transport.jpg')} alt="Transport" />
                <article className='txt'>
                    <h1 className='head1'>Transport</h1>
                    <p className='transport'>
                        The college offers over 20 buses for students within a 50km radius, covering Thammampatti, Trichy, Manachanalur, and Thuraiyur. The buses operate daily, with fixed pick-up/drop-off points. Students register and pay a nominal fee at the beginning of the academic year. The college employs experienced drivers who prioritize student safety and comfort during their commute. The charges are affordable, making transportation accessible to all students who need to travel to and from the campus. The transport service is an essential resource for students and the college is committed to maintaining and improving the service to ensure it remains reliable, effective, and efficient for all students.
                    </p>
                </article>
            </section>
            <section className='part2'>
                <img className="transport-img" src={require('../../images/facilities/library.jpg')} alt="Library" />
                <article className='txt'>
                    <h1 className='head1'>Library</h1>
                    <p className='transport'>
                        The diploma college library is a crucial resource for students, providing access to a wide variety of books, journals, and electronic resources that support the college's diploma programs. The library collection is tailored to meet the needs of the diploma programs, and the staff is knowledgeable in providing assistance to students. The library is a quiet and comfortable environment, conducive to study and research, with adequate seating and study spaces. Overall, the library is an essential academic support service that plays a crucial role in the academic success of diploma college students.    </p>
                </article>
            </section>
            <section className='part1'>
                <img className="transport-img" src={require('../../images/facilities/IT lab.jpg')} alt="Laboratories" />
                <article className='txt'>
                    <h1 className='head1'>Laboratories</h1>
                    <p className='transport'>
                    Our college laboratory is fully equipped with the latest technology and equipment for students to conduct experiments and research in various fields. The lab is staffed with experienced professionals who provide guidance and support to students during their experiments. Safety is a top priority, with safety equipment and protocols in place to ensure a secure environment. The lab also offers opportunities for students to participate in research projects and gain valuable hands-on experience in their chosen fields.
                    </p>
                </article>
            </section>
            <section className='part2'>
                <img className="transport-img" src={require('../../images/facilities/Hostel.jpeg')} alt="Hostel" />
                <article className='txt'>
                    <h1 className='head1'>Hostel</h1>
                    <p className='transport'>
                    Our college hostel provides comfortable accommodation for students. Each room is furnished with a bed, desk, chair, and wardrobe. The hostel also has common areas such as a TV room, study area, and kitchen. Safety and security are a top priority, with 24-hour security and CCTV cameras installed throughout the premises. The hostel is conveniently located within walking distance of the college campus, making it an ideal choice for students who want to live close to their classes.
                    </p>
                </article>
            </section>
            <section className='part1'>
                <img className="transport-img" src={require('../../images/facilities/cafeteria-1.jpg')} alt="Canteen" />
                <article className='txt'>
                    <h1 className='head1'>Canteen</h1>
                    <p className='transport'>
                    Our college canteen is a vibrant hub of activity where students can enjoy a variety of delicious and affordable meals. Our menu features a range of options, including vegetarian and non-vegetarian dishes, sandwiches, snacks, and beverages. We prioritize the use of fresh and locally sourced ingredients, and our chefs take care to ensure that all meals are cooked to perfection. The canteen is spacious and comfortable, providing a welcoming environment for students to socialize, relax, and refuel. We pride ourselves on offering quality food at reasonable prices, making our canteen a popular destination for students and staff alike.
                    </p>
                </article>
            </section>
            <section className='part2'>
                <img className="transport-img" src={require('../../images/facilities/Ground.jpg')} alt="Sports Facilities" />
                <article className='txt'>
                    <h1 className='head1'>Sports Facilities</h1>
                    <p className='transport'>
                    Our college boasts a state-of-the-art sports ground that offers a variety of facilities for students to stay active and engaged. The ground features multiple fields for cricket, volleyball, throwball, kabaddi, and kho-kho, providing ample space for students to participate in their favorite sports. The grounds are well-maintained, and our dedicated staff ensures that all equipment is in excellent condition. We encourage students to participate in regular sports activities as part of their overall fitness routine, and our sports ground provides the perfect setting for this. Whether you're looking to improve your skills, compete at a higher level, or simply stay fit, our sports ground has something for everyone.                    </p>
                </article>
            </section>
            <section className='facilities-set-2'>
                <article>
                    <img className='ro-water' src={require('../../images/facilities/ro1.jpg')} alt="Ro-water"/>
                    <h2 className='facilities-heading'>24/7 Ro water</h2>
                </article>
                <article>
                <img className='ro-water' src={require('../../images/facilities/drive.png')} alt="Driving school"/>
                <h2 className='facilities-heading'>Driving school</h2>
                </article>
                <article>
                <img className='ro-water' src={require('../../images/facilities/projector.jpg')}  alt="Study-area"/>
                <h2 className='facilities-heading'>Projector facilities</h2>
                </article>
            </section>
        </section>
    );
}
export default Facilities;