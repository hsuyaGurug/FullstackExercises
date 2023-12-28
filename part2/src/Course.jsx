const Course = ({ courses }) => {
    return (
        <>
            {
                courses.map(course =>
                    <div>
                        <Header name={course.name} />
                        <div>
                            <Content parts={course.parts} />
                        </div>
                        <Total parts={course.parts} />
                    </div>
                )
            }
        </>

    )
}

export default Course