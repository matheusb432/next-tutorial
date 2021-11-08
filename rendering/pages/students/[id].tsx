import { Student } from '../../model/student';

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/api/students/tutors`);
  const tutorIds = await res.json();

  const pathParams: object[] = [];

  tutorIds.forEach((tutorId: number) => {
    pathParams.push({ params: { id: `${tutorId}` } });
  });

  // ? Alternate way of creating an array of params dynamically
  // const paths = tutorIds.map((tutorId) => {
  //   return { params: { id: `${tutorId}` } };
  // });

  return {
    // fallback: false, // ? 404 when any ID not included in params are in a request
    // ? Tries to render the page even if not it's not any of valid params,
    // ? by calling getStaticProps() again at runtime with the param data, if it
    // ? succeds, will dynamically create another static page and add it to the
    // ? .next/server/pages/students folder, meaning after the first call it will
    // ? become yet another SSG page.
    fallback: true,
    paths: pathParams,
  };
}

export async function getStaticProps(context: any) {
  const id = context.params.id;

  console.log('[Server] getStaticProps call!');

  if (![100, 200, 300, 400].includes(+id)) {
    console.log('[Server] Fallback call!');
  }

  const res = await fetch(`http://localhost:3000/api/students/${id}`);
  const student = await res.json();

  return {
    props: {
      student,
    },
  };
}

interface StudentDetailsProps {
  student: Student;
}

export default function StudentById(props: StudentDetailsProps) {
  function renderStudentDetails() {
    return Object.keys(props.student).map((paramKey: string, i: number) => {
      return (
        <li key={i}>
          {paramKey} -- {props.student[paramKey as keyof Student]}
        </li>
      );
    });
  }

  return (
    <div>
      <h1>Student Details</h1>
      {/* // ? Necessary due to fallback=true */}
      <ul>{props.student ? renderStudentDetails() : false}</ul>
    </div>
  );
}
