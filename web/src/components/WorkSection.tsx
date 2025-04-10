import styles from '@/style/work-section.module.css';
import SectionTitle from "./SectionTitle";

export default function WorkSection() {
    return (
        <section className={styles.section}>
            
                <SectionTitle title="Work Experience" />
                {/* <div className="flex flex-col space-y-4">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-xl font-semibold">Software Engineer</h3>
                        <p className="text-gray-600">Company Name - Location</p>
                        <p className="text-gray-600">Dates of Employment</p>
                        <ul className="list-disc list-inside mt-2">
                            <li>Developed and maintained web applications using React and Node.js.</li>
                            <li>Collaborated with cross-functional teams to define, design, and ship new features.</li>
                            <li>Participated in code reviews and contributed to team knowledge sharing.</li>
                            <li>Implemented unit tests and automated testing frameworks to ensure code quality.</li>
                            <li>Worked with RESTful APIs and third-party libraries to enhance application functionality.</li>
                        </ul>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6">     
                        <h3 className="text-xl font-semibold">Frontend Developer</h3>
                        <p className="text-gray-600">Company Name - Location</p>
                        <p className="text-gray-600">Dates of Employment</p>
                        <ul className="list-disc list-inside mt-2">
                            <li>Designed and implemented user interfaces using HTML, CSS, and JavaScript.</li>
                            <li>Optimized web applications for maximum speed and scalability.</li>
                            <li>Worked closely with designers to ensure a seamless user experience.</li>
                            <li>Debugged and resolved issues in existing applications.</li>
                            <li>Participated in Agile development processes and sprint planning.</li>
                        </ul>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-xl font-semibold">Internship Position</h3>
                        <p className="text-gray-600">Company Name - Location</p>
                        <p className="text-gray-600">Dates of Employment</p>
                        <ul className="list-disc list-inside mt-2">     
                            <li>Assisted in the development of web applications and features.</li>
                            <li>Conducted testing and debugging of applications.</li>
                            <li>Collaborated with senior developers to learn best practices.</li>
                            <li>Participated in team meetings and contributed ideas for improvements.</li>
                            <li>Documented code and created user manuals for applications.</li>
                        </ul>
                    </div>
                </div> */}
            
        </section>
    );
}